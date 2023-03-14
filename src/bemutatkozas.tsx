import { Component, ReactNode } from "react";

export default class Bemutatkozas extends Component{
    render(): ReactNode {
        return<div><h1>Történet</h1>

        <p>A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.</p>
        
        <p>2022-ben multinacionális céggé nőtte ki magát a kezdetben önkéntesekből álló szervezet.</p>
        
        <h2>Jelenlegi tagjaink</h2>
        
        <img src="/src/profile.png" alt="Fotó a főnökről" className="kép"></img>
        
        <ul>
            <li>Erdős Ildikó</li>
            <li>Jónás Viola</li>
            <li>Kató Anna</li>
            <li>Pintér Koppány</li>
            <li>Sas Gizi</li>
        </ul>
        </div>
    }
}