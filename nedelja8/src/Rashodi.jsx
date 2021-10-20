import Rashod from "./Rashod"

const Rashodi = ({rashodi,setRashodi}) =>{
    return (
        <div>
            <hr></hr>
            <h2>Rashodi:</h2>
            {rashodi.map(rashod => <Rashod key={rashod.id} rashod={rashod} setRashodi = {setRashodi}/>)}
            <hr></hr>
        </div>
    )
}

export default Rashodi