import React, { useState } from 'react';

function TodoList({ todos, toggleComplete, deleteTodo }) {
    // düzenleme modu için kullanılacak state'ler tanımlanır
    const [editMode, setEditMode] = useState(null);
    const [editText, setEditText] = useState("");
  
    // düzenleme moduna geçmek için çağrılan event handler fonksiyonu
    const handleEditStart = (index) => {
      setEditMode(index);
      setEditText(todos[index].text);
    };
  
    // düzenleme işlemi sırasında input alanındaki değişiklikleri takip eden event handler fonksiyonu
    const handleEditChange = (event) => {
      setEditText(event.target.value);
    };
  
    // düzenleme işlemi tamamlandığında çağrılan event handler fonksiyonu
    const handleEditSave = (index) => {
      const newTodos = [...todos];
      newTodos[index].text = editText;
      setEditMode(null);
      setEditText("");
    };
  
    // liste döndürülür. Eklenen todolar gösterilir.
    return (
      <div>
          <header className='header'>
            <ul className='todo-list'>
              {todos.map((todo, index) => (
                <li key={index} id='listItem'>
                  {editMode === index ? (
                    <input className='edit-input'
                      type="text"
                      value={editText}
                      onChange={handleEditChange}
                      onBlur={() => handleEditSave(index)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          handleEditSave(index);
                        }
                      }}
                    />
                  ) : (
                    <>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(index)}
                      />
                      <span
                        style={{ textDecoration: todo.completed ? "line-through" : "",
                        opacity: todo.completed ? 0.5 : 1, }}
                        onClick={() => handleEditStart(index)}
                      >
                        {todo.text}
                      </span>
                      <button
                        className="delete-button"
                        onClick={() => deleteTodo(index)}
                      >
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </header>
      </div>
    );
  }

  export default TodoList;
  