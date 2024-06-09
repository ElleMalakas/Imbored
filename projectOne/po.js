let addButton = document.getElementById('add');

addButton.addEventListener('click', function() {
    let whatTask = prompt('What task would you like to add ?')
    let li = document.createElement('li')
    if (whatTask) {
        document.body.appendChild(li).innerHTML = whatTask
        console.log('add button has been clicked and added a task ! 💢') 
    }
})