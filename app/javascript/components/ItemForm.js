import axios from "axios";
import React, { useState } from "react";

const ItemForm = (props) => {
  const [name, setName] = useState("");
  const [likes, setLikes] = useState("");
  const { id, addItem } = props;

  const handleSubmit = async (e) => {
    // this prevents a reload
    e.preventDefault();
    console.log({ name: name, likes: likes });
    const item = { name: name, likes: likes };
    // axios call here
    // save to database DONE
    let response = await axios.post("/items", item);
    console.log(response.data);
    // need update  (add response.data to items)
    addItem(response.data);
  };
  return (
    <div style={styles.container}>
      <h1>{id ? "Edit" : "New"} Item Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Likes</p>
        <input value={likes} onChange={(e) => setLikes(e.target.value)} />
        <button>{id ? "Update" : "Create"} </button>
      </form>
    </div>
  );
};
export default ItemForm;

const styles = {
  container: {
    border: "1px solid red",
    margin: "10px",
    padding: "10px",
  },
};
