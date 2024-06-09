let addButton = document.getElementById('add');

addButton.addEventListener('click', function () {
    let whatTask = prompt('What task would you like to add ?')

    if (whatTask) { //lesson learned, always in-order
        let li = document.createElement('li')
        li.innerHTML = whatTask
        li.style.margin = '5px'

        let btn = document.createElement('button')
        btn.innerHTML = 'Remove'
        btn.style.marginLeft = '5px'
        btn.addEventListener('click', function() {
            li.remove()
            console.log(`(⛔) ${whatTask} : task has been removed ! `)
        })

        let btn2 = document.createElement('button')
        btn2.innerHTML = 'Done'
        btn.style.marginRight = '5px'
        btn2.addEventListener('click', function() {
            if (li.style.textDecoration === 'line-through') {
                 li.style.textDecoration = 'none'
                 console.log(`(❌) ${whatTask} : task has been unchecked !`)
            } else {
                 li.style.textDecoration = 'line-through'
                 console.log(`(✅) ${whatTask} : task has been finished !`)
            }
            
        })
        li.appendChild(btn); //lesson learned, only append once at a time
        li.appendChild(btn2)
        document.body.appendChild(li)
        console.log('add button has been clicked and added a task ! 💢')
    }
})