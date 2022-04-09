import Product from "./models/product";

class Checkout{
    private _catalogPath: string;
    private _products: Product[];
    private _shoppingCart: Product[];


    public constructor(catalogPath: string){
        this._catalogPath = catalogPath;
        this.loadCatalogData(this._catalogPath);
    }

    public scan(SKU: string){
        //TODO: implement scan method
        //Can we find in products?
        //if so then add to cart.
    }

    private checkIfProductExists(SKU: string){
    //TODO: Implement
    }

    private loadCatalogData(catalogPath: string){
     let t = JSON.parse(catalogPath);
     //TODO: convert JSON catalog file to Product List
    }
}
export default Checkout;