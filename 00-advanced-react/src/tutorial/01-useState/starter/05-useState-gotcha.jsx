import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
    //  be careful it's the old value
    console.log(value);
    //  so if you have any functionality
    // that relies on the latest value
    // it will be wrong !!!
  };

  return (
    <div>
      <h3>{value}</h3>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
