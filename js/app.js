let loacalStorageTODO = [];
let getLoacalStorageTODO = [];
let LocalStorageArrNumber = JSON.parse(localStorage.getItem('saveToDo'));
let i = LocalStorageArrNumber.length;
let inputContent = document.getElementById('itemInput');
let addBtnElem = document.getElementById('addButton');
inputContent.addEventListener('keypress',  addNewTodo)
addBtnElem.addEventListener('click',  addNewTodo)

function addNewTodo (event){
    if(event.key === "Enter" || event.type ==="click"){
        loacalStorageTODO[i] =inputContent.value;
        i++;
         localStorage.setItem('saveToDo' ,JSON.stringify(loacalStorageTODO));


       let newLi = document.createElement('li')
       newLi.classList.add('completed')
       newLi.classList.add('well')

       let addToDoLable = document.createElement('label')
       addToDoLable.innerHTML = inputContent.value;
       newLi.append(addToDoLable)

       let addCompleteBtn = document.createElement('button')
       addCompleteBtn.classList.add('btn-success')
       addCompleteBtn.classList.add('btn')
       addCompleteBtn.innerHTML = 'Complete'
       newLi.append(addCompleteBtn)

       let addDeleteBtn = document.createElement('button')
       addDeleteBtn.classList.add('btn-danger')
       addDeleteBtn.classList.add('btn')
       addDeleteBtn.innerHTML = 'Delete'
       newLi.append(addDeleteBtn)


       let UlElem = document.getElementById('todoList')
       UlElem.append(newLi)

       inputContent.value= ""
    
    }
}

window.onload = function (){
    getLoacalStorageTODO = JSON.parse(localStorage.getItem('saveToDo'))
    
    
    if( getLoacalStorageTODO.length != 0){
       getLoacalStorageTODO.forEach( function (item) {

       let newLi = document.createElement('li')
       newLi.classList.add('completed')
       newLi.classList.add('well')

       let addToDoLable = document.createElement('label')
       addToDoLable.innerHTML = item;
       newLi.append(addToDoLable)

       let addCompleteBtn = document.createElement('button')
       addCompleteBtn.classList.add('btn-success')
       addCompleteBtn.classList.add('btn')
       addCompleteBtn.innerHTML = 'Complete'
       newLi.append(addCompleteBtn)

       let addDeleteBtn = document.createElement('button')
       addDeleteBtn.classList.add('btn-danger')
       addDeleteBtn.classList.add('btn')
       addDeleteBtn.innerHTML = 'Delete'
       newLi.append(addDeleteBtn)


       let UlElem = document.getElementById('todoList')
       UlElem.append(newLi)
        });
    }
}