(this.webpackJsonpxctuality=this.webpackJsonpxctuality||[]).push([[0],{38:function(e,t,a){e.exports=a(81)},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(32),l=a.n(r),i=a(5),o=a(1),s=a(4),m=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("header",null,c.a.createElement("div",{className:"inner-content ".concat(a&&"inner-content-bg")},c.a.createElement("div",{className:"brand"},c.a.createElement(i.b,{to:"/"},"Go.Live Events")),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(i.b,{to:"/"},c.a.createElement("i",{className:"fa-fw fas fa-home"}))),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/watchlist"},c.a.createElement("i",{className:"fa-fw far fa-heart"}))),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/cart"},c.a.createElement("i",{className:"fa-fw fa fa-shopping-cart"}))),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/add",className:"btn btn-main"},c.a.createElement("i",{className:"fa-fw fa fa-search"}))))))},u=a(17),d=a(11),v=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watchlist:[t.payload].concat(Object(u.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_CART":return Object(d.a)(Object(d.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload.id})),cart:[t.payload].concat(Object(u.a)(e.cart))});case"MOVE_TO_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id})),watchlist:[t.payload].concat(Object(u.a)(e.watchlist))});case"REMOVE_FROM_CART":return Object(d.a)(Object(d.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload}))});default:return e}},f={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]},E=Object(n.createContext)(f),p=function(e){var t=Object(n.useReducer)(v,f),a=Object(s.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(r.watchlist)),localStorage.setItem("cart",JSON.stringify(r.cart))}),[r]);return c.a.createElement(E.Provider,{value:{watchlist:r.watchlist,cart:r.cart,addMovieToWatchlist:function(e){l({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchlist:function(e){l({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToCart:function(e){l({type:"ADD_MOVIE_TO_CART",payload:e})},moveToWatchlist:function(e){l({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromCart:function(e){l({type:"REMOVE_FROM_CART",payload:e})}}},e.children)},h=function(e){var t=e.type,a=e.movie,r=Object(n.useContext)(E),l=r.removeMovieFromWatchlist,i=r.addMovieToCart,o=r.moveToWatchlist,s=r.removeFromCart;return c.a.createElement("div",{className:"inner-card-controls"},"watchlist"===t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"ctrl-btn",onClick:function(){return i(a)}},c.a.createElement("i",{className:"fa-fw fa fa-shopping-cart"})),c.a.createElement("button",{className:"ctrl-btn",onClick:function(){return l(a.id)}},c.a.createElement("i",{className:"fa-fw fa fa-times"}))),"cart"===t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"ctrl-btn",onClick:function(){return o(a)}},c.a.createElement("i",{className:"fa-fw fas fa-undo"})),c.a.createElement("button",{className:"ctrl-btn",onClick:function(){return s(a.id)}},c.a.createElement("i",{className:"fa-fw fa fa-times"}))))},b=function(e){var t=e.movie,a=e.type;return c.a.createElement("div",{className:"movie-card"},c.a.createElement("div",{className:"overlay"}),c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}),c.a.createElement(h,{type:a,movie:t}))},g=function(){var e=Object(n.useContext)(E).watchlist;return c.a.createElement("div",{className:"movie-page"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"heading"},"My Favourites"),c.a.createElement("span",{className:"count-pill"},e.length," ",1===e.length?"Movie":"Movies")),e.length>0?c.a.createElement("div",{className:"movie-grid"},e.map((function(e){return c.a.createElement(b,{movie:e,key:e.id,type:"watchlist"})}))):c.a.createElement("h2",{className:"no-movies"},"No movies in your list! Add some!")))},N=function(){var e=Object(n.useContext)(E).cart;return c.a.createElement("div",{className:"movie-page"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"heading"},"Shopping Cart"),c.a.createElement("span",{className:"count-pill"},e.length," ",1===e.length?"Movie":"Movies")),e.length>0?c.a.createElement("div",{className:"movie-grid"},e.map((function(e){return c.a.createElement(b,{movie:e,key:e.id,type:"cart"})}))):c.a.createElement("h2",{className:"no-movies"},"No movies in your cart! Add some!")))},O=a(34),w=a.n(O),_=function(e){var t=e.movie,a=Object(n.useContext)(E),r=a.addMovieToWatchlist,l=a.addMovieToCart,i=a.watchlist,o=a.cart,s=i.find((function(e){return e.id===t.id})),m=o.find((function(e){return e.id===t.id})),u=!!s||!!m,d=!!m;return c.a.createElement("div",{className:"result-card"},c.a.createElement("div",{className:"poster-wrapper"},t.poster_path?c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):c.a.createElement("div",{className:"filler-poster"})),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"header"},c.a.createElement("h3",{className:"title"},t.title),c.a.createElement("h4",{className:"release-date"},c.a.createElement(w.a,{format:"YYYY"},t.release_date))),c.a.createElement("div",{className:"controls"},c.a.createElement("button",{className:"btn",disabled:u,onClick:function(){return r(t)}},"Add to Favourites"),c.a.createElement("button",{className:"btn",disabled:d,onClick:function(){return l(t)}},"Add to Cart"))))},y=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),o=i[0],m=i[1];return c.a.createElement("div",{className:"add-page"},c.a.createElement("div",{className:"add-content"},c.a.createElement("div",{className:"input-wrapper"},c.a.createElement("input",{type:"text",placeholder:"Search for a movie",value:a,onChange:function(e){e.preventDefault(),r(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("d431e3825c6c47923e22a5dc91f52227","&language=en-US&page=1&include_adult=false&query=").concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?m([]):m(e.results)}))}})),o.length>0&&c.a.createElement("ul",{className:"results"},o.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(_,{movie:e}))})))))},j=a(10),C=a.n(j),k=a(12),T=function(e){var t,a,r=e.movie,l=Object(n.useContext)(E),o=l.addMovieToCart,s=l.moveToWatchlist,m=l.watchlist,u=l.cart,d=m.find((function(e){return e.id===r.id})),v=u.find((function(e){return e.id===r.id})),f=!!d||!!v,p=!!v;return c.a.createElement("div",{className:"listing-card"},c.a.createElement("div",{className:"overlay"},c.a.createElement(i.b,{to:"/movie/".concat(r.id)},c.a.createElement("h3",{className:"title"},r.title),c.a.createElement("div",{className:"overview"},(t=null===r||void 0===r?void 0:r.overview,a=100,(null===t||void 0===t?void 0:t.length)>a?t.substr(0,a-1)+" ...":t))),c.a.createElement("div",{className:"inner-card-controls"},c.a.createElement("button",{className:"ctrl-btn",disabled:f,onClick:function(){return s(r)}},c.a.createElement("i",{className:"fa-fw far fa-heart"})),c.a.createElement("button",{className:"ctrl-btn",disabled:p,onClick:function(){return o(r)}},c.a.createElement("i",{className:"fa-fw fa fa-shopping-cart"})),c.a.createElement(i.b,{to:"/movie/".concat(r.id)},c.a.createElement("button",{className:"ctrl-btn"},c.a.createElement("i",{className:"fa-fw fab fa-readme"}))))),c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(r.poster_path),alt:"".concat(r.title," Poster")}))},M=a(15),S=a.n(M),I=S.a.create({baseURL:"https://api.themoviedb.org/3"});var x=function(){var e,t,a=Object(n.useState)([]),r=Object(s.a)(a,2),l=r[0],o=r[1],m=Object(n.useContext)(E),u=m.addMovieToCart,d=m.moveToWatchlist,v=m.watchlist,f=m.cart,p=v.find((function(e){return e.id===l.id})),h=f.find((function(e){return e.id===l.id})),b=!!p||!!h,g=!!h;return Object(n.useEffect)((function(){function e(){return(e=Object(k.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("d431e3825c6c47923e22a5dc91f52227","&language=en-US"));case 2:t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===l||void 0===l?void 0:l.backdrop_path,'")'),backgroundPosition:"center top"}},c.a.createElement("div",{className:"banner__contents"},c.a.createElement("h1",{className:"banner__title"},(null===l||void 0===l?void 0:l.title)||(null===l||void 0===l?void 0:l.name)||(null===l||void 0===l?void 0:l.original_name)),c.a.createElement("div",{className:"banner__buttons"},c.a.createElement(i.b,{to:"/movie/".concat(l.id)},c.a.createElement("button",{className:"banner__button"},"Read")),c.a.createElement("button",{className:"banner__button",disabled:b,onClick:function(){return d(l)}},"+ List"),c.a.createElement("button",{className:"banner__button",disabled:g,onClick:function(){return u(l)}},"+ Cart")),c.a.createElement("h1",{className:"banner__description"},(e=null===l||void 0===l?void 0:l.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))))},A=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(k.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("d431e3825c6c47923e22a5dc91f52227","&language=en-US"));case 2:t=e.sent,r(t.data.results),console.log(t.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("div",null,c.a.createElement(x,null),c.a.createElement("div",{className:"movie-page"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"heading"},"Upcoming Events"),a.length>0&&c.a.createElement("div",{className:"movie-grid"},a.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(T,{movie:e,key:e.id}))}))))))},R=a(35);function F(){var e=Object(o.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"btn",onClick:function(){e.push("/")}},"Back"))}var W="d431e3825c6c47923e22a5dc91f52227",L=function(e){var t=e.match,a=Object(n.useState)({id:0,homepage:"",original_title:"",overview:"",genres:{},popularity:0,release_date:"",runtime:0,status:"",tagline:"",videos:{},vote_average:0,vote_count:0}),r=Object(s.a)(a,2),l=r[0],i=r[1],o=Object(n.useState)([]),m=Object(s.a)(o,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(k.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://api.themoviedb.org/3/movie/".concat(t.params.id,"/credits?api_key=").concat(W));case 2:a=e.sent,d(a.data.cast),console.log(a.data.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(k.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=").concat(W,"&append_to_response=videos"));case 2:a=e.sent,i(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){a.apply(this,arguments)}()}),[t.params.id]),console.log(u),c.a.createElement("div",{className:"movie-detail"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 center"},c.a.createElement("img",{alt:l.id,width:"85%",src:"https://image.tmdb.org/t/p/original/".concat(null===l||void 0===l?void 0:l.poster_path)})),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"row-6 left"},c.a.createElement(F,null)),c.a.createElement("h1",null,l.title),c.a.createElement("strong",null," Description: "),c.a.createElement("p",null,null===l||void 0===l?void 0:l.overview),c.a.createElement("hr",null),c.a.createElement("strong",null," Rating: "),c.a.createElement("p",{className:"rate"},l.vote_average),c.a.createElement("hr",null),c.a.createElement("strong",null," Cast: "),c.a.createElement("div",{className:"row"},u.map((function(e){return c.a.createElement("p",{className:"col-3",key:e.id},e.name)}))),c.a.createElement("hr",null),c.a.createElement("div",{className:"col-12"},c.a.createElement("strong",null,"Trailer: "),c.a.createElement(R.a,{className:"col-12",videoId:l.videos.results?l.videos.results[0].key:null})))))};function V(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("h3",null,"Built by Gabriel Lee. Built with ReactJS. Copyright 2021."))}a(78),a(79),a(80);var D=function(){return c.a.createElement(p,null,c.a.createElement(i.a,null,c.a.createElement(m,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:A}),c.a.createElement(o.a,{path:"/watchlist",component:g}),c.a.createElement(o.a,{path:"/add",component:y}),c.a.createElement(o.a,{path:"/cart",component:N}),c.a.createElement(o.a,{path:"/movie/:id",component:L})),c.a.createElement(V,null)))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d99af1bb.chunk.js.map