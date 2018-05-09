import { createStore, combineReducers } from 'redux';

//ADD_EXPENSE
// REMOVE_EXPESE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Filters reducers
const filtersReducerDefaultStore = {
    text: '',
    sortyBy: 'data',
    startData: undefined,
    endData: undefined
}
const filtersReducer = (state = filtersReducerDefaultStore, action) => {
        switch (action.type) {
            default:
                return state;
        }
};

// Store creation
const store = createStore(
    combineReducers({
        expsenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'asasasa',
        description: 'January Rent',
        notes: 'This was the final pyament for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};