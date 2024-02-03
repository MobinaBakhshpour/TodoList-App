let loacalStorageTODO = [];
let getLoacalStorageTODO = [];
let indexToDo ;
let UlElem = document.getElementById('todoList');
let  LocalStorageArrNumber = JSON.parse(localStorage.getItem('saveToDo'));
let inputContent = document.getElementById('itemInput');
let addBtnElem = document.getElementById('addButton');

inputContent.addEventListener('keypress',  addNewTodo)
addBtnElem.addEventListener('click',  addNewTodo)

function addNewTodo (event){
    if(event.key === "Enter" || event.type ==="click"){
        let toDoObj = {
            id: loacalStorageTODO.length+1 ,
            content : inputContent.value ,
            complete :false,
        }
        loacalStorageTODO.push(toDoObj)
        localStorage.setItem('saveToDo' ,JSON.stringify(loacalStorageTODO));
        GneratorToDo(loacalStorageTODO)
    
    }
}


function GneratorToDo(todoList){
    UlElem.innerHTML = ' '
    todoList.forEach(function(todo){
       let newLi = document.createElement('li')
       newLi.className = "completed well"

       let addToDoLable = document.createElement('label')
       addToDoLable.innerHTML = todo.content
       newLi.append(addToDoLable)

       let addCompleteBtn = document.createElement('button')
       addCompleteBtn.className = 'btn-success btn'
       addCompleteBtn.innerHTML = todo.complete ? 'UnComleted' : 'Complete'
       newLi.append(addCompleteBtn)

       let addDeleteBtn = document.createElement('button')
       addDeleteBtn.className = "btn-danger btn DelBtn"
       addDeleteBtn.innerHTML = 'Delete'
       newLi.append(addDeleteBtn)

       UlElem.append(newLi)

       inputContent.value= ""
    })
    
}


window.onload = function (){
    getLoacalStorageTODO = JSON.parse(localStorage.getItem('saveToDo'))
    
    if(getLoacalStorageTODO){
        loacalStorageTODO = getLoacalStorageTODO
    } else {
        console.log('TODO empty')
        loacalStorageTODO = []
    }

    GneratorToDo(loacalStorageTODO)
}

//Delete Button
let delBtnElem = document.getElementsByClassName('btn-danger')
document.addEventListener('click', function (event) {
     if (event.target.classList.contains('DelBtn')) {
        const todoToRemove = event.target.closest('.well');
        const todoLbl = todoToRemove.children[0].innerHTML
        indexToDo = getLoacalStorageTODO.findIndex(function (item){
            return item == todoLbl
        })
        console.log(getLoacalStorageTODO)
        console.log(indexToDo)
         if (todoToRemove) {
        //     console.log(getLoacalStorageTODO)
            getLoacalStorageTODO.splice(indexToDo,1)
             console.log(getLoacalStorageTODO)
             localStorage.setItem('saveToDo' ,JSON.stringify(getLoacalStorageTODO));
            //todoToRemove.remove();
        }
     }
});