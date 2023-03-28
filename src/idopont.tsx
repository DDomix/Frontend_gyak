import { Component, ReactNode } from "react";

export default class Idopont extends Component{

    submit = async () =>{
        return window.alert("Köszönjük a megkeresését");
    }
    render(): ReactNode {
        return<div className="kapcs">
            <form onSubmit={this.submit}>
                <input type="text" required  placeholder="Név" className="lol"/><br/>
                <input type="date" className="lol"/><br/>
                <textarea  required placeholder="Leírás" className="lol"/><br/>
                <button className="lol">Küldés</button>
            </form>
        </div>
    }
}