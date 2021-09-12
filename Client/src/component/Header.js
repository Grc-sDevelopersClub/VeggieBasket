import styled from "styled-components";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <NavBar>
      <Logo src={logo} alt="Logo" />
      <Nav>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/admin">Admin</a>
        <Button>Login/Register</Button>
      </Nav>
    </NavBar>
  );
};

const NavBar = styled.header`
  position: fixed;
  top: 0; /* Stick it to the top */
  max-height: 70px;
  width: 100vw;
  padding: 10px;
  display: grid;
  grid-template-areas: "logo nav";

`;

const Logo = styled.img`
  grid-area: logo;
  height: 70px;
`;

const Nav = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;

  a {
      color:#2f2f2f;
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
    color: #2f2f2f;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: 70ms;
  }
  button:active {
    transform: translateY(3px);
  }
`;

const Button = styled.button``;
export default Header;
