const misProductos=[
    {id:1, nombre:"Agility", precio:11400, img:"./img/agility.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
    {id:1, nombre:"Eukanuba", precio:11400, img:"./img/eukanuba.jpg"},
]
 export const getProduct= ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(misProductos)
        },2000)
        
    })
 }