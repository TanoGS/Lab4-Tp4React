import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Instrumento from './Instrumento';
import instrumentosJson from "../assets/instrumentos.json"

export const instrumentox: Instrumento[] = instrumentosJson.instrumentos
export default function InstrumentoIndividual() {

   const {id} = useParams ();
   const [instrumento, setInstrumento] = useState<Instrumento> ();

  const getPlatosResto = () => {
   
    const producto = instrumentox.filter((dato) => {
      return (dato.id === id)
    });
    
    setInstrumento(producto[0])
  };

  useEffect(() => {
    getPlatosResto();
  }, []);

  return (
    <div>
<div>
    <p>{}</p>
</div>
    </div>
  )
}
