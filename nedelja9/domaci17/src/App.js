import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Total from "./components/Total";
import Form from "./Form";
import { getAllProducts } from "./service";

function App() {
  const[products,setProducts] = useState([])

  useEffect(()=>{
    getAllProducts().then(res=>{
      setProducts(res.data)
    })
  },[])

  return (
    <>
     <Form setProducts={setProducts}/>
     <ProductList products={products}/>
     <Total products={products}/>
    </>
  );
}

export default App;
