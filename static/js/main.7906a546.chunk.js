(this.webpackJsonpdocument=this.webpackJsonpdocument||[]).push([[0],{150:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);t(89);var n=t(0),l=t.n(n),r=t(34),c=t.n(r),m=t(85),s=t(78),i=(t(145),t(12));var o=Object(i.c)({resumeData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{}},a=arguments.length>1?arguments[1]:void 0,t=Object.assign({},e);switch(a.type){case"UPDATE_DATA":t.data=a.data;break;default:return e}return t}}),u=[s.a],d=t(4),p=t(83),E=function(){var e=Object(d.c)((function(e){return e.resumeData.data})),a=e.main&&e.main.name||"",t=e.main&&e.main.occupation||"",n=e.main&&e.main.description||"",r=e.main&&e.main.address||{city:""};return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",a,"."),l.a.createElement("h3",null,"I'm a ",r.city," based ",l.a.createElement("span",null,t),". ",n,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},function(){if(e.main&&e.main.social)return e.main.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))}()))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))},v=function(){var e=Object(d.c)((function(e){return e.resumeData.data})),a=new Date;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},function(){if(e.social)return e.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))}()),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright ",a.getFullYear()," ",e.main&&e.main.name))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))},h=function(){var e=Object(d.c)((function(e){return e.resumeData.data})),a=e.main&&e.main.name||"",t=e.main&&"./Assets/images/".concat(e.main.image)||"",n=e.main&&e.main.bio||"",r=e.main&&e.main.address||{},c=e.main&&e.main.email||"",m=e.main&&e.main.resumedownload||"";return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:t,alt:"Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,n),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,a),l.a.createElement("br",null),l.a.createElement("span",null,r.street,l.a.createElement("br",null),r.city," ",r.state,", ",r.zip),l.a.createElement("br",null),l.a.createElement("span",null,c))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"button"},l.a.createElement("i",{className:"fa fa-eye"}),"View Resume")))))))},g=function(){var e=Object(d.c)((function(e){return e.resumeData.data}));return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},function(){if(e.resume&&e.resume.education)return e.resume.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))}))}())))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},function(){if(e.resume&&e.resume.work)return e.resume.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))}))}())),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillmessage),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},function(){if(e.resume&&e.resume.skills)return e.resume.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))}))}())))))},f=t(37),b=t(54),N=t(86),w=function(){var e=Object(d.c)((function(e){return e.resumeData.data})),a=Object(n.useState)({name:"",isRequired:!0,email:"",subject:"",message:""}),t=Object(N.a)(a,2),r=t[0],c=t[1],m=e.main||{email:""},s=function(e){var a=e.target.id,t=e.target.value,n=Object(b.a)(Object(b.a)({},r),Object(f.a)({},a,t));c(n)};return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},e.contactmessage))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:"https://formspree.io/f/xoqpwqyk",method:"post",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",size:"35",id:"name",name:"contactName",onChange:function(e){return s(e)},required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email",name:"_replyto"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",size:"35",id:"email",name:"contactEmail",onChange:function(e){return s(e)},required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"subject"},"Subject"),l.a.createElement("input",{type:"text",size:"35",id:"subject",name:"_subject",onChange:function(e){return s(e)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"message"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"message",name:"contactMessage",onChange:function(e){return s(e)},required:!0})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",className:"submit",value:"Send"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"})))),l.a.createElement("input",{type:"text",name:"_gotcha",style:{display:"none"}}))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Email"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,m.email))))))},y=l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(g,null),l.a.createElement(w,null),l.a.createElement(v,null)),k=t(80),j=t(81),D=t(87),O=t(84);function S(e){return function(a){a({type:"UPDATE_DATA",data:e})}}var A={main:{name:"Travis Boss",occupation:"Front-End Developer",image:"travisboss.jpg",bio:"Am a hard worker who enjoys working in new technologies and learning new languages, feel most comfortable in Vue.Js, but stepping up my React game on my own personal time.",contactmessage:"Please email me if you'd like to chat.",email:"travisboss@gmail.com",address:{street:"3917 Shamrock Drive NE",city:"Minneapolis",state:"MN",zip:"55421"},website:"https://travisboss.github.io/travisboss/",resumedownload:"https://docs.google.com/document/d/1tMy5zpBuGkJif2r6h_ApnnAJyQ2LMdYNPwxs26E4TCw/edit?usp=sharing",social:[{name:"linkedin",url:"https://www.linkedin.com/in/travisboss/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/travisboss",className:"fa fa-github"}]},resume:{education:[{school:"Minneapolis Community and Techincal College",degree:"Web Design and Interactive Media",graduated:"December 2017"}],work:[{company:"MOBE(Contract, Freelance)",title:"Front-End Developer",years:"April 2020 - Present",description:"Design mobile first web pages using HTML, CSS, PHP and Twig. Expand features, refine code, and improve processes, providing smoother operations and enhancing user engagement."},{company:"Wellbeats(Contract)",title:"UI Engineer",years:"May 2020 - October 2020",description:"Responsible for development of user interface of wellbeats application portal. Perform work in line with product development responsibilities software engineering processes that have been agreed upon in the department. Suggest and implement improvements to development processes. Diligently create quality work in a fast paced, team-based, highly iterative environment."},{company:"Anthem, Inc(contract)",title:"Front End Developer",years:"July 2019 - April 2020",description:"Work as part of an agile development team with UX, node developers, and product team members. Work with product management and UX to deliver working prototypes for upcoming features. Collaborate with product management and development team members on technical design to come up with compelling solutions to problems."},{company:"Gradient Financial Group",title:"Web Designer",years:"June 2017 - July 2019",description:"Estimate design and development activities. Understand principles of dynamic web development using WordPress, PHP, JavaScript, HTML, CSS. Rapid prototyping of design concepts to turn them into fully working web applications."}],skills:[{name:"Accessibility",level:"90%"},{name:"AngularJS",level:"60%"},{name:"Angular",level:"80%"},{name:"CSS",level:"90%"},{name:"Git",level:"90%"},{name:"HTML",level:"80%"},{name:"JavaScript",level:"80%"},{name:"Laravel",level:"70%"},{name:"PHP",level:"70%"},{name:"React",level:"50%"},{name:"TypeScript",level:"75%"},{name:"VueJs",level:"80%"}]}},C=(t(150),function(e){Object(D.a)(t,e);var a=Object(O.a)(t);function t(){return Object(k.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.props.updateResumeData(A)}},{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"app__container"},this.props.children))}}]),t}(l.a.Component));var M=Object(d.b)(null,(function(e){return Object(i.b)({updateResumeData:S},e)}))(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=Object(i.d)(o,i.a.apply(void 0,Object(m.a)(u)));c.a.render(l.a.createElement(d.a,{store:P},l.a.createElement(p.a,null,l.a.createElement(M,null,y))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,a,t){e.exports=t(152)}},[[88,1,2]]]);
//# sourceMappingURL=main.7906a546.chunk.js.map