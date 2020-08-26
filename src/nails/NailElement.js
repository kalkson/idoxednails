import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import test from 'https://em-nail.pl/eng_pl_Nails-with-class-3157_1.jpg';

const StyledNailElementWrapper = styled.div`
  width: 210px;
  height: 210px;
  margin: 20px 20px;
  position: relative;
  transition: ease-in-out 100ms;
  box-shadow: -1px -1px 92px 4px rgba(189, 157, 189, 0.26);
  border: solid 1px ${({ theme }) => theme.dark};

  & > .nailElementPhotoContainer {
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.file});
    background-position: center;
    background-size: cover;
  }

  & > span {
    position: absolute;
    bottom: 7px;
    left: 0;
    width: 100%;
    font-size: 1.7em;
    color: ${({ theme }) => theme.fair};
    text-align: center;
    font-weight: bold;
    padding: 10px 0px;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: ease-in 100ms;
    transform: translateY(10px);
    z-index: 10;
  }

  &:hover > span {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }

  @media only screen and (max-width: 600px) {
    width: 250px;
    height: 250px;

    & > span {
      /* position: relative; */
      margin: 0 auto;
      visibility: visible;
      opacity: 1;
      transform: translateY(35px);
      text-shadow: slategrey;
      color: ${({ theme }) => theme.pink};
      text-shadow: 5px -4px 23px rgba(0, 0, 0, 1);
    }

    & > .shadow {
      display: none;
    }
  }

  & > .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 12px -192px 32px -125px rgba(0, 0, 0, 0.75);
    top: 0;
    left: 0;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: ease-in 100ms;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-10px);
    & > .shadow {
      visibility: visible;
      opacity: 1;
    }
  }
`;

class NailElement extends React.Component {
  render() {
    const { name, id, file } = this.props.nail;

    return (
      <StyledNailElementWrapper file={file} to={`/naildetails/${id}`} as={Link}>
        <div
          className='nailElementPhotoContainer'
          style={{ backgroundImage: 'url(' + file + "'" }}
        ></div>
        <span>{name}</span>
        <div className='shadow'></div>
      </StyledNailElementWrapper>
    );
  }
}

export default NailElement;
