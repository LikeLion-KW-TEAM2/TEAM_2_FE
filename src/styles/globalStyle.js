import { createGlobalStyle } from 'styled-components';
import { FONT_H1, FONT_H2, FONT_H3, FONT_H4, FONT_MEDIUM } from './font';
import { FONT_BOLD } from './fontWeight';
import COLOR from './color';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, details, embed, 
  figure, figcaption, footer, header, hgroup, menu, 
  nav, output, ruby, section, summary, time, mark,
  audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    overflow-y: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    outline: none;
    border: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  input:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px #fff inset ; -webkit-text-fill-color: ${COLOR.grey6}; }
  input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active { transition: background-color 5000s ease-in-out 0s; }

  #root {
    width: 100%;
    max-width: 450px;
    min-height: 100vh;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    ${FONT_MEDIUM};
    font-optical-sizing: auto;
    font-style: normal;
  }

  h1 { ${FONT_H1}; ${FONT_BOLD}; }
  h2 { ${FONT_H2}; ${FONT_BOLD}; }
  h3 { ${FONT_H3}; ${FONT_BOLD}; }
  h4 { ${FONT_H4}; ${FONT_BOLD}; }

`;

export default GlobalStyle;
