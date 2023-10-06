import { createStore } from 'redux';

const input = document.getElementById('todo');
const addBtn = document.getElementById('addTodo');
const ul = document.getElementById('ul');
let count = 1;
const liReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD' :
            const todo = { id : count++, text : input.value };
            return [...state, todo];
        case 'DELETE' :
            const newList = state.filter((value) => value.id !== action.index);
            return newList;
        default:
            return state;
    }
}

const liStore = createStore(liReducer);
liStore.subscribe(()=> {
    ul.innerHTML = '';
   const list = liStore.getState();
   for(let todo of list) {
       const li = document.createElement('li');
       const span = document.createElement('span');
       span.textContent = todo.text;

       const deleteBtn = document.createElement('button');
       deleteBtn.className = 'closeBtn';
       deleteBtn.innerText = 'DEL';

       deleteBtn.addEventListener('click', ()=> {
           liStore.dispatch({ type : 'DELETE', index : todo.id});
       })
       li.append(span);
       li.append(deleteBtn);
       ul.append(li);
   }
});
addBtn.addEventListener('click', ()=> {
   liStore.dispatch({ type : 'ADD' });
   input.value = '';
});
