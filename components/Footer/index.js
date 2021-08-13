import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components'

const Copyright = styled.div` 
  background-color: #eaeaea;
  position: fixed;
  bottom: 0;
  width: 100vw;
  text-align: center;
  height: 1.5em;
  `

const Footer = () => (
   
    <Copyright>(c) Jukka 2021</Copyright>
);


export default Footer;