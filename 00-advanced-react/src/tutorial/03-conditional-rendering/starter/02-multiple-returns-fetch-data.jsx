import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

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

  // Order matters
  // By the time we get here user should not be null

  const { avatar_url, name, bio, company } = user;

  return (
    <div>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: '150px', borderRadius: '2rem' }}
      />
      <h2>{name}</h2>
      <h4>works at : {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
