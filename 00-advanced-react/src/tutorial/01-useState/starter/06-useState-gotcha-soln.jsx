import { useState } from 'react';

const useStateGotchaSoln = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
    // console.log(value);
  };
  return (
    <div>
      <h3>{value}</h3>
      <button className="btn" type="button" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};
export default useStateGotchaSoln;
