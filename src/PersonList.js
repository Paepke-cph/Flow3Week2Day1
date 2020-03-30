import React from 'react';
import PropTypes from 'prop-types';

const PersonList = ({ persons, deletePerson, editPerson}) => {
    const createTableBody = persons => {
        let mappedPersons = persons.map(person => {
            return <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td><a href="#/" onClick={(e) => {e.preventDefault(); deletePerson(person)}}>Delete</a></td>
                <td><a href="#/" onClick={() => editPerson(person)}>Edit</a></td>
                </tr>
        });
        return mappedPersons;
    }
    return (
    <React.Fragment>
      <h2>All Persons</h2>
      <table>
          <thead>
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>Delete</td>
                <td>Edit</td>
            </tr>
        </thead>
        <tbody>
            {createTableBody(persons)}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default PersonList;

PersonList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func
}
