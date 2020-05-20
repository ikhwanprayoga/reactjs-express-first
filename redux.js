const redux = require('redux')
const createStore = redux.createStore

const stateAwal = {
    age: 10,
    value: 1
}

//reducer
const routeReducer = (state = stateAwal, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 3
            }
            break;
    
        default:
            return state
            break;
    }
}

//store
const store = createStore(routeReducer)
console.log(store.getState())

//dispaching
store.dispatch({type: 'ADD_AGE'})
console.log('dispatch', store.getState())