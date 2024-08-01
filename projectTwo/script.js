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
    const fullImagePath = productImage.src;
    const productName = new URL(fullImagePath).pathname;

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

//Random Scrolling Shet



// Categories to go to

function updateCategory(category) {
    const categorySpan = document.querySelector('.nameCategory');
    categorySpan.innerText = category;
    const departments = document.querySelectorAll('.department');
    departments.forEach(dept => dept.style.display = 'none');
    const selectedDepartment = document.getElementById(category.toLowerCase() + 'Department');
    if (selectedDepartment) {
        selectedDepartment.style.display = 'grid';
    }
    const categoryButtons = document.querySelectorAll('.stabs2 button');
    categoryButtons.forEach(button => button.classList.remove('active-category'));
    categoryButtons.forEach(button => {
        if (button.innerText.toUpperCase() === category.toUpperCase()) {
            button.classList.add('active-category');
        }
    });
}

const categoryButtons = document.querySelectorAll('.stabs2 button');
categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const category = e.target.innerText; 
        updateCategory(category);
    });
});

updateCategory('FRUIT');
const ssgridTab = document.querySelector('.ssgrid')

ssgridTab.addEventListener('wheel', (event) => {
  ssgridTab.scrollTo({
    left: ssgridTab.scrollLeft + event.deltaY,
    behavior: 'smooth'
  });
});