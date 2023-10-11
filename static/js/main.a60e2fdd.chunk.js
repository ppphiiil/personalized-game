(this["webpackJsonpkenny-app"]=this["webpackJsonpkenny-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(32),a=n.n(o),s=n(9);n(95);var c=n(2),l=i.a.createContext(null);l.displayName="ServiceContext";var u,d=function(e){var t=e.children,n=e.services;return Object(c.jsx)(l.Provider,{value:n,children:t})},h=(u=l,function(){var e=Object(r.useContext)(u);if(null===e)throw new Error("".concat(u.displayName," is null, wrap your component with a matching Provider"));return e}),p=n(19),m=n.n(p),v=n(27),j=n(14),f=n(18),b=n(23),g=n(22),O=function(){function e(t,n){Object(j.a)(this,e),this.animation=this.animateJumper(50,7e3,450,7e3),this.jumperImage=void 0,this.onShotJumper=function(){},this.onPlaySound=function(){},this.onShotJumper=n,this.onPlaySound=this.onPlaySound,this.jumperImage=t}return Object(f.a)(e,[{key:"_animationDuration",get:function(){var e,t,n,r;return void 0!==(null===(e=this.animation.jumpAnimation)||void 0===e?void 0:e.duration)&&void 0!==(null===(t=this.animation.headAnimation)||void 0===t?void 0:t.duration)?(null===(n=this.animation.jumpAnimation)||void 0===n?void 0:n.duration)+(null===(r=this.animation.headAnimation)||void 0===r?void 0:r.duration):0}},{key:"animateJumper",value:function(e,t,n,r){return{headAnimation:{height:e,duration:t},jumpAnimation:{height:n-350+350*Math.random(),duration:r-r/2+Math.random()*(r/2)}}}},{key:"jump",value:function(){}}]),e}(),y=n.p+"static/media/phil.a5235af3.png",x=n.p+"static/media/phil.45ad2d00.wav",S=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,y,e)).animation=r.animateJumper(50,2e3,450,5e3),r.onPlaySound=function(){new Audio(x)},r}return n}(O),w=n(143),E=n.p+"static/media/hui.a420bb99.wav",k=n.p+"static/media/kenny.946c358c.png";console.log("RENDERED KENNY CLASS");var R=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e,r){var i;return Object(j.a)(this,n),(i=t.call(this,k,e)).onPlaySound=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Audio(E),console.log("play sound"),e.next=4,t.play();case 4:case"end":return e.stop()}}),e)}))),i.animation=i.animateJumper(30,2e3,r,6e3),i}return n}(O),L=n(68),A=function(e,t,n){var r=new URL(e,t);return n&&(r.search=new URLSearchParams(Object(L.omitBy)(n,L.isUndefined)).toString()),r},N=(new Audio(E),function(){function e(t){var n=this;Object(j.a)(this,e),this.playerInstance=t,this.isGameRunning=!1,this.countDown=0,this.gameDuration=0,this.listeners={},this.amountOfJumpers=0,this.levelScore=0,this.totalScore=0,this.jumpersArray=[],this.level=1,this.controlerBoard=void 0,this.player=void 0,this.createJumpersForGame=function(e,t){var r=[];console.log("RENDER createJumpersForGame");for(var i=function(e){console.log("Render create kenny ".concat(e));var t=new R((function(){console.log("Render Shot kenny ".concat(e)),n.isGameRunning&&(n.levelScore++,n.updateListener())}),.8*window.innerHeight);r.push(t)},o=0;o<e;o++)i(o);if(t){var a=new S((function(){n.isGameRunning&&(n.levelScore--,n.updateListener())}));r.push(a)}n.jumpersArray=r},this.init(),this.player=t}return Object(f.a)(e,[{key:"_jumpersArray",get:function(){return this.jumpersArray}},{key:"init",value:function(){var e=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("INIT"),this.isGameRunning=!1,"string"===typeof(t=localStorage.getItem("game"))&&((n=JSON.parse(t))&&(this.isGameRunning=n.isGameRunning,this.countDown=n.countDown,this.gameDuration=n.gameDuration,this.amountOfJumpers=n.amountOfJumpers,this.levelScore=n.levelScore,this.totalScore=n.totalScore,this.jumpersArray=n.jumpersArray,this.level=n.level,this.controlerBoard=n.controlerBoard),this.startNewLevel());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createPlayer",value:function(){var e=Object(v.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("CREATE PLAYER"),e.next=3,this.player.createPlayer(t,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateScore",value:function(){var e=Object(v.a)(m.a.mark((function e(t,n,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.player.updateScore(t,n,r);case 2:this.totalScore=e.sent,this.updateListener();case 4:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getRanking",value:function(){var e=Object(v.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Request(A("/api/v1/ranking/",Q).toString(),{method:"GET",headers:{"Content-Type":"application/json"}}),e.prev=1,e.next=4,fetch(t);case 4:if(!(n=e.sent)){e.next=12;break}return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r.ranking);case 12:throw new Error("Error while getting response");case 13:e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(1),console.log("ERROR",e.t0),new Error("Error while fetch");case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"startNewLevel",value:function(){var e=this;switch(console.log("STARTNEWLEVEL"),this.level){case 1:this.controlerBoard={title:"Kenny\xb4s du ausl\xf6schen musst!",description:"Schie\xdfe so viele Kenny's ab, wie du kannst.",buttonText:"Start 1",onClick:function(){return e.startNewGame(1e4,1)}},console.log("LEVEL1"),this.updateListener(),console.log("LEVEL1");break;case 2:console.log("start level 2"),this.controlerBoard={buttonText:"Start 2",title:"Kenny\xb4s du ausl\xf6schen musst!",description:"Schie\xdfe so viele Kenny's ab, wie du kannst.",onClick:function(){return e.startNewGame(1e4,3)}},console.log("LEVEL2"),this.updateListener(),console.log("LEVEL2");break;case 3:console.log("start level 2"),this.controlerBoard={buttonText:"Start",title:"Kenny\xb4s du ausl\xf6schen musst!",description:"Schie\xdfe so viele Kenny's ab, wie du kannst.",onClick:function(){return e.startNewGame(15e3,6,!0)}},this.updateListener();break;case 4:console.log("start level 2"),this.controlerBoard={buttonText:"Start",title:"Kenny\xb4s du ausl\xf6schen musst!",description:"Schie\xdfe so viele Kenny's ab, wie du kannst.",onClick:function(){return e.startNewGame(15e3,8,!0)}},this.updateListener();break;case 5:console.log("start level 2"),this.controlerBoard={buttonText:"Start",title:"Kenny\xb4s du ausl\xf6schen musst!",description:"Schie\xdfe so viele Kenny's ab, wie du kannst.",onClick:function(){return e.startNewGame(19e3,11,!0)}},this.updateListener();break;default:this.controlerBoard={buttonText:"Beenden",title:"Du Alle Kenny\xb4s erwischt hast.",description:"Nix weiter f\xfcr dich zu tun gibt",onClick:function(){return console.log("END")}},this.updateListener()}}},{key:"goToNextLevel",value:function(){console.log("GOTONEXTLEVEL"),this.level++,this.startNewLevel()}},{key:"startNewGame",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.log("STARTNEWGAME"),this.isGameRunning=!0,this.levelScore=0,this.gameDuration=e,this.amountOfJumpers=t,this.createJumpersForGame(this.amountOfJumpers,r),this.startCountDown(this.gameDuration,(function(){var i;n.isGameRunning=!1,n.jumpersArray=[],console.log(" this.level",n.level),n.updateScore(null!==(i=localStorage.getItem("id"))&&void 0!==i?i:"",n.level,n.levelScore),console.log(" this.level",n.level),n.amountOfJumpers===n.levelScore?(console.log(" this.level in next",n.level),n.goToNextLevel(),n.updateListener()):n.controlerBoard={buttonText:"Wiederholen",title:"Du nicht alle Kenny\xb4s erwischt, du hast!",description:"Probiere es noch einmal.",onClick:function(){return n.startNewGame(e,t,r)}},n.updateListener()}))}},{key:"setIsGameRunning",set:function(e){this.isGameRunning=e}},{key:"addListener",value:function(e){var t=Object(w.a)();return this.listeners[t]=e,this.updateListener(),t}},{key:"removeListener",value:function(e){delete this.listeners[e]}},{key:"updateListener",value:function(){var e=this;localStorage.setItem("game",JSON.stringify({isGameRunning:this.isGameRunning,countDown:this.countDown,gameDuration:this.gameDuration,amountOfJumpers:this.amountOfJumpers,levelScore:this.levelScore,totalScore:this.totalScore,jumpersArray:this.jumpersArray,level:this.level,controlerBoard:this.controlerBoard})),Object.values(this.listeners).forEach((function(t){return t({isGameRunning:e.isGameRunning,countDown:e.countDown,gameDuration:e.gameDuration,amountOfJumpers:e.amountOfJumpers,levelScore:e.levelScore,totalScore:e.totalScore,jumpersArray:e.jumpersArray,level:e.level,controlerBoard:e.controlerBoard})}))}},{key:"startCountDown",value:function(e,t){var n=this,r=(new Date).getTime()+e,i=setInterval((function(){var e=(new Date).getTime(),o=r-e,a=Math.floor((o%6e4-10)/1e3);o<=0&&(t(),clearInterval(i)),console.log("updateListener"),n.updateListener(),n.countDown=a}),1e3)}}]),e}()),D=function(){function e(){Object(j.a)(this,e),this.level=0,this.name="",this.shotJumpers=0}return Object(f.a)(e,[{key:"setName",value:function(e){this.name=e}},{key:"setLevel",value:function(e){this.level=e}},{key:"updateScore",value:function(){var e=Object(v.a)(m.a.mark((function e(t,n,r){var i,o,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new Request(A("/api/v1/ranking/".concat(t),Q).toString(),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({levelScore:r,level:n})}),e.prev=1,e.next=4,fetch(i);case 4:if(!(o=e.sent)){e.next=12;break}return e.next=8,o.json();case 8:return a=e.sent,e.abrupt("return",a.totalScore);case 12:throw new Error("Error while getting response");case 13:e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(1),console.log("ERROR",e.t0),new Error("Error while send result");case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"createPlayer",value:function(){var e=Object(v.a)(m.a.mark((function e(t,n){var r,i,o,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setName(t),!Q){e.next=20;break}return r=new Request(A("/api/v1/player",Q).toString(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(t," aka. ").concat(n)})}),e.prev=3,e.next=6,fetch(r);case 6:if(!(i=e.sent)){e.next=13;break}return e.next=10,i.json();case 10:o=e.sent,a=o.player._id,localStorage.setItem("id",a);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log("ERROR",e.t0);case 18:e.next=22;break;case 20:throw console.log("No REACT_APP_API_URL"),new Error("No REACT_APP_API_URL");case 22:case"end":return e.stop()}}),e,this,[[3,15]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"setShotJumpers",set:function(e){this.shotJumpers=e}},{key:"reset",value:function(){this.level=0,this.shotJumpers=0}}]),e}(),T={gameService:new N(new D)},G=n(3),C=n(62),J=(n(100),n(54)),P=(n(101),Object(J.a)("div")({position:"absolute",width:"150px",height:"200px",bottom:"0px",transition:"all 2s ease-in-out"}));function I(e){var t=e.position,n=e.jumpAt,i=e.jumperImage,o=e.onShotJumper,a=e.onPlaySound,l=e.animation,u=Object(r.useState)(!1),d=Object(s.a)(u,2),h=(d[0],d[1]),p=Object(r.useState)(!1),m=Object(s.a)(p,2),v=m[0],j=m[1],f=Object(r.useRef)(null);Object(r.useRef)(null);Object(r.useEffect)((function(){console.log("rendered animationheader"),setTimeout(b,n)}),[]);var b=function(){var e,t,n=new KeyframeEffect(f.current,[{bottom:"0px",easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"},{bottom:"".concat(null===(e=l.headAnimation)||void 0===e?void 0:e.height,"px"),easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"},{bottom:"0px",easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"}],{duration:null===(t=l.headAnimation)||void 0===t?void 0:t.duration}),r=new Animation(n);console.log("animation show head"),r.play(),r.addEventListener("finish",(function(e){var t,n;console.log("animation finish"),a();var r=new KeyframeEffect(f.current,[{bottom:"0px",easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"},{bottom:"".concat(null===(t=l.jumpAnimation)||void 0===t?void 0:t.height,"px"),easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"},{bottom:"0px",easing:"cubic-bezier(0.5, 0.02, 0.28, 1.01)"}],{duration:null===(n=l.jumpAnimation)||void 0===n?void 0:n.duration});new Animation(r).play()}))};return Object(c.jsx)(c.Fragment,{children:!v&&Object(c.jsx)(P,{ref:f,style:{left:"".concat(t,"px"),width:"150px",height:"0px",position:"absolute",display:"block"},children:Object(c.jsx)("img",{draggable:!1,ref:f,onClick:function(e){var t;t=o,h(!1),j(!0),t(),j(!0)},style:{width:"150px"},src:i})})})}var _,B=n(144),K=n(147),z=["jumpers","onStartGame","gameInfos","isLoading"],U=Object(J.a)("div")({display:"flex",position:"absolute",color:"white",top:"0px",left:"0px"}),V=function(e){var t=e.jumpers,n=(e.onStartGame,e.gameInfos),i=e.isLoading,o=Object(C.a)(e,z);console.log("RENDER BOARD");var a=Object(r.useState)([]),l=Object(s.a)(a,2),u=l[0],d=l[1],h=Object(r.useRef)(null),p=0;return Object(r.useEffect)((function(){h.current&&(p=h.current.offsetWidth-80)})),Object(r.useEffect)((function(){var e=t.map((function(e){return Object(c.jsx)(c.Fragment,{children:n&&Object(c.jsx)(I,{position:Math.random()*p,jumpAt:Math.random()*(n.gameDuration-e._animationDuration),jumperImage:e.jumperImage,onShotJumper:e.onShotJumper,onPlaySound:e.onPlaySound,animation:e.animation})})}));console.log("setJumperElements"),d(e)}),[t]),Object(c.jsxs)("div",Object(G.a)(Object(G.a)({ref:h,id:"board"},o),{},{children:[Object(c.jsxs)(U,{children:[Object(c.jsxs)("div",{style:{padding:10},children:[Object(c.jsx)("h2",{style:{opacity:.5,color:"inherit"},children:"Time"}),Object(c.jsx)("h2",{style:{textAlign:"center",color:"inherit"},children:null===n||void 0===n?void 0:n.countDown})]}),Object(c.jsxs)("div",{style:{padding:10},children:[Object(c.jsx)("h2",{style:{opacity:.5,color:"inherit"},children:"Shots"}),Object(c.jsx)("h2",{style:{color:"inherit"},children:(null===n||void 0===n?void 0:n.levelScore)+" of "+(null===n||void 0===n?void 0:n.amountOfJumpers)})]}),Object(c.jsxs)("div",{style:{padding:10,color:"inherit"},children:[Object(c.jsx)("h2",{style:{opacity:.5,color:"inherit"},children:"Total"}),Object(c.jsx)("h2",{style:{color:"inherit"},children:null===n||void 0===n?void 0:n.totalScore})]})]}),i&&Object(c.jsx)("div",{style:{zIndex:1e3,width:"50%"},className:"loading",children:Object(c.jsx)(B.a,{xs:!0,item:!0,children:Object(c.jsx)(K.a,{color:"primary"})})}),!(null===n||void 0===n?void 0:n.isGameRunning)&&localStorage.getItem("id")&&void 0!==(null===n||void 0===n?void 0:n.controlerBoard)&&Object(c.jsx)("div",{className:"boardStartDialogContainer",children:Object(c.jsxs)("div",{className:"boardStartDialog",children:[Object(c.jsx)("h1",{style:{textAlign:"center",color:"white",opacity:.9,fontSize:"3rem"},children:"Level ".concat(null===n||void 0===n?void 0:n.level)}),Object(c.jsx)("h1",{style:{textAlign:"center"},children:n.controlerBoard.title}),Object(c.jsx)("p",{style:{textAlign:"center"},children:n.controlerBoard.description}),Object(c.jsx)("button",{style:{alignSelf:"center",width:"50%"},className:"button",onClick:function(){var e;return null===n||void 0===n||null===(e=n.controlerBoard)||void 0===e?void 0:e.onClick()},children:n.controlerBoard.buttonText})]})}),u.map((function(e,t){return console.log("Render kenny at position ".concat(t)),e}))]}))},W=n(148),F=n(145),M=n(140),H=n(141),q=function(){var e;console.log("RENDER GAMEPAGE");var t=Object(r.useState)(null),n=Object(s.a)(t,2),i=n[0],o=n[1],a=Object(r.useState)(""),l=Object(s.a)(a,2),u=l[0],d=l[1],p=Object(r.useState)(""),j=Object(s.a)(p,2),f=j[0],b=j[1],g=h().gameService,O=function(e){var t=h().gameService;return Object(H.a)(["ranking",e],Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRanking();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),{onSuccess:function(){console.log("SUCCESS RANKING")},onError:function(e){console.log(e),console.log("ERROR RANKING")}})}(null===i||void 0===i?void 0:i.totalScore),y=O.data,x=(O.isLoading,O.error,function(){var e=h().gameService;return Object(W.a)(function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.createPlayer(n.firstName,n.fightName);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{onSuccess:function(){e.startNewLevel(),console.log("START NEW LEVEL")},onError:function(e){console.log(e),console.log("ERROR WHILE CREATING PLAYER")}})}()),S=x.mutate,w=(x.error,x.isLoading);return Object(r.useEffect)((function(){var e=g.addListener((function(e){o(e)}));return function(){return g.removeListener(e)}}),[g]),console.log("gameService._jumpersArray",g._jumpersArray),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(V,{className:"board",onStartGame:function(){g.startNewLevel()},gameInfos:i,jumpers:null!==(e=g._jumpersArray)&&void 0!==e?e:[],isLoading:w}),!localStorage.getItem("id")&&Object(c.jsx)("div",{className:"boardStartDialogContainer",children:Object(c.jsxs)("div",{className:"boardStartDialog",children:[Object(c.jsx)("h1",{children:"Das Spiel beginnen lassen muss!"}),Object(c.jsxs)(F.a,{style:{display:"flex",flexDirection:"column",padding:"30px",gap:"30px"},children:[Object(c.jsx)(M.a,{label:"Vorname",value:u,onChange:function(e){d(e.target.value)}}),Object(c.jsx)(M.a,{label:"Kampfname",value:f,onChange:function(e){b(e.target.value)}}),Object(c.jsx)("button",{className:"button",type:"submit",onClick:function(){console.log(u,f),S({firstName:u,fightName:f})},children:"weiter"})]})]})})]}),w?Object(c.jsx)("div",{style:{zIndex:1e3,width:"50%"},className:"loading",children:Object(c.jsx)(B.a,{xs:!0,item:!0,children:Object(c.jsx)(K.a,{color:"primary"})})}):y&&Object(c.jsx)("div",{style:{padding:30},children:Object(c.jsxs)("table",{style:{width:"100%"},children:[Object(c.jsx)("th",{align:"left",style:{padding:"20px"},children:Object(c.jsx)("td",{children:""})}),Object(c.jsx)("th",{align:"left",style:{padding:"20px",opacity:.3},children:Object(c.jsx)("td",{children:"Spieler"})}),Object(c.jsx)("th",{align:"center",style:{padding:"20px",opacity:.3},children:Object(c.jsx)("td",{children:"Shot Kenny`s"})}),Object(c.jsx)("th",{align:"center",style:{padding:"20px",opacity:.3},children:Object(c.jsx)("td",{children:"Level"})}),y.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{align:"left",children:function(){switch(t+1){case 1:return Object(c.jsx)("h2",{style:{padding:20,color:"gold",fontSize:"2rem"},children:t+1});case 2:return Object(c.jsx)("h2",{style:{padding:20,color:"silver",fontSize:"2rem"},children:t+1});case 3:return Object(c.jsx)("h2",{style:{padding:20,color:"#cd7f32",fontSize:"2rem"},children:t+1});default:return Object(c.jsx)("h2",{style:{padding:20,opacity:.3},children:t+1})}}()}),Object(c.jsx)("td",{align:"left",children:Object(c.jsx)("h2",{style:{padding:20,opacity:t+1>3?.3:1},children:e.name})}),Object(c.jsx)("td",{align:"center",children:Object(c.jsx)("h2",{style:{padding:20,opacity:t+1>3?.3:1},children:e.totalScore})}),Object(c.jsx)("td",{align:"center",children:Object(c.jsx)("h2",{style:{padding:20,opacity:t+1>3?.3:1},children:"LEVEL "+e.level})})]})}))]})})]})},Y=n(142),X=n(56),Q=null!==(_=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL)&&void 0!==_?_:"http://localhost:5002/";var Z=function(){Object(r.useRef)(null);var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=(t[0],t[1],new Y.a);return Object(c.jsx)(d,{services:T,children:Object(c.jsx)(X.a,{client:n,children:Object(c.jsx)(q,{})})})};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Z,{})}),document.getElementById("root"))},95:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.a60e2fdd.chunk.js.map