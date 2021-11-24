import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>App component (SPA HERE)</h1>
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
