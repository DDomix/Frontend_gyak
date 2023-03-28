import { Component, ReactNode } from "react";
import dj from './dj.jpg';

export default class Főoldal extends Component{
    render(): ReactNode {
        return<div>
            <p className="foszoveg">Üdvözöllek DJ Petrik weboldalán!</p>
            <p className="foszoveg">Válassz a fenti lehetőségek közül!</p>
            <img src={dj} alt="" className="kép"></img>
        </div>
    }
}