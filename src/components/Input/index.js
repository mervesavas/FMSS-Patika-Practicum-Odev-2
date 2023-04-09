import React, { useState } from 'react';

function Input({ addTodo,todos,setTodos }) {
  // input state'i tanımlanır ve varsayılan değeri boş bir string olarak ayarlanır.
  const [input, setInput] = useState("");
  const [allActive,setAllActive] = useState(false)

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // form gönderildiğinde çağrılan event handler fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      addTodo(input);
      setInput("");
    }
  };

  const toggleAll = ()=>{
    if(todos.length>1){
    const newTodo = todos.map((todo)=>({...todo, completed:!allActive}))
    setTodos(newTodo)
    setAllActive(!allActive)}
  }

  // input formu döndürülür
  return (
    <form className='form' onSubmit={handleSubmit}>
    <input id='toggleAllCheckBox' type='checkbox' onClick={toggleAll}></input>
    <label htmlFor='toggleAllCheckBox' id='toggleAllLabel'></label>
      <input
        className='new-todo'
        property="newTodo"
        placeholder="What needs to be done?"
        value={input}
        onChange={handleInput}
      />
    </form>

  );
}

export default Input;

