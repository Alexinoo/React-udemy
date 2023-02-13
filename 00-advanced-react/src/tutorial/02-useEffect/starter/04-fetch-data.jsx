import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUsers(data);
    //   })
    //   .catch((err) => console.log(err));

    const getData = async (url_data) => {
      try {
        const response = await fetch(url_data);
        if (!response.ok) {
          throw new Error('resource not found');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getData(url);
  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={url} target="blank">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
