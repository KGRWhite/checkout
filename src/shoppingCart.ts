import Product from "./product";

class ShoppingCart {
  private _shoppingCart: Product[];
  private _products: Product[];
  private _subtotal: number;
  private _total: number;

  public constructor(availableProducts: Product[]) {
    this._shoppingCart = new Array();
    this._products = availableProducts;
    this._subtotal = 0;
    this._total = 0;
  }

  public add(product: Product) {
    this._shoppingCart.push(product);
    this._subtotal += product.getPrice();
  }

  public getSubTotal() {
    return this._subtotal;
  }

  public getTotal() {
    this.checkAndApplyDiscounts();
    return this._total;
  }

  public checkAndApplyDiscounts() {
    //Offers
    //1. 3 for 2 deal on Apple TVs.
    if (this.getProductsInCartQuantity("atv") >= 3) {
      for (var i = 0; i < this._shoppingCart.length; i++) {
        if (this._shoppingCart[i].getSKU() == "atv") {
          this._shoppingCart[i].setPrice(0);
          break; // We only need to change the first atv we find.
        }
      }
    }
    //2. Super Ipad - price will drop to $499.99 each, if someone buys more than 4
    if (this.getProductsInCartQuantity("ipd") > 4) {
      for (var i = 0; i < this._shoppingCart.length; i++) {
        if (this._shoppingCart[i].getSKU() == "ipd") {
          this._shoppingCart[i].setPrice(499.99);
        }
      }
    }
    //3. bundle in a free VGA adapter free of charge with every MacBook Pro sold
    for (var i = 0; i < this._shoppingCart.length; i++) {
      if (this._shoppingCart[i].getSKU() == "mbp") {
        if (this.getProductsInCartQuantity("vga") > 0) {
          for (var j = 0; j < this._shoppingCart.length; j++) {
            if (this._shoppingCart[j].getSKU() == "vga") {
              this._shoppingCart[j].setPrice(0);
            }
          }
        }
      }
    }
    this.calculateTotal();
  }

  public getShoppingCartContents() {
    return this._shoppingCart;
  }

  private calculateTotal() {
    for (var i = 0; i < this._shoppingCart.length; i++) {
      this._total += this._shoppingCart[i].getPrice();
    }
  }

  private getProductsInCartQuantity(SKU: string) {
    let count: number = 0;
    for (var i = 0; i < this._shoppingCart.length; i++) {
      if (this._shoppingCart[i].getSKU() == SKU) {
        count++;
      }
    }

    return count;
  }
}
export default ShoppingCart;
