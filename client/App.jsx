import React, { createContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./containers/Dashboard.jsx";

export const TopicContext = React.createContext();

function App() {
  const [currentTopicId, setCurrentTopicId] = useState("1");
  return (
    <div className="App">
      <CssBaseline />
      <TopicContext.Provider value={{ currentTopicId, setCurrentTopicId }}>
        <Dashboard />
      </TopicContext.Provider>
      ;
    </div>
  );
}

export default App;
