import React, { useEffect, useState } from "react";
import FilterInput from "./inputFilter";
import Table from "./employeeViewTable";
import { getUsers } from "./API";
import "./App.css";

import './App.css';
import "./styles/header.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
      <div className="header">
      <h1>Employee Directory</h1>
      <p>
        To filter by first name, please begin your search in the user input
        below
      </p>
      </div>
      
      <FilterInput users= {initialUsers} updateUsers={updateUsersToRender} />
      <Table users={usersToRender} />
      </div>
      
  );
}

export default App;
