import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Instrumento from './InstrumentoClass';
import instrumentosJson from "../assets/instrumentos.json"
import "./InstrumentoIndividual.css"

let costo
export const instrumentox: Instrumento[] = instrumentosJson.instrumentos
export default function InstrumentoIndividual() {

  const {id} = useParams ();
  const [instrumento, setInstrumento] = useState<Instrumento> ();

  const getPlatosResto = () => {
   
  const producto = instrumentox.filter((dato) => {
      return (dato.id === id )
    });
    
    setInstrumento(producto[0])
  };

  useEffect(() => {
    getPlatosResto();
  }, []);

  if (instrumento?.costoEnvio == "G") {
    costo = "Costo Envio"
  }else{
    costo = instrumento?.costoEnvio
  }



  return (
    <div>
<div>
  
<div className='contenedor'>
      
      <table>
        <tr>
          <td>
            <img className='imagen' src={"/img/" + instrumento?.imagen} alt="" />
            <p>Descipcion: </p>
            <p className='descripcion'>{instrumento?.descripcion}</p>
          </td>
          <td>
          <p className='instrumento'>{instrumento?.instrumento}</p>
            <p className='marca'>Marca: {instrumento?.marca}</p>
            <p className='modelo'>Modelo: {instrumento?.modelo}</p>
            
            <p className='precio'>Precio: {costo}</p>  
            <p>{instrumento?.costoEnvio}</p>
            <p className='boton'>
            <Link className='agregar' to={""}>Agregar al Carrito</Link>
            </p>
           
          </td>
        </tr>
      </table>
     

    </div>

    <p></p>
</div>
    </div>
  )
}
