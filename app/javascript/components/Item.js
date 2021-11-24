import React from "react";

const Item = (props) => {
  const { name, likes, id, category, description } = props;
  return (
    <div style={styles.container}>
      <h1>{name}</h1>
      <p>likes: {likes}</p>
      <p>id: {id}</p>
      <p>category: {category}</p>
      <p>description: {description}</p>
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
