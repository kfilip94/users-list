import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  border: 1px solid #e2e8f0;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(45, 55, 72, 0.08);
  border-radius: 4px;
  padding: 6px 6px;
  display: flex;
  align-items: center;
  color: #4a5568;
  font-family: ${({ theme }) => theme.fontFamilyBold};
  font-size: 14px;
  /* font-style: normal; */
  /* font-weight: 500; */
  /* line-height: 21px; */
  letter-spacing: 0em;
  text-align: left;
`;

export default Button;
