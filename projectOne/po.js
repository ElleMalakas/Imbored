let addButton = document.getElementById('add');

addButton.addEventListener('click', function () {
    let whatTask = prompt('What task would you like to add ?')

    if (whatTask) { //lesson learned, always in-order
        let box = document.createElement('div')
        box.style.display = 'flex'
        box.style.justifyContent = 'center'
        box.className = 'container'

        let taskSection = document.createElement('div')
        taskSection.id = 'taskSection'
        taskSection.style.margin = '20px'
        let buttonSection = document.createElement('div')
        buttonSection.id = 'buttonSection'
        let taskDesc = document.createElement('div')
        taskDesc.id = 'taskDesc'



        let li = document.createElement('h4')
        let oldTask = document.createTextNode(whatTask)
        li.appendChild(oldTask)


        let btn = document.createElement('button')
        let img = document.createElement('img')
        btn.appendChild(img)
        img.src = 'public/remove.png'
        btn.id = "removeBtn"
        btn.addEventListener('click', function () {
            li.remove()
            btn.remove()
            btn2.remove()
            btn3.remove()
            taskSection.remove()
            box.remove()
            console.log(`(⛔) ${whatTask} : task has been removed ! `)
        })

        let btn2 = document.createElement('button')
        let img2 = document.createElement('img')
        btn2.appendChild(img2)
        img2.src = 'public/check.png'
        btn2.id = 'doneBtn'
        btn2.addEventListener('click', function () {
            if (li.style.textDecoration === 'line-through') {
                li.style.textDecoration = 'none'
                console.log(`(❌) ${whatTask} : task has been unchecked !`)
            } else {
                li.style.textDecoration = 'line-through'
                console.log(`(✅) ${whatTask} : task has been finished !`)
            }

        })

        let btn3 = document.createElement('button')
        let img3 = document.createElement('img')
        btn3.appendChild(img3)
        img3.src = 'public/edit.png'
        btn3.id = 'editBtn'
        btn3.addEventListener('click', function () {
            let editedTask = prompt('Editing Task ...')
            if (editedTask) {
                whatTask = editedTask //updates the whatTask variable to the edited one ~
                oldTask.nodeValue = editedTask
                console.log(editedTask)
            }
            console.log('Edited Task')
        })
        box.appendChild(taskSection)

        taskSection.appendChild(buttonSection)
        taskSection.appendChild(taskDesc)

        buttonSection.appendChild(btn)
        buttonSection.appendChild(btn2)
        buttonSection.appendChild(btn3)

        taskDesc.appendChild(li)

        document.body.appendChild(box)


        // li.appendChild(btn); //lesson learned, only append once at a time
        // li.appendChild(btn2)
        // li.appendChild(btn3)
        // document.body.appendChild(li)

        console.log('add button has been clicked and added a task ! 💢')
    }
})