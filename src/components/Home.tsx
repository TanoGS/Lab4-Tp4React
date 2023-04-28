import { useState } from "react"
import "./Home.css"

function Home() {
    const [count, setCount] = useState(0)
  
    return (
  
      <div className="Home">
      <p className="texto">Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia.
         Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</p>
         <p>Crear Componente: rfc</p>
      </div>
    )
  }
  
  export default Home
  