let addedTask = false
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
        addedTask = true
        li.appendChild(oldTask)


        let btn = document.createElement('button')
        let img = document.createElement('img')
        btn.appendChild(img)
        img.id = 'img1'
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
        img2.id = 'img2'
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
        img3.id = 'img3'
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

function themeChange() {
    document.body.addEventListener('click', function (event) {
        let targetId = event.target.id;
        if (targetId === 'abtn') {
            let newstyleA = document.createElement('link')
            newstyleA.rel = 'stylesheet'
            newstyleA.href = 'styleA.css'
            document.head.appendChild(newstyleA)
            document.getElementById('addimg').src = 'public/add.png'
            if (addedTask) {
                document.getElementById('img1').src = 'public/remove.png'
                document.getElementById('img2').src = 'public/check.png'
                document.getElementById('img3').src = 'public/edit.png'
            }
        } else if (targetId === 'bbtn') {
            let newstyleB = document.createElement('link')
            newstyleB.rel = 'stylesheet'
            newstyleB.href = 'styleB.css'
            document.head.appendChild(newstyleB)
            document.getElementById('addimg').src = 'public/addB.png'
            if (addedTask) {
                document.getElementById('img1').src = 'public/trashB.png'
                document.getElementById('img2').src = 'public/checkB.png'
                document.getElementById('img3').src = 'public/editB.png'
            }
        } else if (targetId === 'cbtn') {
            let newstyleC = document.createElement('link')
            newstyleC.rel = 'stylesheet'
            newstyleC.href = 'styleC.css'
            document.head.appendChild(newstyleC)
            document.getElementById('addimg').src = 'public/addC.png'
            if (addedTask) {
                document.getElementById('img1').src = 'public/trashC.png'
                document.getElementById('img2').src = 'public/checkC.png'
                document.getElementById('img3').src = 'public/editC.png'
            }
        } else if (targetId === 'dbtn') {
            let newstyleD = document.createElement('link')
            newstyleD.rel = 'stylesheet'
            newstyleD.href = 'styleD.css'
            document.head.appendChild(newstyleD)
            document.getElementById('addimg').src = 'public/addD.png'
            if (addedTask) {
                document.getElementById('img1').src = 'public/trashD.png'
                document.getElementById('img2').src = 'public/checkD.png'
                document.getElementById('img3').src = 'public/editD.png'
            }
        }
    })
}