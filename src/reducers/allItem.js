import * as types from '../constants/Actiontype';

var data = JSON.parse(localStorage.getItem('todoItems'));
var initialState = data ? data : [];

var randomstring = require("randomstring");

var randomID = () => {
    return randomstring.generate(7) + '-' + randomstring.generate(9) + '-' + randomstring.generate(12);
}

var onCreatNewToDo = (inputVal) => {
    // console.log(inputVal);
    var newToDo = {
        id: randomID(),
        content: inputVal,
        isComplete: false
    }
    return newToDo;
}

var myReducer = (state, action) => {
    let index = action.index;
    let content = action.content;
    let todoList;
    state = initialState;
    switch (action.type) {  
        case types.LIST_ALL:
            return state;
        case types.HAND_STATUS:
            state[index].isComplete = !state[index].isComplete;
            todoList = JSON.stringify(state);
            localStorage.setItem('todoItems', todoList);
            return [...state];
        case types.DELETE_ITEM:
            state.splice(index, 1);
            todoList = JSON.stringify(state);
            localStorage.setItem('todoItems', todoList);
            return [...state];
        case types.ADD_ITEM:
            let newTodo = onCreatNewToDo(content);
            state.push(newTodo);
            todoList = JSON.stringify(state);
            localStorage.setItem('todoItems', todoList);
            return [...state];
        case types.FILTER_NOACTIVE:
            return state.filter((todoItem) => {
                return todoItem.isComplete === false;
            });
        case types.FILTER_ACTIVE:
            return state.filter((todoItem) => {
                return todoItem.isComplete === true;
            });
        case types.FILTER_ALL:
            return [...state];
        default: return state;
    }

}

export default myReducer;