import Component from "./PermissionLabelComponent";

export const ROLES = {
  ACCOUNT_MANAGER: {
    text: "Account manager",
    style: {
      backgroundColor: "#FEDDE6",
      color: "#922B6C"
    }
  },
  ADMIN: {
    text: "Admin",
    style: {
      backgroundColor: "#EFE2FE",
      color: "#574195"
    }
  },
  AGENT: {
    text: "Agent",
    style: {
      backgroundColor: "#c8e7f9",
      color: "#2c5282"
    }
  },
  EXTERNAL_REVIEWER: {
    text: "External reviewer",
    style: {
      backgroundColor: "#FEEBC8",
      color: "#91472C"
    }
  },
  DEFAULT: {
    text: "Defuault",
    style: {
      backgroundColor: "lightgray",
      color: "gray"
    }
  }
};

export default Component;
