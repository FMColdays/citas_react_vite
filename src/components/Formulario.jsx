import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    }

    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const pacienteActualizado = pacientes.map(pacienteUno =>
        pacienteUno.id === paciente.id ? objetoPaciente : pacienteUno)

      setPacientes(pacienteActualizado)
      setPaciente({})

    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');

  }


  return (
    <div className="formularios">
      <h2 className="seguimiento-titulo text-center">Seguimiento pacientes</h2>
      <p className="p-subtitulo text-center">Añade pacientes y <span>administralos</span></p>

      <form className="form" onSubmit={handleSubmit}>
        {error && <Error mensaje='todos los campos son obligatorios' />}
        <div className="contenedor-form">
          <label htmlFor="mascota">Nombre Mascota</label>
          <input id="mascota" type="text" placeholder="Nombre de la mascota" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="contenedor-form">
          <label htmlFor="propietario">Nombre Propietario</label>
          <input id="propietario" type="text" placeholder="Nombre del protetario" value={propietario} onChange={(e) => setPropietario(e.target.value)} />
        </div>
        <div className="contenedor-form">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email contacto propietario" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="contenedor-form">
          <label htmlFor="alta">Alta</label>
          <input id="alta" type="date" value={alta} onChange={(e) => setAlta(e.target.value)} />
        </div>
        <div className="contenedor-form">
          <label htmlFor="sintomas">Sintomas</label>
          <textarea id="sintomas" placeholder="Describe los sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
        </div>
        <input className="boton-form" type="submit" value={paciente.id ? "Editar paciente" : "Agregar paciente"} />
      </form>
    </div>

  )
}

export default Formulario