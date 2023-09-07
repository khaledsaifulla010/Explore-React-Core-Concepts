import { useState } from "react"

export default function Counter () {

    const [count, setCount] = useState(0);

    const handleIncreaseButton = () => {
        const newCount = count + 1;

        setCount (newCount);
    }

    const handleDecreaseButton = () => {
        if(count > 0) {
            const decreaseCount = count - 1 ;

        setCount(decreaseCount);
        }
    }

    return (
        <div style={{border: '4px solid tomato', margin: '40px', padding: '40px', borderRadius: '20px'}}>
            <h3>Counter : {count} </h3>
            <button style={{background: 'green', padding: '8px', color: 'white', borderRadius: '4px', marginRight : '12px'}} onClick={handleIncreaseButton}>Increase Count</button>
            <button style={{background: 'green', padding: '8px', color: 'white', borderRadius: '4px'}} onClick={handleDecreaseButton}>Decrease Count</button>
        </div>
    )
}