import {useState} from 'react'

function Clock () {
    const [cont, setContador] =  useState(0)
    setInterval(()=>{
        setContador(cont + 1)
    }, 1000)

    return(
        <div>
            <h2> Time: {cont} </h2>
        </div>
    )
}

export default Clock