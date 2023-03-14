import { Component, ReactNode } from "react";

export default class Kapcsolat extends Component{

    submit = async () =>{
        return window.alert("Köszönjük");
    }
    render(): ReactNode {
        return<div className="kapcs">
            <form onSubmit={this.submit}>
                <input type="email" required  placeholder="Email" className="lol"/><br/>
                <textarea  required placeholder="Üzenet" className="lol"/><br/>
                <button className="lol">Küldés</button>
            </form>
        </div>
    }
}