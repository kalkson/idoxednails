import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from 'store/actions/authActions';
import Button from 'layout/Button';

const StyledSignInWrapper = styled.section`
  width: 100%;

  animation: appear 100ms ease-in forwards;

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

  & > form {
    display: flex;
    align-items: center;
    flex-direction: column;

    & > * {
      margin: 15px 0px;
    }
  }

  & input {
    width: 250px;
    padding: 8px;
    color: ${({ theme }) => theme.dark};
    font-size: 1.2em;
    background-color: ${({ theme }) => theme.fair};
    outline: none;
    border: none;
    border-bottom: solid 1px black;
  }

  & button {
    margin: 40px 0px;
    width: 250px;
    padding: 8px;
  }
`;

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) {
      return <Redirect to='/' />;
    }

    return (
      <StyledSignInWrapper>
        <form>
          <input
            onChange={this.handleChange}
            id='email'
            type='email'
            placeholder='email'
          />
          <input
            onChange={this.handleChange}
            id='password'
            type='password'
            placeholder='hasło'
          />
          <Button onClick={this.handleSubmit}>
            {/* <i class='fas fa-pulse fa-spinner'></i>  */}
            Zaloguj
          </Button>
          {authError ? <p>{authError}</p> : null}
        </form>
      </StyledSignInWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
