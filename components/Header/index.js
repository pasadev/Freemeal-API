import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SideMenu from '../SideMenu';

import hamburger from '../../assets/hamburger_button.png';

import linkedin from '../../assets/linkedin_icon.png';



const Container = styled.div` 
  background-color: #eaeaea;
  top:-1px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  position:fixed;
  align-items: center;
  justify-content: space-between;
  color: $darkColor;
  height: px;
  width: 100vw;
  margin: 0;
  `

const Title = styled.span`
    border-width: 2px;
    border-color: black
    border-radius: 6,
    background-color: "#61dafb",
    color: #20232a,
    text-align: "center",
    font-size: 16,
    font-weight: "bold",
    `

    const Button = styled.a`
  background: transparent;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Icon = styled.img`
width: 30px;
height: 30px;
border-radius: 5px;
`


const Header = () => {

    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    

    const onBurgerClick= () => {
        console.log("click")
        setBurgerMenuOpen(!burgerMenuOpen)
        }

    return (


        <>
        <Container>
      

        <button type="button" onClick={onBurgerClick}>
            <Icon src={hamburger}></Icon>

        </button>

        <Title>
        Smood Meal API Explorer

        </Title>

        <Button type="button" onClick={() => window.open( 'https://www.linkedin.com/in/jukka-pasanen/')}>
            <Icon src={linkedin}></Icon>
        </Button>
  
        
      </Container>
    {burgerMenuOpen? <SideMenu burgerMenuOpen={burgerMenuOpen} /> : <SideMenu  />}
   
    </>

  
  
    );
  
};

/*

Header.propTypes = {
  toggleBurgerMenuFromNav: PropTypes.func.isRequired,
  isLogged: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  logOut: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isLogged: null,
};

*/

export default Header;




