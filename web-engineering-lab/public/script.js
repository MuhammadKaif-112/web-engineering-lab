function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("greeting");
    heading.textContent = greet("Muhammad Kaif");
  });
}

// Export for Node's test runner (ignored by the browser)
if (typeof module !== "undefined") {
  module.exports = { greet };
}