class Product{
    private _SKU: string;
    private _name: string;
    private _price: number;

    public constructor(SKU: string, name: string, price: number){
        this._SKU = SKU;
        this._name = name;
        this._price = price;

    }
}

export default Product;