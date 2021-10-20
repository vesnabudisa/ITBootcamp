import Prihod from "./Prihod"


const Prihodi = ({prihodi,setPrihodi}) =>{
    return (
        <div>
            <hr></hr>
            <h2>Prihodi:</h2>
            {prihodi.map(prihod => <Prihod key={prihod.id} prihod={prihod} setPrihodi = {setPrihodi}/>)}
            <hr></hr>
        </div>
    )
}

export default Prihodi