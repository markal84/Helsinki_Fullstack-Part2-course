import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import personsService from "./services/persons";

import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
  const id = uuidv4();

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("please enter name...");
  const [newNumber, setNewNumber] = useState("phone number...");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personsService.getAll().then((phonebook) => {
      setPersons(phonebook);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      id: id,
      name: newName,
      number: newNumber,
    };

    const addPerson = () => {
      personsService.create(newPerson).then((person) => {
        setPersons(persons.concat(person));
        setNewName("");
        setNewNumber("");
      });
    };

    const found = persons.find((el) => el.name === newName);
    if (found) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      addPerson();
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

  const handleDelete = (person) => {
    if (window.confirm(`Are you sure you want ot remove ${person.name}?`)) {
      personsService.remove(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    }
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
      <Persons persons={persons} filter={filter} handleDelete={handleDelete} />
    </>
  );
};

export default App;
