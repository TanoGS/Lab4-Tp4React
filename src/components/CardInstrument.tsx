import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Instrumento from './InstrumentoClass'
import"./CardInstrument.css"
import { Link } from 'react-router-dom'

interface myprops{
    instrumentox: Instrumento
}


export default function CardInstrument({ instrumentox }: myprops) {
  return (
    <div className='contenedor'>
      <p className='instrumento'>{instrumentox.instrumento}</p>
      <table>
        <tr>
          <td>
            <img className='imagen' src={"/img/" + instrumentox.imagen} alt="" />
          </td>
          <td>
            <p className='marca'>Marca: {instrumentox.marca}</p>
            <p className='modelo'>Modelo: {instrumentox.modelo}</p>
            <p className='precio'>$ {instrumentox.precio}</p>
            <p className='cantidad'>Cantidad Vendida: {instrumentox.cantidadVendida}</p>
          </td>
        </tr>
      </table>
      <p className='descripcion'>{instrumentox.descripcion}</p>

    </div>
  )
}
