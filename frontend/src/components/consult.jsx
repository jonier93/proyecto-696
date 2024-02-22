import React, {Component} from "react";
import img_consult from '../images/consult.png'
import Clock from './clock'

class Consult extends Component {
    render(){
        return(
            <div>
                <h1> Consult User </h1>
                <img className="img-icon" src={img_consult} /> <br/> <br/>
                <label> Identificacion </label> <input /> <br/> <br/>
                <textarea>  </textarea> <br/> <br/>
                <button> Consult </button>
                <Clock />
            </div>
        )
    }
}

export default Consult