import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const phonebook = [
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ];

  const id = uuidv4();

  const [persons, setPersons] = useState(phonebook);
  const [newName, setNewName] = useState("please enter name...");
  const [newNumber, setNewNumber] = useState("phone number...");
  const [filter, setFilter] = useState("");

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

  // show filtered results if there is value in filter input
  const isPersonsFiltered =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );
  /*
      const isPersonsFiltered = () => {
    if (showAll) {
      console.log("returning persons list");
      return persons;
    } else {
      console.log("returning filtered persons list", filter);
      return persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  */

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

  const clearPhone = () => {
    setNewNumber("");
  };

  return (
    <>
      <h2>Phonebook</h2>
      <div>debug: filter - {filter}</div>
      <input type="text" value={filter || ""} onChange={handleFilter} />
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
        {isPersonsFiltered.map((person) => (
          <li key={person.id}>
            Name: {person.name} : {person.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
