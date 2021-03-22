webpackJsonp([9],{"1SgU":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Cz8s"),i=s("R5YR"),r={name:"pay",components:{Headers:e.a,Step:i.a},data:function(){return{title:"提交汇款信息",data:"",dataList:{},step:3,arr:["待支付","核实中","核实不通过","已支付"],remark:""}},methods:{queryOrder:function(){var t=this,a={data:{orderNo:this.$route.params.id},sessionId:this.$cookies.get("sessionId")};this.axios.post("/api/v1/order/queryOrder",a).then(function(a){"200000"==a.data.code&&(t.dataList=a.data.data,t.step=a.data.data.orderStatus+1,t.data=a.data.data.orderNo,3==a.data.data.orderStatus&&(t.remark=a.data.data.remark))},function(a){"缓存用户信息不存在"==a.response.data.message&&(t.$cookies.remove("sessionId"),t.$router.push({path:"/login"}))})},look_pay:function(){this.$router.push({path:"/remittanceInformation",query:{id:this.dataList.orderNo}})},copyCode:function(){this.$toast("复制成功")},copyCodeError:function(){this.$toast("复制失败")},records:function(){this.$router.push({path:"/SubmitInformation",query:{id:this.dataList.orderNo}})}},mounted:function(){this.queryOrder()}},o={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pay"},[s("headers",{attrs:{title:t.title}}),t._v(" "),s("div",{staticClass:"step_list"},[s("step",{attrs:{type:t.step,remark:t.remark},on:{records:t.records}})],1),t._v(" "),s("div",{staticClass:"pay_content"},[s("div",{staticClass:"choose_type box_content"},[s("div",{staticClass:"type_detail "},[s("div",{staticClass:"type_title"},[t._v("当前选择活动类型")]),t._v(" "),s("div",{staticClass:"pay_status"},[t._v(t._s(t.arr[t.dataList.orderStatus-1]))])]),t._v(" "),s("div",{staticClass:"type_detail"},[t._v(t._s(t.dataList.activityType))])]),t._v(" "),s("div",{staticClass:"bind_type box_content"},[s("div",{staticClass:"type_title"},[t._v("当前绑定机构")]),t._v(" "),s("div",{staticClass:"type_detail"},[t._v(t._s(t.dataList.orgaName))])]),t._v(" "),s("div",{staticClass:"copy_content box_content"},[s("div",{staticClass:"type_title"},[t._v("订单编号")]),t._v(" "),s("div",{ref:"copy",staticClass:"type_detail"},[s("div",[t._v(t._s(t.dataList.orderNo))]),t._v(" "),s("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.data,expression:"data",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copyCode,expression:"copyCode",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyCodeError,expression:"copyCodeError",arg:"error"}],staticClass:"paste"},[t._v("复制\n                ")])])])]),t._v(" "),s("div",{staticClass:"about_serve"},[s("div",{staticClass:"content"},[s("div",{staticClass:"ac_serve"},[s("h2",{staticClass:"ac_title title_icon_slider serve_content"},[t._v("包含服务")]),t._v(" "),t._l(t.dataList.services,function(a,e){return s("div",{key:e},[s("h4",{staticClass:"ac_title_s"},[t._v(t._s(a.typeName))]),t._v(" "),s("div",{staticClass:"content_detail"},[s("ul",{staticClass:"list_content"},t._l(a.childs,function(a,e){return s("li",{key:e},[t._v(t._s(a.serviceName))])}),0)])])})],2),t._v(" "),s("div",{staticClass:"all_price"},[t._m(0),t._v(" "),s("div",{staticClass:"price"},[s("span",[t._v("¥")]),t._v(t._s(t.dataList.amount))])]),t._v(" "),s("div",{staticClass:"pay_way"},[s("div",{staticClass:"ac_title title_icon_slider"},[t._v("订单信息")]),t._v(" "),s("ul",[s("li",[s("div",[t._v("下单时间")]),t._v(" "),s("div",{staticClass:"disable"},[t._v(t._s(t.dataList.createTime))])]),t._v(" "),t._m(1),t._v(" "),s("li",{staticClass:"no_slide"},[s("div",[t._v("提交凭证")]),t._v(" "),s("div",{staticClass:"disable"},[t._v(t._s(t.dataList.payTime))])])]),t._v(" "),s("div",{staticClass:"look_way",on:{click:t.look_pay}},[t._v("查看凭证"),s("van-icon",{staticClass:"look_pay_item",attrs:{name:"arrow",color:"#4086F7",size:"16"}})],1),t._v(" "),s("div",{staticClass:"bg"})])])]),t._v(" "),4==t.dataList.orderStatus?s("div",{staticClass:"wchart"},[s("div",{staticClass:"add_kf"},[t._v("添加专属活动运营微信进行活动落地实行")]),t._v(" "),s("div",{staticClass:"add_wx"},[t._m(2),t._v(" "),s("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.data,expression:"data",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copyCode,expression:"copyCode",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyCodeError,expression:"copyCodeError",arg:"error"}],staticClass:"paste"},[t._v("复制微信号\n                ")])])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"title_icon_slider allPrice"},[this._v("总费用"),a("span",[this._v("（元）")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("div",[this._v("支付方式")]),this._v(" "),a("div",{staticClass:"disable"},[this._v("对公转账")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("img",{attrs:{src:s("xSwD")}}),this._v("\n                Yougulangduting\n            ")])}]};var d=s("C7Lr")(r,o,!1,function(t){s("2rgj")},"data-v-3d9a641e",null);a.default=d.exports},"2rgj":function(t,a){},xSwD:function(t,a){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=9.13275ad1848e2002f81e.js.map