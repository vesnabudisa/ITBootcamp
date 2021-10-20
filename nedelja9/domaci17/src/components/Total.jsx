


const Total = ({products}) =>{
    
    let totalPrice = products.reduce((total,el)=>total + el.price,0)
    let tax = (totalPrice * 0.2)
    return(
        <>
        <hr/>
        <p>total price: ${totalPrice} </p>
        <p>tax(20%): {tax} </p>
        <p>total inc tax: ${totalPrice + tax}</p>
        </>
    )
}
export default Total