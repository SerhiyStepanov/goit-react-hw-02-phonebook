(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={container:"Form_container__3g3DQ",label:"Form_label__3cJnl",button:"Form_button__1aCuO"}},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(11),s=n.n(o),i=(n(19),n(13)),u=n(5),l=n(6),b=n(8),m=n(7),j=n(3),h=n.n(j),d=n(12),O=n(2),p=n.n(O),f=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.onFormSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=h.a.generate(),e=h.a.generate();return Object(a.jsx)(c.Fragment,{children:Object(a.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(a.jsxs)("div",{className:p.a.container,children:[Object(a.jsx)("label",{htmlFor:t,className:p.a.label,children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",id:t,value:this.state.name,onChange:this.onInputChange})]}),Object(a.jsxs)("div",{className:p.a.container,children:[Object(a.jsx)("label",{htmlFor:e,className:p.a.label,children:"Number"}),Object(a.jsx)("input",{type:"tel",name:"number",id:e,value:this.state.number,onChange:this.onInputChange})]}),Object(a.jsx)("button",{type:"submit",className:p.a.button,children:"Add contact"})]})})}}]),n}(c.Component),x=n(9),v=n.n(x);function g(t){var e=t.items,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.name,c=t.number,r=t.id;return Object(a.jsxs)("li",{className:v.a.list,children:[Object(a.jsxs)("p",{className:v.a.text,children:[e," : ",c]}),Object(a.jsx)("button",{className:v.a.button,type:"button",onClick:function(){return n(r)},children:"delete"})]},r)}))})}var C=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[]},t.submitFormHandler=function(e){console.log(e);var n={id:h.a.generate(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[n])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.contacts;return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{onSubmit:this.submitFormHandler}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(g,{items:t,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"ContactList_list__3Jqo4",text:"ContactList_text__3nHjQ",button:"ContactList_button__1GCIv"}}},[[28,1,2]]]);
//# sourceMappingURL=main.c2ede8c8.chunk.js.map