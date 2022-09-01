import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllUsers } from './redux/actions';

function App() {

  // const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const users = useSelector(state => state.userReducer.users);
 

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      dispatch(getAllUsers(json));
      setLoading(false);
    })

  }, [])


  return (
    <div className="App">
      <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>username</th>
              <th>Numero de telephone</th>
            </tr>
          </thead>

          <tbody>
            {loading ? "chargment en cours" :  
            users.map(user =>{
              return   <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
            </tr>
            })}
           
          
          </tbody>
      </table>
    </div>
  );
}

export default App;
