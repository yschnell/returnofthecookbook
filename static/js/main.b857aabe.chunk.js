(this.webpackJsonpreturnofthecookbook=this.webpackJsonpreturnofthecookbook||[]).push([[0],{34:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(5),s=c.n(n),a=c(19),i=c.n(a),o=c(20),l=c(21),j=c(28),h=c(27),d=(c(34),c(26).a({space:"8w1pdhvh17xm",accessToken:"v6G5UURqSGE719oa2G8-82CPxGZiOJZzVX5cre9kCJk"})),p=c(25),u=c.n(p),O=function(e){var t=e.article;console.log(t);var c=t.fields,n=c.recipeTitle,s=c.recipeCategory,a=c.recipePicture,i=c.recipeDescription,o=(c.typicalRecipeLocation,c.recipeCountry),l=u()(i);return Object(r.jsxs)("div",{className:"post",children:[Object(r.jsx)("h2",{className:"title",children:n}),a&&Object(r.jsx)("img",{className:"picture",src:a.fields.file.url,alt:n,title:n}),Object(r.jsx)("h4",{className:"category",children:s}),Object(r.jsx)("section",{dangerouslySetInnerHTML:{__html:l}}),Object(r.jsx)("h4",{className:"country",children:o})]})},b=function(e){var t=e.posts;return Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsx)(O,{article:e},t)}))})},m=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={articles:[]},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;d.getEntries().then((function(t){console.log(t),e.setState({articles:t.items})})).catch(console.error)}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("header",{children:Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsx)("span",{className:"header-title",children:"THE RETURN OF THE COOKBOOK"})})}),Object(r.jsx)("main",{children:Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsx)(b,{posts:this.state.articles})})})]})})}}]),c}(s.a.Component);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))},8:function(e,t){}},[[55,1,2]]]);
//# sourceMappingURL=main.b857aabe.chunk.js.map