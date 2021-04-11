(window["webpackJsonpmy-portfolio-site"]=window["webpackJsonpmy-portfolio-site"]||[]).push([[0],{145:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(9),o=t.n(r),c=(t(86),t(87),t(2)),i=t(22),m=t(28),s=t(18),u=t(29),d=t(30),p=t(13),E=t(31),h=t(162),g=t(164),b=t(49),f=t.n(b),C=t(38),y=t.n(C),v=t(70),k=t.n(v),D=t(71),w=t.n(D),S=t(72),T=t.n(S),j=t(40),A=t.n(j),x=t(41),N=t.n(x),O=t(42),B=t.n(O),R=t(43),I=t.n(R),M=t(73),z=t.n(M),F=[{url:A.a},{url:N.a},{url:B.a},{url:I.a}],P=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onMouseEnterProject=function(e){1===e?t.setState((function(e){return{isFlipped1:!e.isFlipped1}})):2===e?t.setState((function(e){return{isFlipped2:!e.isFlipped2}})):3===e&&t.setState((function(e){return{isFlipped3:!e.isFlipped3}}))},t.state={isFlipped1:!1,isFlipped2:!1,isFlipped3:!1,showDialog:!1},t.handleClickUI=t.handleClickUI.bind(Object(p.a)(t)),t.handleCloseDialog=t.handleCloseDialog.bind(Object(p.a)(t)),t}return Object(E.a)(a,e),Object(s.a)(a,[{key:"handleClickUI",value:function(){this.setState({showDialog:!0})}},{key:"handleCloseDialog",value:function(){this.setState({showDialog:!1})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{flexGrow:1}},n.a.createElement(c.Dialog,{open:this.state.showDialog,onCancel:this.handleCloseDialog},n.a.createElement(c.DialogTitle,null,"TravelAR"),n.a.createElement(c.DialogContent,null,n.a.createElement(y.a,{style:{margin:"auto"},width:175,height:350,images:F,showNavs:!1})),n.a.createElement(c.DialogActions,null,n.a.createElement(c.Button,{onClick:this.handleCloseDialog},"Close"))),n.a.createElement(h.a,{container:!0,justify:"center"},n.a.createElement(h.a,{item:!0},n.a.createElement("img",{src:z.a,alt:"avatar",className:"avatar-img"}))),n.a.createElement(h.a,{container:!0,justify:"center",className:"banner-text"},n.a.createElement("h1",{style:{fontSize:36,marginBottom:0}},"Mo Moussa")),n.a.createElement(h.a,{container:!0,justify:"center",className:"banner-text"},n.a.createElement("h2",{style:{fontSize:28,margin:0}},"Software Developer")),n.a.createElement(h.a,{container:!0,justify:"center",className:"social-links",spacing:3},n.a.createElement(h.a,{item:!0},n.a.createElement("a",{href:"https://www.linkedin.com/in/moussamo/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"}))),n.a.createElement(h.a,{item:!0},n.a.createElement("a",{href:"https://github.com/mmoussa",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))),n.a.createElement(g.a,{in:!0},n.a.createElement(h.a,{container:!0,justify:"center",spacing:8},n.a.createElement(h.a,{item:!0,onMouseEnter:function(){return e.onMouseEnterProject(1)},onMouseLeave:function(){return e.onMouseEnterProject(1)}},n.a.createElement(f.a,{isFlipped:this.state.isFlipped1},n.a.createElement(c.Card,{shadow:5,style:{width:200,background:"url("+k.a+") center no-repeat",backgroundSize:"100%"}}),n.a.createElement(c.Card,{shadow:5,style:{width:200,background:"white",backgroundSize:"100%"}},n.a.createElement(c.CardTitle,null,"Indoor Localization"),n.a.createElement(c.CardText,null,"An iOS indoor localization and asset tracking app utilizing Bluetooth iBeacons."),n.a.createElement(c.CardActions,null,n.a.createElement(c.Button,{colored:!0,href:"https://youtu.be/zaMCRUGKrkQ",target:"_blank"},"Demo 1"),n.a.createElement(c.Button,{colored:!0,href:"https://drive.google.com/file/d/0B1HoZYxHuroJcTc4ZnI3MllSeTg/view",target:"_blank"},"Demo 2"))))),n.a.createElement(h.a,{item:!0,onMouseEnter:function(){return e.onMouseEnterProject(2)},onMouseLeave:function(){return e.onMouseEnterProject(2)}},n.a.createElement(f.a,{isFlipped:this.state.isFlipped2},n.a.createElement(c.Card,{shadow:5,style:{width:200,background:"url("+T.a+") center no-repeat",backgroundSize:"100%"}}),n.a.createElement(c.Card,{shadow:5,style:{width:200,background:"white",backgroundSize:"100%"}},n.a.createElement(c.CardTitle,null,"TravelAR"),n.a.createElement(c.CardText,null,"A travel companion app powered by AR and image recognition to provide a more enjoyable tour experience."),n.a.createElement(c.CardActions,null,n.a.createElement(c.Button,{colored:!0,onClick:this.handleClickUI},"UI"),n.a.createElement(c.Button,{colored:!0,href:"https://youtu.be/IpNlb_yzcb4",target:"_blank"},"Demo"))))),n.a.createElement(h.a,{item:!0,onMouseEnter:function(){return e.onMouseEnterProject(3)},onMouseLeave:function(){return e.onMouseEnterProject(3)}},n.a.createElement(f.a,{isFlipped:this.state.isFlipped3},n.a.createElement(c.Card,{shadow:5,style:{width:200,background:"url("+w.a+") center no-repeat",backgroundSize:"100%"}}),n.a.createElement(c.Card,{shadow:5,style:{width:200,background:"white",backgroundSize:"100%"}},n.a.createElement(c.CardTitle,null,"Real Estate Finder"),n.a.createElement(c.CardText,null,"A hybrid mobile app that finds the optimal residential areas based on the user's criteria."),n.a.createElement(c.CardActions,null,n.a.createElement(c.Button,{colored:!0,href:"https://drive.google.com/file/d/0B1HoZYxHuroJT3RQaVBNckZfbEk/view",target:"_blank"},"Demo"))))))))}}]),a}(l.Component),U=t(169),_=t(168),H=t(170),J=t(165),G=t(166),L=t(19),V=t.n(L),Z=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(c.Grid,{className:"resume-grid"},n.a.createElement(c.Cell,{col:12},n.a.createElement("h1",{style:{fontSize:28}},"Resume")),n.a.createElement(c.Cell,{col:12},n.a.createElement("h1",null,"Skills")),n.a.createElement(c.Cell,{col:4,offsetDesktop:4},n.a.createElement(U.a,{label:"C",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"C++",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"C#",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Java",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Python",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"JavaScript",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Swift",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"SQL",color:"primary",style:{margin:1}})),n.a.createElement(c.Cell,{col:4,offsetDesktop:4},n.a.createElement(U.a,{label:"React",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"React-Native",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Bootstrap",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Scikit-Learn",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"TensorFlow",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Keras",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"ARCore",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"ASP.NET",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"WCF",color:"primary",style:{margin:1}})),n.a.createElement(c.Cell,{col:4,offsetDesktop:4},n.a.createElement(U.a,{label:"Windows",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Linux",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"OS X",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Git",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"SVN",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Google Cloud",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Microsoft Azure",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Unity",color:"primary",style:{margin:1}}),n.a.createElement(U.a,{label:"Unreal Engine 4",color:"primary",style:{margin:1}})),n.a.createElement(c.Cell,{col:12},n.a.createElement("h1",null,"Education")),n.a.createElement(c.Cell,{col:8,offsetDesktop:2,phone:4},n.a.createElement(_.a,null,n.a.createElement(H.a,{expandIcon:n.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.a.createElement(J.a,null,n.a.createElement("h1",null,"Sheridan College"))),n.a.createElement(G.a,null,n.a.createElement(J.a,null,n.a.createElement("span",null,n.a.createElement("b",null,"Honours Bachelor of Computer Science - Mobile Computing")," Oakville, ON, Canada"),n.a.createElement("p",null,"Sep 2015 - Dec 2019"),n.a.createElement("p",null,"\u2022 ",n.a.createElement("b",null,"High Honours")," student, ",n.a.createElement("b",null,"cumulative GPA: 3.85/4.0")),n.a.createElement("p",null,"\u2022 ",n.a.createElement("b",null,"Relevant Courses:")," Data Structures and Algorithms, Artificial Intelligence, Cloud Computing, Ubiquitous Computing, Cognitive Computing, Business Intelligence and Data Mining, Operating Systems"))))),n.a.createElement(c.Cell,{col:8,offsetDesktop:2,phone:4},n.a.createElement(_.a,null,n.a.createElement(H.a,{expandIcon:n.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.a.createElement(J.a,null,n.a.createElement("h1",null,"University of Toronto"))),n.a.createElement(G.a,null,n.a.createElement(J.a,null,n.a.createElement("span",null,n.a.createElement("b",null,"Electrical Engineering")," Toronto, ON, Canada"),n.a.createElement("p",null,"Sep 2012 - Dec 2014"))))),n.a.createElement(c.Cell,{col:12},n.a.createElement("h1",null,"Experience")),n.a.createElement(c.Cell,{col:8,offsetDesktop:2,phone:4},n.a.createElement(_.a,null,n.a.createElement(H.a,{expandIcon:n.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.a.createElement(J.a,null,n.a.createElement("h1",null,"Virtual Humans Research Assistant"))),n.a.createElement(G.a,null,n.a.createElement(J.a,null,n.a.createElement("span",null,n.a.createElement("b",null,"Screen Industries Research and Training Centre (SIRT)")," Toronto, ON, Canada"),n.a.createElement("p",null,"Apr 2019 - Aug 2019"),n.a.createElement("p",null,"\u2022 Researched and developed speech-driven animation for 3D characters using machine learning"),n.a.createElement("p",null,"\u2022 Developed a face tracking plugin for Adobe After Effects in C++"))))),n.a.createElement(c.Cell,{col:8,offsetDesktop:2,phone:4},n.a.createElement(_.a,null,n.a.createElement(H.a,{expandIcon:n.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.a.createElement(J.a,null,n.a.createElement("h1",null,"Junior Programmer"))),n.a.createElement(G.a,null,n.a.createElement(J.a,null,n.a.createElement("span",null,n.a.createElement("b",null,"Screen Industries Research and Training Centre (SIRT)")," Toronto, ON, Canada"),n.a.createElement("p",null,"Jan 2018 - Aug 2018"),n.a.createElement("p",null,"\u2022 Developed, tested, and debugged virtual reality applications in C++ and Java"),n.a.createElement("p",null,"\u2022 Created content in Unreal Engine to demo wireless VR technology on the GearVR"),n.a.createElement("p",null,"\u2022 Developed a gameplay recording plugin for Unreal Engine in C++"),n.a.createElement("p",null,"\u2022 Added support for developing games utilizing EEG headbands in Unreal Engine (C++)"),n.a.createElement("p",null,"\u2022 Developed a visualization tool to test and debug a hand tracking application on iOS (Swift/Objective C/C++)"))))),n.a.createElement(c.Cell,{col:8,offsetDesktop:2,phone:4},n.a.createElement(_.a,null,n.a.createElement(H.a,{expandIcon:n.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.a.createElement(J.a,null,n.a.createElement("h1",null,"Research Assistant and Programmer"))),n.a.createElement(G.a,null,n.a.createElement(J.a,null,n.a.createElement("span",null,n.a.createElement("b",null,"Centre for Mobile Innovation, Sheridan College")," Oakville, ON, Canada"),n.a.createElement("p",null,"Jan 2017 - Jan 2018"),n.a.createElement("p",null,"\u2022 Researched methods of indoor localization and asset tracking using Bluetooth iBeacons"),n.a.createElement("p",null,"\u2022 Developed iOS location tracking applications in Swift, as well as apps to manage and calibrate the beacons"))))),n.a.createElement(c.Cell,{col:12},n.a.createElement("h1",null,"Projects")),n.a.createElement(c.Cell,{col:8,offsetDesktop:2,phone:4},n.a.createElement(_.a,null,n.a.createElement(H.a,{expandIcon:n.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.a.createElement(J.a,null,n.a.createElement("h1",null,"TravelAR"))),n.a.createElement(G.a,null,n.a.createElement(J.a,null,n.a.createElement("p",null,n.a.createElement("b",null,"Top 3 Capstone Project.")," A travel mobile app utilizing mobile AR and landmark recognition to provide a better travel/tour experience."),n.a.createElement("p",null,n.a.createElement("b",null,"Technologies Used:")," Google Cloud Vision, AutoML Vision, Firebase, ARCore"))))),n.a.createElement(c.Cell,{col:8,offsetDesktop:2,phone:4},n.a.createElement(_.a,null,n.a.createElement(H.a,{expandIcon:n.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.a.createElement(J.a,null,n.a.createElement("h1",null,"MedAware"))),n.a.createElement(G.a,null,n.a.createElement(J.a,null,n.a.createElement("p",null,"Designed an app for wearable devices to aid seniors living on their own. Received an ",n.a.createElement("b",null,"honourable mention")," in ",n.a.createElement("b",null,"Microsoft\u2019s Imagine Cup 2016 Design Challenge.")),n.a.createElement("p",null,n.a.createElement("b",null,"Technologies Used:")," Microsoft Azure, C# and UWP (Universal Windows Platform), and Microsoft Band wearable."))))),n.a.createElement(c.Cell,{col:8,offsetDesktop:2,phone:4},n.a.createElement(_.a,null,n.a.createElement(H.a,{expandIcon:n.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.a.createElement(J.a,null,n.a.createElement("h1",null,"Real Estate Finder"))),n.a.createElement(G.a,null,n.a.createElement(J.a,null,n.a.createElement("p",null,"A hybrid mobile app that finds the optimal residential areas based on the user\u2019s criteria."),n.a.createElement("p",null,n.a.createElement("b",null,"Technologies Used:")," Cordova, JavaScript, jQuery Mobile, and Bootstrap."))))),n.a.createElement(c.Cell,{col:8,offsetDesktop:2,phone:4},n.a.createElement(_.a,null,n.a.createElement(H.a,{expandIcon:n.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.a.createElement(J.a,null,n.a.createElement("h1",null,"Travel Planner"))),n.a.createElement(G.a,null,n.a.createElement(J.a,null,n.a.createElement("p",null,"A web application that helps the user plan out their trips. "),n.a.createElement("p",null,n.a.createElement("b",null,"Technologies Used:")," ASP.NET MVC, SQL and WCF")))))))}}]),a}(l.Component),W=t(76),Q=t.n(W),Y=[{url:A.a},{url:N.a},{url:B.a},{url:I.a}],q=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={},t.handleOpenDialog=t.handleOpenDialog.bind(Object(p.a)(t)),t.handleCloseDialog=t.handleCloseDialog.bind(Object(p.a)(t)),t}return Object(E.a)(a,e),Object(s.a)(a,[{key:"handleOpenDialog",value:function(){this.setState({openDialog:!0})}},{key:"handleCloseDialog",value:function(){this.setState({openDialog:!1})}},{key:"render",value:function(){return n.a.createElement("div",{className:"projects-grid"},n.a.createElement(c.Dialog,{open:this.state.openDialog,onCancel:this.handleCloseDialog},n.a.createElement(c.DialogTitle,null,"TravelAR"),n.a.createElement(c.DialogContent,null,n.a.createElement(y.a,{style:{margin:"auto"},width:175,height:350,images:Y,showNavs:!1})),n.a.createElement(c.DialogActions,null,n.a.createElement(c.Button,{onClick:this.handleCloseDialog},"Close"))),n.a.createElement(c.Card,{className:"project-card",shadow:5},n.a.createElement(c.CardTitle,{className:"card-title",style:{background:"url("+Q.a+") center no-repeat",backgroundSize:"30%"}}),n.a.createElement(c.CardTitle,null,"TravelAR"),n.a.createElement(c.CardText,{className:"card-text"},"A travel companion app powered by AR and image recognition to provide a more enjoyable tour experience."),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{href:"https://youtu.be/GDemT3E-T2s",target:"_blank",colored:!0},"Demo 1"),n.a.createElement(c.Button,{href:"https://youtu.be/IpNlb_yzcb4",target:"_blank",colored:!0},"Demo 2"),n.a.createElement(c.Button,{onClick:this.handleOpenDialog,colored:!0},"UI"))),n.a.createElement(c.Card,{className:"project-card",shadow:5},n.a.createElement(c.CardTitle,{className:"card-title",style:{background:"url(http://pngimg.com/uploads/bluetooth/bluetooth_PNG43.png) center no-repeat",backgroundSize:"30%"}}),n.a.createElement(c.CardTitle,null,"Bluetooth Location Tracking"),n.a.createElement(c.CardText,{className:"card-text"},"An iOS location tracking app using Bluetooth iBeacons."),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{href:"https://drive.google.com/file/d/0B1HoZYxHuroJcTc4ZnI3MllSeTg/view",target:"_blank",colored:!0},"Demo"))),n.a.createElement(c.Card,{className:"project-card",shadow:5},n.a.createElement(c.CardTitle,{className:"card-title",style:{background:"url(https://amp.businessinsider.com/images/5bdc87448c35ab6a120935eb-1536-1152.jpg) top 5% center no-repeat",backgroundSize:"100%"}}),n.a.createElement(c.CardTitle,null,"Real Estate Finder"),n.a.createElement(c.CardText,{className:"card-text"},"A hybrid mobile app that finds the optimal residential areas based on the user\u2019s criteria."),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{href:"https://drive.google.com/file/d/0B1HoZYxHuroJT3RQaVBNckZfbEk/view",target:"_blank",colored:!0},"Demo"))))}}]),a}(l.Component),K=function(){return n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:P}),n.a.createElement(i.a,{path:"/resume",component:Z}),n.a.createElement(i.a,{path:"/projects",component:q}))},X=t(21);var $=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(c.Layout,null,n.a.createElement(c.Header,{className:"header-color",title:"Portfolio",scroll:!0},n.a.createElement(c.Navigation,null,n.a.createElement(X.b,{to:"/",style:{fontFamily:"montserrat",fontSize:"1.5em",color:"black"}},"Home"),n.a.createElement(X.b,{to:"/resume",style:{fontFamily:"montserrat",fontSize:"1.5em",color:"black"}},"Resume"))),n.a.createElement(c.Drawer,{title:"Portfolio"},n.a.createElement(c.Navigation,null,n.a.createElement(X.b,{to:"/",style:{fontFamily:"montserrat",fontSize:"1.5em"}},"Home"),n.a.createElement(X.b,{to:"/resume",style:{fontFamily:"montserrat",fontSize:"1.5em"}},"Resume"))),n.a.createElement(c.Content,null,n.a.createElement("div",{className:"page-content"}),n.a.createElement(K,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(143),t(144);o.a.render(n.a.createElement(X.a,null,n.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,a,t){e.exports=t.p+"static/media/tourlist.11b46b5a.png"},41:function(e,a,t){e.exports=t.p+"static/media/tour_details.aec360bf.jpg"},42:function(e,a,t){e.exports=t.p+"static/media/tour_details_admin.f72895b7.jpg"},43:function(e,a,t){e.exports=t.p+"static/media/tour_map.9fb303e3.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/bluetooth.7b547414.png"},71:function(e,a,t){e.exports=t.p+"static/media/real_estate.4a31d943.png"},72:function(e,a,t){e.exports=t.p+"static/media/travelar.3f4713c5.svg"},73:function(e,a,t){e.exports=t.p+"static/media/IMG_5915.3c7c0eee.JPG"},76:function(e,a,t){e.exports=t.p+"static/media/ic_travelar.7f8fc522.svg"},81:function(e,a,t){e.exports=t(145)},86:function(e,a,t){},87:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.5a5acd15.chunk.js.map