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
        inputContent.focus()
    
    }
}


function GneratorToDo(todoList){
    UlElem.innerHTML = ' '
    todoList.forEach(function(todo){
       let newLi = document.createElement('li')
       newLi.className = "well"

       let addToDoLable = document.createElement('label')
       addToDoLable.innerHTML = todo.content
       newLi.append(addToDoLable)

       let addCompleteBtn = document.createElement('button')
       addCompleteBtn.className = 'btn-success btn'
       addCompleteBtn.setAttribute('onclick', 'changeMoode('+ todo.id +')')
       addCompleteBtn.innerHTML = todo.complete ? 'UnComleted' : 'Complete'
       newLi.classList.add (todo.complete ? 'uncompleted' : 'completed') 

       newLi.append(addCompleteBtn)

       let addDeleteBtn = document.createElement('button')
       addDeleteBtn.className = "btn-danger btn DelBtn"
       addDeleteBtn.innerHTML = 'Delete'
       addDeleteBtn.setAttribute('onclick','rmvTodo(' + todo.id +')')
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
function rmvTodo(id){
    loacalStorageTODO =JSON.parse(localStorage.getItem('saveToDo')) 
    console.log(id)
    indexToDo = loacalStorageTODO.findIndex(function (item){
         return item.id === id
    })
     
    loacalStorageTODO.splice(indexToDo,1)
    localStorage.setItem('saveToDo' ,JSON.stringify(loacalStorageTODO))
    GneratorToDo(loacalStorageTODO)
    

}


//Clear TODO List
let clearTodoListBtn = document.getElementById('clearButton')
clearTodoListBtn.addEventListener('click', function(){
    loacalStorageTODO = []
    localStorage.clear()
    GneratorToDo(loacalStorageTODO)
})


//Change Complete or Un Complete
function changeMoode(id){
    loacalStorageTODO =JSON.parse(localStorage.getItem('saveToDo')) 
    let indexToDoComplet = loacalStorageTODO.findIndex(function (item){
        return item.id === id
   })
    console.log(indexToDoComplet)
    console.log(loacalStorageTODO[indexToDoComplet])
    if(loacalStorageTODO[indexToDoComplet].complete === false){
        loacalStorageTODO[indexToDoComplet].complete = true;
    }else{
        loacalStorageTODO[indexToDoComplet].complete = false;
    }
    localStorage.setItem('saveToDo' ,JSON.stringify(loacalStorageTODO))
    GneratorToDo(loacalStorageTODO)

 
}