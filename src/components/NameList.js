import React from "react";
import Person from "./Person";

function NameList() {
  //   const names = ["Bruce", "Clark", "Dianna"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React"
    },
    {
      id: 2,
      name: "CLark",
      age: 25,
      skill: "React Native"
    },
    {
      id: 3,
      name: "Dianna",
      age: 35,
      skill: "Javascript"
    },
    {
      id: 4,
      name: "John",
      age: 40,
      skill: "HTML"
    }
  ];
  const personList = persons.map(person => <Person person={person} />);
  return <div>{personList}</div>;
}

export default NameList;
