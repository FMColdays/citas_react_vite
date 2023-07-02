const Paciente = ({ paciente, setPaciente, eliminar }) => {

  const { nombre, propietario, email, alta, sintomas, id } = paciente;

  const alerta = () =>{
     const respuesta  = confirm('¿Realmente quiere eliminar esto?');

     if(respuesta){
        eliminar(id);
     }  
  }

  return (
    <div className="form">
      <p className="p-datos">Nombre:  <span>{nombre}</span></p>
      <p className="p-datos">Nombre del propietario:  <span>{propietario}</span></p>
      <p className="p-datos">Email:  <span>{email}</span></p>
      <p className="p-datos">Fecha alta:  <span>{alta}</span></p>
      <p className="p-datos">Sintomas:  <span>{sintomas}</span></p>

      <div className="contenedor-btn">
        <button className="btn-editar" type="button" onClick={() => setPaciente(paciente)}>Editar</button>
        <button className="btn-eliminar" type="button" onClick={alerta}>Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente