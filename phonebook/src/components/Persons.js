function Person({ person, handleDelete }) {
  const label = "delete";
  return (
    <li>
      {person.name} : {person.number}
      {"   "}
      <button type="button" onClick={handleDelete}>
        {label}
      </button>
    </li>
  );
}

function Persons({ persons, filter, handleDelete }) {
  // show filtered results if there is value in filter input
  const isPersonsFiltered =
    filter === ""
      ? persons
      : // if name includes letter/letters from filter input
        persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  // need to refactor later to move back event handler to app

  return (
    <ul>
      {isPersonsFiltered.map((person) => (
        <Person
          key={person.id}
          person={person}
          handleDelete={() => {
            handleDelete(person);
          }}
        />
      ))}
    </ul>
  );
}

export default Persons;
