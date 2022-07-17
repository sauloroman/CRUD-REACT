import User from "./User"

const UsersList = ({ setModal, setRemove, users, setTargetUser, setForm }) => {

  return (
    <ul className="users__grid">
      { users.map( user => (
        <User 
          key = { user.id }
          user = { user }
          setRemove = { setRemove }
          setModal = { setModal }
          setTargetUser = { setTargetUser }
          setForm = { setForm }
        />
      ))}
    </ul>
  )
}

export default UsersList