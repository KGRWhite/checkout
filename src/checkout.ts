import Product from "./product";
import { readFileSync } from 'fs';
import * as path from 'path';

class Checkout{
    private _catalogPath: string;
    private _products: Product[] = new Array();;
    private _shoppingCart: Product[] = new Array();


    public constructor(){
        this._catalogPath = "./data/catalog.json";
        this.loadCatalogData(this._catalogPath);
    }

    public scan(SKU: string){
    
       let product = this.fetchProductIfExists(SKU);
       if(product != null)
       {
           this._shoppingCart.push(product);
           return true;
       }
       else return false;
        
    }

    public total(){

    }

    private checkOffers(){

    }

    private fetchProductIfExists(SKU: string){
        
        for(var i = 0; i < this._products.length; i++){
            if(this._products[i].getSKU() == SKU){
                return this._products[i];
            }
            else return null;
    
            }
    }

    private loadCatalogData(catalogPath: string){
        const jsondata = readFileSync(path.join(__dirname, catalogPath), 'utf-8');
         
     
        this.buildCatalogArray(jsondata);
    }


    private buildCatalogArray(jsondata: any){
        let jsondata_str = JSON.parse(jsondata);

        for (let i = 0; i < jsondata_str.length; i++) {
            this._products.push(new Product(jsondata_str[i]['sku'], jsondata_str[i]['name'], jsondata_str[i]['price']))
          }

        
    }
}
export default Checkout;