import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  color: #718096;
  padding: 16px;
`;

const LoadingComponent = ({ loadingRef }) => {
  return <Loading ref={loadingRef}>Loading more ...</Loading>;
};

export default LoadingComponent;
