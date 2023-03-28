import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component{
    render(): ReactNode {
        return<div>
            <nav className="navbar">
                <Link to='/' className="asd">Főoldal</Link>
                <Link to='/tapasztalat' className="asd">Szakmai tapasztalat</Link>
                <Link to='/idopont' className="asd">Időpontfoglalás</Link>
            </nav>
        </div>
    }
}