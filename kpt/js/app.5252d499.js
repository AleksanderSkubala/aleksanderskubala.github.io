(function(t){function i(i){for(var a,o,l=i[0],d=i[1],c=i[2],u=0,p=[];u<l.length;u++)o=l[u],s[o]&&p.push(s[o][0]),s[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);r&&r(i);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,i=0;i<n.length;i++){for(var e=n[i],a=!0,l=1;l<e.length;l++){var d=e[l];0!==s[d]&&(a=!1)}a&&(n.splice(i--,1),t=o(o.s=e[0]))}return t}var a={},s={app:0},n=[];function o(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)o.d(e,a,function(i){return t[i]}.bind(null,a));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/kpt/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=i,l=l.slice();for(var c=0;c<l.length;c++)i(l[c]);var r=d;n.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"0c65":function(t,i,e){"use strict";var a=e("b78c"),s=e.n(a);s.a},"1b0c":function(t,i,e){"use strict";var a=e("eea1"),s=e.n(a);s.a},"226c":function(t,i,e){},2856:function(t,i,e){},"3c5a":function(t,i,e){"use strict";var a=e("ba78"),s=e.n(a);s.a},"46df":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("transition",{attrs:{name:"fade"}},[0===t.step?e("div",{staticClass:"ui container"},[e("AppHeader",{on:{newK:t.newK}}),e("main",{staticClass:"ui main text container"},[e("List")],1)],1):t._e()]),e("transition",{attrs:{name:"slider"}},[1===t.step?e("FormView",{on:{back:t.back}}):t._e()],1)],1)},n=[],o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("header",{staticClass:"ui header"},[e("nav",{staticClass:"ui fixed menu"},[e("div",{staticClass:"ui header item"},[t._v("Generator Konspektów")]),e("div",{staticClass:"ui right floated header item"},[e("div",{staticClass:"ui animated positive button",on:{click:function(i){t.$emit("newK")}}},[e("div",{staticClass:"visible content"},[t._v("Nowy")]),t._m(0)])])])])},l=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"hidden content"},[e("i",{staticClass:"plus icon"})])}],d={name:"Modal",methods:{}},c=d,r=(e("a17d"),e("2877")),u=Object(r["a"])(c,o,l,!1,null,"a471f194",null);u.options.__file="AppHeader.vue";var p=u.exports,m=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ul",{staticClass:"ui divided list selection"},[e("ListItem",{attrs:{img:"1",title:"Lena",description:"JavaScript dev",date:"2016-10-16"}}),e("ListItem",{attrs:{img:"2",title:"Rick",description:"Seo",date:"2016-10-16"}}),e("ListItem",{attrs:{img:"3",title:"Morty",description:"Front-End dev",date:"2016-10-16"}}),e("ListItem",{attrs:{img:"4",title:"Adelle",description:"Back-End dev",date:"2016-10-16"}}),e("ListItem",{attrs:{img:"5",title:"Charlie",description:"Designer",date:"2016-10-16"}})],1)},b=[],v=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"item"},[e("img",{staticClass:"ui mini avatar image",attrs:{src:t.url}}),e("div",{staticClass:"content"},[e("h4",{staticClass:"header"},[t._v(t._s(this.title))]),e("div",{staticClass:"description"},[t._v(t._s(this.description))])]),e("div",{staticClass:"content",staticStyle:{float:"right"}},[e("div",{staticClass:"description"},[t._v(t._s(this.date))])])])},h=[],f={name:"ListItem",props:{img:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!1},date:{type:String,required:!1}},data:function(){return{url:null}},mounted:function(){this.url="https://api.adorable.io/avatars/55/typeofweb".concat(this.img,".png")}},y=f,C=(e("3c5a"),Object(r["a"])(y,v,h,!1,null,"287055ee",null));C.options.__file="ListItem.vue";var g=C.exports,_={name:"List",components:{ListItem:g}},k=_,w=(e("6af4"),Object(r["a"])(k,m,b,!1,null,"78e473b0",null));w.options.__file="List.vue";var x=w.exports,S=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"ui container",attrs:{id:"container"}},[e("main",{staticClass:"ui main text container"},[e("FormMain",{on:{back:function(i){t.$emit("back")}}})],1)])},I=[],$=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("nav",{staticClass:"ui fixed menu"},[e("div",{staticClass:"ui header item"},[e("div",{staticClass:"ui button",attrs:{id:"btnBack"},on:{click:function(i){t.$emit("back")}}},[e("i",{staticClass:"arrow left icon"})]),e("div",{attrs:{id:"mainTxt"}},[t._v("\n            Tworzenie konspektu\n        ")])]),e("div",{staticClass:"ui right floated header item"},[e("div",{staticClass:"ui animated primary button",on:{click:function(i){t.$emit("newK")}}},[t._m(0)])])])},M=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"ui dropdown"},[e("div",{staticClass:"text"},[t._v("Zapisz")]),e("i",{staticClass:"dropdown icon"}),e("div",{staticClass:"menu"})])}],T={name:"FormHeader"},O=T,E=(e("0c65"),Object(r["a"])(O,$,M,!1,null,"eae1d1f8",null));E.options.__file="FormHeader.vue";var L=E.exports,z=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{attrs:{id:"konspekt"}},[e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"content"}},[e("h1",[t._v('Zbiórka "'+t._s(t.title.content)+'"')]),e("div",{attrs:{id:"details"}},[e("p",[e("b",[t._v("Odpowiedzialny: ")]),t._v(t._s(t.main.content))]),e("p",[e("b",[t._v("Kiedy: ")]),t._v(t._s(t.when.content))]),e("div",{attrs:{id:"people"}},[e("p",{attrs:{id:"main"}},[t._v("Prowadzący:")]),t._l(t.people.list,function(i){return e("ol",{key:i.name},[e("li",[t._v(t._s(t.indexList(i,1))+". "+t._s(i.name))])])})],2),e("div",{attrs:{id:"goals"}},[e("p",{attrs:{id:"main"}},[t._v("Cele:")]),t._l(t.goals.list,function(i){return e("ol",{key:i.name},[e("li",[t._v(t._s(t.indexList(i,2))+". "+t._s(i.name))])])})],2),e("div",{attrs:{id:"added"}},[e("p",{attrs:{id:"main"}},[t._v("Załączniki:")]),t._l(t.added.list,function(i){return e("ol",{key:i.name},[e("li",[t._v(t._s(t.indexList(i,3))+". "+t._s(i.name))])])})],2),e("p",{attrs:{id:"main"}},[t._v("Przebieg: ")]),e("table",{attrs:{id:"todo",border:"1"}},[t._m(0),e("tbody",t._l(t.todo.list,function(i){return e("tr",{key:i.name},[e("th",[t._v(t._s(t.todoIndex(i))+". ")]),e("th",[t._v(t._s(i.content))]),e("th",[t._v(t._s(i.time))]),e("th",[t._v(t._s(i.materials))])])}))])])])])]),e("nav",{staticClass:"ui fixed menu"},[e("div",{staticClass:"ui header item"},[e("div",{staticClass:"ui button",attrs:{id:"btnBack"},on:{click:function(i){t.$emit("back")}}},[e("i",{staticClass:"arrow left icon"})]),e("div",{attrs:{id:"mainTxt"}},[t._v("\r\n                Tworzenie konspektu\r\n            ")])]),e("div",{staticClass:"ui right floated header item"},[e("div",{staticClass:"ui animated primary button",attrs:{id:"dropBtn"},on:{click:function(i){t.newK()}}},[e("div",{staticClass:"visible content"},[t._v("Zapisz")]),t._m(1)])])]),e("table",{staticClass:"ui celled center aligned table",attrs:{id:"mainTable"}},[t._m(2),e("tbody",[e("tr",[e("td",[t._v("\r\n                    Nazwa zbiórki:\r\n                ")]),e("td",[!1===t.title.edit?e("div",[t._v("\r\n                        "+t._s(t.title.content)+"\r\n                        "),e("div",{staticClass:"ui right floated button editBtn",on:{click:function(i){t.edit(0)}}},[e("i",{staticClass:"ui edit outline icon editIcon"})])]):t._e(),t.title.edit?e("div",{staticClass:"ui action input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title.probably,expression:"title.probably"}],attrs:{placeholder:"Nazwa/Temat zbiórki",type:"text"},domProps:{value:t.title.probably},on:{input:function(i){i.target.composing||t.$set(t.title,"probably",i.target.value)}}}),e("div",{staticClass:"ui positive button",on:{click:function(i){t.check(0)}}},[e("i",{staticClass:"check icon",staticStyle:{margin:"0"}})]),e("div",{staticClass:"ui negative button",on:{click:function(i){t.cancel(0)}}},[e("i",{staticClass:"plus icon cancelIcon"})])]):t._e()])]),e("tr",[e("td",[t._v("\r\n                    Odpowiedzialny/a:\r\n                ")]),e("td",[!1===t.main.edit?e("div",[t._v("\r\n                        "+t._s(t.main.content)+"\r\n                        "),e("div",{staticClass:"ui right floated button editBtn",on:{click:function(i){t.edit(1)}}},[e("i",{staticClass:"ui edit outline icon editIcon"})])]):t._e(),t.main.edit?e("div",{staticClass:"ui action input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.main.probably,expression:"main.probably"}],attrs:{placeholder:"Odpowiedzialny",type:"text"},domProps:{value:t.main.probably},on:{input:function(i){i.target.composing||t.$set(t.main,"probably",i.target.value)}}}),e("div",{staticClass:"ui positive button",on:{click:function(i){t.check(1)}}},[e("i",{staticClass:"check icon",staticStyle:{margin:"0"}})]),e("div",{staticClass:"ui negative button",on:{click:function(i){t.cancel(1)}}},[e("i",{staticClass:"plus icon cancelIcon"})])]):t._e()])]),e("tr",[e("td",[t._v("\r\n                    Termin:\r\n                ")]),e("td",[!1===t.when.edit?e("div",[t._v("\r\n                        "+t._s(t.when.content)+"\r\n                        "),e("div",{staticClass:"ui right floated button editBtn",on:{click:function(i){t.edit(2)}}},[e("i",{staticClass:"ui edit outline icon editIcon"})])]):t._e(),t.when.edit?e("div",{staticClass:"ui action input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.when.probably,expression:"when.probably"}],attrs:{type:"date"},domProps:{value:t.when.probably},on:{input:function(i){i.target.composing||t.$set(t.when,"probably",i.target.value)}}}),e("div",{staticClass:"ui positive button",on:{click:function(i){t.check(2)}}},[e("i",{staticClass:"check icon",staticStyle:{margin:"0"}})]),e("div",{staticClass:"ui negative button",on:{click:function(i){t.cancel(2)}}},[e("i",{staticClass:"plus icon cancelIcon"})])]):t._e()])]),e("tr",{staticStyle:{background:"none"}},[e("td",{attrs:{colspan:"2"}},[e("table",{staticClass:"ui striped table"},[t._m(3),e("tbody",[e("tr",[e("td",{staticStyle:{width:"50%"}},[e("ul",{staticClass:"ui divided list segments",staticStyle:{margin:"0"}},[t._m(4),t._l(t.people.list,function(i){return e("li",{key:i.name,staticClass:"ui segment",staticStyle:{padding:"10px"}},[!1===i.edit?e("div",[e("div",{staticClass:"itemName"},[t._v(t._s(i.name))]),e("div",{staticClass:"ui right floated button editBtn",staticStyle:{"padding-top":"0"},on:{click:function(e){t.deleteList(0,i)}}},[e("i",{staticClass:"ui cancel outline icon editIcon"})]),e("div",{staticClass:"ui right floated button editBtn",staticStyle:{"padding-top":"0"},on:{click:function(e){t.editList(0,i)}}},[e("i",{staticClass:"ui edit outline icon editIcon"})])]):t._e(),i.edit?e("div",{staticClass:"ui action add input",staticStyle:{"margin-top":"5px"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:i.editContent,expression:"item.editContent"}],attrs:{type:"text"},domProps:{value:i.editContent},on:{input:function(e){e.target.composing||t.$set(i,"editContent",e.target.value)}}}),e("div",{staticClass:"ui positive button",on:{click:function(e){t.confirm(0,i)}}},[e("i",{staticClass:"check icon",staticStyle:{margin:"0"}})]),e("div",{staticClass:"ui negative button",on:{click:function(t){i.edit=!1}}},[e("i",{staticClass:"plus icon cancelIcon"})])]):t._e()])})],2)]),e("td",{staticStyle:{width:"50%"}},[e("div",{staticClass:"ui action add input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.people.probably,expression:"people.probably"}],attrs:{type:"text",placeholder:"Prowadzący"},domProps:{value:t.people.probably},on:{input:function(i){i.target.composing||t.$set(t.people,"probably",i.target.value)}}}),e("div",{staticClass:"ui yellow button",on:{click:function(i){t.add(0)}}},[e("i",{staticClass:"plus icon",staticStyle:{margin:"0"}})]),e("div",{staticClass:"ui negative button",on:{click:function(i){t.cancelList(0)}}},[e("i",{staticClass:"plus icon cancelIcon"})])])])])])])])]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("table",{staticClass:"ui striped table"},[t._m(5),e("tbody",[e("tr",[e("td",{staticStyle:{width:"50%"}},[e("ul",{staticClass:"ui divided list segments",staticStyle:{margin:"0"}},[t._m(6),t._l(t.goals.list,function(i){return e("li",{key:i.name,staticClass:"ui segment",staticStyle:{padding:"10px"}},[!1===i.edit?e("div",[e("div",{staticClass:"itemName"},[t._v(t._s(i.name))]),e("div",{staticClass:"ui right floated button editBtn",staticStyle:{"padding-top":"0"},on:{click:function(e){t.deleteList(1,i)}}},[e("i",{staticClass:"ui cancel outline icon editIcon"})]),e("div",{staticClass:"ui right floated button editBtn",staticStyle:{"padding-top":"0"},on:{click:function(e){t.editList(1,i)}}},[e("i",{staticClass:"ui edit outline icon editIcon"})])]):t._e(),i.edit?e("div",{staticClass:"ui action add input",staticStyle:{"margin-top":"5px"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:i.editContent,expression:"item.editContent"}],attrs:{type:"text"},domProps:{value:i.editContent},on:{input:function(e){e.target.composing||t.$set(i,"editContent",e.target.value)}}}),e("div",{staticClass:"ui positive button",on:{click:function(e){t.confirm(1,i)}}},[e("i",{staticClass:"check icon",staticStyle:{margin:"0"}})]),e("div",{staticClass:"ui negative button",on:{click:function(t){i.edit=!1}}},[e("i",{staticClass:"plus icon cancelIcon"})])]):t._e()])})],2)]),e("td",{staticStyle:{width:"50%"}},[e("div",{staticClass:"ui action add input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.goals.probably,expression:"goals.probably"}],attrs:{type:"text",placeholder:"Cele"},domProps:{value:t.goals.probably},on:{input:function(i){i.target.composing||t.$set(t.goals,"probably",i.target.value)}}}),e("div",{staticClass:"ui yellow button",on:{click:function(i){t.add(1)}}},[e("i",{staticClass:"plus icon",staticStyle:{margin:"0"}})]),e("div",{staticClass:"ui negative button",on:{click:function(i){t.cancelList(1)}}},[e("i",{staticClass:"plus icon cancelIcon"})])])])])])])])]),e("tr",{staticStyle:{background:"none"}},[e("td",{attrs:{colspan:"2"}},[e("table",{staticClass:"ui striped table",attrs:{id:"todoTable"}},[t._m(7),e("tbody",[t._l(t.todo.list,function(i){return e("tr",{key:i.name},[e("td",[t._v(t._s(t.todoIndex(i))+" .")]),e("td",[t._v(t._s(i.content))]),e("td",{staticClass:"time"},[t._v(t._s(i.time))]),e("td",[t._v(t._s(i.materials))]),e("td",[e("div",{attrs:{id:"operation"}},[e("div",{staticClass:"ui button",staticStyle:{padding:"0",background:"none"},on:{click:function(e){t.up(i)}}},[e("i",{staticClass:"angle up icon",staticStyle:{margin:"0","font-size":"20px"}})]),e("div",{staticClass:"ui button",staticStyle:{padding:"0",background:"none"},on:{click:function(e){t.down(i)}}},[e("i",{staticClass:"angle down icon",staticStyle:{margin:"0","font-size":"20px"}})]),e("div",{staticClass:"ui button",staticStyle:{padding:"0",background:"none"},on:{click:function(e){t.todoDelete(i)}}},[e("i",{staticClass:"delete icon",staticStyle:{margin:"0","font-size":"20px"}})]),e("div",{staticClass:"ui button",staticStyle:{padding:"0",background:"none"},on:{click:function(e){t.todoEdit(i)}}},[e("i",{staticClass:"ui edit outline icon editIcon",staticStyle:{margin:"0","font-size":"20px"}})])])])])}),e("tr",{attrs:{id:"todoRow"}},[e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"ui input processInput"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.probablyContent,expression:"todo.probablyContent"}],attrs:{type:"text",placeholder:"Treść"},domProps:{value:t.todo.probablyContent},on:{input:function(i){i.target.composing||t.$set(t.todo,"probablyContent",i.target.value)}}})])]),e("td",[e("div",{staticClass:"ui input processInput"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.probablyTime,expression:"todo.probablyTime"}],attrs:{type:"text",placeholder:"Czas"},domProps:{value:t.todo.probablyTime},on:{input:function(i){i.target.composing||t.$set(t.todo,"probablyTime",i.target.value)}}})])]),e("td",[e("div",{staticClass:"ui input processInput"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.probablyMaterials,expression:"todo.probablyMaterials"}],attrs:{type:"text",placeholder:"Materiały"},domProps:{value:t.todo.probablyMaterials},on:{input:function(i){i.target.composing||t.$set(t.todo,"probablyMaterials",i.target.value)}}})])]),e("td",[e("div",{staticClass:"ui buttons",attrs:{id:"todoBtn"}},[e("button",{staticClass:"ui yellow button",attrs:{tabindex:"0"},on:{click:t.todoAdd}},[e("i",{staticClass:"ui plus icon",staticStyle:{margin:"0"}})]),e("button",{staticClass:"ui negative button",attrs:{tabindex:"0"},on:{click:t.todoCancel}},[e("i",{staticClass:"ui plus icon cancelIcon",staticStyle:{margin:"0"}})])])])])],2)]),e("div",{staticClass:"ui segment",attrs:{id:"todoDiv"}},[e("div",{attrs:{id:"todoInputs"}},[e("div",{staticClass:"ui input processInput2",staticStyle:{"max-width":"40% !important"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.probablyContent,expression:"todo.probablyContent"}],attrs:{type:"text",placeholder:"Treść"},domProps:{value:t.todo.probablyContent},on:{input:function(i){i.target.composing||t.$set(t.todo,"probablyContent",i.target.value)}}})]),e("div",{staticClass:"ui input processInput2",staticStyle:{"max-width":"20% !important"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.probablyTime,expression:"todo.probablyTime"}],attrs:{type:"text",placeholder:"Czas"},domProps:{value:t.todo.probablyTime},on:{input:function(i){i.target.composing||t.$set(t.todo,"probablyTime",i.target.value)}}})]),e("div",{staticClass:"ui input processInput2",staticStyle:{"max-width":"30% !important"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.probablyMaterials,expression:"todo.probablyMaterials"}],attrs:{type:"text",placeholder:"Materiały"},domProps:{value:t.todo.probablyMaterials},on:{input:function(i){i.target.composing||t.$set(t.todo,"probablyMaterials",i.target.value)}}})]),e("div",{staticClass:"ui buttons",attrs:{id:"todoBtn"}},[e("button",{staticClass:"ui yellow button",attrs:{tabindex:"0"},on:{click:t.todoAdd}},[e("i",{staticClass:"ui plus icon",staticStyle:{margin:"0"}})]),e("button",{staticClass:"ui negative button",attrs:{tabindex:"0"},on:{click:t.todoCancel}},[e("i",{staticClass:"ui plus icon cancelIcon",staticStyle:{margin:"0"}})])])])])])]),e("transition",{attrs:{name:"fade"}},[t.todo.edit.isEditing?e("div",{attrs:{id:"overlay"}},[e("div",{staticClass:"ui card",attrs:{id:"modal"}},[e("div",{attrs:{id:"todoInputs"}},[e("div",{staticClass:"ui input processInput2",staticStyle:{width:"40% !important"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.edit.editContent,expression:"todo.edit.editContent"}],attrs:{type:"text",placeholder:"Treść"},domProps:{value:t.todo.edit.editContent},on:{input:function(i){i.target.composing||t.$set(t.todo.edit,"editContent",i.target.value)}}})]),e("div",{staticClass:"ui input processInput2",staticStyle:{"max-width":"20% !important"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.edit.editTime,expression:"todo.edit.editTime"}],attrs:{type:"text",placeholder:"Czas"},domProps:{value:t.todo.edit.editTime},on:{input:function(i){i.target.composing||t.$set(t.todo.edit,"editTime",i.target.value)}}})]),e("div",{staticClass:"ui input processInput2",staticStyle:{width:"40% !important"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.edit.editMaterials,expression:"todo.edit.editMaterials"}],attrs:{type:"text",placeholder:"Materiały"},domProps:{value:t.todo.edit.editMaterials},on:{input:function(i){i.target.composing||t.$set(t.todo.edit,"editMaterials",i.target.value)}}})]),e("br"),e("div",{staticClass:"ui buttons",attrs:{id:"todoBtn"}},[e("button",{staticClass:"ui positive button",attrs:{tabindex:"0"},on:{click:t.todoEditConfirm}},[e("i",{staticClass:"ui check icon",staticStyle:{margin:"0"}})]),e("button",{staticClass:"ui negative button",attrs:{tabindex:"0"},on:{click:t.todoEditCancel}},[e("i",{staticClass:"ui plus icon cancelIcon",staticStyle:{margin:"0"}})])])])])]):t._e()]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("table",{staticClass:"ui striped table"},[t._m(8),e("tbody",[e("tr",[e("td",{staticStyle:{width:"50%"}},[e("ul",{staticClass:"ui divided list segments",staticStyle:{margin:"0"}},[t._m(9),t._l(t.added.list,function(i){return e("li",{key:i.name,staticClass:"ui segment",staticStyle:{padding:"10px"}},[!1===i.edit?e("div",[e("div",{staticClass:"itemName"},[t._v(t._s(i.name))]),e("div",{staticClass:"ui right floated button editBtn",staticStyle:{"padding-top":"0"},on:{click:function(e){t.deleteList(2,i)}}},[e("i",{staticClass:"ui cancel outline icon editIcon"})]),e("div",{staticClass:"ui right floated button editBtn",staticStyle:{"padding-top":"0"},on:{click:function(e){t.editList(2,i)}}},[e("i",{staticClass:"ui edit outline icon editIcon"})])]):t._e(),i.edit?e("div",{staticClass:"ui action add input",staticStyle:{"margin-top":"5px"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:i.editContent,expression:"item.editContent"}],attrs:{type:"text"},domProps:{value:i.editContent},on:{input:function(e){e.target.composing||t.$set(i,"editContent",e.target.value)}}}),e("div",{staticClass:"ui positive button",on:{click:function(e){t.confirm(2,i)}}},[e("i",{staticClass:"check icon",staticStyle:{margin:"0"}})]),e("div",{staticClass:"ui negative button",on:{click:function(t){i.edit=!1}}},[e("i",{staticClass:"plus icon cancelIcon"})])]):t._e()])})],2)]),e("td",{staticStyle:{width:"50%"}},[e("div",{staticClass:"ui action add input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.added.probably,expression:"added.probably"}],attrs:{type:"text",placeholder:"Materiały"},domProps:{value:t.added.probably},on:{input:function(i){i.target.composing||t.$set(t.added,"probably",i.target.value)}}}),e("div",{staticClass:"ui yellow button",on:{click:function(i){t.add(2)}}},[e("i",{staticClass:"plus icon",staticStyle:{margin:"0"}})]),e("div",{staticClass:"ui negative button",on:{click:function(i){t.cancelList(2)}}},[e("i",{staticClass:"plus icon cancelIcon"})])])])])])])])])],1)])])},P=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("thead",[e("tr",[e("th",[t._v("Lp.")]),e("th",[t._v("Treść")]),e("th",[t._v("Czas")]),e("th",[t._v("Materiały")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"hidden content"},[e("i",{staticClass:"download icon"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("thead",[e("tr",[e("th",{attrs:{colspan:"2"}},[t._v("\r\n                    Konspekt\r\n                ")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("thead",[e("tr",[e("th",{attrs:{colspan:"2"}},[t._v("Prowadzący:")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"ui segment",staticStyle:{padding:"10px"}},[e("em",[t._v("Prowadzący: ")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("thead",[e("tr",[e("th",{attrs:{colspan:"2"}},[t._v("Cele:")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"ui segment",staticStyle:{padding:"10px"}},[e("em",[t._v("Harcerz po zbiórce będzie umiał: ")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("thead",[e("tr",[e("th",{attrs:{colspan:"5"}},[t._v("Przebieg:")])]),e("tr",[e("th",[t._v("Lp.")]),e("th",[t._v("Treść")]),e("th",[t._v("Czas")]),e("th",[t._v("Materiały")]),e("th",[t._v("Edycja")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("thead",[e("tr",[e("th",{attrs:{colspan:"2"}},[t._v("Załączniki:")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"ui segment",staticStyle:{padding:"10px"}},[e("em",[t._v("Materiały dodatkowe: ")])])}],N=(e("7f7f"),{name:"FormMain",data:function(){return{today:"",title:{content:"",edit:!0,probably:""},main:{content:"",edit:!0,probably:""},when:{content:"",edit:!0,probably:""},people:{probably:"",list:[]},goals:{probably:"",list:[]},added:{probably:"",list:[]},todo:{edit:{isEditing:!1,editContent:"",editTime:"",editMaterials:"",index:""},probablyContent:"",probablyTime:"",probablyMaterials:"",list:[]},can:!1}},methods:{check:function(t){switch(t){case 0:this.title.probably&&(this.title.edit=!1,this.title.content=this.title.probably);break;case 1:this.main.probably&&(this.main.edit=!1,this.main.content=this.main.probably);break;case 2:this.when.probably&&(this.when.edit=!1,this.when.content=this.when.probably);break;default:break}},cancel:function(t){switch(t){case 0:this.title.probably&&(this.title.content?this.title.edit=!1:this.title.probably="");break;case 1:this.main.probably&&(this.main.content?this.main.edit=!1:this.main.probably="");break;case 2:this.when.probably&&(this.when.content?this.when.edit=!1:this.when.probably="");break;default:break}},edit:function(t){switch(t){case 0:this.title.edit=!0,this.title.probably=this.title.content;break;case 1:this.main.edit=!0,this.main.probably=this.main.content;break;case 2:this.when.edit=!0,this.when.probably=this.when.content;break;default:break}},add:function(t){switch(t){case 0:this.people.probably&&(this.people.list.push({name:this.people.probably,edit:!1,editContent:""}),this.people.probably="");break;case 1:this.goals.probably&&(this.goals.list.push({name:this.goals.probably,edit:!1,editContent:""}),this.goals.probably="");break;case 2:this.added.probably&&(this.added.list.push({name:this.added.probably,edit:!1,editContent:""}),this.added.probably="");break}},cancelList:function(t){switch(t){case 0:this.people.probably="";break;case 1:this.goals.probably="";break;case 2:this.added.probably="";break}},editList:function(t,i){var e;switch(t){case 0:e=this.people.list.indexOf(i),this.people.list[e].editContent=this.people.list[e].name,this.people.list[e].edit=!0;break;case 1:e=this.goals.list.indexOf(i),this.goals.list[e].editContent=this.goals.list[e].name,this.goals.list[e].edit=!0;break;case 2:e=this.added.list.indexOf(i),this.added.list[e].editContent=this.added.list[e].name,this.added.list[e].edit=!0;break}},confirm:function(t,i){var e;switch(t){case 0:e=this.people.list.indexOf(i),this.people.list[e].name=this.people.list[e].editContent,this.people.list[e].edit=!1;break;case 1:e=this.goals.list.indexOf(i),this.goals.list[e].name=this.goals.list[e].editContent,this.goals.list[e].edit=!1;break;case 2:e=this.added.list.indexOf(i),this.added.list[e].name=this.added.list[e].editContent,this.added.list[e].edit=!1;break;default:break}},deleteList:function(t,i){var e,a,s;switch(t){case 0:e=this.people.list.indexOf(i),a=this.people.list.slice(0,e),s=this.people.list.slice(e+1),this.people.list=[].concat(a,s);break;case 1:e=this.goals.list.indexOf(i),a=this.goals.list.slice(0,e),s=this.goals.list.slice(e+1),this.goals.list=[].concat(a,s);break;case 2:e=this.added.list.indexOf(i),a=this.added.list.slice(0,e),s=this.added.list.slice(e+1),this.added.list=[].concat(a,s);break;default:break}},up:function(t){var i,e,a,s,n,o=this.todo.list.indexOf(t);i=this.todo.list.slice(0,o-1),e=this.todo.list.slice(o-1,o),a=this.todo.list.slice(o,o+1),s=this.todo.list.slice(o+1,o+2),n=this.todo.list.slice(o+2),this.todo.list=o>0?[].concat(i,a,e,s,n):[].concat(a,e,s,n)},down:function(t){var i,e,a,s,n,o,l;i=this.todo.list.indexOf(t),e=this.todo.list.length-1,a=this.todo.list.slice(0,i-1),s=this.todo.list.slice(i-1,i),n=this.todo.list.slice(i,i+1),o=this.todo.list.slice(i+1,i+2),l=this.todo.list.slice(i+2),i===e||(this.todo.list=i>0?[].concat(a,s,o,n,l):[].concat(o,n,l))},todoAdd:function(){var t=this.todo.probablyContent,i=this.todo.probablyTime,e=this.todo.probablyMaterials;this.todo.list.length;e||(e="-"),t&&i&&(this.todo.list.push({content:t,time:i,materials:e}),this.todo.probablyContent="",this.todo.probablyTime="",this.todo.probablyMaterials="")},todoIndex:function(t){return this.todo.list.indexOf(t)+1},todoCancel:function(){this.todo.probablyContent="",this.todo.probablyTime="",this.todo.probablyMaterials=""},todoDelete:function(t){var i,e,a=this.todo.list.indexOf(t);i=this.todo.list.slice(0,a),e=this.todo.list.slice(a+1),this.todo.list=[].concat(i,e)},todoEdit:function(t){var i=this.todo.list.indexOf(t);this.todo.edit.isEditing=!0,this.todo.edit.index=i,this.todo.edit.editContent=this.todo.list[i].content,this.todo.edit.editTime=this.todo.list[i].time,this.todo.edit.editMaterials=this.todo.list[i].materials},todoEditConfirm:function(){var t=this.todo.edit.index;this.todo.edit.editContent&&this.todo.edit.editTime&&(this.todo.list[t].content=this.todo.edit.editContent,this.todo.list[t].time=this.todo.edit.editTime),this.todo.edit.editMaterials?this.todo.list[t].materials=this.todo.edit.editMaterials:this.todo.list[t].materials="-",this.todo.edit.isEditing=!1},todoEditCancel:function(){this.todo.edit.isEditing=!1},newK:function(){var t=!0,i=(document.querySelector("#konspekt"),"");this.when.content?i="konspekt("+this.when.content+")":(i="konspekt",t=!1),this.title||(t=!1),this.main||(t=!1),this.people.list||(t=!1),this.goals.list||(t=!1),this.added.list||(t=!1),this.todo.list||(t=!1),t?document.querySelector("#konspekt").style.offsetHeight<1123?downloadFILE("html2canvas",i):downloadFILE("addHTML",i):(this.can=!0,console.log("App cannot do pdf file"),alert("Masz za mało danych"))},indexList:function(t,i){switch(i){case 1:return this.people.list.indexOf(t)+1;case 2:return this.goals.list.indexOf(t)+1;case 3:return this.added.list.indexOf(t)+1}}},mounted:function(){this.today=(new Date).getDate()}}),j=N,B=(e("9f02"),Object(r["a"])(j,z,P,!1,null,"3ad9a3aa",null));B.options.__file="FormMain.vue";var F=B.exports,K={name:"FormView",components:{FormHeader:L,FormMain:F},data:function(){return{data:""}},methods:{newK:function(){this.data="Hei",alert(this.data)}}},H=K,A=(e("1b0c"),Object(r["a"])(H,S,I,!1,null,"ed52ad00",null));A.options.__file="FormView.vue";var q=A.exports,D={name:"app",components:{AppHeader:p,List:x,FormView:q},data:function(){return{step:0,loading:!1}},methods:{newK:function(){this.step=1},back:function(){this.step=0}}},Z=D,V=(e("5c0b"),Object(r["a"])(Z,s,n,!1,null,null,null));V.options.__file="App.vue";var J=V.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,i,e){"use strict";var a=e("2856"),s=e.n(a);s.a},"6af4":function(t,i,e){"use strict";var a=e("226c"),s=e.n(a);s.a},"9f02":function(t,i,e){"use strict";var a=e("aa75"),s=e.n(a);s.a},a17d:function(t,i,e){"use strict";var a=e("46df"),s=e.n(a);s.a},aa75:function(t,i,e){},b78c:function(t,i,e){},ba78:function(t,i,e){},eea1:function(t,i,e){}});
//# sourceMappingURL=app.5252d499.js.map