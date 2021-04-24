import React, { useState, useEffect } from "react";
import "../styles/App.css";
import getEntries from "../requests/getEntries";
import EntriesTable from "./EntriesTable";
import NewEntryForm from "./NewEntryForm";

function App() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    getEntries(setResults);
  },[]);

  // console.log(results);

  return (
    <div className="App">
      <NewEntryForm />
      <EntriesTable results={results} />
    </div>
  );
}

export default App;
