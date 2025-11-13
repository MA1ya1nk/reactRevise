// todoSlice uses Slice bcoz it is naming convention of Redux tool kit
import { createSlice, nanoid } from "@reduxjs/toolkit";  // nanoid is used to generate unique id for each todo item

const initialState = { // store stating mai kaisa hoga
     todos: [{
        id: 1, text: "Hello World"
     }]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,  
    reducers: {
        // state gives all value access like no of todos etc
        // action jo bhi data pass ho rha
        addTodo: (state, action) => {
            const todo = {
               id: nanoid(), // also id : Date.now()
               text: action.payload    // payload is also object so you can even extract other data also
            }
            state.todos.push(todo)
        },              // unlike contextAPI here we have to define addTodo in redux toolkit
        removeTodo: (state, action) =>  {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ) // jo match ho jayega woh filter mai nhi milega
        },     // addTodo func mai do access hmesha honge state and action
    }
}) 

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
// reducers may be multiple so export all along with their actions like addTodo and removeTodo