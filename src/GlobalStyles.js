import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*box {
    box-sizing: border-box;
}
body {
    margin: 0;
    /* padding: 10px; */
    font-family: 'Roboto', sans-serif;
    
    color: black;
    overflow-x: hidden;
}
`
