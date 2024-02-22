import { useState } from 'react'
import img_register from '../images/register.png'

function Register() {
    const [cont, setContador] = useState(0)

    let register_user = () => {
        setContador(cont + 1)  
    }

    return (
        <div>
            <h1> Register Page </h1>
            <img className='img-icon' src={img_register} />
            <form action='/register_user' method='post'>
                <br></br>
                <label> Name </label> <input name="name"></input> <br/> <br/>
                <label> Last Name </label > <input name="lastname"></input> <br/> <br/>
                <label> Identification </label > <input name="id"></input> <br/> <br/>
                <label> Birthday </label > <input name="birthday"></input> <br/> <br/>
                <button onClick={register_user}> Register </button> 
            </form>
            <h2> {cont}  usuarios </h2>          
        </div>
    )
}

export default Register