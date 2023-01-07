import React, { useEffect, useState } from 'react';


function History({ squares, xIsNext, handleRestart }) {
    const [value, setValue] = useState([])
    useEffect(() => {
        setValue([...squares.filter(value => value !== null)])
        // console.log('run')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [squares.toString()])


    return (
        <div className='history'>
            <h4>History</h4>
            <button onClick={handleRestart}>Go to game start</button>
            <ul>
                {value.map((value, index) => (
                    <li key={index} >{value} played the {index + 1}th turn </li>
                ))}
            </ul>
        </div>
    )
}

export default History