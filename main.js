
//2. add event listener 

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPrice = document.getElementById('total-price');
const placeOrder = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

const updateTotalPrice = () => {
    const productPrice = parseFloat(productSelector.value) || 0;
    const quantity = parseInt(quantityInput.value) || 0;
    const total = productPrice * quantity;
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

placeOrderButton.addEventListener('click', function(){
const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
const quantity = quantityInput.value;
const totalPrice = totalPriceElement.textContent;
});