(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1040:function(e,t,o){"use strict";o(938)},1128:function(e,t,o){"use strict";o.r(t);var i=o(804),c=o(774),a=o(776);const n={version:"0.1.0",componentsTree:[{componentName:"Page",props:{},children:[{componentName:"Block",props:{defaultLayout:[{flex:1,cols:[{flex:1}]}]},children:[{componentName:"Row",children:[{componentName:"Col",children:[{componentName:"Text",id:"527a4160-5cf9-11ee-9354-c10d0fd1f438",children:[],refId:25,props:{text:"默认文案"}}],props:{},id:"7b40ed05-5b83-11ee-95e2-7be9236eaf56",refId:4}],props:{},id:"7b40ed04-5b83-11ee-95e2-7be9236eaf56",refId:3}],id:"7b40ed03-5b83-11ee-95e2-7be9236eaf56",refId:2}],id:"7b40ed02-5b83-11ee-95e2-7be9236eaf56",refId:1}],startRefId:44};let r=class extends c.Vue{constructor(){super(...arguments),this.curPageSchema={},this.lowcodeEntryFilePath="${LOWCODE_ENTRY_FILE_PATH}",this.lowcodeEditorConfig={showLayoutTool:!0,disableLayoutResize:"preview"===this.mode,showEditorEnhanceTool:!0,isPageAutoHeight:!0,isSetterPinned:!0,showWidthSliderTool:!0,showHeader:!1,showCodeEditorIcon:!1,showOnBoarding:!1},this.pageData={title:"低代码标题示例"}}created(){this.curPageSchema=JSON.parse(JSON.stringify(this.pageSchema||n||{}))}render(){return a.pageContainerUtils.render(this.$createElement,this)}};Object(i.a)([Object(c.Prop)({default:()=>({Block:a.Block,Row:a.Row,Col:a.Col,Table:a.Table,ImageBox:a.ImageBox,Icon:a.Icon,RichText:a.RichText,Button:a.Button,Tabs:a.Tabs,Form:a.Form,FormItem:a.FormItem,Input:a.Input,Select:a.Select,TextArea:a.TextArea,Text:a.Text,Radio:a.Radio,InputNumber:a.InputNumber})})],r.prototype,"componentsMap",void 0),Object(i.a)([Object(c.Prop)({default:()=>({Button:a.ButtonEditor,Tabs:a.TabsEditor,Form:a.FormEditor,FormItem:a.FormItemEditor,Select:a.SelectEditor,Input:a.InputEditor,TextArea:a.TextAreaEditor,Text:a.TextEditor,Radio:a.RadioEditor,InputNumber:a.InputNumberEditor})})],r.prototype,"editorMap",void 0),Object(i.a)([Object(c.Prop)()],r.prototype,"pageSchema",void 0),Object(i.a)([Object(c.Prop)({default:()=>({Button:{title:"按钮",icon:"https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_button.png",group:"系统",category:"基础组件"},Text:{title:"纯文本",icon:"https://img.alicdn.com/imgextra/i3/O1CN01n5wpxc1bi862KuXFz_!!6000000003498-55-tps-50-50.svg",group:"系统",category:"文本"},ImageBox:{title:"图片",icon:"https://img.alicdn.com/imgextra/i3/O1CN01tnhXhk1GUIFhsXwzA_!!6000000000625-55-tps-56-56.svg",group:"系统",category:"图片"},Icon:{title:"图标",icon:"https://img.alicdn.com/imgextra/i1/O1CN01yR8vcY1M504YbHxzo_!!6000000001382-55-tps-56-56.svg",group:"系统",category:"图片"},RichText:{title:"富文本",icon:"https://img.alicdn.com/imgextra/i3/O1CN01n5wpxc1bi862KuXFz_!!6000000003498-55-tps-50-50.svg",group:"系统",category:"文本"},Table:{title:"table",icon:"https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_table.png",group:"系统",category:"表格"},Tabs:{title:"选项卡",icon:"https://img.alicdn.com/imgextra/i4/O1CN01mh9LPG268B90t8DaA_!!6000000007616-55-tps-56-56.svg",group:"系统",category:"容器",defaultSchema:()=>({componentName:"Tabs",props:{items:[{value:"标签项1",key:"1"},{value:"标签项2",key:"2"},{value:"标签项3",key:"3"}]},children:[{componentName:"Block",props:{defaultLayout:[{flex:1,cols:[{flex:1}]}]},children:[{componentName:"Row",children:[{componentName:"Col"}]}]}]})},Form:{title:"通用表单",icon:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/form-1.png",group:"系统",category:"表单"},FormItem:{title:"表单项",icon:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/form-item-1.jpg",group:"系统",category:"表单"},Input:{title:"输入框",icon:"https://img.alicdn.com/tfs/TB1ysp3u8v0gK0jSZKbXXbK2FXa-112-64.png",group:"系统",category:"表单"},InputNumber:{title:"数字输入框",icon:"https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_number-picker.png",group:"系统",category:"表单"},TextArea:{title:"textarea",icon:"https://img.alicdn.com/tfs/TB1ysp3u8v0gK0jSZKbXXbK2FXa-112-64.png",group:"系统",category:"表单"},Select:{title:"下拉框",icon:"https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_select.png",group:"系统",category:"表单"},Radio:{title:"单选框",icon:"https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_radio.png",group:"系统",category:"表单"}})})],r.prototype,"componentsConfig",void 0),Object(i.a)([Object(c.Prop)({default:"edit"})],r.prototype,"mode",void 0),r=Object(i.a)([Object(c.Component)({name:"appPage"})],r);var s=r;let p=class extends c.Vue{constructor(){super(...arguments),this.pageSchema=null,this.mode="edit"}onPreviewClick(){"edit"===this.mode?(this.mode="preview",this.pageSchema=a.pageContainerUtils.generatePageSchema({schema:this.$refs.lowcodePage.curPageSchema})):this.mode="edit"}};p=Object(i.a)([Object(c.Component)({components:{Page:s}})],p);var l=p,d=(o(1040),o(74)),m=Object(d.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("div",{staticClass:"header"},[t("div",[e._v("当前状态："+e._s("edit"===e.mode?"编辑态":"预览态"))]),e._v(" "),t("a-button",{staticClass:"actionBtn",attrs:{type:"primary"},on:{click:e.onPreviewClick}},[e._v(e._s("edit"===e.mode?"预览":"继续编辑"))])],1),e._v(" "),t("div",{staticClass:"app"},["edit"===e.mode?t("Page",{key:"edit",ref:"lowcodePage",attrs:{pageSchema:e.pageSchema}}):e._e(),e._v(" "),"edit"!==e.mode?t("Page",{key:"preview",attrs:{pageSchema:e.pageSchema,mode:"preview"}}):e._e()],1)])}),[],!1,null,"99f6f996",null);t.default=m.exports},938:function(e,t,o){}}]);