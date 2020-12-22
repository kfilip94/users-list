import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.backgroundColor};
  border: ${({ theme }) => theme.borderLight};
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(45, 55, 72, 0.08);
  border-radius: 4px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textColor.button};
  font-family: ${({ theme }) => theme.fontFamilyBold};
  font-size: ${({ theme }) => theme.fontSize.regular};
  height: 32px;
  letter-spacing: 0em;
  text-align: left;

  & * {
    font-family: ${({ theme }) => theme.fontFamilyBold};
  }
`;

export default Button;
