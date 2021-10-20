import { useState } from "react"

const Product = ({product}) =>{
    const [quantity,setQuantity] = useState(0)
    const [info,setInfo] = useState('')

    return(
        <>
        <hr/>
        
        <h3>{product.name}: ${product.price}</h3>
        <p>{info}</p>
        <p>qty: {quantity}</p>
        <button onClick={()=>{
            setInfo(product.info)
        }}>show info</button><br/>
        <button onClick={()=>{
            setQuantity(quantity+1)
        }}>+</button>
        <button onClick={()=>{
            setQuantity(quantity-1)
        }}>-</button>

        </>
    )
}

export default Product