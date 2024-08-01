function showCategory(categoryId) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.style.display = 'none';
    });
    document.getElementById(categoryId).style.display = 'block';
}

// Code for handling cart items
const cartPart = document.querySelector('.scartContent');
const addBtns = document.querySelectorAll('.addBtn');
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
let cartOrder = JSON.parse(localStorage.getItem('cartOrder')) || [];

function updateCartUI() {
    cartPart.innerHTML = '';

    cartOrder.forEach((productName) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'scarts2';
        cartItem.dataset.product = productName;

        const cartItemImage = document.createElement('div');
        cartItemImage.className = 'scarts3';

        const cartDiv1 = document.createElement('div');
        cartDiv1.className = 'product';
        const productImg = document.createElement('img');
        productImg.src = `public/${productName}.png`;
        cartDiv1.appendChild(productImg);
        cartItemImage.appendChild(cartDiv1);

        const cartDiv2 = document.createElement('div');
        const quantity = document.createElement('div');
        quantity.textContent = cartItems[productName];
        quantity.className = 'quantity';
        cartDiv2.appendChild(quantity);

        const btnDiv = document.createElement('div');
        const removeBtn = document.createElement('button');
        removeBtn.className = 'removeBtn';
        removeBtn.textContent = 'REMOVE';
        btnDiv.appendChild(removeBtn);
        cartDiv2.appendChild(btnDiv);

        cartItemImage.appendChild(cartDiv2);
        cartItem.appendChild(cartItemImage);

        cartPart.appendChild(cartItem);

        removeBtn.addEventListener('click', () => {
            removeFromCart(productName);
        });
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartOrder', JSON.stringify(cartOrder));
}

function addToCart(productName) {
    if (cartItems[productName]) {
        cartItems[productName]++;
    } else {
        cartItems[productName] = 1;
        cartOrder.push(productName);
    }
    updateCartUI();
}

function removeFromCart(productName) {
    if (cartItems[productName] > 1) {
        cartItems[productName]--;
    } else {
        delete cartItems[productName];
        const index = cartOrder.indexOf(productName);
        if (index > -1) {
            cartOrder.splice(index, 1);
        }
    }
    updateCartUI();
}

addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const productName = btn.closest('.sgrids3').querySelector('img').src.split('/').pop().split('.')[0];
        addToCart(productName);
    });
});

window.addEventListener('DOMContentLoaded', updateCartUI);
