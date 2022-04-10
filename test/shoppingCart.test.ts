import Checkout from "../src/checkout";
import Product from "../src/product";
import ShoppingCart from "../src/shoppingCart";

let checkout: Checkout;
let correctProduct: Product;
let shoppingCart: ShoppingCart;

beforeEach(() => {
  checkout = new Checkout();
  correctProduct = checkout.getAvailableProducts()[0];
  shoppingCart = new ShoppingCart(checkout.getAvailableProducts());
});

afterEach(() => {
  checkout = null;
  shoppingCart = null;
});

describe("ShoppingCart.add - One Product - Returns Count of 1", () => {
  it("add", () => {
    shoppingCart.add(correctProduct);
    let result = shoppingCart.getShoppingCartContents().length;
    expect(result).toBe(1);
  });
});

describe("ShoppingCart.subtotal - Post Adding Product - Returns total before discounts", () => {
  it("subtotal", () => {
    shoppingCart.add(correctProduct);
    let result = shoppingCart.getSubTotal();
    expect(result).toBe(549.99);
  });
});
