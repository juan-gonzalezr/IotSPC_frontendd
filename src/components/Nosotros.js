import React, { Component } from 'react'
import './Nosotros.css'
import youtube from '../images/youtube.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import twiter from '../images/twitter.png'
import pinterest from '../images/pinterest.png'

export default class Nosotros extends Component {
    render() {
        return (
            <div>
                <div id="contenedor">
                    <div id="Sec1">
                    <h1>Para mas informacion visitanos en nuestras instalaciones y siguenos en redes</h1>
                        

                    </div>

                    <div id="Sec2">
                        <div id="Sec2.1">
                        <h1 id="tmap">Ubicanos</h1>
                        <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8799350272257!2d-74.0704756855533!3d4.615497743676376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f998484277acf%3A0x3bab23efae829923!2sMuseo%20Nacional%20de%20Colombia!5e0!3m2!1ses!2sco!4v1637705102686!5m2!1ses!2sco" 
                             ></iframe>
                        </div>

                    </div>

                    <div id="Sec3">

                    <footer>
                        <div>
                            
                            <a id="bim" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                                <img id="icons" src={youtube}  /> 
                            </a>

                            <a id="bim" href="https://www.facebook.com/" target="_blank">
                                <img id="icons" src={facebook}  /> 
                            </a>

                            <a id="bim" href="https://www.instagram.com/" target="_blank">
                                <img id="icons" src={instagram}  /> 
                            </a>

                            <a id="bim" href="https://twitter.com/" target="_blank">
                                <img id="icons" src={twiter}  /> 
                            </a>

                            <a id="bim" href="https://co.pinterest.com/" target="_blank">
                                <img id="icons" src={pinterest}  /> 
                            </a>
                              
                        </div>
                    </footer>
                   
                        
                    </div>
                </div>

                

            </div>
        )
    }
}
