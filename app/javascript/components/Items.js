import React from "react";

const Items = (props) => {
  const { items } = props;
  return (
    <div style={styles.container}>
      <h1>Items</h1>
    </div>
  );
};
export default Items;

const styles = {
  container: {
    border: "1px solid green",
    margin: "10px",
    padding: "10px",
  },
};
