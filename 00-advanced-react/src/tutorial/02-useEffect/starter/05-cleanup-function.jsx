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
    const someFunc = () => {
      // some logic
    };

    window.addEventListener('scroll', someFunc);

    return () => {
      window.removeEventListener('scroll', someFunc);
    };
  }, []);
  return <h3 style={{ marginTop: '2rem' }}>Hello from Some Component</h3>;
};

export default CleanupFunction;
