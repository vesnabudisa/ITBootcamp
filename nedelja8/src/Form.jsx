import React, { useState } from "react"
import { v1 as uuidv1 } from "uuid"

const ukupnaSuma = (prihodii) => {
    let sum = 0
    for (let i = 0; i < prihodii.length; i++) {
        sum += prihodii[i].iznos
    }
    return sum
    
}

const Form = ({ prihodi, ukupanPrihod, setPrihodi, setRashodi, setUkupanPrihod }) => {
    const [inputTxt, setInputTxt] = useState('')
    const [inputVrednost, setInputVrednost] = useState('')
    const [value, setValue] = useState('Izaberi tip transakcije')
    return (
        <>
            <select onChange={(e) => setValue(e.target.value)}>
                <option value='Izaberi tip transakcije'>Izaberi tip transakcije</option>
                <option value='prihod'>Prihod</option>
                <option value='rashod'>Rashod</option>
            </select>

            <input value={inputTxt} onChange={(e) => {
                setInputTxt(e.target.value)
            }} />

            <input value={inputVrednost} onChange={(e) => {
                setInputVrednost(e.target.value)
            }} />

            <button onClick={() => {

                if (value === 'prihod') {
                  
                    let noviPrihod = {
                        id: uuidv1(),
                        text: inputTxt,
                        vrednost: '+ ' + inputVrednost
                    }
                    setPrihodi((prev) => [...prev, noviPrihod])
                   
                    setUkupanPrihod(ukupnaSuma(prihodi))



                } else if (value === 'rashod') {
                    let noviRashod = {
                        id: uuidv1(),
                        text: inputTxt,
                        vrednost: '- ' + inputVrednost,
                        procenat: 20 + '%'
                    }
                    setRashodi((prev) => [...prev, noviRashod])
                } else {
                    alert('Morate izabrati tip transakcije')
                }
                setInputTxt('')
                setInputVrednost('')
            }}>Dodaj</button>

        </>
    )
}

export default Form