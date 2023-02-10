import { useState } from 'react';

const useStatesetTimeoutExample = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // Does not work if we click 5 times
    // setTimeout(() => {
    //   setValue(value+1);
    // }, 3000);

    // Works!
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
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
export default useStatesetTimeoutExample;
