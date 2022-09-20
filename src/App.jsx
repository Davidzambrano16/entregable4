import { useState, useEffect } from 'react'
import './App.css'
import UsersForm from './Components/UsersForm'
import axios from 'axios'
import UsersList from './Components/UsersList'

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
      .catch(error => console.log(error.response))
  }

  const updateUser = (user) => {
    setUserSelected(user)
    console.log(userSelected)
  }

  console.log(users)
  return (
    <div className="App">
      <UsersList users={users} deleteUser={deleteUser} updateUser={updateUser} />
      <UsersForm getUsers={getUsers} userSelected={userSelected} setUserSelected={setUserSelected} />
    </div>
  )
}

export default App
