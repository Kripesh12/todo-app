import Header from "./components/header";
import Form from "./components/form";
import ToDoList from "./components/totoList";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem("TODO_ITEM");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }

  useEffect(() => {
    localStorage.setItem("TODO_ITEM", JSON.stringify(items));
  }, [items]);

  function handelToggle(id, checked) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isCompleted: checked } : item
      )
    );
  }

  function handelDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handelClearList() {
    const val = window.confirm("Do you want to delete all the list?");
    if (val) setItems([]);
  }

  return (
    <div className="App">
      <Header />
      <Form onSubmit={handelAddItem} />
      <ToDoList
        items={items}
        onToggle={handelToggle}
        onDelete={handelDelete}
        onClear={handelClearList}
      />
    </div>
  );
}

export default App;
