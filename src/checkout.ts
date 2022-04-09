import Product from "./product";
import { readFileSync } from "fs";
import * as path from "path";
import ShoppingCart from "./shoppingCart";

class Checkout {
  private _catalogPath: string;
  private _products: Product[] = new Array();
  private _shoppingCart: ShoppingCart;
  private _subtotal: Number;
  private _total: Number;

  public constructor() {
    this._catalogPath = "./data/catalog.json";
    this.loadCatalogData(this._catalogPath);
  }

  public scan(SKU: string) {
    let product = this.fetchProductIfExists(SKU);
    if (product != null) {
      this._shoppingCart.Add(product);
      return true;
    } else return false;
  }

  public total() {

   this.checkOffers();
   return this._total;

  }

  private checkOffers() {
    //Offers
    let _shoppingCartContents = this._shoppingCart.getShoppingCartContents();
    
    
    for (var i = 0; i < _shoppingCartContents.length; i++) {
        
        //1. 3 for 2 deal on Apple TVs.
        
        
        //2. Super Ipad - price will drop to $499.99 each, if someone buys more than 4
        
        
        //3. bundle in a free VGA adapter free of charge with every MacBook Pro sold
        if (this._shoppingCart[i].getSKU() == "mbp"){
            for(var j = 0; j < this._products.length; j++){
                if(this._products[i].getSKU() == "vga"){
                    let product = this._products[i];
                    product.setPrice(0);
                    this._shoppingCart.Add(product);
                }
            }
        }
    }
    
  }

  private fetchProductIfExists(SKU: string) {
    for (var i = 0; i < this._products.length; i++) {
      if (this._products[i].getSKU() == SKU) {
        return this._products[i];
      } else return null;
    }
  }

  private loadCatalogData(catalogPath: string) {
    const jsondata = readFileSync(path.join(__dirname, catalogPath), "utf-8");

    this.buildCatalogArray(jsondata);
  }

  private buildCatalogArray(jsondata: any) {
    let jsondata_str = JSON.parse(jsondata);

    for (let i = 0; i < jsondata_str.length; i++) {
      this._products.push(
        new Product(
          jsondata_str[i]["sku"],
          jsondata_str[i]["name"],
          jsondata_str[i]["price"]
        )
      );
    }
  }
}
export default Checkout;
