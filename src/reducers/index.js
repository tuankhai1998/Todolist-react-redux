import { combineReducers } from 'redux';

import allItem from './allItem';
import filter from './filterItem';


const myReducer = combineReducers({
    allItem ,
    filter
});

export default myReducer;