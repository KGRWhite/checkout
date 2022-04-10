# checkout
A shopping checkout system written in TypeScript with minimal dependencies.

## Overview
 The checkout object grabs the latest product data from catalog.json which can be edited before the build. Ideally the product data would be within a database but i've kept it simple for this example.
 The checkout object then keeps a reference for a shopping cart and an array of all available products throughout the process.


## Getting Started
After ensuring the dependancies are installed you can call either the build.bat or build.sh scripts. This will run the Unit tests, compile the code and also copies over the catalog.json file.
Alternatively you can run 'tsc' in a cli or run 'jest' to trigger the tests (further info under the Tests header).


## Dependencies
- TypeScript
- Node/npm (for building)
 - Jest Testing Library (https://jestjs.io/)

## Tests
This system uses the jest testing library (https://jestjs.io/).
Once installed the tests can be run by entering 'jest' into the CLI or by using the Jest Test explorer extension in VS Code (https://marketplace.visualstudio.com/items?itemName=kavod-io.vscode-jest-test-adapter)
