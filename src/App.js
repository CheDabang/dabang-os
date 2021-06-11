import React, { useState } from "react";
import "./App.css";
import Boot from "./pages/Boot/";
import Login from "./pages/Login/";

function App() {
  const [loading, setLoading] = useState(true);
  const resetOS = (e) => {
    e.stopPropagation();
    setLoading(true);
  };
  if (loading) {
    return (
      <div className="App">
        <div className="App-content">
          <Boot setLoading={setLoading} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="App-content">
          <Login resetOS={resetOS} />
        </div>
      </div>
    );
  }
}

export default App;
