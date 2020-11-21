import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/magnifierIcon.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: 10px;
      background-image: url(${magnifierIcon});
      background-size: 20px;
      background-position: 10px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
