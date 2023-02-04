function Input({ inputName, value, handleChange, handleFocus }) {
  return (
    <div>
      {inputName}:{" "}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </div>
  );
}

function Form({
  handleSubmit,
  newName,
  newNumber,
  handleAddName,
  handleAddNumber,
  clearName,
  clearNumber,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputName="name"
        value={newName}
        handleChange={handleAddName}
        handleFocus={clearName}
      />
      <Input
        inputName="number"
        value={newNumber}
        handleChange={handleAddNumber}
        handleFocus={clearNumber}
      />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default Form;
