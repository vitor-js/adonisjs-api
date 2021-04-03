import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}
body {
    -webkit-font-smoothing:antialiased;
}
body,input, button {
    font:14px Roboto, sans-serif;
}

.button-orange {
    background: #de5f3e !important;
    border:none;

    &:hover {
    background: #de5f3e;
    border:none;
    opacity:0.7;
    }


}

#root {
    max-width:1020px;
    margin:0 auto;
    padding:0 20 50;
    button: {
        cursor: pointer;
    }
}
`
