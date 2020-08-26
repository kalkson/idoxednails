import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';
import { removeNail } from 'store/actions/nailActions';

const StyledNailDetailsWrapper = styled.article`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 200px;
  margin: 0 auto;
  animation: appear 100ms ease-in forwards;

  @media only screen and (max-width: 600px) {
    & {
      width: 80%;
    }
  }

  & a {
  }

  @keyframes appear {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  & > div {
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      outline: solid 2px ${({ theme }) => theme.fair};
      left: 10px;
      bottom: 10px;
      z-index: -5;
    }
  }

  & > * {
    margin: 40px 0px;
  }

  & > div {
    position: relative;
  }

  & i {
    position: absolute;
    left: -35px;
    top: -10px;
    color: ${({ theme }) => theme.pink};
  }

  & h1 {
    font-size: 3.5em;
    margin: 0;
    position: absolute;
    left: -25px;
    bottom: -20px;
    color: ${({ theme }) => theme.pink};
    text-shadow: 5px -4px 23px rgba(0, 0, 0, 1);

    &:before {
      content: '';
      height: 2px;
      background-color: ${({ theme }) => theme.pink};
      width: 60%;
      transform: rotate(175deg);
      position: absolute;
      top: 20%;
      left: 0;
      /* z-index: -3; */
    }

    &:after {
      content: '';
      height: 2px;
      background-color: ${({ theme }) => theme.fair};
      width: 60%;
      transform: rotate(175deg);
      position: absolute;
      bottom: 15%;
      left: 42%;
    }
  }

  @media only screen and (max-width: 600px) {
    & h1 {
      font-size: 2em;
      left: 0;
      bottom: -50px;
      width: 100%;
      text-align: center;
      margin: auto;

      &:before,
      &:after {
        display: none;
      }
    }
  }

  & p {
    text-align: justify;
    @media only screen and (max-width: 600px) {
      & {
        margin: 30px 0px;
      }
    }
  }

  & img {
    width: 100%;
    border: solid 2px ${({ theme }) => theme.dark};
  }
`;

class NailDetails extends React.Component {
  handleClick = () => {
    if (window.confirm('Are yo sure?')) {
      this.props.removeNail({
        id: this.props.match.params.id,
        fileName: this.props.nail.fileName,
      });
    }
  };

  render() {
    const { nail, auth } = this.props;

    if (nail) {
      return (
        <StyledNailDetailsWrapper>
          <div>
            <img src={nail.file} alt='nails' />
            <h1>{nail.name}</h1>
            {auth.uid && (
              <NavLink to='/' onClick={this.handleClick}>
                <i className='far fa-trash-alt fa-2x' title='remove'></i>
              </NavLink>
            )}
          </div>
          <p>{nail.description}</p>
          <time>Data wykonania: {nail.date}</time>
        </StyledNailDetailsWrapper>
      );
    } else {
      return <StyledNailDetailsWrapper>Loading</StyledNailDetailsWrapper>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const nails = state.firestore.data.nails;
  const nail = nails ? nails[id] : null;

  return {
    nail: nail,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeNail: (data) => dispatch(removeNail(data)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'nails' }])
)(NailDetails);
