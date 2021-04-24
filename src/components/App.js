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

  useEffect(() => {
    console.log(results);
  }, [results]);

  console.log("App.js", results);

  const updateResults = (values) => {
    const newResults = [...results, values];
    setResults(newResults);
  }

  return (
    <div className="App">
      <NewEntryForm updateResults={updateResults} />
      <EntriesTable results={results} />
    </div>
  );
}

export default App;
