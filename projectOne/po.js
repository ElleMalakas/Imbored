let addButton = document.getElementById('add');
let currentTheme = 'styleA';
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
        img.className = 'img1'
        img.src = getImgSrc('img1', currentTheme)
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
        img2.className = 'img2'
        img2.src = getImgSrc('img2', currentTheme)
        btn2.id = 'doneBtn'
        btn2.addEventListener('click', function () {
            if (getComputedStyle(li).textDecoration.includes('line-through')) {
                li.style.textDecoration = 'none';
                console.log(`(❌) ${whatTask} : task has been unchecked !`);
            } else {
                li.style.textDecoration = 'line-through';
                li.style.textDecorationThickness = '5px';
                console.log(`(✅) ${whatTask} : task has been finished !`);
            }

        })

        let btn3 = document.createElement('button')
        let img3 = document.createElement('img')
        btn3.appendChild(img3)
        img3.className = 'img3'
        img3.src = getImgSrc('img3', currentTheme)
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
        console.log('add button has been clicked and added a task ! 💢')
    }
})
function applyTheme(theme, addImgSrc, img1Src, img2Src, img3Src) {
    let newStyle = document.createElement('link');
    newStyle.rel = 'stylesheet';
    newStyle.href = theme + '.css';
    document.head.appendChild(newStyle);
    document.getElementById('addimg').src = addImgSrc;
    document.querySelectorAll('.img1').forEach(img => img.src = img1Src);
    document.querySelectorAll('.img2').forEach(img => img.src = img2Src);
    document.querySelectorAll('.img3').forEach(img => img.src = img3Src);
}

function themeChange() {
    document.body.addEventListener('click', function (event) {
        let targetId = event.target.id;
        if (targetId === 'abtn') {
            applyTheme('styleA', 'public/add.png', 'public/remove.png', 'public/check.png', 'public/edit.png'); //theme, addImgSrc, img1Srec, img2Src, img3Src
            currentTheme = 'styleA';
        } else if (targetId === 'bbtn') {
            applyTheme('styleB', 'public/addB.png', 'public/trashB.png', 'public/checkB.png', 'public/editB.png');
            currentTheme = 'styleB';
        } else if (targetId === 'cbtn') {
            applyTheme('styleC', 'public/addC.png', 'public/trashC.png', 'public/checkC.png', 'public/editC.png');
            currentTheme = 'styleC';
        } else if (targetId === 'dbtn') {
            applyTheme('styleD', 'public/addD.png', 'public/trashD.png', 'public/checkD.png', 'public/editD.png');
            currentTheme = 'styleD';
        }
    })
}

function getImgSrc(imgType, theme) {
    switch (theme) {
        case 'styleA':
            if (imgType === 'img1') return 'public/remove.png';
            if (imgType === 'img2') return 'public/check.png';
            if (imgType === 'img3') return 'public/edit.png';
            break;
        case 'styleB':
            if (imgType === 'img1') return 'public/trashB.png';
            if (imgType === 'img2') return 'public/checkB.png';
            if (imgType === 'img3') return 'public/editB.png';
            break;
        case 'styleC':
            if (imgType === 'img1') return 'public/trashC.png';
            if (imgType === 'img2') return 'public/checkC.png';
            if (imgType === 'img3') return 'public/editC.png';
            break;
        case 'styleD':
            if (imgType === 'img1') return 'public/trashD.png';
            if (imgType === 'img2') return 'public/checkD.png';
            if (imgType === 'img3') return 'public/editD.png';
            break;
    }
}

themeChange()



// function themeChange() {
//     document.body.addEventListener('click', function (event) {
//         let targetId = event.target.id;
//         if (targetId === 'abtn') {
//             let newstyleA = document.createElement('link')
//             newstyleA.rel = 'stylesheet'
//             newstyleA.href = 'styleA.css'
//             document.head.appendChild(newstyleA)
//             document.getElementById('addimg').src = 'public/add.png'
//             document.querySelectorAll('.img1').forEach(img => img.src = 'public/remove.png')
//             document.querySelectorAll('.img2').forEach(img => img.src = 'public/check.png')
//             document.querySelectorAll('.img3').forEach(img => img.src = 'public/edit.png')
//         } else if (targetId === 'bbtn') {
//             let newstyleB = document.createElement('link')
//             newstyleB.rel = 'stylesheet'
//             newstyleB.href = 'styleB.css'
//             document.head.appendChild(newstyleB)
//             document.getElementById('addimg').src = 'public/addB.png'
//             document.querySelectorAll('.img1').forEach(img => img.src = 'public/trashB.png')
//             document.querySelectorAll('.img2').forEach(img => img.src = 'public/checkB.png')
//             document.querySelectorAll('.img3').forEach(img => img.src = 'public/editB.png')
//         } else if (targetId === 'cbtn') {
//             let newstyleC = document.createElement('link')
//             newstyleC.rel = 'stylesheet'
//             newstyleC.href = 'styleC.css'
//             document.head.appendChild(newstyleC)
//             document.getElementById('addimg').src = 'public/addC.png'
//             document.querySelectorAll('.img1').forEach(img => img.src = 'public/trashC.png')
//             document.querySelectorAll('.img2').forEach(img => img.src = 'public/checkC.png')
//             document.querySelectorAll('.img3').forEach(img => img.src = 'public/editC.png')
//         } else if (targetId === 'dbtn') {
//             let newstyleD = document.createElement('link')
//             newstyleD.rel = 'stylesheet'
//             newstyleD.href = 'styleD.css'
//             document.head.appendChild(newstyleD)
//             document.getElementById('addimg').src = 'public/addD.png'
//             document.querySelectorAll('.img1').forEach(img => img.src = 'public/trashD.png')
//             document.querySelectorAll('.img2').forEach(img => img.src = 'public/checkD.png')
//             document.querySelectorAll('.img3').forEach(img => img.src = 'public/editD.png')
//         }
//     })
// } themeChange(); //this completely work but I have to change it due to problems with not updating images during adding a task.

