(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{632:function(e,t,n){var content=n(637);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("5b2ab6af",content,!0,{sourceMap:!1})},636:function(e,t,n){"use strict";var r=n(632);n.n(r).a},637:function(e,t,n){(e.exports=n(61)(!1)).push([e.i,"body[data-v-3701065a]{background:#eff8ff;height:100vh;width:100vw;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Oxygen,Fira Sans,Droid Sans,Helvetica Neue;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin:0;padding:0}#shopping-list[data-v-3701065a]{background:#fff;padding:2rem;margin:1rem;border-radius:3px;box-shadow:0 4px 8px 0 rgba(0,0,0,.12),0 2px 4px 0 rgba(0,0,0,.08);width:95%;max-width:900px}h1[data-v-3701065a]{color:#3d4852}ul[data-v-3701065a]{list-style:none;padding:0}a[data-v-3701065a]{color:#6cb2eb;font-size:1.25rem;-webkit-transition:all .1s ease-in;transition:all .1s ease-in;margin-top:.5rem;display:block}a[data-v-3701065a]:hover{color:#3490dc}li[data-v-3701065a],p[data-v-3701065a]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;line-height:1.75;letter-spacing:.5px;color:#3d4852;font-size:1.25rem;cursor:pointer;-webkit-transition:all .1s ease-in;transition:all .1s ease-in}li[data-v-3701065a]:hover{color:#22292f}li input[data-v-3701065a]{margin:0 .5rem}#shopping-list>input[data-v-3701065a],#shopping-list>select[data-v-3701065a]{width:100%;border-radius:3px;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);border:1px solid #f1f5f8;color:#606f7b;padding:.5rem .75rem;box-sizing:border-box;font-size:1rem;letter-spacing:.5px;margin:.5rem 0}.add-item-form[data-v-3701065a],.header[data-v-3701065a]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.add-item-form input[data-v-3701065a]{width:70%;border-radius:3px;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);border:1px solid #f1f5f8;color:#606f7b;box-sizing:border-box;font-size:1rem;margin:.5rem 0}.add-item-form input[data-v-3701065a],.btn[data-v-3701065a]{padding:.5rem .75rem;letter-spacing:.5px}.btn[data-v-3701065a]{border:none;border-radius:3px;margin:auto 0;flex-shrink:0;cursor:pointer;font-size:.9rem;-webkit-transition:all .1s ease-in;transition:all .1s ease-in}.btn[disabled][data-v-3701065a]{background:#8795a1}.btn[disabled][data-v-3701065a]:hover{background:#606f7b}.btn-primary[data-v-3701065a]{background:#6cb2eb;color:#fff}.btn-primary[data-v-3701065a]:hover{background:#3490dc}.btn-cancel[data-v-3701065a]{background:#ef5753;color:#fff}.btn-cancel[data-v-3701065a]:hover{background:#e3342f;color:#fff}.strikeout[data-v-3701065a]{text-decoration:line-through;color:#b8c2cc}.strikeout[data-v-3701065a]:hover{color:#8795a1}.priority[data-v-3701065a]{color:#de751f}",""])},647:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{state:"default",header:"shopping list app",newItem:"",items:[{label:"10 party hats",purchased:!1,highPriority:!1},{label:"2 board games",purchased:!0,highPriority:!1},{label:"20 cups",purchased:!1,highPriority:!0}]}},computed:{characterCount:function(){return this.newItem.length},reversedItems:function(){return this.items.slice(0).reverse()}},methods:{saveItem:function(){this.items.push({label:this.newItem,purchased:!1}),this.newItem=""},changeState:function(e){this.state=e,this.newItem=""},togglePurchased:function(e){e.purchased=!e.purchased}}},o=(n(636),n(33)),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("body",[n("div",{attrs:{id:"shopping-list"}},[n("div",{staticClass:"header"},[n("h1",[e._v(e._s(e.header.toLocaleUpperCase()))]),e._v(" "),"default"===e.state?n("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.changeState("edit")}}},[e._v("\n        Add item\n      ")]):n("button",{staticClass:"btn btn-cancel",on:{click:function(t){return e.changeState("default")}}},[e._v("\n        Cancel\n      ")])]),e._v(" "),"edit"===e.state?n("div",{staticClass:"add-item-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem,expression:"newItem"}],attrs:{type:"text",placeholder:"Add an item"},domProps:{value:e.newItem},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveItem(t)},input:function(t){t.target.composing||(e.newItem=t.target.value)}}}),e._v(" "),n("p",[e._v(e._s(e.characterCount)+"/200")]),e._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{disabled:0===e.newItem.length},on:{click:e.saveItem}},[e._v("\n        Save Item\n      ")])]):e._e(),e._v(" "),n("ul",e._l(e.reversedItems,function(t){return n("li",{key:t.id,class:{strikeout:t.purchased},on:{click:function(n){return e.togglePurchased(t)}}},[e._v("\n        "+e._s(t.label)+"\n      ")])}),0),e._v(" "),0===e.items.length?n("p",[e._v("Your cart is empty!")]):e._e()])])},[],!1,null,"3701065a",null);t.default=component.exports}}]);