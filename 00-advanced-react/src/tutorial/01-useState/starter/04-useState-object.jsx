import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Alex',
    age: 32,
    hobby: 'Reading Books',
  });

  const displayPerson = () => {
    // Be aware of the gotchas
    // Remember we can pass whatever value in the setPerson()
    // Even though , this is an object, we can pass a string and our application is going to break because there are no more person.name,person.age or person.hobby anymore
    // setPerson({ name: 'John', age: 24, hobby: 'Hiking' });
    // setPerson('shakeandbake');

    // We can also change only one and still our app will break
    // setPerson({ name: 'susan' });

    // SOLUTION :
    //  Copy the properties from the state {...person,}
    // decide which ones we want to ovewrite {...person,name: 'John'}
    // In our case , all
    setPerson({ ...person, name: 'John', age: '24', hobby: 'Hiking' });
  };

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
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
