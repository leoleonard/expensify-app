import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPESE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }; 
            });
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
         case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
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

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent, amount: 100'}));
const expenseTwo = store.dispatch(addExpense({ description: 'Cofee, amount: 300'}));

store.dispatch(removeExpense({ id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

console.log(expenseOne);

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

const user = {
    name: 'Jen',
    age: '19'
};

console.log({
    ...user, 
    location: 'Philadelphia'
});