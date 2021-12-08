/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.scss'
import cart from '../../img/cart.svg'
import user from '../../img/user.svg'
import logo from '../../img/gameszone.svg'

const Header = () => {
  return (
    <>


      <div>
        <header id="main-header">
          <nav className="container content-header">
            <a id="box-logo" href="./index.html">
              <img id="logo" src={logo} alt="" />
            </a>
            <div id="container-menu-login">
              <div id="box-menu">
                <a className="item-menu" href="/">Home</a>
                <div className="dropdown">
                  <a className="dropbtn item-menu" href="/jogos">Jogos</a>
                  <div className="dropdown-content">
                    <a href="/ps-5">PS5</a>
                    <a href="/ps-4">PS4</a>
                    <a href="xbox-series-x">Xbox Series X</a>
                    <a href="xbox-one">Xbox One</a>
                  </div>
                </div>
                <a className="item-menu" href="/consoles">Consoles</a>
                <a className="item-menu" href="/sobre">Sobre</a>
              </div>

              <div id="box-login-cart">
                <a href="/carrinho"><img src={cart} alt="carrinho de compras" /></a>
                <a href="/conta"><img src={user} alt="login do usuario" /></a>
              </div>
            </div>

            <span id="menu-toggle"></span>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Header
