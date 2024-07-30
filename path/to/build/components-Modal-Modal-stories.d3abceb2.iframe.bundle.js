"use strict";(self.webpackChunkft_bot_components=self.webpackChunkft_bot_components||[]).push([[607],{"./src/components/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primário:()=>Primário,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/react-modal/lib/index.js"),lib_default=__webpack_require__.n(lib);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function newModal(param){var isOpen=param.isOpen,OnRequestClose=param.OnRequestClose,children=param.children,_useState=_sliced_to_array((0,react.useState)(""),2),_useState1=(_useState[0],_useState[1],_sliced_to_array((0,react.useState)(""),2)),_useState2=(_useState1[0],_useState1[1],_sliced_to_array((0,react.useState)(Number),2)),_useState3=(_useState2[0],_useState2[1],_sliced_to_array((0,react.useState)(""),2));_useState3[0],_useState3[1];return react.createElement(react.Fragment,null,react.createElement(lib_default(),{isOpen,onRequestClose:OnRequestClose,className:"modal-content",overlayClassName:"react-modal"},react.createElement("button",{type:"button",onClick:OnRequestClose},react.createElement("img",{src:"close.svg",alt:"fechar modal"})),children))}const Modal=newModal;newModal.__docgenInfo={description:"",methods:[],displayName:"newModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},OnRequestClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Modal_stories={title:"Components/Modal",component:Modal,tags:["autodocs"]};var Primário={args:{isOpen:!0,children:"Modal"},render:function(args){return react.createElement(react.Fragment,null,react.createElement(Modal,{isOpen:!0,OnRequestClose:function(){},onOpen:function(){return!0}},args.children),react.createElement("button",{onClick:function(){return!0}},"Open Modal"))}};Primário.parameters={...Primário.parameters,docs:{...Primário.parameters?.docs,source:{originalSource:'{\n  args: {\n    isOpen: true,\n    children: "Modal"\n  },\n  render: args => <>\r\n      <Modal isOpen={true} OnRequestClose={() => {}} onOpen={() => true}>\r\n        {args.children}\r\n      </Modal>\r\n      <button onClick={() => true}>Open Modal</button>\r\n    </>\n}',...Primário.parameters?.docs?.source}}};const __namedExportsOrder=["Primário"]}}]);