import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
:root {
  /* *** FONTS *** */  
  /* font size */
  --f-sm: 0.8125rem; // 13px
  --f-md: 0.9375rem; // 15px
  --f-lg: 1.5rem; // 24px
  --f-xl: 2.25rem; // 36px

  /* line height */
  --lh-sm: 0.9375rem; // 15px
  --lh-md: 1.125rem; // 18px
  --lh-lg: 1.375rem; // 22px
  --lh-xl: 1.5rem; // 24px
  --lh-xxl: 2.0625rem; // 33px

  --fw-medium: 500;
  --fw-bold: 700;

  --font-family: 'League Spartan', sans-serif;
  /* *** END OF FONTS *** */

  /* *** COLORS *** */ 
  --white: #FFFFFF;
  --white-1: #F8F8FB;
  --white-2: #DFE3FA;
  

  --gray: #888EB0;
  --gray-1: #494E6E;
  --gray-2: #252945;
  --gray-3: #1E2139;
  --gray-4: #373B53;

  --dark-1: #141625;
  --dark-2: #0C0E16; 
  --black: #000000;  

  --blue-gray: #7E88C3;

  --purple: #7C5DFA;
  --light-purple: #9277FF;

  --red: #EC5757;
  --light-red: #FF9797;

  --st-green: #33D69F;
  --st-dark-green: #1F2B3F;
  --st-orange: #FF8F00;
  --st-dark-orange: #2B2736;
  --st-grey: #DFE3FA;
  --st-dark-grey: #292C44;

  --theme-color: #858BB2;
  --transition-all: all 0.2s linear;
  --transition-all-cb: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
  /* *** END OF COLORS *** */

  /* Border Radius */
  --br-xs: 4px;
  --br-sm: 6px;
  --br-md: 8px;
  --br-lg: 20px;
  --br-xl: 24px;
  --br-full: 50%;

  --bs-full: 0px 0px 20px rgba(0,0,0, 0.1);

  --border: 2px solid var(--gray-2);
  --border-active: var(--purple);

  --max-width: 730px;
  --form-max-width: 617px;
}

*, *::before, *::after { box-sizing: border-box; }

* { margin: 0; }

html { 
  font-size: 100%; /*16px*/  
} 

html, body, #root { height: 100%; }

body {
  background-color: var(--dark-1);
  font-family:var(--font-family);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

ul { list-style: none; }

a { 
  text-decoration: none; 
  color: inherit 
}

input, button, textarea, select { font: inherit; }

// hide input:number arrow
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

// hide input:number arrow
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

button {
  cursor: pointer;
}

p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }

h1, h2, h3, h4, h5 {
  margin-top: 0;
  font-family: var(--font-family);
  line-height: 1.3;
}


#root { isolation: isolate; }

.max-container {
  width: 90%;
  max-width: var(--max-width);
  margin: 0 auto;
}

.grid-center {
  display: grid;
  place-content: center;
}

.flex-center {
  display:flex;
  align-items: center;
  justify-content: center;
}

.radius-box {
  background-color: var(--gray-3);
  border-radius: var(--br-md);
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
}
`;

export default GlobalStyles;
