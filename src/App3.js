import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewPerson from "./NewPerson";
import PersonList from "./PersonList";
import uuid from "uuid/v1";

function App() {
  const initialData = [
    { id: uuid(), name: "Peter" },
    { id: uuid(), name: "Lars" },
    { id: uuid(), name: "Niels" }
  ]
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });
  console.log(persons)

  const addPerson = person => {
    if (person.id === "") { // id=-1 Indicates a new object
      person.id = uuid();
      persons.push(person);
    } else {//if id != "", it's an existing person. Find it and add changes
      let personToEdit = persons.find(t => t.id === person.id);
      personToEdit.name = person.name;
    }
    setPersons([...persons]);
    setNewPerson({id:"", name:""})
  };

  const deletePerson = selectedPerson => {
    let index = persons.indexOf(selectedPerson);
    persons.splice(index,1);
    setPersons([...persons]);
  }; 

  const editPerson = person => {
    setNewPerson(person);
  }

  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom:25 }}>
        Props and Lifting State II
      </h2>

      <div className="row">
        <div className="col-6 allPersons">
          <PersonList
          persons={persons}
          deletePerson={deletePerson}
          editPerson={editPerson}/>
        </div>
        <div className="col-5 new-person">
          <NewPerson
            addPerson={addPerson}
            nextPerson={newPerson}            
          />
        </div>
      </div>
    </div>
  );
}
export default App;
