import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component{
    render(): ReactNode {
        return<div>
            <nav className="navbar">
                <Link to='/' className="asd">Főoldal</Link>
                <Link to='/bemutatkozas' className="asd">Bemutatkozás</Link>
                <Link to='/kapcsolat' className="asd">Kapcsolat</Link>
            </nav>
        </div>
    }
}