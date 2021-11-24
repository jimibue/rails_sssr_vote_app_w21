import React from "react";
import ItemForm from "./ItemForm";

const Item = (props) => {
  const { name, likes, id, category, description, updateItem, deleteItem } =
    props;
  return (
    <div style={styles.container}>
      <h1>{name}</h1>
      <p>likes: {likes}</p>
      <p>id: {id}</p>
      <p>category: {category}</p>
      <p>description: {description}</p>
      <hr />
      <ItemForm
        id={id}
        name={name}
        likes={likes}
        category={category}
        description={description}
        updateItem={updateItem}
      />
      <hr />
      <button onClick={() => deleteItem(id)}>delete</button>
      {/* this is another way to pass down props */}
      {/* <ItemForm {...props} /> */}
    </div>
  );
};

export default Item;

const styles = {
  container: {
    border: "1px solid blue",
    margin: "10px",
    padding: "10px",
  },
};
