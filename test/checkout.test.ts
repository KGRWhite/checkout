import Checkout from '../src/checkout';

let checkout: Checkout;

beforeEach(() => {
    checkout = new Checkout();
  });
  
  afterEach(() => {
    checkout = null;
  });


describe("Test correct scanning product", () => {
    it('scan', () =>{
        let result = checkout.scan('ipd');
        expect(result).toBe(true);

    })
});

describe("Test false scanning product", () => {
    it('scan', () =>{
        let result = checkout.scan('non');
        expect(result).toBe(false);

    })
});


