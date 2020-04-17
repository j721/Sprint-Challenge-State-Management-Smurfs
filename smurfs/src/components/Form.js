import React, { useState } from "react";

const Form = (props) => {
  const [addedSmurf, setAddedSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(addedSmurf);
    setAddedSmurf({
      ...addedSmurf,
      [e.target.name]: e.target.value,
    });
  };

  const changeHandler = (e) => {
    setAddedSmurf({
      ...addedSmurf,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Smurf's name"
            onChange={changeHandler}
            value={addedSmurf.name}
          />
        </div>

        <div>
          <input
            type="text"
            name="age"
            placeholder="Smurf's age"
            onChange={changeHandler}
            value={addedSmurf.age}
          />
        </div>

        <div>
          <input
            type="text"
            name="height"
            placeholder="Smurf's height"
            onChange={changeHandler}
            value={addedSmurf.height}
          />
        </div>
        <button className="submit" type="submit">
          Create your Smurf!
        </button>
      </form>
    </div>
  );
}; //end of Form component

export default Form;
