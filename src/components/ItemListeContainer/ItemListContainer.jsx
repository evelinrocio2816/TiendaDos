import "./ItemListContainer.css"
import { useState,useEffect } from "react";
import { getProduct } from "../../asynmonk";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [productos,setProductos]=useState([])
  useEffect(()=>{
    getProduct()
    .then(res => setProductos(res))
    .catch(error=>console.log(error))
  })

  return (
    <>
    <h2>{props.greeting}</h2>
    <ItemList productos ={productos}/>
    
    </>

  )
}

export default ItemListContainer