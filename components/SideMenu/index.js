import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import "./sidemenu.css";

const SideBar = styled.nav`

width: 200px;
height: 100%;
left:0;
position: absolute;
margin-top: 40px;
background-color: rgb(183, 247, 181);
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    `


const SideMenu = (burgerMenuOpen) => {
    
    const initialRender = useRef(true);

    const [showSideBar, setShowSideBar]= useState(false)


    const toggleSideBar = (sideBarState) => {
        setShowSideBar(!sideBarState)
    }

    useEffect(() => {
        if (initialRender.current) {
          initialRender.current = false;
        } else {
          toggleSideBar(showSideBar);
        }
      }, [burgerMenuOpen]);


    

  return (
      <SideBar className={showSideBar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                  hello
              </Link>
            </li>
            <li>
                <Link to="#">
                    recipe list
                </Link>
            </li>
            <li>
                <Link to="#">
                    contact
                </Link>
            </li>
      
          </ul>
        </SideBar>

   

  );
}



export default SideMenu;