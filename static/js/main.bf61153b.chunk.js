(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(22)},16:function(e,n,t){},17:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(4),i=t.n(r),s=(t(16),t(5)),c=t(6),l=t(10),d=t(7),m=t(9),h=t(1),u=t(8),w=(t(17),function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(l.a)(this,Object(d.a)(n).call(this,e))).state={markdown:f},t.handleChange=t.handleChange.bind(Object(h.a)(Object(h.a)(t))),t.remover=t.remover.bind(Object(h.a)(Object(h.a)(t))),t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState({markdown:e})}},{key:"remover",value:function(){this.setState({markdown:""})}},{key:"render",value:function(){var e=this,n=t(18);n.setOptions({breaks:!0});var a=this.state.markdown;return console.log(a),o.a.createElement("div",{id:"App"},o.a.createElement("h1",{id:"title",className:"text-center"},"Markdown Previewer"),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row "},o.a.createElement("div",{id:"input",className:"col-md-6"},o.a.createElement("h2",{className:"header text-center"},"Markdown Input"),o.a.createElement("i",{className:"far fa-times-circle",onClick:this.remover,title:"Delete Text"}),o.a.createElement(u.a,{id:"editor",value:a,onChange:function(n){return e.handleChange(n.target.value)}})),o.a.createElement("div",{id:"output",className:"col-md-6"},o.a.createElement("h2",{className:"header text-center"},"Preview"),o.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:n(a)}})))))}}]),n}(a.Component)),f="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",v=w;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.bf61153b.chunk.js.map