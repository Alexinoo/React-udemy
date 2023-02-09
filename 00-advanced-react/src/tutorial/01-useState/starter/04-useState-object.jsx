import React, { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Alex');
  const [age, setAge] = useState(32);
  const [hobby, setHobby] = useState('Reading Books');

  const displayPerson = () => {
    setName('John');
    setAge(30);
    setHobby('Hiking');
  };

  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys : {hobby}</h3>
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={displayPerson}
      >
        show john
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
