import { useRef, useState } from "react";
import "./App.css";

function App() {
  const todoInput = useRef();
  // useRef fonksiyonunu bir elemente referans baglamak icin kullaniyosun
  //useState'ten daha az perf harciyo, her render isleminde baglanan element varsa ona ulasiyo, yoksa null deger donuyo
  const [todos, setTodos] = useState(["kursa git", "proje yap", "konu tekrar et", "araştırma yap"]);
  const [dialog, setDialog] = useState({ isOpen: false, edit: { item: "", index: 0 } });
  //setTodos todos arrayini güncelleyebilmemiz icin useState'in bize verdigi fonk
  //useState kullandin cunku todos render oluyo

  /* useState'in Mantigi
  function useState(initialValue) {
     let state = initialValue;
  
     function setState(newValue) {
       state = newValue;
       renderComponent(); // Bileseni yeniden render eder
     }
  
     return [state, setState];
   } */

  function handleAddTodo() {
    const value = todoInput.current.value;
    setTodos((prev) => [...prev, value]);
    todoInput.current.value = "";
  }
  //inputa girilen o anki degere value dedim,
  //todosun eski degerinin tamaminin ustune (.. tamami demek) value ekleniyo
  // en sonda bosaltiyosun zaten

  function handleDeleteTodo(index) {
    setTodos(todos.filter((todo, todoIndex) => index !== todoIndex));
  }

  function handleDeleteAll() {
    setTodos([]);
  }

  function handleEdit(index) {
    const todo = todos[index];
    if (todo) {
      setDialog({ isOpen: true, edit: { index: index, item: todo } });
    }
  }
  //todo'nun indexinci elemanini todo'ya esitliyorum
  //

  function handleSave() {
    console.log(dialog);
    const newArray = todos;
    newArray[dialog.edit.index] = dialog.edit.item;
    setTodos(newArray);
    setDialog({ isOpen: false, edit: null });
  }
  return (
    <>
      <div className="flex-row">
        <input ref={todoInput} type="text" placeholder="Things To Do" name="todothing" />
        <button onClick={() => handleAddTodo()} id="btn">
          +
        </button>
        <button onClick={() => handleDeleteAll()}>Delete All</button>
      </div>
      <div className="flex-column">
        <h4>To Do List</h4>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              {/* bisuru ayni element oldugu zaman react birbirinden ayirt etmek için bizden benzersiz key vermemizi istiyo  */}

              <button onClick={() => handleDeleteTodo(index)} className="delete-btn">
                🗑️
              </button>
              <button onClick={() => handleEdit(index)} className="edit-btn">
                ✏️
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* conditional rendering 
      
      */}
      {dialog.isOpen ? (
        <dialog className="edit-dialog">
          <input
            style={{ width: "100%" }}
            type="text"
            value={dialog.edit.item}
            onChange={(e) => setDialog((prev) => ({ ...prev, edit: { item: e.target.value, index: dialog.edit.index } }))}
            // onchange input value'su her degistiginde dialogun edit ozelligi ile inputun yeni degerine esitliyo yani burdaki
            //input dialog.edit.item'i kontrol ediyo, index ayni kaliyo tabi
          />

          <button onClick={() => handleSave()}>Save</button>
        </dialog>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
