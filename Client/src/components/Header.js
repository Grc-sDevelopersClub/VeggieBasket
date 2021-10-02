import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import breakpoint from "../Commons/breakpoints";

//Css Sections

const HeaderView = styled.header`
  z-index:99999;
  position: fixed;
  top: 0; /* Stick it to the top */
  max-height: 70px;
  width: 100vw;
  display: grid;
  grid-template-areas: "logo nav";
  /* Cosmetics */
  background-color: #84c225;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    grid-template-areas: "logo burger" "nav nav";
  }

  nav {
    display: grid;
    grid-area: nav;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-items: center;
    @media (max-width: 700px) {
      grid-template-rows: repeat(5, auto);
      grid-template-columns: none;
      grid-row-gap: 20px;

      padding: 30px 0 30px;
      background: #84c210;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    a {
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      transition: 0.5s;
      text-decoration: none;
    }
    a:hover {
      transform: scale(1.1);
    }
    button {
      padding: 10px;
      outline: none;
      border: none;
      font-size: 20px;
      color: #fff;
      font-weight: 600;
      background-color: rgba(255, 0, 0, 0.5);
      box-shadow: 0px 5px 0px 0px rgba(255, 0, 0, 0.25);
      border-radius: 10px;
      cursor: pointer;
      transition: 70ms;
    }
    button:active {
      transform: translateY(3px);
      box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);
    }
  }
`;

const Burger = styled.button`
  display: none;
  grid-area: burger;
  margin: 0 20px 0 0;
  padding: 0;
  justify-self: end;
  font-size: 40px;
  border: none;
  background: none;
  outline: none;
  transition: 0.1s;
  color: white;
  @media (max-width: 700px) {
    display: inline;
  }
  active {
    transform: scale(1.2);
  }
`;
const Cart = styled.div`
  position: relative;
  p {
    position: absolute;
    width: 1.2rem;
    height: 1.5rem;
    right: -1rem;
    top: -2.2rem;
    border-radius: 50%;
    background: #ec1c23;
    color: #fff;
    box-sizing: border-box;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main-color);
  }
`;

const Logo = styled.img`
  grid-area: logo;
  height: 70px;
`;

//Function and Logic
export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  return (
    <HeaderView>
      <Logo src={logo} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/offers">Offers</Link>
          <Cart>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <p>0</p>
            </Link>
          </Cart>
          <Link to="/login">
            <i className="fas fa-sign-in-alt"></i>
          </Link>
        </nav>
      </CSSTransition>
      <Burger onClick={toggleNav}>&#9776;</Burger>
    </HeaderView>
  );
}
