import React from "react";

const ItemForm = (props) => {
  const { id } = props;
  return (
    <div style={styles.container}>
      <h1>{id ? "Edit" : "New"} Item Form</h1>
      <form>
        <p>Name</p>
        <input />
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
