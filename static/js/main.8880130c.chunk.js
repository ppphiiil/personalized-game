(this["webpackJsonpkenny-app"]=this["webpackJsonpkenny-app"]||[]).push([[0],{101:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(32),a=n.n(i),c=n(9);n(96);var s=n(2),l=o.a.createContext(null);l.displayName="ServiceContext";var u,d=function(e){var t=e.children,n=e.services;return Object(s.jsx)(l.Provider,{value:n,children:t})},h=(u=l,function(){var e=Object(r.useContext)(u);if(null===e)throw new Error("".concat(u.displayName," is null, wrap your component with a matching Provider"));return e}),p=n(19),m=n.n(p),v=n(24),j=n(14),f=n(18),g=n(23),b=n(22),y=function(){function e(t,n){Object(j.a)(this,e),this.animation=this.animateJumper(50,7e3,450,1e3),this.jumperImage=void 0,this.onShotJumper=function(){},this.onPlaySound=function(){},this.onShotJumper=n,this.jumperImage=t}return Object(f.a)(e,[{key:"_animationDuration",get:function(){var e,t,n,r;return void 0!==(null===(e=this.animation.jumpAnimation)||void 0===e?void 0:e.duration)&&void 0!==(null===(t=this.animation.headAnimation)||void 0===t?void 0:t.duration)?(null===(n=this.animation.jumpAnimation)||void 0===n?void 0:n.duration)+(null===(r=this.animation.headAnimation)||void 0===r?void 0:r.duration):0}},{key:"animateJumper",value:function(e,t,n,r){return{headAnimation:{height:e,duration:t},jumpAnimation:{height:n-350+350*Math.random(),duration:r-r/2+Math.random()*(r/2)}}}},{key:"jump",value:function(){}}]),e}(),x=n.p+"static/media/phil.a5235af3.png",O=n.p+"static/media/phil.45ad2d00.wav",w=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e,r){var o;return Object(j.a)(this,n),(o=t.call(this,x,e)).onPlaySound=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Audio(O),e.next=3,t.play();case 3:case"end":return e.stop()}}),e)}))),o.animation=o.animateJumper(50,2e3,450,5e3),o}return n}(y),S=n(143),E=n.p+"static/media/hui.a420bb99.wav",k=n.p+"static/media/kenny.946c358c.png";console.log("RENDERED KENNY CLASS");var R=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e,r){var o;return Object(j.a)(this,n),(o=t.call(this,k,e)).onPlaySound=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Audio(E),console.log("play sound"),e.next=4,t.play();case 4:case"end":return e.stop()}}),e)}))),o.animation=o.animateJumper(30,2e3,r,1e4),o}return n}(y),A=n(68),L=function(e,t,n){var r=new URL(e,t);return n&&(r.search=new URLSearchParams(Object(A.omitBy)(n,A.isUndefined)).toString()),r},N=(new Audio(E),function(){function e(t){var n=this;Object(j.a)(this,e),this.playerInstance=t,this.isGameRunning=!1,this.countDown=0,this.gameDuration=0,this.listeners={},this.amountOfJumpers=0,this.levelScore=0,this.totalScore=0,this.jumpersArray=[],this.level=1,this.controlerBoard=void 0,this.player=void 0,this.createJumpersForGame=function(e,t){var r=[];console.log("RENDER createJumpersForGame");for(var o=function(e){console.log("Render create kenny ".concat(e));var t=new R((function(){console.log("Render Shot kenny ".concat(e)),n.isGameRunning&&(n.levelScore++,n.updateListener())}),.8*window.innerHeight);r.push(t)},i=0;i<e;i++)o(i);if(t){var a=new w((function(){n.isGameRunning&&(n.levelScore--,n.updateListener())}),.8*window.innerHeight);r.push(a)}n.jumpersArray=r},this.init(),this.player=t}return Object(f.a)(e,[{key:"_jumpersArray",get:function(){return this.jumpersArray}},{key:"init",value:function(){var e=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("INIT"),"string"===typeof(t=localStorage.getItem("game"))&&((n=JSON.parse(t))&&(this.isGameRunning=n.isGameRunning,this.countDown=n.countDown,this.gameDuration=n.gameDuration,this.amountOfJumpers=n.amountOfJumpers,this.levelScore=n.levelScore,this.totalScore=n.totalScore,this.jumpersArray=n.jumpersArray,this.level=n.level,this.controlerBoard=n.controlerBoard),this.isGameRunning=!1,this.startNewLevel());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createPlayer",value:function(){var e=Object(v.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("CREATE PLAYER"),e.next=3,this.player.createPlayer(t,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateScore",value:function(){var e=Object(v.a)(m.a.mark((function e(t,n,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.player.updateScore(t,n,r);case 2:this.totalScore=e.sent,this.updateListener();case 4:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getRanking",value:function(){var e=Object(v.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Request(L("/api/v1/ranking/",oe).toString(),{method:"GET",headers:{"Content-Type":"application/json"}}),e.prev=1,e.next=4,fetch(t);case 4:if(!(n=e.sent)){e.next=12;break}return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r.ranking);case 12:throw new Error("Error while getting response");case 13:e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(1),console.log("server is down!!"),new Error("Error: ".concat(e.t0));case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"startNewLevel",value:function(){var e=this;console.log("STARTNEWLEVEL"),1===this.level?this.controlerBoard={title:"Kenny\xb4s du ausl\xf6schen musst!",description:"Schie\xdfe so viele Kenny's ab, wie du kannst.",buttonText:"Start",onClick:function(){return e.startNewGame(1e4,1,!1)}}:this.controlerBoard={title:"Kenny\xb4s du ausl\xf6schen musst!",description:"Schie\xdfe so viele Kenny's ab, wie du kannst.",buttonText:"Start",onClick:function(){return e.startNewGame(1e4+1e3*e.level,1+2*e.level,!0)}},console.log("LEVEL1"),this.updateListener(),console.log("LEVEL1")}},{key:"goToNextLevel",value:function(){console.log("GOTONEXTLEVEL"),this.level++,this.startNewLevel()}},{key:"startNewGame",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.log("STARTNEWGAME"),this.isGameRunning=!0,this.levelScore=0,this.gameDuration=e,this.amountOfJumpers=t,this.createJumpersForGame(this.amountOfJumpers,r),this.startCountDown(this.gameDuration,(function(){var o;n.isGameRunning=!1,n.jumpersArray=[],n.countDown=0,n.updateScore(null!==(o=localStorage.getItem("id"))&&void 0!==o?o:"",n.level,n.levelScore),console.log(" this.level",n.level),n.amountOfJumpers===n.levelScore?(console.log(" this.level in next",n.level),n.goToNextLevel(),n.updateListener()):n.controlerBoard={buttonText:"Wiederholen",title:"Du nicht alle Kenny\xb4s erwischt, du hast!",description:"Probiere es noch einmal.",onClick:function(){return n.startNewGame(e,t,r)}},n.updateListener()}))}},{key:"setIsGameRunning",set:function(e){this.isGameRunning=e}},{key:"addListener",value:function(e){var t=Object(S.a)();return this.listeners[t]=e,this.updateListener(),t}},{key:"removeListener",value:function(e){delete this.listeners[e]}},{key:"updateListener",value:function(){var e=this;localStorage.setItem("game",JSON.stringify({isGameRunning:this.isGameRunning,countDown:this.countDown,gameDuration:this.gameDuration,amountOfJumpers:this.amountOfJumpers,levelScore:this.levelScore,totalScore:this.totalScore,jumpersArray:this.jumpersArray,level:this.level,controlerBoard:this.controlerBoard})),Object.values(this.listeners).forEach((function(t){return t({isGameRunning:e.isGameRunning,countDown:e.countDown,gameDuration:e.gameDuration,amountOfJumpers:e.amountOfJumpers,levelScore:e.levelScore,totalScore:e.totalScore,jumpersArray:e.jumpersArray,level:e.level,controlerBoard:e.controlerBoard})}))}},{key:"startCountDown",value:function(e,t){var n=this,r=(new Date).getTime()+e,o=setInterval((function(){var e=(new Date).getTime(),i=r-e,a=Math.floor((i%6e4-10)/1e3);console.log("seconds",a),i<=0&&(t(),clearInterval(o)),console.log("updateListener"),n.updateListener(),n.countDown=a+1}),1e3)}}]),e}()),D=function(){function e(){Object(j.a)(this,e),this.level=0,this.name="",this.shotJumpers=0}return Object(f.a)(e,[{key:"setName",value:function(e){this.name=e}},{key:"setLevel",value:function(e){this.level=e}},{key:"updateScore",value:function(){var e=Object(v.a)(m.a.mark((function e(t,n,r){var o,i,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new Request(L("/api/v1/ranking/".concat(t),oe).toString(),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({levelScore:r,level:n})}),e.prev=1,e.next=4,fetch(o);case 4:if(!(i=e.sent)){e.next=12;break}return e.next=8,i.json();case 8:return a=e.sent,e.abrupt("return",a.totalScore);case 12:throw new Error("Error while getting response");case 13:e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(1),console.log("ERROR",e.t0),new Error("Error while send result");case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"createPlayer",value:function(){var e=Object(v.a)(m.a.mark((function e(t,n){var r,o,i,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setName(t),!oe){e.next=20;break}return r=new Request(L("/api/v1/player",oe).toString(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(t," aka. ").concat(n)})}),e.prev=3,e.next=6,fetch(r);case 6:if(!(o=e.sent)){e.next=13;break}return e.next=10,o.json();case 10:i=e.sent,a=i.player._id,localStorage.setItem("id",a);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log("ERROR",e.t0);case 18:e.next=22;break;case 20:throw console.log("No REACT_APP_API_URL"),new Error("No REACT_APP_API_URL");case 22:case"end":return e.stop()}}),e,this,[[3,15]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"setShotJumpers",set:function(e){this.shotJumpers=e}},{key:"reset",value:function(){this.level=0,this.shotJumpers=0}}]),e}(),T={gameService:new N(new D)},J=n(3),G=n(62),C=(n(74),n(54)),I=(n(101),Object(C.a)("div")({position:"absolute",width:"150px",height:"200px",bottom:"0px",transition:"all 2s ease-in-out"}));function P(e){var t=e.position,n=e.jumpAt,o=e.jumperImage,i=e.onShotJumper,a=e.onPlaySound,l=e.animation,u=Object(r.useState)(),d=Object(c.a)(u,2),h=d[0],p=d[1],m=Object(r.useState)(!1),v=Object(c.a)(m,2),j=v[0],f=v[1],g=Object(r.useRef)(null);Object(r.useRef)(null);Object(r.useEffect)((function(){return console.log("rendered animationheader"),setTimeout((function(){var e=b();p(e)}),n),function(){console.log("UNMOUNT")}}),[]);var b=function(){var e,t,n=new KeyframeEffect(g.current,[{bottom:"0px",easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"},{bottom:"".concat(null===(e=l.headAnimation)||void 0===e?void 0:e.height,"px"),easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"},{bottom:"0px",easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"}],{duration:null===(t=l.headAnimation)||void 0===t?void 0:t.duration}),r=new Animation(n);return console.log("animation show head"),r.play(),r.addEventListener("finish",(function(e){var t,n;console.log("animation finish"),a();var r=new KeyframeEffect(g.current,[{bottom:"0px",easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"},{bottom:"".concat(null===(t=l.jumpAnimation)||void 0===t?void 0:t.height,"px"),easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"},{bottom:"0px",easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"}],{duration:null===(n=l.jumpAnimation)||void 0===n?void 0:n.duration});new Animation(r).play()})),r.addEventListener("cancel",(function(e){console.log("animation cancel");var t=new KeyframeEffect(g.current,[{transform:"scale(1)"},{transform:"scale(0)",zIndex:0}],{duration:200});new Animation(t).play()})),r};return Object(s.jsx)(s.Fragment,{children:!j&&Object(s.jsx)(I,{ref:g,style:{left:"".concat(t,"px"),width:"150px",height:"0px",position:"absolute",display:"block"},children:Object(s.jsx)("img",{ref:g,draggable:!1,onClick:function(e){!function(e){h&&h.cancel(),e()}(i),setTimeout((function(){return f(!0)}),200)},style:{width:"150px"},src:o})})})}var B=n(144),_=n(147),z=["jumpers","onStartGame","gameInfos","isLoading"],K=Object(C.a)("div")({display:"flex",position:"absolute",color:"white",top:"0px",left:"0px"}),M=function(e){var t=e.jumpers,n=(e.onStartGame,e.gameInfos),o=e.isLoading,i=Object(G.a)(e,z);console.log("RENDER BOARD");var a=Object(r.useState)([]),l=Object(c.a)(a,2),u=l[0],d=l[1],h=Object(r.useRef)(null),p=0;return Object(r.useEffect)((function(){h.current&&(p=h.current.offsetWidth-80)})),Object(r.useEffect)((function(){var e=t.map((function(e){return Object(s.jsx)(s.Fragment,{children:n&&Object(s.jsx)(P,{position:Math.random()*p,jumpAt:Math.random()*(n.gameDuration-e._animationDuration),jumperImage:e.jumperImage,onShotJumper:e.onShotJumper,onPlaySound:e.onPlaySound,animation:e.animation})})}));console.log("setJumperElements"),d(e)}),[t]),Object(s.jsxs)("div",Object(J.a)(Object(J.a)({ref:h,id:"board"},i),{},{children:[Object(s.jsxs)(K,{children:[Object(s.jsxs)("div",{style:{padding:10},children:[Object(s.jsx)("h2",{style:{opacity:.5,color:"inherit"},children:"Time"}),Object(s.jsx)("h2",{style:{textAlign:"center",color:"inherit"},children:null===n||void 0===n?void 0:n.countDown})]}),Object(s.jsxs)("div",{style:{padding:10},children:[Object(s.jsx)("h2",{style:{opacity:.5,color:"inherit"},children:"Shots"}),Object(s.jsx)("h2",{style:{color:"inherit"},children:(null===n||void 0===n?void 0:n.levelScore)+" of "+(null===n||void 0===n?void 0:n.amountOfJumpers)})]}),Object(s.jsxs)("div",{style:{padding:10,color:"inherit"},children:[Object(s.jsx)("h2",{style:{opacity:.5,color:"inherit"},children:"Total"}),Object(s.jsx)("h2",{style:{color:"inherit"},children:null===n||void 0===n?void 0:n.totalScore})]})]}),o&&Object(s.jsx)("div",{style:{zIndex:1e3,width:"50%"},className:"loading",children:Object(s.jsx)(B.a,{xs:!0,item:!0,children:Object(s.jsx)(_.a,{color:"primary"})})}),!(null===n||void 0===n?void 0:n.isGameRunning)&&localStorage.getItem("id")&&void 0!==(null===n||void 0===n?void 0:n.controlerBoard)&&Object(s.jsx)("div",{className:"boardStartDialogContainer",children:Object(s.jsxs)("div",{className:"boardStartDialog",children:[Object(s.jsx)("h1",{style:{textAlign:"center",color:"white",opacity:.9,fontSize:"3rem"},children:"Level ".concat(null===n||void 0===n?void 0:n.level)}),Object(s.jsx)("h1",{style:{textAlign:"center"},children:n.controlerBoard.title}),Object(s.jsx)("p",{style:{textAlign:"center"},children:n.controlerBoard.description}),Object(s.jsx)("button",{style:{alignSelf:"center",width:"50%"},className:"button",onClick:function(){var e;return null===n||void 0===n||null===(e=n.controlerBoard)||void 0===e?void 0:e.onClick()},children:n.controlerBoard.buttonText})]})}),u.map((function(e,t){return console.log("Render kenny at position ".concat(t)),e}))]}))},U=n.p+"static/media/spaceKenny.d1fc9d57.png",F=n(148),V=n(145),W=n(140),Y=n(141),X=new Date("2023-10-19T10:00:00.000Z"),q=new Date("2023-10-19T11:02:00.000Z"),H=X.getTime()-q.getTime(),Z=Math.floor(H/864e5),Q=Math.floor(H%864e5/36e5),$=Math.floor(H%36e5/6e4),ee=Math.floor(H%6e4/1e3),te=function(){var e;console.log("RENDER GAMEPAGE");var t=Object(r.useState)(null),n=Object(c.a)(t,2),o=n[0],i=n[1],a=Object(r.useState)(""),l=Object(c.a)(a,2),u=l[0],d=l[1],p=Object(r.useState)(""),j=Object(c.a)(p,2),f=j[0],g=j[1],b=h().gameService,y=function(e){var t=h().gameService;return Object(Y.a)(["ranking",e],Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRanking();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),{onSuccess:function(){console.log("SUCCESS RANKING")},onError:function(e){console.log(e),console.log("ERROR RANKING")}})}(null===o||void 0===o?void 0:o.totalScore),x=y.data,O=(y.isLoading,y.error),w=function(){var e=h().gameService;return Object(F.a)(function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.createPlayer(n.firstName,n.fightName);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{onSuccess:function(){e.startNewLevel(),console.log("START NEW LEVEL")},onError:function(e){console.log(e),console.log("ERROR WHILE CREATING PLAYER")}})}(),S=w.mutate,E=w.error,k=w.isLoading;return Object(r.useEffect)((function(){var e=b.addListener((function(e){i(e)}));return function(){return b.removeListener(e)}}),[b]),console.log("gameService._jumpersArray",b._jumpersArray),E||O?Object(s.jsx)("div",{children:"Server is down"}):Object(s.jsx)(s.Fragment,{children:H>0?Object(s.jsxs)("div",{className:"board",style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(s.jsx)("img",{src:U,style:{width:"100%"}}),Object(s.jsx)("h2",{style:{color:"white"},children:"".concat(Z,"Tage ").concat(Q,"h ").concat($,"min ").concat(ee,"s")})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(M,{className:"board",onStartGame:function(){b.startNewLevel()},gameInfos:o,jumpers:null!==(e=b._jumpersArray)&&void 0!==e?e:[],isLoading:k}),!localStorage.getItem("id")&&Object(s.jsx)("div",{className:"boardStartDialogContainer",children:Object(s.jsxs)("div",{className:"boardStartDialog",children:[Object(s.jsx)("h1",{children:"Das Spiel beginnen lassen muss!"}),Object(s.jsxs)(V.a,{style:{display:"flex",flexDirection:"column",padding:"30px",gap:"30px"},children:[Object(s.jsx)(W.a,{label:"Vorname",value:u,onChange:function(e){d(e.target.value)}}),Object(s.jsx)(W.a,{label:"Kampfname",value:f,onChange:function(e){g(e.target.value)}}),Object(s.jsx)("button",{className:"button",type:"submit",onClick:function(){console.log(u,f),S({firstName:u,fightName:f})},children:"weiter"})]})]})})]}),k?Object(s.jsx)("div",{style:{zIndex:1e3,width:"50%"},className:"loading",children:Object(s.jsx)(B.a,{xs:!0,item:!0,children:Object(s.jsx)(_.a,{color:"primary"})})}):x&&Object(s.jsx)("div",{style:{padding:30},children:Object(s.jsxs)("table",{style:{width:"100%"},children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{align:"left",style:{padding:"20px"},children:""}),Object(s.jsx)("th",{align:"left",style:{padding:"20px",opacity:.3},children:"Spieler"}),Object(s.jsx)("th",{align:"center",style:{padding:"20px",opacity:.3},children:"Shot Kenny`s"}),Object(s.jsx)("th",{align:"center",style:{padding:"20px",opacity:.3},children:"Level"})]}),x.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{align:"left",children:function(){switch(t+1){case 1:return Object(s.jsx)("h2",{style:{padding:20,color:"gold",fontSize:"2rem"},children:t+1});case 2:return Object(s.jsx)("h2",{style:{padding:20,color:"silver",fontSize:"2rem"},children:t+1});case 3:return Object(s.jsx)("h2",{style:{padding:20,color:"#cd7f32",fontSize:"2rem"},children:t+1});default:return Object(s.jsx)("h2",{style:{padding:20,opacity:.3},children:t+1})}}()}),Object(s.jsx)("td",{align:"left",children:Object(s.jsx)("h2",{style:{padding:20,opacity:t+1>3?.3:1},children:e.name})}),Object(s.jsx)("td",{align:"center",children:Object(s.jsx)("h2",{style:{padding:20,opacity:t+1>3?.3:1},children:e.totalScore})}),Object(s.jsx)("td",{align:"center",children:Object(s.jsx)("h2",{style:{padding:20,opacity:t+1>3?.3:1},children:"LEVEL "+e.level})})]},t)}))]})}),O?Object(s.jsx)("h2",{children:"Error loading Ranking"}):null]})})},ne=n(142),re=n(56);var oe=function(e,t){if(void 0===e)throw new Error(t);return e}("https://api-personalized-game.vercel.app","REACT_APP_API_URL is not defined.");var ie=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),n=Object(c.a)(t,2),o=(n[0],n[1],new ne.a);function i(t){console.log("e.eventPhase",t.type),"mousedown"===t.type?null!==e.current&&(console.log("mouseCursor.current",e.current),e.current.style.top=t.pageY-100+"px",e.current.style.left=t.pageX-100+"px",e.current.classList.add("animation")):null!==e.current&&(console.log("mouseCursor.current",e.current),e.current.style.top=t.pageY-100+"px",e.current.style.left=t.pageX-100+"px",e.current.classList.remove("animation"))}return window.addEventListener("mousemove",(function(t){null!==e.current&&(console.log("mouseCursor.current",e.current),e.current.style.top=t.pageY-100+"px",e.current.style.left=t.pageX-100+"px")})),window.addEventListener("mouseup",i),window.addEventListener("mousedown",i),Object(s.jsx)(d,{services:T,children:Object(s.jsxs)(re.a,{client:o,children:[Object(s.jsx)(te,{}),Object(s.jsx)("div",{ref:e,className:"crosshair"})]})})};a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(ie,{})}),document.getElementById("root"))},74:function(e,t,n){},96:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.8880130c.chunk.js.map