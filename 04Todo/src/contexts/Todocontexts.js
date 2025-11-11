import { useContext, createContext } from "react";

export const TodoContext = createContext({
    // here we initialize functions only, but functionality of thwt fuction is defined somewhere else
    todos: [
        {
            id: 1,
            todo: "todo message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
};

// for not writting useContext provider
export const TodoProvider = TodoContext.Provider