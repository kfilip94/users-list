import Component from "./PermissionLabelComponent";

export const ROLES = {
  ACCOUNT_MANAGER: {
    style: {
      backgroundColor: "#FEDDE6",
      color: "#922B6C"
    }
  },
  ADMIN: {
    style: {
      backgroundColor: "#EFE2FE",
      color: "#574195"
    }
  },
  AGENT: {
    style: {
      backgroundColor: "#c8e7f9",
      color: "#2c5282"
    }
  },
  EXTERNAL_REVIEWER: {
    style: {
      backgroundColor: "#FEEBC8",
      color: "#91472C"
    }
  },
  DEFAULT: {
    style: {
      backgroundColor: "lightgray",
      color: "gray"
    }
  }
};

export default Component;
