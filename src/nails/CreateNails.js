import React from 'react';
import styled from 'styled-components';
import Button from 'layout/Button';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { createNails } from 'store/actions/nailActions';
import { Redirect } from 'react-router-dom';

const StyledCreateNailsWrapper = styled.section`
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

  & input,
  textarea {
    margin: 15px 0px;
    width: 250px;
    padding: 8px;
    color: ${({ theme }) => theme.dark};
    font-size: 1.2em;
    background-color: ${({ theme }) => theme.fair};
    outline: none;
    border: none;
    border-bottom: solid 1px black;
    font-family: inherit;
  }

  & button {
    margin: 40px 0px;
    width: 250px;
    padding: 8px;
  }
`;

class CreateNails extends React.Component {
  state = {
    name: '',
    file: '',
    description: '',
    date: '',
    fileName: '',
    created: false,
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    e.preventDefault();
    this.props.createNails(this.state);
    this.props.history.push('/');
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleFile = (e) => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.files[0].name,
    });
  };

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/' />;
    if (this.state.created === true) return <Redirect to='/' />;

    return (
      <StyledCreateNailsWrapper>
        <form onSubmit={this.handleSubmit}>
          <input
            id='name'
            onChange={this.handleChange}
            type='text'
            placeholder='Nazwa paznokci'
            required
          />
          <input
            id='file'
            onChange={this.handleFile}
            type='file'
            placeholder='Link do zdjęcia'
            required
          />
          <textarea
            id='description'
            onChange={this.handleChange}
            placeholder='Opis paznokci'
            required
          ></textarea>
          <input
            id='date'
            onChange={this.handleChange}
            type='date'
            placeholder='Data'
            required
          />
          <Button>Dodaj</Button>
        </form>
      </StyledCreateNailsWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNails: (nail) => dispatch(createNails(nail)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'nails' }])
)(CreateNails);
