import React from "react";
import "./App.css";

import JsonFetch from "./components/JsonFetch";

function App() {
  return (
    <div>
      <JsonFetch url="http://localhost:7070/data" />
      <JsonFetch url="http://localhost:7070/error" />
      <JsonFetch url="http://localhost:7070/loading" />
    </div>
  );
}

export default App;