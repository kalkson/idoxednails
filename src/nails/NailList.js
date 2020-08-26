import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import NailElement from 'nails/NailElement';

const StyledNailListWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: baseline;
  border-right: groove 3px ${({ theme }) => theme.fair};
  border-left: groove 3px ${({ theme }) => theme.fair};
  margin-bottom: 80px;

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

  @media only screen and (max-width: 600px) {
    border: none;
  }
`;

class NailList extends React.Component {
  render() {
    const { nails } = this.props;

    return (
      <StyledNailListWrapper>
        {nails &&
          nails.length > 0 &&
          nails.map((nail) => {
            return <NailElement nail={nail} key={nail.id} />;
          })}

        {nails && nails.length === 0 && <>Nothing is here. Add something</>}
      </StyledNailListWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nails: state.firestore.ordered.nails,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'nails', orderBy: ['date', 'desc'] }])
)(NailList);
