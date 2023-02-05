import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
  const url = `http://localhost:3001/persons`;

  const id = uuidv4();

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("please enter name...");
  const [newNumber, setNewNumber] = useState("phone number...");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log("promise fulfilled ", res.data);
      const phonebook = res.data;
      setPersons(phonebook);
    });
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      id: id,
      name: newName,
      number: newNumber,
    };

    const found = persons.find((el) => el.name === newName);
    if (found) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
    }
  };

  const handleAddName = (e) => {
    setNewName(e.target.value);
  };

  const handleAddNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const clearName = () => {
    setNewName("");
  };

  const clearNumber = () => {
    setNewNumber("");
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h4>Add a new person</h4>
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleAddName={handleAddName}
        handleAddNumber={handleAddNumber}
        clearName={clearName}
        clearNumber={clearNumber}
      />
      <h4>Numbers</h4>
      <Persons persons={persons} filter={filter} />
    </>
  );
};

export default App;
