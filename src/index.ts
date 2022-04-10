import Checkout from "./checkout";


//TODO: Implement use cases


//Init
let co = new Checkout();

//Test Case 1
console.log("Running Test Case 1");
co.scan("atv");
co.scan("atv");
co.scan("atv");
co.scan("vga");
co.total();
