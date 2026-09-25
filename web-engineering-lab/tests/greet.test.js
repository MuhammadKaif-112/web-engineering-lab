const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../public/script.js");

test("greet returns a proper greeting", () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});