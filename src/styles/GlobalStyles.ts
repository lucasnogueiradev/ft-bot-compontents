import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  body, html, #root{
    height: 100vh;

  }
  
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
/* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote, q {
      quotes: none;
    }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


 

  button {
    cursor: pointer;
  }

  .react-modal{
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom:0;
  display: flex;
  align-items: center;
  justify-content: center;

}

.modal-content{

width: 100%;
max-width: 576px;
background: var(--background);
padding: 3rem;
position: relative;
border-radius: 0.25rem;

}
@media (max-width: 800px) {
   
   
 .modal-content{ 
    width: 90%;
    max-width: 356px;
    background: var(--background);
    padding: 1rem;
    position: fixed;
    border-radius: 0.25rem;
   left: 0;
   margin-left: 10px;
   align-items: center;
   justify-content: center;
   top: 7rem;

 }


}
`;
