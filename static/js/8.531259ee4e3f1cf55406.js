webpackJsonp([8],{"7Yg3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),o=a("c7z6"),r=a("ZPXN"),s=a("NYxO"),l={props:["info"],data:function(){return{imageUrl:"",formLabelWidth:"120px",form:{pid:0,catename:"",img:"",status:1}}},computed:n()({},Object(s.c)({cateList:"cate/cateList"})),methods:n()({},Object(s.b)({reqCateList:"cate/cateListActions"}),{changeImg:function(t){if(t.size>2097152)Object(o.c)("文件大小不能超过2M");else{var e=t.name.slice(t.name.lastIndexOf("."));[".jpg",".png",".gif",".jpeg"].some(function(t){return t==e})?(this.imageUrl=URL.createObjectURL(t.raw),this.form.img=t.raw):Object(o.c)("上传文件格式不正确")}},cancel:function(){this.info.show=!1,this.form={pid:0,catename:"",img:"",status:1},this.imageUrl=""},confirm:function(){var t=this;Object(r.b)(this.form).then(function(e){Object(o.b)(e.data.msg),t.reqCateList(),t.cancel()})},getDetail:function(t){var e=this;Object(r.w)({id:t}).then(function(a){e.form=a.data.list,e.form.id=t,e.imageUrl=e.$preImg+e.form.img})},update:function(){var t=this;Object(r.L)(this.form).then(function(e){Object(o.b)(e.data.msg),t.cancel(),t.reqCateList()})}}),mounted:function(){this.reqCateList()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.info.title,visible:t.info.show},on:{"update:visible":function(e){return t.$set(t.info,"show",e)}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"上级分类","label-width":t.formLabelWidth}},[a("el-select",{model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}},[a("el-option",{attrs:{label:"--请选择---",value:"",disabled:""}}),t._v(" "),a("el-option",{attrs:{label:"一级分类",value:0}}),t._v(" "),t._l(t.cateList,function(t){return a("el-option",{key:t.id,attrs:{label:t.catename,value:t.id}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"分类名称","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.form.catename,callback:function(e){t.$set(t.form,"catename",e)},expression:"form.catename"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"图片","label-width":t.formLabelWidth}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"#","show-file-list":!1,"on-change":t.changeImg}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-form-item",{attrs:{label:"状态","label-width":t.formLabelWidth}},[a("el-switch",{attrs:{"active-color":"skyblue","inactive-color":"#ff4949","active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isAdd?a("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修改")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(l,c,!1,function(t){a("dhdV")},"data-v-3f8f336a",null).exports,f={computed:n()({},Object(s.c)({tableData:"cate/cateList"})),methods:n()({},Object(s.b)({reqCateList:"cate/cateListActions"}),{edit:function(t){this.$emit("edit",t)},del:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.j)({id:t}).then(function(t){Object(o.b)(t.data.msg),e.reqCateList()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}),mounted:function(){this.reqCateList()}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.tableData,"row-key":"id",border:"","tree-props":{children:"children"}}},[a("el-table-column",{attrs:{prop:"id",label:"分类编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"catename",label:"分类名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"rolename",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.img?a("img",{attrs:{src:t.$preImg+e.row.img,alt:""}}):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("el-button",{attrs:{type:"primary"}},[t._v("启用")]):a("el-button",{attrs:{type:"danger"}},[t._v("禁止")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.del(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var m={data:function(){return{info:{show:!1,title:"",isAdd:!0}}},components:{vAdd:d,vList:a("VU/8")(f,u,!1,function(t){a("uPqq")},"data-v-1e1ed78e",null).exports},methods:{add:function(){this.info.show=!0,this.info.title="添加商品",this.info.isAdd=!0},edit:function(t){this.info.show=!0,this.info.title="编辑商品",this.info.isAdd=!1,this.$refs.add.getDetail(t)}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-button",{attrs:{type:"primary"},on:{click:this.add}},[this._v("添加")]),this._v(" "),e("v-add",{ref:"add",attrs:{info:this.info}}),this._v(" "),e("v-list",{on:{edit:this.edit}})],1)},staticRenderFns:[]};var h=a("VU/8")(m,b,!1,function(t){a("nzjQ")},"data-v-25cb0271",null);e.default=h.exports},dhdV:function(t,e){},nzjQ:function(t,e){},uPqq:function(t,e){}});
//# sourceMappingURL=8.531259ee4e3f1cf55406.js.map