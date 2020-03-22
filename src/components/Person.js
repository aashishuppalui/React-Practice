import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name} <br />I am {person.age} years old <br />I know{" "}
        {person.skill}
      </h2>
    </div>
  );
}

export default Person;
