import { createGlobalStyle } from "styled-components";

import SFProTextRegular from "./sf-pro-text-regular.woff";
import SFProTextBold from "./sf-pro-text-bold.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'SF Pro Text Regular';
        src: local('SF Pro Text Regular'),
        url(${SFProTextRegular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'SF Pro Text Bold';
        src: local('SF Pro Text Bold'),
        url(${SFProTextBold}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
`;
