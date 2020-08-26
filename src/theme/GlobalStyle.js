import { createGlobalStyle } from 'styled-components';
import background from 'images/bg.png';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    index, body {
        padding: 0;
        margin: 0;
        color: #D3D3D3;
    }

    body {
        background-color: #181818;
        background-image: url(${background});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-clip: content-box;
        background-position: center;
        background-size: cover;
        /* background-color: #181818; */
        min-height: 100vh;
    }

    body > * {
        width: 50vw;
        margin: 0 auto;
    }

    @media only screen and (max-width: 600px) {
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0px auto;
        padding: 0;
        overflow-x: hidden;
        position: relative;
      }

      body > * {
        width: 90vw;
        margin: 0 auto;
    }
    }

    
`;

export default GlobalStyle;
