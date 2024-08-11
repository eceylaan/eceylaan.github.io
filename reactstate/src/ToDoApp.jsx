import { useId } from "react";
import "./ToDoApp.css";

export default function ToDoApp() {
  const [todos, setTodos] = useState();

  return (
    <>
      <h1>To Do Form</h1>
      <ToDoForm />
      <TodoList />
    </>
  );
}

function TodoList() {
  const todos = [<li key={1}>Todo 1</li>, <li key={2}>Todo 2</li>, <li key={3}>Todo 3</li>];

  return <ul className="todoList">{todos}</ul>;
}

function ToDoForm() {
  const id = useId();
  function handelSubmit(e) {
    e.preventDefault();
    console.log(e.target["task"].value);
  }

  return (
    <form onSubmit={{ handelSubmit }}>
      <input required type="text" placeholder="Yapılacak iş" />
      <button>Ekle</button>
    </form>
  );
}
