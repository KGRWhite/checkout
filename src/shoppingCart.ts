import Product from "./product";

class ShoppingCart {
  private _shoppingCart: Product[];
  private _subtotal: number;
  private _total: number;

  public constructor() {
    this._shoppingCart = new Array();
  }

  public Add(product: Product) {
    this._shoppingCart.push(product);
    this._subtotal += product.getPrice();
  }

  public Remove(product: Product) {
    //TODO
  }

  public getSubTotal() {
    return this._subtotal;
  }

  public getTotal() {
    return this._total;
  }

  public getShoppingCartContents() {
    return this._shoppingCart;
  }
}
export default ShoppingCart;
