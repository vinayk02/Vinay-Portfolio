(this.webpackJsonpvinay_portfolio=this.webpackJsonpvinay_portfolio||[]).push([[0],{20:function(e,t,s){},23:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(12),n=s.n(a),i=(s(20),s(4)),r=s(5),l=s(7),j=s(6),o=s(10),d=s(13),h=s.n(d),b=(s(23),s(14)),m=s(1),u=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsx)(b.a,{num:200,color:"#FFFFFF",type:"cobweb",bg:!0}),Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Portfolio"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)("h1",{className:"responsive-headline",children:"Vinay Kumar"}),Object(m.jsx)("h3",{children:"Hello, my name is Vinay Kumar and I am a second year student at Rutgers University  currently pursuing a computer science bachelor degree."}),Object(m.jsx)("hr",{}),Object(m.jsxs)("ul",{className:"social",children:[Object(m.jsxs)("a",{href:"https://www.linkedin.com/in/vinay-kumar-b7527a1b4/",className:"button btn project-btn",children:[Object(m.jsx)("i",{className:"fa fa-linkedin-square"}),"Linkedin"]}),Object(m.jsxs)("a",{href:"https://github.com/vinayk02",className:"button btn github-btn",children:[Object(m.jsx)("i",{className:"fa fa-github"}),"Github"]})]})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),O=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsx)("ul",{className:"copyright",children:Object(m.jsx)("li",{children:"\xa9 Copyright 2021 Vinay Kumar"})})]}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),x=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e="images/"+this.props.data.image;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:e})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:"I'm a student at Rutgers University pursuing a bachelor degree in computer science. I have work experience in different industries. I'm from Staten Island, New York. I am a fast and enthusiastic learner. am also fluent in spoken Punjabi and Hindi"}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"General Information"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:"Name: Vinay Kumar"}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:["Age: 19 years old",Object(m.jsx)("br",{}),"Phone: 646-691-4303"]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:"Email: kumarv242471@gmail.com"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:"Address: Staten Island, New York"})]})]})})]})]})})}}]),s}(c.Component),p=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("p",{className:"info",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.experience.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)})),s=this.props.data.skills.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("p",{children:e.description})]},e.name)}));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:e})})})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Experience"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"skills"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:s})]})]})}}]),s}(c.Component),v=s(15),f=s.n(v),N=0,g=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)(f.a,{alt:e.title,src:t}),Object(m.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},N++)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Portfolio"}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(c.Component),y=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u,{data:this.state.resumeData.main}),Object(m.jsx)(x,{data:this.state.resumeData.main}),Object(m.jsx)(p,{data:this.state.resumeData.resume}),Object(m.jsx)(g,{data:this.state.resumeData.portfolio}),Object(m.jsx)(O,{data:this.state.resumeData.main})]})}}]),s}(c.Component),w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(m.jsx)(y,{}),document.getElementById("root")),w()}},[[34,1,2]]]);
//# sourceMappingURL=main.0ffaf023.chunk.js.map