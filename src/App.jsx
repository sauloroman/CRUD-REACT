import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from "./components/Header";
import UsersList from './components/UsersList';
import Form from './components/Form';
import DeleteUser from './components/DeleteUser';

const App = () => {

  const [ users, setUsers ] = useState( [] );
  const [ modal, setModal ] = useState( false );
  const [ form, setForm ] = useState( false );
  const [ remove, setRemove ] = useState( false );
  const [ targetUser, setTargetUser ] = useState({});

  useEffect( () => {
    getUsers();
  }, [] )

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then( resp => setUsers( resp.data ))
  };

  const addNewUser = user => {
    axios.post('https://users-crud1.herokuapp.com/users/', user)
      .then( () => getUsers() );
  }

  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then( () => getUsers() );
  }

  const updateUser = user => {
    axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, user)
      .then( () => getUsers() );
  }

  const showCorrectComponent = () => {

    if ( form ) {
      return  (
        <Form 
          setForm = { setForm }
          setModal = { setModal }
          addNewUser = {addNewUser}
          targetUser = { targetUser }
          setTargetUser = { setTargetUser }
          updateUser = { updateUser }
        />
      )
    } else if ( remove ) {
      return (
        <DeleteUser 
          setModal = { setModal }
          setRemove = { setRemove }
          deleteUser = { deleteUser }
          targetUser = { targetUser }
          setTargetUser = { setTargetUser }
        />
      )
    } 

  }


  return (
    <div className="container">
      <Header 
        setForm = { setForm }
        setModal = { setModal }
      />

      <UsersList 
          setModal = { setModal }
          setRemove = { setRemove }
          users = { users }
          setTargetUser = { setTargetUser }
          setForm = { setForm }
      />

      { modal && (<div className='modal'>{showCorrectComponent()}</div>) }

    </div>
  )
}

export default App;