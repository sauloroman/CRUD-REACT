const User = ({ setRemove, user, setModal, setTargetUser, setForm}) => {

  const {first_name, last_name, email, birthday, id } = user; 

  const handleDelete = () => {
    setTargetUser( user );
    setRemove( true );
    setModal( true );
  }

  const handleUpdate = () => {
    setTargetUser( user );
    setModal( true );
    setForm( true );
  }

  return (
    <li className="user">
      <h2 className="user__name">{`${first_name} ${last_name}`}</h2>

      <div className="user__info">
        <div>
          <h3 className="user__tag">Correo</h3>
          <p className="user__text">{ email }</p>
        </div>
        <div>
          <h3 className="user__tag">Cumpleaños</h3>
          <div className="user__birthDayBox">
            <span><ion-icon name="gift-outline"></ion-icon></span>
            <p className="user__text">{ birthday }</p>
          </div>
        </div>
        <div className="user__btns">

          <button 
            onClick={ handleDelete }
            type="button"
            className="btn--delete">
            <ion-icon name="trash-outline"></ion-icon>
          </button>

          <button 
            onClick={ handleUpdate }
            className="btn--edite"
            type="button"
          >
            <ion-icon name="pencil-outline"></ion-icon>
          </button>

        </div>
      </div>

    </li>
  )
}

export default User;