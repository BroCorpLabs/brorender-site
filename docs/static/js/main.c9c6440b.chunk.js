(this["webpackJsonpmy-divjoy-project"]=this["webpackJsonpmy-divjoy-project"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(24),c=a.n(n),o=(a(72),a(38)),r=a(18),s=a(14),l=a(32),d=a(37),b=a(20),j=a(28),g=a(19),m=a(7),h=(a(60),a(12)),u=a(1),p=a(29),x=Object(h.a)();function O(e){var t=e.children;return Object(u.jsxs)(m.e,{history:x,basename:"/brorender-site/",children:[Object(u.jsx)(v,{}),t]})}function v(){var e=Object(m.l)();return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e.pathname]),null}var f=function(){return Promise.reject(new Error('Authentication is disabled because you chose "None" when picking an authentication option in Divjoy. Please go to the Divjoy homepage and choose an option or choose "Other" if you\'d like to integrate a different auth service after code export.'))};var y=function(e){var t={user:!1,signup:f,signin:f,signinWithProvider:f,signout:f,sendPasswordResetEmail:f,confirmPasswordReset:f,updateEmail:f,updatePassword:f,updateProfile:f};return Object(u.jsx)(o.a,{bg:e.bg,variant:e.variant,expand:e.expand,children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(s.LinkContainer,{to:"/",children:Object(u.jsx)(o.a.Brand,{children:Object(u.jsx)("img",{className:"d-inline-block align-top",src:e.logo,alt:"Logo",height:"30"})})}),Object(u.jsx)(o.a.Toggle,{"aria-controls":"navbar-nav",className:"border-0"}),Object(u.jsxs)(o.a.Collapse,{id:"navbar-nav",className:"justify-content-end",children:[Object(u.jsxs)(l.a,{className:"mr-1",children:[Object(u.jsx)(s.LinkContainer,{to:"/about",children:Object(u.jsx)(l.a.Link,{active:!1,children:"About"})}),Object(u.jsx)(s.LinkContainer,{to:"/pricing",children:Object(u.jsx)(l.a.Link,{active:!1,children:"Pricing"})}),Object(u.jsx)(s.LinkContainer,{to:"/faq",children:Object(u.jsx)(l.a.Link,{active:!1,children:"FAQ"})}),!t.user&&Object(u.jsx)(s.LinkContainer,{to:"/auth/signin",children:Object(u.jsx)(l.a.Link,{active:!1,children:"Sign in"})}),t.user&&Object(u.jsxs)(d.a,{id:"dropdown",title:"Account",alignRight:!0,children:[Object(u.jsx)(s.LinkContainer,{to:"/dashboard",children:Object(u.jsx)(d.a.Item,{active:!1,children:"Dashboard"})}),Object(u.jsx)(s.LinkContainer,{to:"/settings/general",children:Object(u.jsx)(d.a.Item,{active:!1,children:"Settings"})}),Object(u.jsx)(b.a.Divider,{}),Object(u.jsx)(s.LinkContainer,{to:"/auth/signout",children:Object(u.jsx)(d.a.Item,{active:!1,onClick:function(e){e.preventDefault(),t.signout()},children:"Sign out"})})]})]}),!t.user&&Object(u.jsx)(s.LinkContainer,{to:"/auth/signup",children:Object(u.jsx)(j.a,{variant:"primary",children:"Sign Up"})})]})]})})},C=a(45);a(94);var k=function(e){return Object(u.jsx)("div",{className:"BackgroundImage"+(e.repeat?" repeat":""),style:{"--image":"url(".concat(e.image,")"),"--opacity":e.opacity}})};a(95);var N=function(e){e.bg,e.textColor;var t=e.bgImage,a=e.bgImageOpacity,i=e.bgImageRepeat,n=e.className,c=(e.children,Object(C.a)(e,["bg","textColor","bgImage","bgImageOpacity","bgImageRepeat","className","children"]));return Object(u.jsxs)("section",Object(g.a)(Object(g.a)({className:"SectionComponent py-5 position-relative"+(e.bg?" bg-".concat(e.bg):"")+(e.textColor?" text-".concat(e.textColor):"")+(n?" ".concat(n):"")},c),{},{children:[t&&Object(u.jsx)(k,{image:t,opacity:a,repeat:i}),Object(u.jsx)("div",{className:(["md","lg"].includes(e.size)?" py-md-5":"")+("lg"===e.size?" my-md-5":""),children:e.children})]}))};a(96);var w=function(e){return e.title||e.subtitle?Object(u.jsxs)("header",{className:"SectionHeader"+(e.className?" ".concat(e.className):""),children:[e.title&&Object(u.jsx)("h1",{className:"font-weight-bold"+(e.subtitle&&e.spaced?" mb-4":"")+(e.subtitle?"":" mb-0")+(e.size?" h".concat(e.size):""),children:e.title}),e.subtitle&&Object(u.jsx)("p",{className:"SectionHeader__subtitle mb-0",children:e.subtitle})]}):null};var I=function(e){return Object(u.jsx)(N,{bg:e.bg,textColor:e.textColor,size:e.size,bgImage:e.bgImage,bgImageOpacity:e.bgImageOpacity,children:Object(u.jsx)(r.a,{className:"text-center",children:Object(u.jsx)(w,{title:e.title,subtitle:e.subtitle,size:1,spaced:!0})})})},z=a(44),L=a(36),_=a(47),S=a(53),P=a(43);var T=function(e){var t=e.size,a=Object(C.a)(e,["size"]);return Object(u.jsx)(P.a,Object(g.a)(Object(g.a)({},a),{},{roundedCircle:!0,style:{width:t,height:t}}))};var A=function(e){return Object(u.jsx)(N,{bg:e.bg,textColor:e.textColor,size:e.size,bgImage:e.bgImage,bgImageOpacity:e.bgImageOpacity,children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(w,{title:e.title,subtitle:e.subtitle,size:2,spaced:!0,className:"text-center"}),Object(u.jsx)(z.a,{className:"justify-content-center",children:[{avatar:"https://uploads.divjoy.com/pravatar-150x-5.jpeg",name:"Sarah Kline",testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",company:"Company"},{avatar:"https://uploads.divjoy.com/pravatar-150x-48.jpeg",name:"Shawna Murray",testimonial:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!",company:"Company"},{avatar:"https://uploads.divjoy.com/pravatar-150x-12.jpeg",name:"Blake Elder",testimonial:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.",company:"Company"}].map((function(e,t){return Object(u.jsx)(L.a,{xs:12,md:4,className:"py-3",children:Object(u.jsx)(_.a,{children:Object(u.jsxs)(_.a.Body,{className:"p-4",children:[Object(u.jsxs)(_.a.Text,{children:['"',e.testimonial,'"']}),Object(u.jsxs)(S.a,{className:"align-items-center mt-auto",children:[Object(u.jsx)(T,{src:e.avatar,alt:e.name,size:"56px"}),Object(u.jsxs)(S.a.Body,{className:"ml-2",children:[Object(u.jsx)("h6",{className:"font-weight-bold mb-0",children:e.name}),Object(u.jsx)("small",{children:e.company})]})]})]})})},t)}))})]})})};a(97);var E=function(e){return Object(u.jsx)(N,{bg:e.bg,textColor:e.textColor,size:e.size,bgImage:e.bgImage,bgImageOpacity:e.bgImageOpacity,className:"footer",children:Object(u.jsx)(r.a,{children:Object(u.jsxs)("div",{className:"FooterComponent__inner",children:[Object(u.jsx)("div",{className:"brand left",children:Object(u.jsx)(p.Link,{to:"/",children:Object(u.jsx)("img",{src:e.logo,alt:"Logo"})})}),Object(u.jsxs)("div",{className:"links right",children:[Object(u.jsx)(p.Link,{to:"/about",children:"About"}),Object(u.jsx)(p.Link,{to:"/faq",children:"FAQ"}),Object(u.jsx)(p.Link,{to:"/contact",children:"Contact"}),Object(u.jsx)("a",{target:"_blank",href:"https://medium.com",rel:"noopener noreferrer",children:"Blog"})]}),Object(u.jsxs)("div",{className:"social right",children:[Object(u.jsx)("a",{href:"https://twitter.com/divjoy",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fab fa-twitter"})})}),Object(u.jsx)("a",{href:"https://facebook.com/DivjoyOfficial",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(u.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fab fa-instagram"})})})]}),Object(u.jsx)("div",{className:"copyright left",children:e.copyright})]})})})};var D=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y,{bg:"white",variant:"light",expand:"md",logo:"https://uploads.divjoy.com/logo.svg"}),Object(u.jsx)("form",{action:"/file-upload",className:"dropzone",id:"my-awesome-dropzone",style:{boxShadow:"15 black",borderRadius:"10px",marginLeft:"auto",marginRight:"auto",width:"80vw",backgroundImage:"url(img/dragdrop-header.gif)",backgroundSize:"80%",backgroundPosition:"center"},children:Object(u.jsx)(I,{bg:"white",textColor:"dark",size:"md",bgImage:"",bgImageOpacity:1,title:"Upload a .blend file to begin",buttonText:"Get Started",buttonColor:"primary",buttonPath:"/pricing"})}),Object(u.jsx)(A,{bg:"white",textColor:"dark",size:"md",bgImage:"",bgImageOpacity:1,title:"Here's what people are saying",subtitle:""}),Object(u.jsx)(E,{bg:"white",textColor:"dark",size:"md",bgImage:"",bgImageOpacity:1,description:"A short description of what you do here",copyright:"\xa9 2020 Company",logo:"https://uploads.divjoy.com/logo.svg"})]})};a(98);var R=function(e){return Object(u.jsx)(N,{bg:e.bg,textColor:e.textColor,size:e.size,bgImage:e.bgImage,bgImageOpacity:e.bgImageOpacity,children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(z.a,{className:"align-items-center",children:[Object(u.jsxs)(L.a,{lg:5,className:"text-center text-lg-left",children:[Object(u.jsx)(w,{title:e.title,subtitle:e.subtitle,size:1,spaced:!0}),Object(u.jsx)(s.LinkContainer,{to:e.buttonPath,children:Object(u.jsx)(j.a,{variant:e.buttonColor,size:"lg",children:e.buttonText})})]}),Object(u.jsx)(L.a,{className:"offset-lg-1 mt-5 mt-lg-0 ",children:Object(u.jsx)("figure",{className:"HeroSection2__image-container mx-auto",children:Object(u.jsx)(P.a,{src:e.image,fluid:!0})})})]})})})};var q=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y,{bg:"white",variant:"light",expand:"md",logo:"https://uploads.divjoy.com/logo.svg"}),Object(u.jsx)(R,{bg:"white",textColor:"dark",size:"md",bgImage:"",bgImageOpacity:1,title:"Your landing page title here",subtitle:"This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan.",image:"https://uploads.divjoy.com/undraw-japan_ubgk.svg",buttonText:"Get Started",buttonColor:"primary",buttonPath:"/pricing"}),Object(u.jsx)(E,{bg:"white",textColor:"dark",size:"md",bgImage:"",bgImageOpacity:1,description:"A short description of what you do here",copyright:"\xa9 2020 Company",logo:"https://uploads.divjoy.com/logo.svg"})]})};var B=function(e){return Object(u.jsxs)("div",{style:{padding:"50px",width:"100%",textAlign:"center"},children:["The page ",Object(u.jsx)("code",{children:e.location.pathname})," could not be found"]})},F=a(64),H=a(67),W=Object(F.a)({debug:!1,plugins:[Object(H.a)({trackingId:Object({NODE_ENV:"production",PUBLIC_URL:"/brorender-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GA_TRACKING_ID})]});"undefined"!==typeof window&&W.page(),x.listen((function(){W.page()}));var K=function(e){return Object(u.jsx)(O,{children:Object(u.jsxs)(m.g,{children:[Object(u.jsx)(m.d,{exact:!0,path:"/",component:D}),Object(u.jsx)(m.d,{exact:!0,path:"/dash",component:q}),Object(u.jsx)(m.d,{component:B})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(u.jsx)(K,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.c9c6440b.chunk.js.map