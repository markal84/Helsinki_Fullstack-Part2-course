import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import personsService from "./services/persons";

import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import Notification from "./components/Notifications";

const App = () => {
  const id = uuidv4();

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("please enter name...");
  const [newNumber, setNewNumber] = useState("phone number...");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

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
      personsService
        .create(newPerson)
        .then((person) => {
          setPersons(persons.concat(person));
          setSuccessMessage(`${person.name} added to phonebook`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 4000);
          setNewName("");
          setNewNumber("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    const found = persons.find((person) => person.name === newName);
    if (!found) {
      addPerson();
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const changedNumber = { ...found, number: newNumber };
        personsService.update(found.id, changedNumber).then((person) => {
          setPersons(persons.map((p) => (p.id !== found.id ? p : person)));
          setConfirmMessage(`${person.name} number changed`);
          setTimeout(() => {
            setConfirmMessage(null);
          }, 4000);
        });
      }
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
      <Notification message={errorMessage} className="message error" />
      <Notification message={successMessage} className="message success" />
      <Notification message={confirmMessage} className="message confirm" />
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
