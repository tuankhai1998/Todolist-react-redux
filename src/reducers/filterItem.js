import * as types from '../constants/Actiontype';


var initialState = 0; // 0 = all , 1 = dan hoanf thanh , -1 = chua hoan thanh 

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_ALL:
            state = 0;
            return state;
        case types.FILTER_ACTIVE:
            state = 1;
            return state;
        case types.FILTER_NOACTIVE:
            state = -1;
            return state;
        default: return state;
    }

}

export default myReducer;