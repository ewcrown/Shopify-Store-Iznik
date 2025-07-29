const all_products = document.querySelectorAll(".product"); // Assuming each product has a class 'product'
const outOfstock = document.querySelectorAll(".out-of-stock-ai");
const filterInputs = document.querySelectorAll(".tag__input");

// Remove all elements with the 'out-of-stock-ai' class from the DOM
// outOfstock.forEach((notStock) => {
//   notStock.remove();
// });

function filterProducts() {
  const inStockChecked = document.querySelector("input[name='filter.v.availability'][value='1']").checked;
  const outOfStockChecked = document.querySelector("input[name='filter.v.availability'][value='0']").checked;

  all_products.forEach((product) => {
    const variants = product.querySelectorAll(".variant");
    let allOutOfStock = true;

    // Check if all variants have the 'out-of-stock-ai' class
    variants.forEach((variant) => {
      if (!variant.classList.contains("out-of-stock-ai")) {
        allOutOfStock = false; // If any variant is in stock, set allOutOfStock to false
      }
    });

    if (outOfStockChecked && allOutOfStock) {
      product.style.display = "block"; // Show product only if all its variants are out of stock
    } else if (inStockChecked && !allOutOfStock) {
      product.style.display = "block"; // Show product if it has any in-stock variants
    } else {
      product.style.display = "none"; // Hide product if it doesn't match the filter
    }
  });
}

// Initial filtering based on the current checkbox state
filterProducts();

// Listen for changes on filter inputs
filterInputs.forEach((input) => {
  input.addEventListener('change', filterProducts);
});
