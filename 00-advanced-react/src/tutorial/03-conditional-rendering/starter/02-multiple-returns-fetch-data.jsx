import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async (data_url) => {
      try {
        const response = await fetch(data_url);
        if (!response.ok) {
          throw new Error('resource not found');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData(url);
  }, []);

  return <h2>Fetch Data </h2>;
};
export default MultipleReturnsFetchData;
