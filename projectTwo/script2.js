

document.addEventListener("DOMContentLoaded", function () {
    fetch('./products.json')
        .then(response => {

            return response.json();
        })
        .then(data => {

            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
            const cartOrder = JSON.parse(localStorage.getItem('cartOrder')) || [];

            const sno = document.querySelector('.sno')
            const sitem = document.querySelector('.sitem');
            const subtotalprice = document.querySelector('.subtotalprice')
            const charitytotalprice = 1.3 / 100;
            const fulltotalprice = document.querySelector('.fulltotalprice')
            let subtotal = 0;
            // sitem.innerHTML = `  <a href='projectmain.html'class="headFont gobacka" style="font-size: 26.5px; letter-spacing: -1px; text-decoration: none;">GO BACK</a>`
            // sno.innerHTML = '<img src="public/cart.png">';

            const finalsitem = document.querySelector('.finalsitem')
            const finalsno = document.querySelector('.finalsno')
            cartOrder.forEach((productName, index) => {

                const productInfo = data[productName]
                const itemTotalPrice = cartItems[productName].quantity * productInfo.price;
                subtotal += itemTotalPrice;

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
                itemName.innerText = `${[productInfo.name]}`;

                const itemNumber = document.createElement('h1');
                itemNumber.className = 'headFont';
                itemNumber.style.fontSize = '14.3px';
                itemNumber.innerText = `ITEM NO. ${productInfo.id}`;

                itemDesc.appendChild(itemName);
                itemDesc.appendChild(itemNumber);

                item.appendChild(itemContent);
                item.appendChild(itemDesc);
                ssitem.appendChild(item);

                finalsitem.appendChild(ssitem)
                sitem.appendChild(finalsitem)
                // sbox.appendChild(sitem);


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
                    if (cartItems[productName].quantity <= 0) {
                        delete cartItems[productName]
                        const indexToRemove = cartOrder.indexOf(productName)
                        if (indexToRemove > -1) {
                            cartOrder.splice(indexToRemove, 1)
                        }
                    }
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
                    localStorage.setItem('cartOrder', JSON.stringify(cartOrder))
                    quantity.innerText = cartItems[productName] ? cartItems[productName].quantity : 0;
                    if (!cartItems[productName]) {
                        ssno.remove()
                        ssitem.remove()
                        sssubtotal.remove()
                    } else {
                        // stotalPrice.innerText = `${(cartItems[productName].quantity * productInfo.price).toFixed(2)} $`;
                        const newQuantity = cartItems[productName].quantity;
                        const newPrice = newQuantity * productInfo.price;
                        subtotal += delta * productInfo.price;
                        stotalPrice.innerText = `${newPrice.toFixed(2)} $`;
                    }

                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    localStorage.setItem('cartOrder', JSON.stringify(cartOrder));
                    updateTotalPrices();
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

                finalsno.append(ssno)
                sno.appendChild(finalsno)
                // sbox.appendChild(sno)

                if (finalsitem.scrollHeight > finalsitem.offsetHeight) {
                    finalsitem.style.overflowY = 'auto';
                    finalsitem.style.height = '580px';
                }

                if (finalsno.scrollHeight > finalsno.offsetHeight) {
                    finalsno.style.overflowY = 'auto';
                    finalsno.style.height = '580px';
                }

                //   SubTotal Pages

                const finalstotal = document.querySelector('.finalstotal')

                const sssubtotal = document.createElement('div')
                sssubtotal.className = 'sssubtotal'

                const subtotalitem = document.createElement('div')
                subtotalitem.className = 'subtotalitem'

                const stotaldiv1 = document.createElement('div')
                const stotalName = document.createElement('h1');
                // stotalName.className = 'headFont subInfo';
                stotalName.classList.add('headFont', 'subInfo')
                stotalName.style.fontSize = '12.3px';
                stotalName.innerText = `${[productInfo.name]}`;
                const stotalNo = document.createElement('h1');
                stotalNo.classList.add('headFont', 'subInfo')
                stotalNo.style.fontSize = '12.3px';
                stotalNo.innerText = `ITEM NO. ${productInfo.id}`;
                stotaldiv1.appendChild(stotalName)
                stotaldiv1.appendChild(stotalNo)

                const stotaldiv2 = document.createElement('div')
                const stotalPrice = document.createElement('h1');
                stotalPrice.className = 'headFont';
                stotalPrice.style.fontSize = '17.3px';
                stotalPrice.innerText = `${cartItems[productName] ? (cartItems[productName].quantity * productInfo.price).toFixed(2) : '0.00'} $`;


                stotaldiv2.appendChild(stotalPrice)

                subtotalitem.appendChild(stotaldiv1)
                subtotalitem.appendChild(stotaldiv2)

                sssubtotal.appendChild(subtotalitem)
                finalstotal.appendChild(sssubtotal)

                if (finalstotal.scrollHeight > finalstotal.offsetHeight) {
                    finalstotal.style.overflowY = 'auto';
                    finalstotal.style.height = '370px';
                }

                //TOTAL Pages

                const updateTotalPrices = () => {
                    subtotalprice.innerText = `${subtotal.toFixed(2)} $`;

                    const charityTax = subtotal * charitytotalprice;
                    const total = subtotal + charityTax;

                    fulltotalprice.innerText = `${total.toFixed(2)} $`;
                };
                updateTotalPrices();

                const payBtn = document.querySelector('.payBtn')
                payBtn.addEventListener('click', () => {
                    localStorage.clear();
                    // ssno.remove()
                    // ssitem.remove()
                    // sssubtotal.remove()
                    // subtotalprice.innerText = ''
                    // fulltotalprice.innerText = ''
                    window.location.href = 'projecttwo.html'
                })

            });

            const syncScroll = (source, target) => {
                target.scrollTop = source.scrollTop;
            };

            finalsitem.addEventListener('scroll', () => syncScroll(finalsitem, finalsno));
            finalsno.addEventListener('scroll', () => syncScroll(finalsno, finalsitem));





        })

})