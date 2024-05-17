import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

    * {
      font-size: 16px;
    }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
