import { Component, ReactNode } from "react";

export default class Footer extends Component{
    render(): ReactNode {
        return<div>
            <footer className="footer">
                <p>Készítette: Papp Dominik</p>
            </footer>
        </div>
    }
}