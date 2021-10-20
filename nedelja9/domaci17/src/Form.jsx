import { useState } from "react"
import { addProduct } from "./service"

const Form = ({setProducts}) =>{
    
    const[name,setName] = useState('')
    const[price,setPrice] = useState(0)
    const[info,setInfo] = useState('')

    return(
        <>
        <h2>add new product</h2>

        <label>name:</label><br/>
        <input type="text" onChange={(e)=>{
            setName(e.target.value)
        }}/><br/>

        <label>price:</label><br/>
        <input type="number" onChange ={(e)=>{
            setPrice('$' + e.target.value)
        }}/><br/>

        <label>info:</label><br/>
        <input type="text" onChange={(e)=>{
            setInfo(e.target.value)
        }}/><br/>

        <button onClick={()=>{
            let newProduct = {
                name,
                price,
                info
            }
            addProduct(newProduct).then(res=>{
                setProducts(prev=> [...prev,res.data])
            })
        }}>create product</button>
        </>
    )
}

export default Form