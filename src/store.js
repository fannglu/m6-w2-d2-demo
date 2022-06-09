import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

//import from redux toolkit "configureStore"
const store = configureStore({
    reducer: {
        // Define a top-level state field name `todos` and handled by `todosReducer`
        todos: todoReducer,
        filters: filtersReducer, 
    }
})

export default store;