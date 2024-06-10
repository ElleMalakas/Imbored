let addButton = document.getElementById('add');

addButton.addEventListener('click', function () {
    let whatTask = prompt('What task would you like to add ?')

    if (whatTask) { //lesson learned, always in-order

        let taskSection = document.getElementById('taskslist')
        let li = document.createElement('h4')
        let oldTask = document.createTextNode(whatTask)
        li.appendChild(oldTask)
        li.style.margin = '5px'

        let btnList = document.createElement('div')
        btnList.id = 'buttonlists' //id=buttonlists

        let btn = document.createElement('button')
        let img = document.createElement('img')
        btn.appendChild(img)
        img.src = 'public/remove.png'
        // btn.style.marginLeft = '5px'
        // btn.style.marginRight = '5px'
        btn.id = "removeBtn"
        btn.addEventListener('click', function() {
            li.remove()
            console.log(`(⛔) ${whatTask} : task has been removed ! `)
        })

        let btn2 = document.createElement('button')
        let img2 = document.createElement('img')
        btn2.appendChild(img2)
        img2.src = 'public/check.png'
        btn2.id = 'doneBtn'
        btn2.addEventListener('click', function() {
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
        btn3.addEventListener('click', function() {
            let editedTask = prompt('Editing Task ...')
           if (editedTask) {
            whatTask = editedTask //updates the whatTask variable to the edited one ~
            oldTask.nodeValue = editedTask
            console.log(editedTask)
           }
            console.log('Edited Task')
        })

  
              btnList.appendChild(btn)
        btnList.appendChild(btn2)
        btnList.appendChild(btn3)
        taskSection.appendChild(btnList)
        taskSection.appendChild(li);


        // taskSection.appendChild(btnList)
        // btnList.appendChild(btn)
        // btnList.appendChild(btn2)
        // btnList.appendChild(btn3)
        // li.appendChild(btn); //lesson learned, only append once at a time
        // li.appendChild(btn2)
        // li.appendChild(btn3)
        // document.body.appendChild(li)
        // taskSection.appendChild(li)
        console.log('add button has been clicked and added a task ! 💢')
    }
})