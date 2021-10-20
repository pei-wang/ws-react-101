import React from "react";
import "todomvc-app-css/index.css";

function App() {
  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value=""
          data-reactid=".0.0.1"
        ></input>
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all"></label>
      </section>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
