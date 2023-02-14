import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    setUser({ name: 'Alex' });
  };

  const logout = () => {
    // destroy/clear session
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <Logout name={user.name} logout={logout} />
      ) : (
        <Login login={login} />
      )}
    </div>
  );
};

const Login = ({ login }) => {
  return (
    <div>
      <h4>Please login</h4>
      <button className="btn" onClick={login}>
        login
      </button>
    </div>
  );
};
const Logout = ({ name, logout }) => {
  return (
    <div>
      <h4>Hello there user : {name}</h4>
      <button className="btn" onClick={logout}>
        logout
      </button>
    </div>
  );
};

export default UserChallenge;
