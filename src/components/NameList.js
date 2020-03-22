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
  const personList = persons.map(person => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;

// A key is a special aatribute you need to include when creating list of elements.
// keys give the elements a stable identity.
// it help React identify which items have chnaged, are addedd, or are removed.
// helps in efficient update of the user interface.

//When to use index as key?
// The items in yourlist don't have a unique id
// the list is a static list and will not change.
// The list will never be reordered or filtered
