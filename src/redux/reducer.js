import {createSlice} from '@reduxjs/toolkit';


const initialState = [];

const todoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // Agregamos un task
        addTodo: (state, action) => {
            return [...state, action.payload]
        },
        // Borrar un task
        deleteTodo: (state, action) => {
            return state.filter((item) => {
                return item.id !== action.payload.id
            })
        },
        // Actualizar un task
        updateTodo: (state, action) => {
            return state.map((todo) => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        titulo: action.payload.titulo || todo.titulo,
                        descripcion: action.payload.descripcion || todo.descripcion,
                        completed: action.payload.completed !== undefined ? action.payload.completed : todo.completed
                    };
                }
                return todo
            });
        },
        // Tasks completos
        filterCompleted: (state, action) => {
            return state.filter(todo => todo.completed);
        },
        // Tasks en progreso
        filterInProgress: (state, action) => {
            return state.filter(todo => !todo.completed);
        },
        // Sin filtro
        noFilter: (state, action) => {
            return state;
        }
    }
})


export const {addTodo, deleteTodo, updateTodo, filterCompleted, filterInProgress, noFilter} = todoReducer.actions;
export default todoReducer.reducer;