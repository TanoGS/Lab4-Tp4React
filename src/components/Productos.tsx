import  CardInstrument  from "./CardInstrument"
import instrumentosJson from "../assets/instrumentos.json"
import React from "react"
import Instrumento from "./InstrumentoClass"
import { Link } from "react-router-dom"


export const instrumentox: Instrumento[] = instrumentosJson.instrumentos

export const Productos = () => {

  return (
    <>
      
      <h1 className="mb-5">Listado de Instrumentos</h1>
      {instrumentox.map((actual: Instrumento) =>
        <Link to={`/detalle/${actual.id}`}>
        <CardInstrument instrumentox={actual} />
        </Link>
        
      )}
      
    </>
  )
}