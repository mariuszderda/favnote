import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  width: 220px;
  height: 47px;
  background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'};
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
      background-color: hsl(0, 0%, 90%);
    `}
`;
export default Button;
