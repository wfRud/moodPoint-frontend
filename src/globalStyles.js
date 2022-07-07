import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }   

    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
    }
`;

export const Theme = {
  //===Sizes===
  xs_fontSize: "14px",
  s_fontSize: "16px",
  m_fontSize: "24px",
  l_fontSize: "32px",

  //===Colors===
  theme_black: "#191a1b",
  theme_white: "#ffffff",
  theme_green: "#2F9F41",
  theme_yellow: "#EB9A3F",
  theme_red: "#D72822",
  theme_blue: "#1693D9",
};
