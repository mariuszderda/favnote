import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  width: 220px;
  height: 47px;
  background-color: #ffd82b;
  color: #000;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 100px;
      height: 30px;
      font-size: 10px;
      background-color: #e6e6e6;
    `}
`;
export default Button;
