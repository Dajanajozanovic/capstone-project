import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('http://fonts.cdnfonts.com/css/hamburg');
*box {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 10px;
    font-family: 'Hamburg', sans-serif;
    background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);
    color: black;
}
`
