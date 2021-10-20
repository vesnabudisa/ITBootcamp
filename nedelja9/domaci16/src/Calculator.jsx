import { useState } from "react"

const Calculator = () => {

    const [firstTypedValue, setFirstTypedValue] = useState('')
    const [firstValue, setFirstValue] = useState(0)
    const [secondValue, setSecondValue] = useState(0)
    const [steps, setSteps] = useState([])

    return (
        <>
            <input type='number' value={firstValue} onChange={(e) => {
                setFirstTypedValue(e.target.value)
                setFirstValue(Number(e.target.value))
            }} />

            <input type='number' value={secondValue} onChange={(e) => {
                setSecondValue(Number(e.target.value))
            }} />

            <button onClick={() => {
                setFirstValue(firstValue + secondValue)
                setSteps([...steps, '+', secondValue])
            }}>+</button>

            <button onClick={() => {
                setFirstValue(firstValue - secondValue)
                setSteps([...steps, '-', secondValue])
            }}>-</button>

            <button onClick={() => {
                setFirstValue(firstValue * secondValue)
                setSteps([...steps, '*', secondValue])
            }}>*</button>

            <button onClick={() => {
                if (firstValue === 0 && secondValue === 0) {
                    alert('Zero divided by zero is undefined!')
                } else {
                    setFirstValue(firstValue / secondValue)
                    setSteps([...steps, '/', secondValue])
                }
            }}>/</button>

            <button onClick={() => {
                setFirstTypedValue('')
                setFirstValue(0)
                setSecondValue(0)
                setSteps([])
            }}
            >Clear</button>
            <p>{firstTypedValue}{steps}</p>

        </>
    )
}

export default Calculator