import React from 'react';

function Footer({ setFilter, todos, setTodos}) {
    // tamamlanmış todo'ları silen event handler fonksiyonu
    const handleDeleteCompleted = () => {
      const newTodos = todos.filter((todo) => !todo.completed);
      setTodos(newTodos);
    };
    const activeTodoCount = () => {
      return todos.filter((todo)=>todo.completed===false).length
  }
  
    // footer kısmındaki butonlar döndürülür
    return (
      <footer className='filter-button footer'>
        <span>{activeTodoCount()} items left</span>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={handleDeleteCompleted}>Clear Completed</button>
      </footer>
    );
  }

  export default Footer;