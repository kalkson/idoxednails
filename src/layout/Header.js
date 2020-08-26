import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from 'images/idoxed-nails-logo.png';

const StyledWrapperHeader = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin: 0px auto;
    padding: 0;
    overflow-x: hidden;
    position: relative;

    & a,
    img {
      width: 100%;
    }
  }
`;

const Header = () => (
  <StyledWrapperHeader>
    <Link to='/'>
      <img src={Logo} alt='idoxed nails' />
    </Link>
  </StyledWrapperHeader>
);

export default Header;
