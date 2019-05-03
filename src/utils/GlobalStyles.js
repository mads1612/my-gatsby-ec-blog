import { createGlobalStyle } from "styled-components"
import { setFont, setColor } from "./styles"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Caveat|Merriweather:300,400,700');

*{
 margin:0;
 padding:0;
 box-sizing:border-box;
 text-decoration: none;
}
body{
 font-size:113%;
 line-height:1.75;
 color: ${setColor.neutralDarker};
 background:${setColor.white};
 ${setFont.main};
}
a {
    text-decoration: none;
    color: ${setColor.primaryDark}
}
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    ${setFont.main}
    text-decoration: none;
    ${setColor.neutralDarkest}
}
h1{
 font-size:2rem;
 line-height:1.2;
 margin-bottom:0.5rem
}
h2{
 font-size:1.5rem;
 margin-bottom:0.75rem
}
h3{
 font-size:1.2rem;
 line-height:1;
 margin-bottom:1rem
}
h4{
 font-size:1.125rem;
 line-height:1.2;
 margin-bottom:1.25rem;
}
h5{
 font-size:1rem;
 margin-bottom:1.5rem;
}
h6{
 font-size:1rem;
}
p, div {
 ${setFont.main}
 font-size: 1rem;
 line-height:1.75;
 margin:0 0 1.5rem 0;
}
ul {
    padding: 1rem 0 0 2rem;
}
`

export { GlobalStyles }
