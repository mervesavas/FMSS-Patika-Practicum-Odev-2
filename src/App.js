import React, { useState } from 'react';
import Input from './components/Input'
import TodoList from './components/List';
import Footer from './components/Footer';

function App() {
  // bir todos state'i oluşturulur ve boş bir array ile başlatılır.
  const [todos, setTodos] = useState([]);

  // filter state'i oluşturulur ve "all" ile başlatılır.
  const [filter, setFilter] = useState("all");

  // yeni bir todo eklemek için kullanılır.
  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // bir todo'nun tamamlanma durumunu toggle etmek için kullanılır.
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // bir todo'yu silmek için kullanılır.
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // filtrelenmiş todo listesi oluşturulur.
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    } else {
      return true;
    }
  });

  // Input, TodoList ve Footer componentleri render edilir.
  return (
    <>

      <h1>TODOS</h1>
      <section className='todoapp'>
      <Input addTodo={addTodo} todos = {todos} setTodos={setTodos}/>
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      <Footer className='footer' setFilter={setFilter} todos={todos} setTodos={setTodos} />
</section>
    </>
  );
}

export default App;