/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";
import cart from "../../img/cart.svg";
import user from "../../img/user.svg";
import logo from "../../img/gameszone.svg";
import { Link } from "react-router-dom";

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
                <Link class="item-menu" to="/">
                  Home
                </Link>
                <div class="dropdown">
                  <a class="dropbtn item-menu" href="/jogos">
                    Jogos
                  </a>
                  <div class="dropdown-content">
                    <a href="/ps-5">Playstation</a>
                    <a href="/ps-4">Xbox</a>
                    <a href="xbox-series-x">Switch</a>
                  </div>
                </div>
                <a class="item-menu" href="/consoles">
                  Consoles
                </a>
                <a class="item-menu" href="/sobre">
                  Sobre
                </a>
              </div>

              <div id="box-login-cart">
                <Link to="/carrinho">
                  <img src={cart} alt="carrinho de compras" />
                </Link>
                <a href="/conta">
                  <img src={user} alt="login do usuario" />
                </a>
              </div>
            </div>

            <span id="menu-toggle"></span>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
