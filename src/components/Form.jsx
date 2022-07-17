import { useState, useEffect } from "react";

const Form = ({setForm, setModal, addNewUser, targetUser, setTargetUser, updateUser }) => {

  // ###################
  // USE STATES
  // ###################

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('')
  const [ birthday, setBirthDay ] = useState('');
  const [ error, setError ] = useState( false );

  useEffect( () => {

    if ( Object.keys( targetUser ).length ) {
      setFirstName( targetUser.first_name );
      setLastName( targetUser.last_name );
      setEmail( targetUser.email );
      setPassword( targetUser.password );
      setBirthDay( targetUser.birthday );
    }

  }, [ targetUser ]);

  const clear = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setBirthDay('');
    handleCloseModal();
    setTargetUser({});
  }

  const handleCloseModal = () => {
    setModal( false );
    setForm( false );
    setTargetUser({});
  }

  const handleSubmit = e => {

    e.preventDefault();

    if ( [firstName, lastName, email, password, birthday ].includes('') ) {
      setError( true );
      return;
    }

    setError( false );

    const userObj = {
      first_name: firstName,
      last_name: lastName,
      email, 
      password,
      birthday
    }

    if ( targetUser.id ) {
      userObj.id = targetUser.id;
      updateUser( userObj );
    } else {
      addNewUser( userObj );
    }

    clear();

  }

  return (
    <form 
      onSubmit={ handleSubmit }
      className="form"
    >

      { error && <p className="alert">Todos los campos son obligatorios</p> }

      <header className="form__header">
        <h2>{ targetUser.id ? 'Editar usuario' : 'Nuevo usuario'}</h2>
        <button onClick = { handleCloseModal }> 
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </header>

      <div className="form__field">
        <label htmlFor="name">Nombre</label>
        <input
          value = { firstName }
          onChange = { e => setFirstName( e.target.value )}
          id="name" 
          type="text" 
          placeholder="Nombre del usuario"
        />
      </div>

      <div className="form__field">
        <label htmlFor="lastName">Apellido</label>
        <input
          value = { lastName }
          onChange = { e => setLastName( e.target.value )}
          id="lastName" 
          type="text" 
          placeholder="Apellido del usuario"
        />
      </div>

      <div className="form__field">
        <label htmlFor="email">Correo</label>
        <input
          value = { email }
          onChange = { e => setEmail( e.target.value )}
          id="email" 
          type="text" 
          placeholder="correo@ejemplo.com"
        />
      </div>

      <div className="form__field">
        <label htmlFor="password">Contraseña</label>
        <input
          value = { password }
          onChange = { e => setPassword( e.target.value )}
          id="password" 
          type="password"
          placeholder="************"
        />
      </div>

      <div className="form__field">
        <label htmlFor="birthday">Cumpleaños</label>
        <input
          value = { birthday }
          onChange = { e => setBirthDay( e.target.value )}
          id="birthday" 
          type="date"
        />
      </div>

      <input className="btn" type="submit" value={ targetUser.id ? 'Guardar cambios': 'Agregar Usuario'} />
    </form>
  )
}

export default Form