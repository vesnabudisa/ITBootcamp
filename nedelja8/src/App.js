import { useState } from "react"
import Form from "./Form"
import Header from "./Header"
import Prihod from "./Prihod"
import Prihodi from "./Prihodi"
import Rashod from "./Rashod"
import Rashodi from "./Rashodi"


function App() {
    const [prihod,setPrihod] = useState({})
    const [prihodi,setPrihodi] = useState([])
    const [rashod,setRashod] = useState({})
    const [rashodi,setRashodi] = useState([])
    const [ukupanPrihod,setUkupanPrihod] = useState(0)
    const [ukupanRashod,setUkupanRashod] = useState(0)
    console.log(prihod)
    console.log(prihodi)
    console.log(rashod)
    console.log(rashodi)
    return (
        <div>
            <Header ukupanPrihod = {ukupanPrihod}/>
            <Form prihodi = {prihodi} setPrihod = {setPrihod} setPrihodi = {setPrihodi} setRashod = {setRashod} setRashodi = {setRashodi} ukupanPrihod = {ukupanPrihod} setUkupanPrihod = {setUkupanPrihod}/>
            <Prihod prihod = {prihod} />
            <Prihodi prihodi = {prihodi} setPrihodi = {setPrihodi}/>
            <Rashod rashod = {rashod} />
            <Rashodi rashodi = {rashodi} setRashodi = {setRashodi}/>
        </div>
    )
}

export default App
