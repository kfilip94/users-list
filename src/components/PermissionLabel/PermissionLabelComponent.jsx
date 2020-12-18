import React from "react";
import styled from "styled-components";
import { ROLES } from "./PermissionLabel";

const PermissionLabel = styled.div.attrs(({ backgroundColor, color }) => ({
  style: {
    backgroundColor,
    color
  }
}))`
  border-radius: 4px;
  padding: 3px 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  background-color: #c8e7f9;
  color: #2c5282;
`;

const PermissionLabelComponent = ({ role }) => {
  const { text, style } = ROLES[role] || ROLES.DEFAULT;
  return <PermissionLabel {...style}>{text}</PermissionLabel>;
};

export default PermissionLabelComponent;
