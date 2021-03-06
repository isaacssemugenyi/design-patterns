const products = ['Product 1', 'Product 2', 'Product 3'];

const ask = (i = 0) => {
  process.stdout.write(`\n ${products[i]}`);
  process.stdout.write(' => ');
};

ask();

const cart = [];
process.stdin.on('data', (data) => {
  cart.push(data.toString().trim());
  if (cart.length < products.length) {
    ask(cart.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  const [pdt1, pdt2, pdt3] = cart;
  console.log(`
    Thank you for the products added. 
    You've added to cart:
    1. ${pdt1} 
    2. ${pdt2}
    3. ${pdt3}

    Now you can proceed to checkout.
    `);
});
