import { data } from '../../../data';
// import { useState } from 'react';
import React from 'react';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  // remove a single item
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    // setPeople(people.filter((person) => person.id !== id));
  };

  // clear all items
  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        onClick={clearAllItems}
        style={{ marginTop: '2rem' }}
      >
        Clear items
      </button>
    </div>
  );
};

export default UseStateArray;
