
//2. add event listener 

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPrice = document.getElementById('total-price');
const placeOrder = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

function updateTotalPrice() {
    let totalPrice = productPrice * quantity;
}

//3. calculate total price dynamically 