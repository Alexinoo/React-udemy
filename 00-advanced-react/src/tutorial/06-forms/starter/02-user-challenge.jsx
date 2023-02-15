import { useState } from 'react';
import { data } from '../../../data';
const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if the user tries to submit empty name ; return
    if (!name) return;

    // Add new user to the list
    const newUser = {
      id: Date.now(),
      name,
    };
    console.log(newUser);
    //  Push to the list array -- Won't work
    // const updatedUsers = users.push(newUser);

    // Use spread operator instead
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Empty the input
    setName('');
  };

  // remove user
  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
