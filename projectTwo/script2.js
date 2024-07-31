document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    const cartOrder = JSON.parse(localStorage.getItem('cartOrder')) || [];

    const sno = document.querySelector('.sno');
    const sbox = document.querySelector('.sbox');
    sbox.querySelectorAll('.sitem, .sno').forEach(el => el.remove());
    const sitem = document.createElement('div');
    sitem.className = 'sitem';
    const goback = document.createElement('a');
    goback.href = 'projectmain.html';
    goback.className = 'headFont gobacka';
    goback.style.fontSize = '26.5px';
    goback.style.letterSpacing = '-1px';
    goback.style.textDecoration = 'none';
    goback.innerText = 'GO BACK';

    sitem.appendChild(goback);
 
    sno.innerHTML = '<img src="public/cart.png">';

    cartOrder.forEach((productName, index) => {
        sbox.appendChild(sitem);
        sbox.appendChild(sno);
        // SITEM Pages
      
        const ssitem = document.createElement('div');
        ssitem.className = 'ssitem';

        const item = document.createElement('div');
        item.className = 'item';

        const itemContent = document.createElement('div');
        itemContent.className = 'itemContent';

        const productImg = document.createElement('img');
        productImg.src = productName;
        itemContent.appendChild(productImg);

        const itemDesc = document.createElement('div');
        itemDesc.className = 'itemDesc';

        const itemName = document.createElement('h1');
        itemName.className = 'headFont';
        itemName.style.fontSize = '14.3px';
        itemName.innerText = 'ITEM NAME';

        const itemNumber = document.createElement('h1');
        itemNumber.className = 'headFont';
        itemNumber.style.fontSize = '14.3px';
        itemNumber.innerText = `ITEM NO. ${index + 1}`;

        itemDesc.appendChild(itemName);
        itemDesc.appendChild(itemNumber);

        item.appendChild(itemContent);
        item.appendChild(itemDesc);
        ssitem.appendChild(item);

        sitem.appendChild(ssitem);
        sbox.appendChild(sitem);
 

        // SNO (Quantity Control)
        const ssno = document.createElement('div');
        ssno.className = 'ssno';

        const no = document.createElement('div');
        no.className = 'no';

        const noContent = document.createElement('div');
        noContent.className = 'noContent';
        const quantity = document.createElement('h1');
        quantity.className = 'headFont';
        quantity.innerText = cartItems[productName].quantity;
        noContent.appendChild(quantity);

        const updateQuantity = (delta) => {
            cartItems[productName].quantity += delta;
            if (cartItems[productName].quantity <=0) {
                delete cartItems[productName]
                const indexToRemove = cartOrder.indexOf(productName)
                if (indexToRemove > -1) {
                    cartOrder.splice(indexToRemove, 1)
                }
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            localStorage.setItem('cartOrder', JSON.stringify(cartOrder))
            quantity.innerText = cartItems[productName] ? cartItems[productName].quantity: 0;
            if (!cartItems[productName]) {
                ssno.remove()
                ssitem.remove()
            }

        }

        const noDescMinus = document.createElement('div');
        noDescMinus.className = 'noDesc';
        const minusButton = document.createElement('button');
        minusButton.className = 'headFont';
        const minusImg = document.createElement('img');
        minusImg.src = 'public/remove.png';
        minusButton.appendChild(minusImg);
        minusButton.addEventListener('click', () => updateQuantity(-1));
        noDescMinus.appendChild(minusButton);

        const noDescPlus = document.createElement('div');
        noDescPlus.className = 'noDesc';
        const plusButton = document.createElement('button');
        plusButton.className = 'headFont';
        const plusImg = document.createElement('img');
        plusImg.src = 'public/plus.png';
        plusButton.appendChild(plusImg);
        plusButton.addEventListener('click', () => updateQuantity(1));
        noDescPlus.appendChild(plusButton);

        no.appendChild(noDescMinus);
        no.appendChild(noContent);
        no.appendChild(noDescPlus);
        ssno.appendChild(no);
        sno.appendChild(ssno);
        sbox.appendChild(sno)



    });

});
