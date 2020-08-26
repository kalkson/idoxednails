import styled from 'styled-components';

const Button = styled.button`
  padding: 8px;
  font-size: 1.3em;
  color: ${({ theme }) => theme.pink};
  background-color: transparent;
  border: solid 2px ${({ theme }) => theme.fair};
  cursor: pointer;
  outline: none;

  &::hover {
    background-color: none;
  }
`;

export default Button;
