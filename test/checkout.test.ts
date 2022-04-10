import Checkout from "../src/checkout";

let checkout: Checkout;

beforeEach(() => {
  checkout = new Checkout();
});

afterEach(() => {
  checkout = null;
});

describe("Checkout.Scan - Correct Value - Returns True", () => {
  it("scan", () => {
    let result = checkout.scan("ipd");
    expect(result).toBe(true);
  });
});

describe("Checkout.Scan - False Value - Returns False", () => {
  it("scan", () => {
    let result = checkout.scan("non");
    expect(result).toBe(false);
  });
});
