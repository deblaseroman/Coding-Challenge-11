
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('Quantity');
const totalPrice = document.getElementById('total-price');
const placeOrder = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

const updateTotalPrice = () => {
    const productPrice = parseFloat(productSelector.value) || 0;
    const quantity = parseInt(quantityInput.value) || 1; 
    const total = productPrice * quantity;
    totalPrice.textContent = total.toFixed(2); 
}

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

placeOrder.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPriceValue = totalPrice.textContent;

  
    orderSummary.textContent = `Order: ${quantity} x ${selectedProduct} - Total: $${totalPriceValue}`;
});
