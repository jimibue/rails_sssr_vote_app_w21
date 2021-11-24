import axios from "axios";
import React, { useState } from "react";

const ItemForm = (props) => {
  const {
    id,
    addItem,
    likes: initialLikes,
    name: initialName,
    updateItem,
  } = props;
  const [name, setName] = useState(initialName ? initialName : "");
  const [likes, setLikes] = useState(initialLikes ? initialLikes : "");
  // const initialLikes = props.likes;
  // const initialName = props.name;

  const handleSubmit = async (e) => {
    // this prevents a reload
    e.preventDefault();
    console.log({ name: name, likes: likes });
    const item = { name: name, likes: likes };

    if (id) {
      // update logic here
      try {
        let response = await axios.put(`/items/${id}`, item);
        console.log(response.data);
        // need update UI (update response.data in items)
        updateItem(response.data);
      } catch (err) {
        alert("err occured");
        console.log(err);
        console.log(err.response);
        console.log(err.response.data.errors);
      }
    } else {
      // creaete logic here
      // axios call here
      // save to database DONE
      try {
        let response = await axios.post("/items", item);
        console.log(response.data);
        // need update  (add response.data to items)
        addItem(response.data);
      } catch (err) {
        alert("err occured");
        console.log(err);
        console.log(err.response);
        console.log(err.response.data.errors[0]);
      }
      }
    }
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
