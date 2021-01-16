import React, { useEffect, useState } from "react";

const FilterInput = ({ users, updateUsers }) => {
  const [inputValue, updateInput] = useState("");

  useEffect(() => {
    const filteredUsers =
      inputValue === ""
        ? users
        : users.filter(
            ({ name: { first } }) =>
              first.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
          );

    updateUsers(filteredUsers);
  }, [inputValue, users]);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
    <input value={inputValue} onChange={e => updateInput(e.target.value)} />
    </div>
    </form>
  );
};

export default FilterInput;