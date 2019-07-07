(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,r){e.exports=r(40)},33:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(14),s=r.n(c),i=r(2),l=r(3),o=r(6),u=r(4),d=r(7),m=r(5),p=(r(33),function(){return{type:"FETCH_PRODUCTS_START"}}),h=function(e){return{type:"FETCH_PRODUCTS_SUCCESS",payload:{products:e}}},y=function(e){return{type:"FETCH_PRODUCTS_FAILURE",payload:{error:e}}};function f(e){if(!e.ok)throw Error(e.statusText);return e}var E=r(8),_=r(9),g=r(22),v=r.n(g),S=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("button",{className:this.props.type,onClick:this.props.click&&function(){e.props.click(e.props.headerType)},disabled:this.props.totalSelected<3||this.props.totalPrice<=0},"surgery"===this.props.type||"discount"===this.props.type?a.a.createElement(E.a,{icon:_.b}):""," ",this.props.text)}}]),t}(n.Component),b=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(o.a)(this,Object(u.a)(t).call(this,e)))._getHeaderItems=function(e){r.props._handleGetHeaderItems(e)},r.state={date:v()().format("YYYY.MM.DD HH:mm")},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"_renderHeaderType",value:function(e){var t=this;switch(e){case"main":return a.a.createElement("div",{className:"header__wrapper cb_clear"},a.a.createElement("div",{className:"userName"},this.props.userName),a.a.createElement("div",{className:"date"},this.state.date),a.a.createElement(S,{type:"surgery",text:"\uc2dc\uc220",click:this._getHeaderItems,headerType:"surgery"}),a.a.createElement(S,{type:"discount",text:"\ud560\uc778",click:this._getHeaderItems,headerType:"discount"}));case"surgery":case"discount":return a.a.createElement("div",{className:"header__wrapper cb_clear br-b-n"},a.a.createElement("i",{onClick:function(){t._getHeaderItems("main")},className:"ico"},a.a.createElement(E.a,{icon:_.d}))," ",a.a.createElement("h2",null,"surgery"===e?"\uc2dc\uc220\uba54\ub274":"\ud560\uc778"));default:return a.a.createElement("div",{className:"header__wrapper cb_clear"},a.a.createElement("div",{className:"userName"},this.props.userName),a.a.createElement("div",{className:"date"},this.state.date),a.a.createElement(S,{type:"surgery",text:"\uc2dc\uc220",click:this._getHeaderItems,headerType:"surgery"}),a.a.createElement(S,{type:"discount",text:"\ud560\uc778",click:this._getHeaderItems,headerType:"discount"}))}}},{key:"render",value:function(){return a.a.createElement("header",null,this._renderHeaderType(this.props.headerType))}}]),t}(n.Component),O=Object(m.b)(function(e){var t={};for(var r in e.interfaceReducer)e.interfaceReducer.hasOwnProperty(r)&&(t[r]=e.interfaceReducer[r]);return t},function(e){return{_handleGetHeaderItems:function(t){e(function(e){return{type:"HEADER_TYPE",headerType:e}}(t))}}})(b),N=r(19),k=(r(38),function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(o.a)(this,Object(u.a)(t).call(this,e)))._applyDiscount=function(e){var t=document.getElementById("discountTarget").value;if(r.props.selectedDiscount.filter(function(e){return e.target===t}).length)return alert("\uc774\ubbf8 \ud560\uc778 \uc801\uc6a9\ub41c \uc0c1\ud488\uc785\ub2c8\ub2e4.");r.props._handleApplyDiscount(e.i,t),e.onClose()},r._deleteSelectedDiscount=function(e){r.props._handleDeleteSelectedDiscount(e.i),e.onClose()},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._fetchProducts()}},{key:"_fetchProducts",value:function(){this.props._handleFetchProducts()}},{key:"_selectAction",value:function(e,t){this.props._handleSelectAction(e,t)}},{key:"_modifyCount",value:function(e,t){var r=t.target.value;this.props._handleModifyCount(e,r)}},{key:"_removeSelectedSurgery",value:function(e){var t=this;Object(N.confirmAlert)({title:"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",message:"",closeOnEscape:!0,closeOnClickOutside:!0,buttons:[{label:"YES",onClick:function(){return t.props._handleRemoveSelectedSurgery(e)}},{label:"NO"}]})}},{key:"_modifySelectedDiscount",value:function(e,t){var r=this;Object(N.confirmAlert)({closeOnEscape:!0,closeOnClickOutside:!0,customUI:function(n){var c=n.onClose;return a.a.createElement("section",{className:"discount__targetList"},a.a.createElement("h2",null,e.name),a.a.createElement("input",{id:"discountTarget",defaultValue:e.target,placeholder:"\uac80\uc0c9",list:"discountTargetSurgeries"}),a.a.createElement("datalist",{id:"discountTargetSurgeries"},r.props.selectedSurgery.map(function(e,t){if(!1===e.isDiscount)return a.a.createElement("option",{key:t,value:e.name},e.price)})),a.a.createElement("div",null,a.a.createElement(S,{type:"surgery p-h-3",text:"\uc0ad\uc81c",headerType:{onClose:c,i:t},click:r._deleteSelectedDiscount}),a.a.createElement(S,{type:"discount p-h-3",text:"\uc801\uc6a9",headerType:{onClose:c,i:t},click:r._applyDiscount})))}})}},{key:"_makeList",value:function(){var e=this,t=[];if(this.props.selectedSurgery.length){var r=this.props.selectedSurgery.map(function(t,r){var n=t.price.toLocaleString(navigator.language,{minimumFractionDigits:0}),c=t.discountPrice&&t.discountPrice.toLocaleString(navigator.language,{minimumFractionDigits:0});return a.a.createElement("section",{className:"cursor-none",key:r},a.a.createElement("div",{className:"items__wrapper cb_clear"},a.a.createElement("div",{className:"name"},a.a.createElement("h2",null,t.name)),a.a.createElement("span",{className:c&&"strike"},n,"\uc6d0"),c&&a.a.createElement("span",{className:"discountPrice"},c,"\uc6d0 (",t.discountName," \uc774\ubca4\ud2b8 \uc801\uc6a9)"),a.a.createElement("div",{className:"items__wrapper__surgery--buttons cb_clear"},a.a.createElement("select",{onChange:function(t){e._modifyCount(r,t)},value:t.count},function(e){for(var t=[],r=1;r<=e;r++)t.push(a.a.createElement("option",{key:r,value:r},r));return t}(t.totalCount)),a.a.createElement("button",{className:"delete-surgery",onClick:function(){e._removeSelectedSurgery(r)}},"\uc0ad\uc81c"))))});t.push(r)}if(this.props.selectedDiscount.length){var n=this.props.selectedDiscount.map(function(t,r){var n=Number(100*t.rate).toFixed();return a.a.createElement("section",{className:"cursor-none",key:r},a.a.createElement("div",{className:"items__wrapper cb_clear"},a.a.createElement("div",{className:"name"},a.a.createElement("h2",null,t.name)),a.a.createElement("span",{className:"discountPercent"},n,"% \ud560\uc778"),a.a.createElement("div",{className:"items__wrapper__surgery--buttons cb_clear"},a.a.createElement("button",{className:"modify-discount",onClick:function(){e._modifySelectedDiscount(t,r)}},"\uc870\ud68c \ubc0f \uc801\uc6a9"))))});t.push(n)}return t.length||(t=a.a.createElement("section",{className:"noItems cursor-none"},"\uc2dc\uc220\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.")),t}},{key:"_renderProducts",value:function(e){var t=this,r=this.props.products;switch(e){case"main":return this._makeList();case"surgery":if(Object.keys(r).length){var n=r.items;return Object.keys(n).map(function(r){var c=n[r].price.toLocaleString(navigator.language,{minimumFractionDigits:0});return a.a.createElement("section",{className:"cb_clear",key:r,onClick:function(){t._selectAction(r,e)}},a.a.createElement("div",{className:"items__wrapper"},a.a.createElement("small",null,n[r].category),a.a.createElement("div",{className:"name"},a.a.createElement("h2",null,n[r].name)),a.a.createElement("span",null,c,"\uc6d0"),a.a.createElement("i",null,n[r].isSelected&&a.a.createElement(E.a,{icon:_.a}))))})}return;case"discount":if(Object.keys(r).length){var c=r.discounts;return Object.keys(c).map(function(r){var n=Number(100*c[r].rate).toFixed();return a.a.createElement("section",{className:"cb_clear",key:r,onClick:function(){t._selectAction(r,e)}},a.a.createElement("div",{className:"items__wrapper"},a.a.createElement("div",{className:"name"},a.a.createElement("h2",null,c[r].name)),a.a.createElement("span",{className:"discountPercent"},n,"% \ud560\uc778"),a.a.createElement("i",null,c[r].isSelected&&a.a.createElement(E.a,{icon:_.a}))))})}return;default:return a.a.createElement("section",{className:"noItems cursor-none"},"\uc2dc\uc220\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.")}}},{key:"render",value:function(){return this.props.error?a.a.createElement("main",null,a.a.createElement("section",{className:"noItems"},"\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\uc785\ub2c8\ub2e4.",a.a.createElement("br",null),a.a.createElement("br",null),"\uc7a0\uc2dc\ud6c4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694. ",this.props.error.message)):this.props.loading?a.a.createElement("main",null,a.a.createElement("section",{className:"noItems"},"Loading ",a.a.createElement(E.a,{icon:_.c,spin:!0}))):a.a.createElement("main",null,this._renderProducts(this.props.headerType))}}]),t}(n.Component)),T=Object(m.b)(function(e){var t={};for(var r in e.interfaceReducer)e.interfaceReducer.hasOwnProperty(r)&&(t[r]=e.interfaceReducer[r]);return t},function(e){return{_handleFetchProducts:function(){e(function(e){return e(p()),fetch("https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData").then(f).then(function(e){return e.json()}).then(function(t){e(h(t))}).catch(function(t){return e(y(t))})})},_handleSelectAction:function(t,r){e(function(e,t){return{type:"SELECT_ACTION",key:e,actionType:t}}(t,r))},_handleModifyCount:function(t,r){e(function(e,t){return{type:"MODIFY_COUNT",key:e,val:t}}(t,r))},_handleRemoveSelectedSurgery:function(t){e(function(e){return{type:"REMOVE_SELECTED_SURGERY",key:e}}(t))},_handleApplyDiscount:function(t,r){e(function(e,t){return{type:"APPLY_DISCOUNT",index:e,targetName:t}}(t,r))},_handleDeleteSelectedDiscount:function(t){e(function(e){return{type:"DELETE_SELECTED_DISCOUNT",index:e}}(t))}}})(k),C=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(o.a)(this,Object(u.a)(t).call(this,e)))._completeSelected=function(e){r.props._handleCompleteSelected(e)},r._purchse=function(){r.props._handlePurchase()},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"_renderFooterType",value:function(e){switch(e){case"main":var t=this.props.totalPrice.toLocaleString(navigator.language,{minimumFractionDigits:0});return a.a.createElement("div",{className:"footer__wrapper"},a.a.createElement("div",{className:"total cb_clear"},a.a.createElement("span",{className:"total__text"},"\ud569\uacc4"),a.a.createElement("strong",{className:"total__price"},t,"\uc6d0")),a.a.createElement("div",null,a.a.createElement(S,{type:"next",text:"\uacb0\uc81c",click:this._purchse,totalPrice:this.props.totalPrice})));case"surgery":case"discount":return a.a.createElement("div",{className:"footer__wrapper select"},a.a.createElement("p",null,"surgery"===e?"\uc11c\ube44\uc2a4\ub97c 3\uac1c \uc774\uc0c1 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.":"\ud560\uc778\uc744 \uc120\ud0dd\ud558\uc138\uc694."),a.a.createElement("div",null,a.a.createElement(S,{type:"next complete",text:"\uc644\ub8cc",totalSelected:"surgery"===e?this.props.totalSelectedSurgery:void 0,click:this._completeSelected,headerType:e})));default:return a.a.createElement("div",{className:"footer__wrapper"},a.a.createElement("div",{className:"total cb_clear"},a.a.createElement("span",{className:"total__text"},"\ud569\uacc4"),a.a.createElement("strong",{className:"total__price"},this.props.totalPrice,"\uc6d0")),a.a.createElement("div",null,a.a.createElement(S,{type:"next",text:"\uacb0\uc81c",click:this._purchse,totalPrice:this.props.totalPrice})))}}},{key:"render",value:function(){return a.a.createElement("footer",null,this._renderFooterType(this.props.headerType))}}]),t}(n.Component),D=Object(m.b)(function(e){var t={};for(var r in e.interfaceReducer)e.interfaceReducer.hasOwnProperty(r)&&(t[r]=e.interfaceReducer[r]);return t},function(e){return{_handleCompleteSelected:function(t){e(function(e){return{type:"COMPLETE_SELECTED",headerType:e}}(t))},_handlePurchase:function(){e({type:"PURCHASE"})}}})(C),P=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.isPurchasing?a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"purchase__process"},a.a.createElement(E.a,{icon:_.c,color:"#ed9ebd",spin:!0,size:"3x"}),a.a.createElement("p",null,"\uacb0\uc81c \uc9c4\ud589\uc911\uc785\ub2c8\ub2e4..."))):a.a.createElement(n.Fragment,null,a.a.createElement(O,null),a.a.createElement(T,null),a.a.createElement(D,null))}}]),t}(n.Component),j=Object(m.b)(function(e){var t={};for(var r in e.interfaceReducer)e.interfaceReducer.hasOwnProperty(r)&&(t[r]=e.interfaceReducer[r]);return t},null)(P),R=r(11),w=r(13),x={products:{},loading:!1,error:null,userName:"\ucd5c\uc900\uc6d0",totalPrice:0,headerType:"main",totalSelectedSurgery:0,totalSelectedDiscount:0,selectedSurgery:[],selectedDiscount:[],isPurchasing:!1},I=function(e){return void 0!==e&&null!==e?JSON.parse(JSON.stringify(e)):null},L=function(e){var t=0;return e.map(function(e){e.discountPrice?t+=Number(e.discountPrice)*Number(e.count):t+=Number(e.price)*Number(e.count)}),t},A=Object(R.c)({interfaceReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEADER_TYPE":return Object(w.a)({},e,{headerType:t.headerType});case"SELECT_ACTION":var r=I(e);if("surgery"===t.actionType){r.products.items[t.key].isSelected=!r.products.items[t.key].isSelected;var n=Object.keys(r.products.items).filter(function(e){return r.products.items[e].isSelected});n.length?r.totalSelectedSurgery=n.length:r.totalSelectedSurgery=0}else if("discount"===t.actionType){r.products.discounts[t.key].isSelected=!r.products.discounts[t.key].isSelected;var a=Object.keys(r.products.discounts).filter(function(e){return r.products.discounts[e].isSelected});a.length?r.totalSelectedDiscount=a.length:r.totalSelectedDiscount=0}return r;case"COMPLETE_SELECTED":var c=I(e);if(c.totalPrice=0,"surgery"===t.headerType){var s=Object.keys(c.products.items).reduce(function(e,t){return c.products.items[t].isSelected&&(e.push(c.products.items[t]),c.totalPrice=Number(c.totalPrice)+Number(c.products.items[t].price),c.products.items[t].isSelected=!1),c.selectedDiscount.length&&(c.selectedDiscount=[]),e},[]);s.length&&(c.selectedSurgery=s)}else if("discount"===t.headerType){var i=Object.keys(c.products.discounts).reduce(function(e,t){return c.products.discounts[t].isSelected&&(e.push(c.products.discounts[t]),c.products.discounts[t].isSelected=!1),e},[]);i.length&&(c.selectedDiscount=i)}return c.headerType="main",c;case"MODIFY_COUNT":var l=I(e);return l.selectedSurgery[t.key].count=Number(t.val),l.totalPrice=L(l.selectedSurgery),l;case"REMOVE_SELECTED_SURGERY":var o=I(e);return o.selectedDiscount.map(function(e){e.target===o.selectedSurgery[t.key].name&&(e.target=void 0)}),o.selectedSurgery.splice(t.key,1),o.totalPrice=L(o.selectedSurgery),o;case"APPLY_DISCOUNT":var u=I(e),d=Number(u.selectedDiscount[t.index].rate);return u.selectedSurgery.filter(function(e){if(e.name===t.targetName){var r=Number(e.price)*Number(e.count);e.discountPrice=r-r*d,e.discountName=u.selectedDiscount[t.index].name,u.selectedDiscount[t.index].target=e.name}}),u.totalPrice=L(u.selectedSurgery),u;case"DELETE_SELECTED_DISCOUNT":var m=I(e);return m.selectedSurgery.map(function(e){e.discountName===m.selectedDiscount[t.index].name&&(e.discountName=void 0,e.discountPrice=void 0)}),m.selectedDiscount.splice(t.index,1),m.totalPrice=L(m.selectedSurgery),m;case"PURCHASE":return Object(w.a)({},e,{isPurchasing:!0});case"FETCH_PRODUCTS_START":return Object(w.a)({},e,{loading:!0,error:null});case"FETCH_PRODUCTS_SUCCESS":var p=t.payload.products.items,h=t.payload.products.discounts;return Object.keys(p).length&&Object.keys(p).map(function(e){return 0===p[e].price?delete p[e]:(p[e].isSelected=!1,p[e].isDiscount=!1,p[e].totalCount=10,-1!==p[e].name.indexOf("\ucef7")?p[e].category="\ucee4\ud2b8":-1!==p[e].name.indexOf("\ub4dc\ub77c\uc774")?p[e].category="\ub4dc\ub77c\uc774":-1!==p[e].name.indexOf("\ud38c")?p[e].category="\ud38c":p[e].category="\uae30\ud0c0",p)}),Object.keys(h).length&&Object.keys(h).map(function(e){return h[e].isSelected=!1,h}),Object(w.a)({},e,{loading:!1,products:t.payload.products});case"FETCH_PRODUCTS_FAILURE":return Object(w.a)({},e,{loading:!1,error:String(t.payload.error),products:[]});default:return e}}}),F=r(23);s.a.render(a.a.createElement(m.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];if(window.location&&window.location.host&&-1!==window.location.host.indexOf("localhost")){var n=r(39).logger;t.push(n)}return Object(R.d)(A,e,R.a.apply(void 0,[F.a].concat(t)))}()},a.a.createElement(j,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.5301051c.chunk.js.map