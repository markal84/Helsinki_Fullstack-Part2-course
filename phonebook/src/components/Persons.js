function Person({ person }) {
  return (
    <li>
      {person.name} : {person.number}
    </li>
  );
}

function Persons({ persons, filter }) {
  // show filtered results if there is value in filter input
  const isPersonsFiltered =
    filter === ""
      ? persons
      : // if name includes letter/letters from filter input
        persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <ul>
      {isPersonsFiltered.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  );
}

export default Persons;
