const cartPart = document.querySelector('.scartContent')
const addBtns = document.querySelectorAll('.addBtn')
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
    productImg.src = productName;
    cartDiv1.appendChild(productImg);

    cartItemImage.appendChild(cartDiv1);

    const quantity = document.createElement('div');
    quantity.innerHTML = `<h1 class="headFont">${cartItems[productName].quantity}X</h1>`;
    cartItemImage.appendChild(quantity);

    cartItem.appendChild(cartItemImage);
    cartPart.appendChild(cartItem);
  });

  if (cartPart.scrollHeight > cartPart.offsetHeight) {
    cartPart.style.overflowY = 'auto';
    cartPart.style.height = '90cm';
  }
}
updateCartUI();

addBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    const productImage = e.target.parentNode.previousElementSibling.querySelector('img');
    const productName = productImage.src;

    if (cartItems[productName]) {
      cartItems[productName].quantity++;
    } else {
      cartItems[productName] = { quantity: 1 };
      cartOrder.push(productName);
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartOrder', JSON.stringify(cartOrder));

    updateCartUI();
  });
});