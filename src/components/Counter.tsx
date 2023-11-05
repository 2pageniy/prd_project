import React, {useState} from 'react';

import cl from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        setCount((prev) => prev - 1);
    };
    return (
        <div className={cl.counter}>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            Счетчик: {count}
        </div>
    );
};

