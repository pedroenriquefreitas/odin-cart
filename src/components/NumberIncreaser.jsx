import React, { useState } from 'react';

const NumberIncreaser = ({ productName, onAction }) => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(prevCount => prevCount + 1);
        onAction(productName, 'increase');
    };
    
    const decrease = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
            onAction(productName, 'decrease');
        }
    };
    

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={decrease} style={{ marginRight: '10px' }}>-</button>
            <span>{count}</span>
            <button onClick={increase} style={{ marginLeft: '10px' }}>+</button>
        </div>
    );
};

export default NumberIncreaser;