let addButton = document.getElementById('add');

addButton.addEventListener('click', function () {
    let whatTask = prompt('What task would you like to add ?')

    if (whatTask) { //lesson learned, always in-order
        let li = document.createElement('li')
        li.innerHTML = `${whatTask} `

        let btn = document.createElement('button')
        btn.innerHTML = 'Remove'
        btn.addEventListener('click', function() {
            li.remove()
        })

        let btn2 = document.createElement('button')
        btn2.innerHTML = 'Done'
        btn2.addEventListener('click', function() {
            li.style.textDecoration = 'linethrough'
        })

        li.appendChild(btn); //lesson learned, only append once at a time
        li.appendChild(btn2)
        document.body.appendChild(li)

        console.log('add button has been clicked and added a task ! 💢')
    }
})