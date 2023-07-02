import { useEffect, useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  const eliminar = (id) => {
    const pacienteActualizado = pacientes.filter(paciente => {
      if (paciente.id !== id) {
        return paciente;
      }
    })
    setPacientes(pacienteActualizado);
  }

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])


  return (
    <div className="contenedor">
      <Header />
      <div className="contenedor-formularios">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminar={eliminar} />
      </div>
    </div>
  )
}

export default App
