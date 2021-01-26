import { createGlobalStyle } from "styled-components";
import Roboto from "./fonts/Roboto-Regular.ttf";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
  box-sizing:border-box;
  }

  @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${Roboto}) format('ttf');
       
        font-weight: 300;
        font-style: normal;
    }
  
  :root{
    --background-primary: #FFF4F2;
    --background-secondary: #FF9192;


  }

html {
  height:100%;
  font-family: "Roboto"

}
  

    
    
    body {
      padding:0;
      margin:0;
      height:100%;
      overflow:hidden;
      background: #70e1f5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ffd194, #70e1f5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ffd194, #70e1f5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      background-repeat:no-repeat;
      background-size:cover;
    }
    


`;

export default GlobalStyles;
