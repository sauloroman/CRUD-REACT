const DeleteUser = ({ setModal, setRemove, deleteUser, targetUser, setTargetUser }) => {

  const handleCloseModal = () => {
    setModal( false);
    setRemove( false );
    setTargetUser({});
  }

  const handleAccept = () => {
    deleteUser( targetUser.id );
    setModal( false );
    setTargetUser({});
  }

  return (
    <form 
      className="form"
    >
      <header className="form__header">
        <h2>Eliminar usuario</h2>
        <button onClick = { handleCloseModal }> 
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </header>

      <div className="form__field">
        <p>¿Desea eliminar al usuario <span class="user__nameDelete">{`${targetUser.first_name} ${targetUser.last_name}`}</span>?</p>
      </div>

      <button
        className="btn"
        type="button"
        onClick={ handleAccept }
      >
        Aceptar
      </button>

    </form>
  )
}

export default DeleteUser