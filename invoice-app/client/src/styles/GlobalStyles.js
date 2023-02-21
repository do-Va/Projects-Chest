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
  --gray-4: #0C0E16;
  

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
  /* *** END OF COLORS *** */
 
  /* Border Radius */
  --br-xs: 4px;
  --br-sm: 6px;
  --br-md: 8px;
  --br-lg: 20px;
  --br-xl: 24px;
  --br-full: 50%;

  --max-width: 736px;
  --form-max-width: 617px;
}

*, *::before, *::after { box-sizing: border-box; }

* { margin: 0; }

html { 
  font-size: 100%; /*16px*/  
} 

html, body, #root { height: 100%; }

body {
  font-family:var(--font-family);
  font-weight: 400;
  line-height: 1.5;
  font-size: var(--font-size-base);
  -webkit-font-smoothing: antialiased;
  color: var(--dark-blue);
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

p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }

h1, h2, h3, h4, h5 {
  margin-top: 0;
  font-family: var(--ff-merriweather);
  line-height: 1.3;
}

#root, #__next { isolation: isolate; }

.max-container {
  width: 90%;
  max-width: var(--max-width);
  margin: 0 auto;
}
`;

export default GlobalStyles;
