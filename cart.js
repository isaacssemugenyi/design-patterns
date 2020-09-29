class Cart {
    constructor(price, product){
        this.price = price;
        this.product = product;
        this.inCart = [];
        this.total = 0;
    }
    addToCart(){
      this.inCart.push(this.price, this.product);
      return `
          cart : ${this.inCart},
          update : You have added a ${this.product} at price ${this.price} to your cart
        `
    }
    cartTotal(){
        this.total += this.price; 
        return `
            The total price is ${this.total}
        `
    }
}

const product1 = new Cart(20, 'house');
console.log(product1.addToCart());
console.log(product1.cartTotal());

// product1 = new Cart(40, 'work');

// console.log(product1.addToCart());
// console.log(product1.cartTotal());
