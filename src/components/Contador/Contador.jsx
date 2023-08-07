import { useState } from "react"
import "./Contador.css"

const Contador = () => {

     let [contador, setContador]=useState(0)
     
     const sumar =()=>{
        setContador(contador+1)
     }
     const restar =()=>{
        setContador(contador-1)
     }
     const reset =()=>{ 
        setContador(0)
     }

  return (
    <main className="btnContainer">
        <h4>Pelotita de Goma</h4>
        <img className="imgProducto" src="https://media.istockphoto.com/id/146026034/es/foto/juguete-de-mascota.jpg?s=612x612&w=0&k=20&c=pM5IdTJgaaY8U6e6JtMJbnMCTtyyZTw2nCkTNCmta34=" alt="Pelota" />
        <div className="botones">
        <button className="btnContador" onClick={restar}>-</button>
        <button  className="btnContador"  onClick={reset}>↩</button>
        <button className="btnContador"onClick={sumar}>+</button>
       
        <h1 > = {contador}</h1>
         </div>
    </main>
 
  )
}

export default Contador