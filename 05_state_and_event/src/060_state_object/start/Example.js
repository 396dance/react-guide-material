import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setParson] = useState(personObj);

  const changeName = (e) => {
    setParson({ name: e.target.value, age: person.age });
  };
  const changeAge = (e) => {
    setParson({ name: person.name, age: e.target.value });
  };

  const reset = () => {
    setParson({ name: "", age: "" });
  };

  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" value={person.name} onChange={changeName}></input>
      <input type="number" value={person.age} onChange={changeAge}></input>
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
