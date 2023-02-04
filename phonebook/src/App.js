import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const phonebook = [{ id: 1, name: "Arto Hellas" }];
  const id = uuidv4();

  const [persons, setPersons] = useState(phonebook);
  const [newName, setNewName] = useState("please enter name...");
  const [newNumber, setNewNumber] = useState("phone number...");

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
      console.log("person added :", newName);
    }
  };

  const handleAddName = (e) => {
    setNewName(e.target.value);
  };

  const handleAddNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const clearName = () => {
    setNewName("");
  };

  const clearPhone = () => {
    setNewNumber("");
  };

  return (
    <div>
      <div>
        debug: {newName} {newNumber}
      </div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input
            type="text"
            value={newName || ""}
            onChange={handleAddName}
            onFocus={clearName}
          />
        </div>
        <div>
          phone:{" "}
          <input
            type="text"
            value={newNumber || ""}
            onChange={handleAddNumber}
            onFocus={clearPhone}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            Name: {person.name} : {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
