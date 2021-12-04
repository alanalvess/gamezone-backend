/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.scss'
import cart from '../../img/cart.svg'
import user from "../../img/user.svg"
import logo from '../../img/gameszone.svg'

const Header = () => {
    return (
        <div>
            <header id="main-header">
        <nav class="container content-header">
        <a id="box-logo" href="./index.html">
        <img id="logo" src={logo} alt=""/>
        </a>
        <div id="container-menu-login">
          <div id="box-menu">
            <a class="item-menu" href="">Home</a>
            <a class="item-menu" href="">Jogos</a>
            <a class="item-menu" href="">Consoles</a>
            <a class="item-menu" href="#contact">Sobre</a>
          </div>
  
          <div id="box-login-cart">
          

           <a href=""><img src={cart} alt="carrinho de compras"/></a>
           <a href=""><img src={user} alt="login do usuario"/></a> 
          </div>
        </div>

        <span id="menu-toggle"></span>
      </nav>
    </header>
        </div>
    )
}

export default Header
