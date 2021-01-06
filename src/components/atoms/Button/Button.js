import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  width: 220px;
  height: 47px;
  background-color: ${({ theme, color }) => color || theme.primary};
  color: #000;
  font-family: Montserrat, sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.6rem;
  border: none;
  border-radius: 50px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 100px;
      height: 30px;
      font-size: 1rem;
      background-color: ${({ theme }) => theme.grey200};
    `}
`;
export default Button;
