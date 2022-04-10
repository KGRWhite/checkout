import Checkout from "../src/checkout";

let checkout: Checkout;

beforeEach(() => {
  checkout = new Checkout();
});

afterEach(() => {
  checkout = null;
});

//Required Test Cases

describe("Test case 1", () => {
  it("total", () => {
    checkout.scan("atv");
    checkout.scan("atv");
    checkout.scan("atv");
    checkout.scan("vga");
    var result = checkout.total();
    expect(result).toBe(249.0);
  });
});

describe("Test case 2", () => {
  it("total", () => {
    checkout.scan("atv");
    checkout.scan("ipd");
    checkout.scan("ipd");
    checkout.scan("atv");
    checkout.scan("ipd");
    checkout.scan("ipd");
    checkout.scan("ipd");
    var result = checkout.total();
    expect(result).toBe(2718.95);
  });
});

describe("Test case 3", () => {
  it("total", () => {
    checkout.scan("mbp");
    checkout.scan("vga");
    checkout.scan("ipd");

    var result = checkout.total();
    expect(result).toBe(1949.98);
  });
});

//Additional Test Cases

describe("Test case 4", () => {
  it("total", () => {
    checkout.scan("mbp");
    checkout.scan("mbp");
    checkout.scan("vga");
    checkout.scan("vga");
    checkout.scan("ipd");

    //toPrecision returns string so need to parse as float for expect.
    var result = parseFloat(checkout.total().toPrecision(6));
    expect(result).toBe(3349.97);
  });
});

describe("Test case 5", () => {
  it("total", () => {
    checkout.scan("atv");
    checkout.scan("atv");
    checkout.scan("atv");
    checkout.scan("atv");
    checkout.scan("mbp");
    checkout.scan("vga");

    //toPrecision returns string so need to parse as float for expect.
    var result = parseFloat(checkout.total().toPrecision(6));
    expect(result).toBe(1728.49);
  });
});

describe("Test case 6", () => {
  it("total", () => {
    checkout.scan("mbp");
    checkout.scan("ipd");
    checkout.scan("atv");
    checkout.scan("vga");

    var result = checkout.total();
    expect(result).toBe(2059.48);
  });
});
