import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async (data_url) => {
      try {
        const response = await fetch(data_url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      }
      setIsLoading(false);
    };
    getData(url);
  }, []);

  if (isLoading) {
    return <h2>Loading... </h2>;
  }
  if (isError) {
    return <h2>There was an error... </h2>;
  }

  return (
    <div>
      <img
        src={user.avatar_url}
        alt={user.name}
        style={{ width: '150px', borderRadius: '2rem' }}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.bio}</h4>
    </div>
  );
};
export default MultipleReturnsFetchData;
