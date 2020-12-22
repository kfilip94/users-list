import React from "react";
import styled from "styled-components";

const ROLE_STYLES = {
  ACCOUNT_MANAGER: {
    backgroundColor: "#FEDDE6",
    color: "#922B6C"
  },
  ADMIN: {
    backgroundColor: "#EFE2FE",
    color: "#574195"
  },
  AGENT: {
    backgroundColor: "#c8e7f9",
    color: "#2c5282"
  },
  EXTERNAL_REVIEWER: {
    backgroundColor: "#FEEBC8",
    color: "#91472C"
  },
  DEFAULT: {
    backgroundColor: "lightgray",
    color: "gray"
  }
};

const PermissionLabel = styled.div.attrs(({ backgroundColor, color }) => ({
  style: {
    backgroundColor,
    color
  }
}))`
  border-radius: 4px;
  padding: 3px 8px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 18px;
`;

const parseRoleText = (text) => {
  return text
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const PermissionLabelComponent = ({ role }) => {
  const style = ROLE_STYLES[role] || ROLE_STYLES.DEFAULT;
  return <PermissionLabel {...style}>{parseRoleText(role)}</PermissionLabel>;
};

export default PermissionLabelComponent;
