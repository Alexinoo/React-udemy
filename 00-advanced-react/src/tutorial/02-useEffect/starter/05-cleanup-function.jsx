import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [isToggle, setisToggle] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => setisToggle(!isToggle)}
      >
        toggle component
      </button>
      {isToggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log('hmm, this is interesting');
    const intervalID = setInterval(() => {
      console.log('hello from interval');
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return <h3 style={{ marginTop: '2rem' }}>Hello from Some Component</h3>;
};

export default CleanupFunction;
