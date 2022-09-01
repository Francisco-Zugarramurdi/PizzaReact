import { createGlobalStyle } from "styled-components"; 
export const GlobalStyles = createGlobalStyle`

:root {
  --orange: #f9be60;
  --dark-orange: #835100;
  --darkest-orange: #362100;
  --grey-background: whitesmoke;
}
* {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--darkest-orange);
}

a:visited {
  text-decoration: none;
}
`