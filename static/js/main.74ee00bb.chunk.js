(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),o=(n(13),n(14),n(5)),d=n(6),l=n(8),i=n(7),u=n(2),b=n.n(u),j=n(0),h=function(e){var t=e.onGood,n=e.onNeutral,a=e.onBad;return Object(j.jsxs)("div",{className:"btn",children:[Object(j.jsx)("button",{type:"button",onClick:t,className:b.a.feedbackBtn,children:"Good"}),Object(j.jsx)("button",{type:"button",onClick:n,className:b.a.feedbackBtn,children:"Neutral"}),Object(j.jsx)("button",{type:"button",onClick:a,className:b.a.feedbackBtn,children:"Bad"})]})},f=function(e){var t=e.valueGood,n=e.valueNeutral,a=e.valueBad;return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{className:"statsName",children:[Object(j.jsxs)("li",{className:"good",children:["Good:",t]}),Object(j.jsxs)("li",{className:"neutral",children:["Neutral:",n]}),Object(j.jsxs)("li",{className:"bad",children:["Bad:",a]})]})})},O=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleGoodIncrement=function(){e.setState((function(e){return{good:e.good+1}}))},e.handleNeutralIncrement=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.handleBadIncrement=function(){e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"feedback",children:[Object(j.jsx)("h1",{children:"Please leave feedback"}),Object(j.jsx)(h,{onGood:this.handleGoodIncrement,onNeutral:this.handleNeutralIncrement,onBad:this.handleBadIncrement}),Object(j.jsx)("h2",{children:"Statistics"}),Object(j.jsx)(f,{valueGood:this.state.good,valueNeutral:this.state.neutral,valueBad:this.state.bad})]})}}]),n}(c.a.Component),m=O;var N=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(m,{})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={feedbackBtn:"Feedback_feedbackBtn__hzYN8"}}},[[16,1,2]]]);
//# sourceMappingURL=main.74ee00bb.chunk.js.map