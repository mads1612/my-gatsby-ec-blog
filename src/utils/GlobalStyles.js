import { createGlobalStyle } from "styled-components"
import { setFont, colors } from "./styles"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Caveat|Merriweather:300,400,700');

*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}
body{
 font-size:100%;
 color: ${colors.neutralDark};
 background:${colors.white};
 ${setFont.main};

}
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    ${setFont.main}
}
h1{
 font-size:2em;
 line-height:1.2;
 margin-bottom:0.5em
}
h2{
 font-size:1.5em;
 margin-bottom:0.75em
}
h3{
 font-size:1.2em;
 line-height:1;
 margin-bottom:1em
}
h4{
 font-size:1.125em;
 line-height:1.2;
 margin-bottom:1.25em;
}
h5{
 font-size:1em;
 margin-bottom:1.5em;
}
h6{
 font-size:1em;
}
p{
 line-height:1.75;
 margin:0 0 1.5rem 0;
}
`

export { GlobalStyles }
