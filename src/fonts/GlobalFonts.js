import { createGlobalStyle } from "styled-components";

import SFProTextRegular from "./sf-pro-text-regular.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'SF Pro Text Regular';
        src: local('SF Pro Text Regular'),
        url(${SFProTextRegular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
