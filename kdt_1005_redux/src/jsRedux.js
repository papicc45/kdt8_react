import { createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const num = document.querySelector('#num');

//리듀서는 데이터를 수정해주는 함수
const countReducer = (state = 0, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }
};

//store는 데이터를 넣는곳
//creatStore: store생성, 리듀서 함수 필수
const countStore = createStore(countReducer);
console.log(countStore);


//getState()는 createStore로 생성된 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
console.log('state', countStore.getState());

//subscribe - 함수를 반환하며 데이터와 저장소가 변경될 때 마다 함수를 실행
countStore.subscribe(()=> {
   num.textContent = countStore.getState();
});
add.addEventListener('click', () => {
    countStore.dispatch({ type: 'ADD' });

});

minus.addEventListener('click', () => {
    countStore.dispatch({ type: 'MINUS' });
});