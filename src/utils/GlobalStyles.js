import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { baseFontSize, fontFamily, weightScale } from "./typeScale";
import { neutrals } from "./colors";

export const GlobalStyles = createGlobalStyle`
${normalize()}

html{
    box-sizing: border-box;
}

*,*::before,*::after{
    box-sizing: inherit;
}

body{
    margin: 0;
    font-family: ${fontFamily};
    font-size: ${baseFontSize};
    font-weight: ${weightScale.medium};
    color: ${neutrals.almostBlack};
    background-color: ${neutrals.almostWhite};
}

img{
    display: inline-block;
    width: 100%;
}
`;
