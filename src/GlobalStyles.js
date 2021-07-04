import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
* {
    box-sizing: border-box;
}



:root{
--color-primary: rgba(48, 66, 105, 0.7);
--color-primary-background: #91BED4;
--color-primary-background-font: #304269;
--color-secondary: #FFFFFF;
--color-secondary-background: #F26101;
--color-active: whitesmoke;
--color-active-background: #F26101;
--color-navigation-hover: #91BED4;
--color-navigation-background: #D9E8F5;
--color-heade-background: #D9E8F5;
--color-anchor: #f4a460;
--color-anchor-active: #F26101;
}


body {
    margin: 0;
    font-family: 'Benne', serif;
    color: black;
    overflow-x: hidden;
}
`
