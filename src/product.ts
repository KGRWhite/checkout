class Product{
    private _SKU: string;
    private _name: string;
    private _price: number;

    public constructor(SKU: string, name: string, price: number){
        this._SKU = SKU;
        this._name = name;
        this._price = price;

    }

    public getSKU(){
        return this._SKU;
    }

    public getName(){
        return this._name;
    }

    public getPrice(){
        return this._price;
    }

    public setPrice(newPrice: number){
        this._price = newPrice;
    }

    
}

export default Product;