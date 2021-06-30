import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
* {
    box-sizing: border-box;
}



:root{
--color-primary: #304269;
--color-primary-background: #91BED4;
--color-secondary: #FFFFFF;
--color-secondary-background: ##F26101;
--color-active: whitesmoke;
--color-active-background: #F26101;
--color-navigation-hover: #91BED4;
--color-navigation-background: #D9E8F5;
--color-heade-background: #D9E8F5;
}


body {
    margin: 0;
    font-family: 'Benne', serif;
    color: black;
    overflow-x: hidden;
}
`
