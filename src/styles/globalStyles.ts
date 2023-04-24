/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Syne:wght@600;700;800&display=swap');

  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-y: scroll;
    scroll-behavior: smooth;
    font-family: 'Syne', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: 1.15; 
    margin: 0; 
    padding: 0;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
    background: none
  }

  button,
  input { 
    overflow: visible;
  }

  button,
  select { 
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
`
