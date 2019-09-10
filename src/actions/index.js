import * as types from '../constants/Actiontype';

export const listAll = () => {
    return {
        type : types.LIST_ALL,
    }
}

export const handerStatus = (index) => {
    return {
        type : types.HAND_STATUS,
        index
    }
}

export const deleteItem = (index) => {
    return {
        type : types.DELETE_ITEM,
        index
    }
}


export const addItem = (content) => {
    return {
        type : types.ADD_ITEM,
        content
    }
}

export const filterAll = () => {
    return {
        type : types.FILTER_ALL,
    }
}

export const filterActive = () => {
    return {
        type : types.FILTER_ACTIVE,
    }
}

export const filterNoActive = () => {
    return {
        type : types.FILTER_NOACTIVE,
    }
}