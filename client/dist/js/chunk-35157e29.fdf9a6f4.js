(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35157e29"],{"196b":function(t,e,i){},2246:function(t,e,i){},"88a95":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notice-setting"},[i("el-row",{staticClass:"dashboard",attrs:{gutter:10}},[i("el-col",{attrs:{xs:24,sm:12,md:12,lg:4,xl:4}},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{style:t.styles.dataItem,on:{click:function(e){t.MailDialogFormVisible=!0}}},[i("i",{staticClass:"iconfont icon-mail",style:t.styles.dataItemImg}),i("div",{style:t.styles.dataItemUnit},[i("div",{style:t.styles.unitAmount},[t._v("邮件")]),i("div",{style:t.styles.unitFooter},[t._v("状态："),i("span",{style:t.smtp_server.enabled?"color:#52c41a":"color:#f5222d"},[t._v(t._s(t.smtp_server.enabled?"开启":"关闭"))])])])])])],1),i("el-col",{attrs:{xs:24,sm:12,md:12,lg:4,xl:4}},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{style:t.styles.dataItem,on:{click:function(e){t.DingDialogFormVisible=!0}}},[i("i",{staticClass:"iconfont icon-dingtalk",style:t.styles.dataItemImg}),i("div",{style:t.styles.dataItemUnit},[i("div",{style:t.styles.unitAmount},[t._v("钉钉")]),i("div",{style:t.styles.unitFooter},[t._v("状态："),i("span",{style:t.dingtalk.enabled?"color:#52c41a":"color:#f5222d"},[t._v(t._s(t.dingtalk.enabled?"开启":"关闭")+"\n                        ")])])])])])],1)],1),i("el-dialog",{attrs:{title:"SMTP Server",visible:t.MailDialogFormVisible,width:t.mobileClient?"80%":"50%"},on:{"update:visible":function(e){t.MailDialogFormVisible=e}},model:{value:t.MailDialogFormVisible,callback:function(e){t.MailDialogFormVisible=e},expression:"MailDialogFormVisible"}},[i("el-form",{attrs:{model:t.smtp_server}},[i("el-form-item",{attrs:{label:"服务器地址"}},[i("el-input",{attrs:{"auto-complete":"on"},model:{value:t.smtp_server.host,callback:function(e){t.$set(t.smtp_server,"host",e)},expression:"smtp_server.host"}})],1),i("el-form-item",{attrs:{label:"服务器端口"}},[i("el-input-number",{attrs:{size:"small","controls-position":"right",max:65535,min:1,step:1},model:{value:t.smtp_server.port,callback:function(e){t.$set(t.smtp_server,"port",e)},expression:"smtp_server.port"}})],1),i("el-form-item",{attrs:{label:"发件人"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.smtp_server.from,callback:function(e){t.$set(t.smtp_server,"from",e)},expression:"smtp_server.from"}})],1),i("el-form-item",{attrs:{label:"TLS加密"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.smtp_server.tls,callback:function(e){t.$set(t.smtp_server,"tls",e)},expression:"smtp_server.tls"}})],1),i("el-form-item",{attrs:{label:"用户名"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.smtp_server.username,callback:function(e){t.$set(t.smtp_server,"username",e)},expression:"smtp_server.username"}})],1),i("el-form-item",{attrs:{label:"密码"}},[i("el-input",{attrs:{"auto-complete":"off",type:"password"},model:{value:t.smtp_server.password,callback:function(e){t.$set(t.smtp_server,"password",e)},expression:"smtp_server.password"}})],1),i("el-form-item",{attrs:{label:"监控平台地址"}},[i("el-input",{attrs:{placeholder:t.origin},model:{value:t.smtp_server.domain,callback:function(e){t.$set(t.smtp_server,"domain",e)},expression:"smtp_server.domain"}})],1),i("el-form-item",{attrs:{label:"开启通知"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.smtp_server.enabled,callback:function(e){t.$set(t.smtp_server,"enabled",e)},expression:"smtp_server.enabled"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini",round:""},on:{click:function(e){t.MailDialogFormVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{size:"mini",type:"primary",round:""},on:{click:t.setSMTPServer}},[t._v("确 定")])],1)],1),i("el-dialog",{attrs:{title:"钉钉配置",visible:t.DingDialogFormVisible,width:t.mobileClient?"80%":"50%"},on:{"update:visible":function(e){t.DingDialogFormVisible=e}},model:{value:t.DingDialogFormVisible,callback:function(e){t.DingDialogFormVisible=e},expression:"DingDialogFormVisible"}},[i("el-form",{attrs:{model:t.dingtalk}},[i("el-form-item",{attrs:{label:"webhook"}},[i("el-input",{attrs:{placeholder:"https://oapi.dingtalk.com/robot/send?access_token="},model:{value:t.dingtalk.webhook,callback:function(e){t.$set(t.dingtalk,"webhook",e)},expression:"dingtalk.webhook"}})],1),i("el-form-item",{attrs:{label:"监控平台地址"}},[i("el-input",{attrs:{placeholder:t.origin},model:{value:t.dingtalk.domain,callback:function(e){t.$set(t.dingtalk,"domain",e)},expression:"dingtalk.domain"}})],1),i("el-form-item",{attrs:{label:"开启通知"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.dingtalk.enabled,callback:function(e){t.$set(t.dingtalk,"enabled",e)},expression:"dingtalk.enabled"}})],1),i("el-form-item",{attrs:{label:"测试"}},[i("el-button",{attrs:{size:"mini",round:""},on:{click:t.testDingTalk}},[t._v("发送一条测试消息")])],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini",round:""},on:{click:function(e){t.DingDialogFormVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{size:"mini",type:"primary",round:""},on:{click:t.setDingTalk}},[t._v("确 定")])],1)],1),t.smtp_server.enabled?i("div",[i("el-input",{staticClass:"input-new-mail",attrs:{size:"mini",placeholder:"邮箱格式：username@domain.com"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleInputNoticeConfirm(e):null}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.handleInputNoticeConfirm}},[t._v("添加")]),i("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"","tooltip-effect":"dark",data:t.mails}},[i("el-table-column",{attrs:{prop:"mail",label:"邮箱"}}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"danger",round:""},on:{click:function(i){t.handleDeleteNotice(e.row)}}},[t._v("删除\n                    ")])]}}])})],1)],1):t._e()],1)},a=[],l=(i("5a09"),i("3a0f"),i("a3a3"),i("4d0b"),{dataItem:{display:"flex",flexBasis:"50%",alignItems:"center"},dataItemImg:{color:"#1890ff",width:"30px",marginTop:"auto",marginBottom:"auto",fontSize:"50px",marginRight:"30px"},dataItemUnit:{height:"50px",display:"flex",flexBasis:"50%",flexDirection:"column",justifyContent:"space-between"},unitTitle:{color:"#666",fontSize:"12px"},unitAmount:{color:"#333",fontSize:"24px"},unitFooter:{color:"#999",fontSize:"12px"}}),o={data:function(){return{styles:l,origin:window.location.origin,inputValue:"",MailDialogFormVisible:!1,DingDialogFormVisible:!1,mails:[],formLabelWidth:"200",smtp_server:{},dingtalk:{}}},computed:{mobileClient:function(){return document.documentElement.clientWidth<document.documentElement.clientHeight}},methods:{handleInputNoticeConfirm:function(){var t=this;this.inputValue&&this.axios.post(this.api.settingNotice,{mail:this.inputValue}).then(function(e){t.$message.success(e.data.msg),t.mails=e.data.result}).catch(function(e){t.$message.error(e.toString())}),this.inputValue=""},handleDeleteNotice:function(t){var e=this;this.axios.delete(this.api.settingNotice,{params:{mail:t.mail}}).then(function(t){e.$message.success(t.data.msg),e.mails=t.data.result}).catch(function(t){e.$message.error(t.toString())})},fetchNoticeMails:function(){var t=this;this.axios.get(this.api.settingNotice).then(function(e){t.mails=e.data.result}).catch(function(e){t.$message.error(e.toString())})},getSMTPServer:function(){var t=this;this.axios.get(this.api.settingMail).then(function(e){e.data.result&&(t.smtp_server=e.data.result)}).catch(function(e){t.$message.error(e.toString())})},getDingTalk:function(){var t=this;this.axios.get(this.api.settingDingTalk).then(function(e){e.data.result&&(t.dingtalk=e.data.result)}).catch(function(e){t.$message.error(e.toString())})},setDingTalk:function(){var t=this;this.axios.post(this.api.settingDingTalk,this.dingtalk).then(function(e){t.$message.success(e.data.msg),t.DingDialogFormVisible=!1}).catch(function(e){t.$message.error(e.toString())})},testDingTalk:function(){var t=this;this.dingtalk.test=!0,this.axios.post(this.api.settingDingTalk,this.dingtalk).then(function(e){201===e.data.status?t.$message.success(e.data.msg):t.$message.error(e.data.msg),t.dingtalk.test=!1}).catch(function(e){t.$message.error(e.toString()),t.dingtalk.test=!1})},setSMTPServer:function(){var t=this;this.axios.post(this.api.settingMail,this.smtp_server).then(function(e){t.$message.success(e.data.msg),t.MailDialogFormVisible=!1}).catch(function(e){t.$message.error(e.toString())})}},mounted:function(){this.getDingTalk(),this.getSMTPServer(),this.fetchNoticeMails()}},n=o,r=(i("f2ae"),i("c5f8"),i("048f")),c=Object(r["a"])(n,s,a,!1,null,"c27fa096",null);c.options.__file="Notice.vue";e["default"]=c.exports},c5f8:function(t,e,i){"use strict";var s=i("2246"),a=i.n(s);a.a},f2ae:function(t,e,i){"use strict";var s=i("196b"),a=i.n(s);a.a}}]);