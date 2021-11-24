//import Navigation from '../NavBar/Navigation.js'
//import React, { Component } from "react";
import {Link} from 'react-router-dom'

import {useEffect , useState} from 'react'
//import  from 'react'



function Perfil(props) {
  const mystyle2 = {
    width:"40px",
    height:"40px",
    borderRadius:"40%",
    alignItems:"center",
    marginTop:"3px"
    
  };
  
  
  var propiedades=props
  console.log("estas son las propiedades "+propiedades)
  
  return (
    <div id="perfil">
      
        <a href="https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1" target="_blank">
          <img style={mystyle2} id="hperfil" src={props.imageUrl} />
        
        </a>
        
        
    </div>
  );
}


export default Perfil;

