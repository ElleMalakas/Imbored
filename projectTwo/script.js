const cartPart = document.querySelector('.scartContent')
const addBtns = document.querySelectorAll('.addBtn')
const cartItems = {}
const cartOrder = []
addBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const productImage = e.target.parentNode.previousElementSibling.querySelector('img');
      const productName = productImage.src;

      if (cartItems[productName]) {
        cartItems[productName].quantity++;
      } else {
        cartItems[productName] = { quantity: 1 };
        cartOrder.push(productName)
      }

  
      const cartItem = document.createElement('div');
      cartItem.className = 'scarts2';
  
      const cartItemImage = document.createElement('div');
      cartItemImage.className = 'scarts3';
  
      const cartDiv1 = document.createElement('div');
      cartDiv1.className = 'product';
      const productImg = document.createElement('img');
      productImg.src = productImage.src;
      cartDiv1.appendChild(productImg);
  
      cartItemImage.appendChild(cartDiv1);
  
      const quantity = document.createElement('div');
      quantity.innerHTML = `<h1 class="headFont">${cartItems[productName].quantity}X</h1>`;
      cartItemImage.appendChild(quantity);
  
      cartItem.appendChild(cartItemImage);
  
      const existingItem = cartPart.querySelector(`[data-product="${productName}"]`);
      if (existingItem) {
        cartPart.removeChild(existingItem);
      }
  
      cartItem.dataset.product = productName;
      cartPart.appendChild(cartItem);


      if (cartPart.scrollHeight > cartPart.offsetHeight) {
        cartPart.style.overflowY = 'auto';
        cartPart.style.height = '90cm';
      }
    });
  });