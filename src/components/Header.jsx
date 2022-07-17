const Header = ({ setForm, setModal }) => {

  const handleOpenModal = () => {
    setModal( true );
    setForm( true );
  }

  return (
    <header className="header">
      <h1 className="heading-primary">Usuarios registrados</h1>
      <button
        onClick={ handleOpenModal }
        className="btn"
        type = "button"
      >
        <span className="btn__icon">
          <ion-icon name="add-outline"></ion-icon>
        </span>
        <p>Crear nuevo usuario</p>
      </button>
    </header>
  )
}

export default Header;