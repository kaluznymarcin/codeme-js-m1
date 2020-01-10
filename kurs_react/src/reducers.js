import { combineReducers } from 'redux'

export default combineReducers({
    openModal: (state = false, action) => {
        console.log('->>>> ', action)
        switch (action.type) {
        case 'SET_OPEN_MODAL':
            return !!action.payload;
        default:
            return state;
        }
    },
    currency: (state = [], action) => {
        switch (action.type) {
        case 'SET_FETCH_DATA':
            return !!action.payload;
        default:
            return state;
        }
    }
})