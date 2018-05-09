import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {
   switch (action.type) {
       case 'INCREMENT':
        const incremenetBy = typeof action.incremenetBy === 'number' ? action.incremenetBy : 1;
        return {
            count: state.count + incremenetBy
        };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
         return {
            count: state.count - decrementBy
         };
         case 'SET':
         return {
             count: action.count
         };
         case 'RESET':
         return {
            count: state.count = 0
         };
        default: 
            return state;
       }
});

const unsunscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
        type: 'INCREMENT',
        incremenetBy: 5

     });

store.dispatch({
        type: 'INCREMENT'
    });
store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
});

