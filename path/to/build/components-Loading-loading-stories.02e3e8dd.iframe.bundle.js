"use strict";(self.webpackChunkft_bot_components=self.webpackChunkft_bot_components||[]).push([[391],{"./src/components/Loading/loading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SkeletonLoading:()=>SkeletonLoading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>loading_stories});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Skeleton=__webpack_require__("./node_modules/@mui/material/Skeleton/Skeleton.js");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  margin: 1rem auto;\n  padding: 0.5rem auto;\n"]);return _templateObject=function _templateObject(){return data},data}var RowContainer=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div(_templateObject()),Row=function(param){var children=param.children;return react.createElement(RowContainer,null,children)};const Row_Row=Row;function SkeletonLogin(param){param.loading;return react.createElement(Box.A,{sx:{width:"100%"}},react.createElement(Skeleton.A,{animation:"wave",width:"100%",height:40,sx:{fontSize:"7rem",margin:"auto",display:"flex"}}),react.createElement(Skeleton.A,{variant:"rounded",width:"100%",height:200}),react.createElement(Row_Row,null),react.createElement(Skeleton.A,{animation:"wave",width:"100%",height:40,sx:{fontSize:"7rem",margin:"auto",display:"flex"}}),react.createElement(Skeleton.A,{animation:"wave",width:"100%",height:40,sx:{fontSize:"7rem",margin:"auto",display:"flex"}}),react.createElement(Skeleton.A,{variant:"rounded",width:"100%",height:90}))}Row.__docgenInfo={description:"",methods:[],displayName:"Row"},SkeletonLogin.__docgenInfo={description:"",methods:[],displayName:"SkeletonLogin",props:{loading:{required:!0,tsType:{name:"boolean"},description:""}}};const loading_stories={title:"Components/Skeleton",component:SkeletonLogin};var SkeletonLoading={render:function(){return react.createElement(SkeletonLogin,{loading:!0})}};SkeletonLoading.parameters={...SkeletonLoading.parameters,docs:{...SkeletonLoading.parameters?.docs,source:{originalSource:"{\n  render: () => <Skeleton loading={true} />\n}",...SkeletonLoading.parameters?.docs?.source}}};const __namedExportsOrder=["SkeletonLoading"]}}]);