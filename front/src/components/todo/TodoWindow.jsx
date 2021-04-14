import React from "react";
import TodoList from "./TodoList";
import {
    Link
} from "react-router-dom";

const TodoWindow = () => {
    return(
        <>
        <Link to="/todo/create-todo">Create</Link>
        <TodoList/>
        </>
    );
};

export default TodoWindow;