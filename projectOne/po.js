let addButton = document.getElementById('add');

addButton.addEventListener('click', function() {
    let whatTask = prompt('What task would you like to add ?')
    let createElement = document.createElement('li')
    if (whatTask) {
        document.body.appendChild(createElement).innerHTML = whatTask
        console.log('add button has been clicked and added a task ! 💢') 
    }

})