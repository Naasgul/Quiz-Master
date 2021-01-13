import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
  box-sizing:border-box;
  }
  
  :root{
    --background-primary: #FFF4F2;
    --background-secondary: #FF9192;


  }

html {
  height:100%;
}
  

    
    
    body {
      padding:0;
      margin:0;
      height:100%;
      overflow:hidden;
      background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  background-repeat:no-repeat;
  background-size:cover;
    }
    


`;

export default GlobalStyles;
