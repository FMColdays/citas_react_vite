import Paciente from "./paciente"
import { useEffect, useState } from 'react'

const ListadoPacientes = ({ pacientes, setPaciente, eliminar }) => {


  return (
    <div className="formularios overflow">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="listado-titulo text-center">Listado pacientes</h2>
          <p className="p-subtitulo text-center ">Administra tus <span>pacientes y citas</span></p>

          {pacientes.map(paciente => {
            return <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminar={eliminar}
            />
          })}
        </>
      )
        : (
          <>
            <h2 className="listado-titulo text-center">No hay pacientes</h2>
            <p className="p-subtitulo text-center ">Agrega pacientes <span>y alistalos aquí</span></p>
          </>
        )
      }

    </div>
  )
}

export default ListadoPacientes