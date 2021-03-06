class ShoppingCart {
    // User Properties
    static instance: ShoppingCart;
    static numberOfInstance: number =0;
    public order: object;

    // User Behaviors
    constructor(order: object){
        if(ShoppingCart.numberOfInstance > 0) {
            return ShoppingCart.instance;
        }
        this.order = order;
        ShoppingCart.numberOfInstance = 1;
        ShoppingCart.instance = this;
    }
}

let order1 = new ShoppingCart({item:'Computer', price:20, quantity: 2});
console.log('\n');
console.log(order1.order);
let order2 = new ShoppingCart({item:'Phone', price:10, quantity: 1});
console.log(order2.order);
let order3 = new ShoppingCart({item:'Tablet', price:30, quantity: 3});
console.log(order3.order);
let order4 = new ShoppingCart({item:'Charger', price:40, quantity: 4});
console.log(order4.order);
let order5 = new ShoppingCart({item:'Mic', price:50, quantity: 5});
console.log(order5.order);
console.log('\n');