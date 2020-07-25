import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #a65168;
  color: #ffffff;
  border: none;
  font-size: 25px;
  width: 400px;
  border-radius: 50px;
  padding: 10px 15px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: lightgrey;
      font-size: 16px;
      width: 200px;
    `}
`;

export default Button;
