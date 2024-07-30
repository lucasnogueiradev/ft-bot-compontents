"use strict";(self.webpackChunkft_bot_components=self.webpackChunkft_bot_components||[]).push([[918],{"./src/components/Layout/Texts/texts.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Texto:()=>Texto,__namedExportsOrder:()=>__namedExportsOrder,default:()=>texts_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  font-family: ",";\n  font-weight: 600;\n  font-style: normal;\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  background: transparent;\n  width: 100%;\n  color: ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  font-family: ",";\n  font-weight: 400;\n  color: ",";\n  font-style: normal;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  color: blue;\n  padding: 0.5rem;\n  color: ",";\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 16px;\n  font-family: ",";\n  font-weight: 400;\n  font-style: normal;\n"]);return _templateObject2=function _templateObject(){return data},data}styled_components_browser_esm.Ay.h2(_templateObject(),(function(param){return"secondary"===param.font?"Poppins, sans-serif":"Roboto, sans-serif"}),(function(param){return"primary"===param.color?function(props){return props.theme.colors.font}:function(props){return props.theme.colors.secondary}})),styled_components_browser_esm.Ay.p(_templateObject1(),(function(param){return"secondary"===param.font?"Poppins, sans-serif":"Roboto, sans-serif"}),(function(param){return"primary"===param.color?function(props){return props.theme.colors.font}:function(props){return props.theme.colors.secondary}}));var LinkContainer=(0,styled_components_browser_esm.Ay)(dist.N_)(_templateObject2(),(function(props){return props.theme.colors.success}),(function(param){return"secondary"===param.font?"Poppins, sans-serif":"Roboto, sans-serif"}));function Link(param){var handlePasswordClick=param.handlePasswordClick,to=param.to,title=param.title,size=param.size;return react.createElement(LinkContainer,{onClick:handlePasswordClick,to,style:{fontSize:size}},title)}const Texts_Link=Link;Link.__docgenInfo={description:"",methods:[],displayName:"Link"};const texts_stories={title:"Components/Link",component:Texts_Link,tags:["autodocs"]};var Texto={render:function(args){return react.createElement(dist.Kd,null,react.createElement(Texts_Link,{to:args.to,title:args.title,font:args.font}),",")},args:{title:"Logar",to:"/cadastrar",font:"primary"}};Texto.parameters={...Texto.parameters,docs:{...Texto.parameters?.docs,source:{originalSource:'{\n  render: args => <BrowserRouter>\r\n      <Link to={args.to} title={args.title} font={args.font} />,\r\n    </BrowserRouter>,\n  args: {\n    title: "Logar",\n    to: "/cadastrar",\n    font: "primary"\n    // Add the \'to\' property with a value\n  }\n}',...Texto.parameters?.docs?.source}}};const __namedExportsOrder=["Texto"]}}]);