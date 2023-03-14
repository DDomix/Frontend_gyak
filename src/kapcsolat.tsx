import { Component, ReactNode } from "react";

export default class Kapcsolat extends Component{

    submit = async () =>{
        return window.alert("Köszönjük");
    }
    render(): ReactNode {
        return<div>
            <form onSubmit={this.submit}>
                <input type="email" required  placeholder="Email"/><br/>
                <textarea  required/><br/>
                <button>Küldés</button>
            </form>
        </div>
    }
}