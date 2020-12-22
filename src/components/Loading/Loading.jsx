import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  color: ${({ theme }) => theme.textColor.secondary};
  padding: 16px;
`;

const LoadingComponent = ({ loadingRef }) => {
  return <Loading ref={loadingRef}>loading more ...</Loading>;
};

export default LoadingComponent;
