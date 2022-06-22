import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();
function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1",[]);
    
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal,setOpenModal] = React.useState(false);
      const completedTodos = todos.filter((todo) => !!todo.completed).length;
      const totalTodos = todos.length;
      console.log()
      let searchedTodos = [];
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter((todo) => {
          console.log(todo);
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      const markTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
    
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };

      const addTodo = (text) => {
    
        const newTodos = [...todos];
        console.log(text);
        newTodos.push({
          text:text,
          completed:false,
        });
        saveTodos(newTodos);
      };

      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
    
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
      // console.log("Render (antes del use effect)");
      React.useEffect(() => {
        console.log("use effect");
      }, [totalTodos]);
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            searchedTodos,
            addTodo,
            setSearchValue,
            markTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
        )
}
export { TodoContext,TodoProvider }