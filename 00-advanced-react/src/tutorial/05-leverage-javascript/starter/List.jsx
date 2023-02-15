import { Person } from './Person';
import { people } from '../../../data';

const List = () => {
  return (
    <div>
      <h3>People's List</h3>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
};
export default List;
