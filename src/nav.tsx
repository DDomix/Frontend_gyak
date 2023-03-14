import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component{
    render(): ReactNode {
        return<div>
            <nav>
                <Link to='/'>Főoldal   </Link>
                <Link to='/bemutatkozas'>Bemutatkozás      </Link>
                <Link to='/kapcsolat'>Kapcsolat        </Link>
            </nav>
        </div>
    }
}