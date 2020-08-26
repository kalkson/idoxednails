import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from 'store/actions/authActions';

const StyledLinksWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px 0px;
  margin: 0px 10px;
  z-index: 10;

  & > * {
    margin: 8px;
    height: fit-content;
    color: ${({ theme }) => theme.fair};
  }
`;

class Links extends React.Component {
  render() {
    if (this.props.auth.uid) {
      return (
        <StyledLinksWrapper>
          <NavLink to='/create' title='Create'>
            <i className='fas fa-plus-circle fa-2x'></i>
          </NavLink>
          <NavLink to='/' title='Log Out' onClick={this.props.signOut}>
            <i className='fas fa-sign-out-alt fa-2x'></i>
          </NavLink>
        </StyledLinksWrapper>
      );
    } else {
      return (
        <StyledLinksWrapper>
          <NavLink to='/signin' title='Log In'>
            <i className='fas fa-sign-in-alt fa-2x'></i>
          </NavLink>
        </StyledLinksWrapper>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Links);
