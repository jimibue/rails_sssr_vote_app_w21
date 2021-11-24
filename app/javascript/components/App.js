import axios from "axios";
import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Items from "./Items";

const App = () => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [items, setItems] = useState([]);

  // run callback on mount
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    let response = await axios.get("/items");
    // console.log(response.data);
    setItems(response.data);
  };
  // my items state is going to live in my APP
  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  };

  const addItem = (item) => {
    setItems([item, ...items]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>App component (SPA HERE)</h1>
      <button onClick={toggleNewForm}>
        {showNewForm ? "cancel" : "new item"}
      </button>
      {showNewForm && <ItemForm addItem={addItem} />}
      <Items items={items} />
    </div>
  );
};

const styles = {
  container: { border: "2px solid red", maxWidth: "800px", margin: "auto" },
  header: {
    color: "green",
  },
};

export default App;
