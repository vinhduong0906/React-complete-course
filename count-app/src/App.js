import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
