(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),i=a(22),c=a(29),s=a(30),m=a(35),u=a(31),g=a(36),p=a(24),h=a(162),d=a(166),v=a(141),E=a(142),f=a(143),b=a(144),M=a(41),y=a(145),k=a(163),j=a(146),S=a(165),x=a(148),w=a(73),O=a.n(w),N=a(164),C=a(65),I=a.n(C);function B(e){return r.a.createElement("div",{className:e.classes.search},r.a.createElement("div",{className:e.classes.searchIcon},r.a.createElement(I.a,null)),r.a.createElement(N.a,{classes:{root:e.classes.inputRoot,input:e.classes.inputInput},placeholder:"Search",inputProps:{"aria-label":"Search"},value:e.searchQuery,onChange:function(t){e.onSearchChange(t.target.value)}}))}var W=a(13),z=a(123),T=a(8),R=Object(z.a)(function(e){var t,a;return{appBar:{},titleWrap:{display:"flex",alignItems:"center"},title:{flexGrow:1,fontFamily:'"Viga", sans-serif',fontSize:24,fontWeight:400},titleLink:{color:"#fff",textDecoration:"none","&:hover":{textDecoration:"none"}},menuButtonWrap:{textAlign:"right"},menuButton:{marginRight:"-.625em"},navigation:(t={},Object(W.a)(t,e.breakpoints.down("sm"),{overflow:"hidden",maxHeight:"0","&.active":{maxHeight:"100%"}}),Object(W.a)(t,e.breakpoints.up("md"),{display:"flex",justifyContent:"space-between",alignItems:"center"}),t),search:(a={position:"relative",marginLeft:0,width:"100%",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.b)(e.palette.common.white,.25)}},Object(W.a)(a,e.breakpoints.down("sm"),{marginTop:".5em",marginBottom:".5em"}),Object(W.a)(a,e.breakpoints.up("md"),{marginRight:"1.4286em",maxWidth:"28.5714em"}),a),searchIcon:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:e.spacing(5),height:"100%",pointerEvents:"none"},inputRoot:{width:"100%",color:"inherit"},inputInput:Object(W.a)({padding:e.spacing(1,1,1,5),height:"1em",transition:e.transitions.create("width")},e.breakpoints.up("md"),{"&:focus":{}}),menu:Object(W.a)({display:"flex",justifyContent:"center"},e.breakpoints.up("md"),{marginRight:"-1rem"})}});function _(e){var t=R(),a=r.a.useRef(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:t.appBar},r.a.createElement(E.a,{disableGutters:!0},r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(b.a,{container:!0,spacing:2,alignContent:"center"},r.a.createElement(b.a,{item:!0,xs:9,sm:6,md:4,className:t.titleWrap},r.a.createElement(M.a,{className:t.title,variant:"h4",component:"div"},r.a.createElement(y.a,{to:"/",component:i.b,className:t.titleLink},"Movie Searcher"))),r.a.createElement(k.a,{mdUp:!0},r.a.createElement(b.a,{item:!0,xs:3,sm:6,md:!1,className:t.menuButtonWrap},r.a.createElement(j.a,{edge:"end",className:t.menuButton,color:"inherit","aria-label":"Open drawer",onClick:function(e){a.current.classList.toggle("active")}},r.a.createElement(O.a,null)))),r.a.createElement(b.a,{item:!0,xs:12,md:8},r.a.createElement("nav",{className:t.navigation,ref:a},r.a.createElement(B,{classes:t,searchQuery:e.searchQuery,onSearchChange:e.onSearchChange}),r.a.createElement(S.a,{className:t.menu,disablePadding:!0},r.a.createElement(x.a,null,r.a.createElement(y.a,{to:"/",component:i.b,color:"inherit",underline:"none"},"Popular")),r.a.createElement(x.a,null,r.a.createElement(y.a,{to:"/favorites",component:i.b,color:"inherit",underline:"none"},"Favorites"))))))))),r.a.createElement(E.a,null))}function D(){return r.a.createElement("footer",{className:"App-footer"},r.a.createElement(f.a,{maxWidth:"xl"},"Footer"))}var F=a(49),P=a.n(F),A=a(154),L=a(152),Q=a(153),H=a(147),U=a(124),Z=a(151),G=a(149),K=a(150),J=a(75),X=Object(J.a)({spacing:10,breakpoints:{values:{xs:0,sm:480,md:768,lg:1025,xl:1280}}}),Y=Object(J.a)({spacing:X.spacing,breakpoints:{values:{xs:X.breakpoints.values.xs,sm:X.breakpoints.values.sm,md:X.breakpoints.values.md,lg:X.breakpoints.values.lg,xl:X.breakpoints.values.xl}},overrides:{MuiTypography:{root:{},h1:Object(W.a)({fontSize:"2rem",lineHeight:1.15,fontWeight:700},X.breakpoints.up("md"),{fontSize:"3rem"}),h2:Object(W.a)({fontSize:"1.5rem",fontWeight:700},X.breakpoints.up("md"),{fontSize:"2rem"}),h3:Object(W.a)({fontSize:"1.33rem",fontWeight:700},X.breakpoints.up("md"),{fontSize:"1.5rem"}),h4:Object(W.a)({fontSize:"1.2rem",fontWeight:700},X.breakpoints.up("md"),{fontSize:"1.33rem"}),h5:Object(W.a)({fontSize:"1.15rem",fontWeight:700},X.breakpoints.up("md"),{fontSize:"1.25rem"}),gutterBottom:{marginBottom:".5em"}},MuiContainer:{root:{},maxWidthXl:{maxWidth:"1920px"}},MuiGrid:{root:{},container:{marginTop:0,marginBottom:0},item:{},"spacing-xs-2":{marginTop:0,marginBottom:0,"& > .MuiGrid-item":{paddingTop:0,paddingBottom:0}}},MuiToolbar:{root:{},regular:Object(W.a)({minHeight:"3rem"},X.breakpoints.up("xs"),{minHeight:"3rem"})},MuiInputBase:{root:{fontSize:".875rem"}},MuiCard:{root:{marginBottom:X.spacing(2)}},MuiCardMedia:{root:{paddingTop:"145.4333%"}},MuiListItem:{root:{}},MuiCircularProgress:{root:{margin:X.spacing(3)}}}}),q={root:{position:"absolute",bottom:0,right:0,padding:"12px 10px",minWidth:"auto",transitionProperty:"background-color, color, box-shadow, border",color:"inherit","&:hover":{color:Y.palette.secondary.light}}};var V=function(e){function t(){var e,a,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isChosen:(n=a.props.movie.id,(JSON.parse(localStorage.getItem("favorites"))||{}).hasOwnProperty(n))},a.handleFavoritesClick=function(){a.props.toggleFavorites(a.props.movie),a.setState({isChosen:!a.state.isChosen})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.isChosen,t=e?r.a.createElement(G.a,null):r.a.createElement(K.a,null),a=e?"Remove from Favorites":"Add to Favorites";return r.a.createElement(Z.a,{style:q.root,title:a,onClick:this.handleFavoritesClick},t)}}]),t}(r.a.Component),$=Object(z.a)(function(e){var t;return{wrapper:{position:"relative",color:"#fff"},link:Object(W.a)({display:"block",marginLeft:"auto",marginRight:"auto"},e.breakpoints.down("sm"),{maxWidth:"17.5rem"}),card:{position:"relative"},details:(t={position:"absolute",display:"flex",flexDirection:"column",justifyContent:"space-between",top:0,bottom:0,left:0,right:0,padding:10,width:"100%",height:"100%",color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.6)",backgroundImage:"linear-gradient(#111, transparent 40%, transparent 60%, #111)",transition:"opacity .2s"},Object(W.a)(t,e.breakpoints.up("md"),{paddingTop:20}),Object(W.a)(t,e.breakpoints.up("lg"),{opacity:0,"&:hover":{opacity:1}}),t),genres:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",opacity:.75},genresList:{margin:0,fontSize:".875em"}}});function ee(e){var t=e.movie,a=e.genres,n=e.toggleFavorites,o=t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"https://via.placeholder.com/500x750?text=No+poster",l=$();return r.a.createElement("div",{className:l.wrapper},r.a.createElement(i.b,{to:"movie/".concat(t.id),className:l.link},r.a.createElement(L.a,{className:l.card},r.a.createElement(Q.a,{image:o}),r.a.createElement("div",{className:l.details},r.a.createElement(M.a,{variant:"h5",component:"p",align:"center"},t.title),r.a.createElement(M.a,{className:l.genres,component:"div"},r.a.createElement(H.a,{className:l.genresList,dense:!0,disablePadding:!0},t.genre_ids.map(function(e){return a.map(function(t){return e===t.id?t.name:null})}).map(function(e){return e.filter(function(e){return e||null})}).map(function(e,t){return r.a.createElement(U.a,{key:"genre-".concat(t+1),disableGutters:!0},e)})))))),r.a.createElement(V,{movie:t,toggleFavorites:n}))}function te(e){var t=e.genres,a=e.movies,n=e.hasMore,o=e.loadPopularMovies,l=e.toggleFavorites;return r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(P.a,{pageStart:0,loadMore:o,hasMore:n,loader:r.a.createElement(A.a,{className:"loader",key:0}),threshold:100},r.a.createElement(b.a,{container:!0,spacing:2},a.map(function(e,a){return r.a.createElement(b.a,{item:!0,xs:12,sm:6,md:4,lg:3,key:a+1},r.a.createElement(ee,{movie:e,genres:t,toggleFavorites:l}))}))))}function ae(e){var t=e.genres,a=e.popularMovies,n=e.hasMoreMovies,o=e.loadPopularMovies,l=e.toggleFavorites;return r.a.createElement("section",{className:"content-section",spacing:2},r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(M.a,{variant:"h1",gutterBottom:!0},"Popular today")),r.a.createElement(te,{genres:t,movies:a,hasMore:n,loadPopularMovies:o,toggleFavorites:l}))}function ne(e){var t=e.genres,a=e.movies,n=e.hasMore,o=e.loadMoreSearchResults,l=e.toggleFavorites;return r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(P.a,{pageStart:0,loadMore:o,hasMore:n,loader:r.a.createElement(A.a,{className:"loader",key:0}),threshold:100},r.a.createElement(b.a,{container:!0,spacing:2},a.map(function(e,a){return r.a.createElement(b.a,{item:!0,xs:12,sm:6,md:4,lg:3,key:a+1},r.a.createElement(ee,{movie:e,genres:t,toggleFavorites:l}))}))))}function re(e){var t=e.genres,a=e.searchMovies,n=e.searchQuery,o=e.hasMoreMovies,l=e.loadMoreSearchResults,i=e.toggleFavorites,c=!n.length||/[^A-z]/gi.test(n);return!a.length&&(n.length>1||c)?"No movies":r.a.createElement("section",{className:"content-section"},r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(M.a,{variant:"h1",gutterBottom:!0},'Search results for "',n,'":')),r.a.createElement(ne,{genres:t,movies:a,hasMore:o,loadMoreSearchResults:l,toggleFavorites:i}))}var oe=a(155),le=a(120),ie={heading:{marginBottom:"1.5em"},title:{marginBottom:".1875em"}};function ce(e){var t=e.details,a=t.title,n=t.tagline;return r.a.createElement("section",{style:ie.heading},r.a.createElement(M.a,{variant:"h1",style:ie.title,align:"center",gutterBottom:!0},a),n&&r.a.createElement(M.a,{variant:"h5",align:"center",gutterBottom:!0},'"'.concat(n,'"')))}var se=a(156),me=a(157),ue=a(76),ge=a(158),pe=a(159),he=a(160),de=a(161),ve="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZDQTI4OyIgZD0iTSAyNCA0LjA1MDc4MSBMIDMwLjQ4ODI4MSAxNy4xODc1IEwgNDUgMTkuMjg5MDYzIEwgMzQuNSAyOS41MTE3MTkgTCAzNi45NzY1NjMgNDMuOTQ5MjE5IEwgMjQgMzcuMTM2NzE5IEwgMTEuMDIzNDM4IDQzLjk0OTIxOSBMIDEzLjUgMjkuNTExNzE5IEwgMyAxOS4yODkwNjMgTCAxNy41MTE3MTkgMTcuMTg3NSBaICI+PC9wYXRoPjwvZz48L3N2Zz4=')",Ee=Object(z.a)(function(e){return{wrap:{padding:".625em 5px",textAlign:"center"},root:{display:"inline-flex",marginBottom:".875em",paddingLeft:"2.75em",paddingRight:"2.75em",minHeight:"2.5em",fontSize:"1rem",background:"".concat(ve," 0 50% no-repeat, ").concat(ve," 100% 50% no-repeat"),backgroundSize:"2.5em"},info:{"& p":{margin:0}},average:{fontSize:"1.75rem",lineHeight:1,fontWeight:700,color:"#3a5"},count:{fontSize:".75rem",lineHeight:1},divider:{marginLeft:"auto",marginRight:"auto",maxWidth:"10rem"}}});function fe(e){var t=e.average,a=e.count,n=e.popularity,o=Ee();return r.a.createElement("div",{className:o.wrap},r.a.createElement("div",{className:o.root},r.a.createElement(M.a,{component:"p",className:o.info},r.a.createElement(M.a,{component:"span"},r.a.createElement("strong",{className:o.average},t)),r.a.createElement("br",null),r.a.createElement(M.a,{component:"span"},r.a.createElement("small",{className:o.count},a)))),r.a.createElement(oe.a,{className:o.divider}),r.a.createElement(M.a,{component:"p"},r.a.createElement("small",null,r.a.createElement("strong",null,"Popularity:")," ",n.toFixed(2))))}var be={info:{paddingTop:".7143em"},tableWrap:{overflow:"auto",width:"100%"},table:{minWidth:"32em","& td":{color:"#f28","&:first-child":{fontWeight:700}}}},Me=function(e){return e&&e.map(function(e,t){return r.a.createElement(U.a,{key:"production-company-".concat(t+1)},r.a.createElement(se.a,null,e.origin_country?"".concat(e.name," (").concat(e.origin_country,")"):e.name))})},ye=function(e){return e?"$".concat(e.toLocaleString("en-US").replace(/,/g,".")):"\u2013"};function ke(e){var t=e.details,a=e.collection,n=t.genres,o=t.runtime,l=t.homepage,i=t.original_language,c=t.production_countries,s=t.spoken_languages;return console.log(t),r.a.createElement("section",{style:be.info},r.a.createElement(L.a,null,r.a.createElement(b.a,{container:!0,justify:"center",spacing:2},r.a.createElement(b.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(Q.a,{image:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),title:t.title,alt:"".concat(t.title," poster")}),r.a.createElement(fe,{average:t.vote_average,count:t.vote_count,popularity:t.popularity})),r.a.createElement(b.a,{item:!0,xs:12,sm:12,md:9},r.a.createElement(me.a,null,r.a.createElement(M.a,{variant:"h3",component:"h2",gutterBottom:!0},"About:"),r.a.createElement(M.a,{variant:"body2",component:"p",gutterBottom:!0},t.overview),r.a.createElement("br",null),r.a.createElement(oe.a,null),r.a.createElement("br",null),r.a.createElement(M.a,{variant:"h4",component:"h3",gutterBottom:!0},"Movie details:"),r.a.createElement(ue.a,{style:be.tableWrap},r.a.createElement(ge.a,{size:"small",style:be.table},r.a.createElement(pe.a,null,r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Original title:"),r.a.createElement(de.a,null,t.original_title)),n&&r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Genres:"),r.a.createElement(de.a,null,n.map(function(e){return e.name}).join(", "))),i&&r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Original language"),r.a.createElement(de.a,null,i.toUpperCase())),s&&r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Spoken languages:"),r.a.createElement(de.a,null,s.map(function(e){return e.name}).join(", "))),o&&r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Runtime:"),r.a.createElement(de.a,null,"".concat(t.runtime," min"))),r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Budget:"),r.a.createElement(de.a,null,ye(t.budget))),r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Revenue:"),r.a.createElement(de.a,null,ye(t.revenue))),r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Release date:"),r.a.createElement(de.a,null,t.release_date.split("-").reverse().join("."))),r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Status:"),r.a.createElement(de.a,null,t.status)),c&&r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Production countries:"),r.a.createElement(de.a,null,c.map(function(e){return e.name}).join(", "))),r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Production companies:"),r.a.createElement(de.a,null,r.a.createElement(H.a,{dense:!0},Me(t.production_companies)))),a&&a.name?r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Belongs to:"),r.a.createElement(de.a,null,a.name)):null,l&&r.a.createElement(he.a,null,r.a.createElement(de.a,null,"Movie homepage:"),r.a.createElement(de.a,null,r.a.createElement(y.a,{href:t.homepage,target:"_blank"},"Link")))))))))))}var je={article:{flexGrow:1,paddingTop:"1.4286em",paddingBottom:"1.4286em",minHeight:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundSize:"cover"},content:{padding:"1.0714em .7143em",borderRadius:"10px",backgroundColor:"rgba(255, 255, 255, .8)"},recommendedMovie:{color:"#4f8"},card:{marginBottom:0}};function Se(e){var t=e.movie;return r.a.createElement("div",null,r.a.createElement(L.a,{style:je.card},r.a.createElement(i.b,{to:"/movie/".concat(t.id)},r.a.createElement(Q.a,{image:"https://image.tmdb.org/t/p/w500".concat(t.poster_path)}))))}var xe=a(74),we=a.n(xe),Oe={slidesToShow:6,lazyLoad:!0,draggable:!1,responsive:[{breakpoint:479,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:3}},{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:1279,settings:{slidesToShow:5}}]};function Ne(e){var t=e.movies,a=e.genres;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{variant:"h4",component:"h3",gutterBottom:!0},"Recommendations:"),r.a.createElement(we.a,Oe,t.map(function(t,n){return r.a.createElement("div",{key:"movie-recommendation-".concat(n+1)},r.a.createElement(Se,{movie:t,genres:a,changeMovie:e.changeMovie}))})))}var Ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={details:{}},a.fetchDetails=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=61722a83638b42abbf0aec9d783d8587&language=en-US&append_to_response=recommendations");fetch(n).then(function(e){return e.json()}).then(function(e){a.setState({details:e},function(){t&&window.scrollTo({top:0,left:0,behavior:"smooth"})})},function(e){console.log(e)})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.fetchDetails(this.props.match.params.id)}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.id;this.props.match.params.id!==t&&this.fetchDetails(t,!0)}},{key:"render",value:function(){var e=this.state,t=this.props,a=e.details,n=t.genres,o=a.backdrop_path?"url(https://image.tmdb.org/t/p/w1280/".concat(e.details.backdrop_path,")"):"none",l=Object.keys(a).length?a.belongs_to_collection:null,i=a.recommendations&&Object.keys(a.recommendations).length?a.recommendations.results:null;return r.a.createElement("article",{className:t.classes.article,style:{backgroundImage:o}},r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement("section",{className:t.classes.content},r.a.createElement(ce,{details:a}),r.a.createElement(oe.a,null),Object.keys(a).length&&r.a.createElement(ke,{details:a,collection:l}),i&&i.length?r.a.createElement(Ne,{movies:i,genres:n,changeMovie:this.fetchDetails}):null)))}}]),t}(r.a.Component),Ie=Object(le.a)(je)(Ce);function Be(){return r.a.createElement("div",null,"Favorites",r.a.createElement("br",null))}function We(){return r.a.createElement("section",null,r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"Nothing's found"))}a(115),a(116),a(117);var ze=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={apiKey:"61722a83638b42abbf0aec9d783d8587",genres:[],popularMovies:[],searchMovies:[],searchQuery:"",hasMoreMovies:!0},a.isSearch=!1,a.fetchGenres=function(){var e=a.state.apiKey,t="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(e,"&language=en-US");fetch(t).then(function(e){return e.json()}).then(function(e){a.setState({genres:e.genres})},function(e){console.log(e)})},a.handleSearch=function(e){a.setState({searchQuery:e},function(){e.length?(window.scrollTo(0,0),a.fetchSearchResults()):a.setState({popularMovies:[],hasMoreMovies:!0})})},a.fetchPopularMovies=function(){var e=a.state,t=e.apiKey,n=e.popularMovies,r=a.getPageNumber(n),o="https://api.themoviedb.org/3/movie/popular?api_key=".concat(t,"&language=en-US&page=").concat(r);fetch(o).then(function(e){return e.json()}).then(function(e){a.setState({popularMovies:n.concat(e.results),hasMoreMovies:a.checkMoreMovies(r,e.total_pages)})},function(e){console.log(e)})},a.fetchSearchResults=function(e){var t=a.state,n=t.apiKey,r=t.searchQuery,o="https://api.themoviedb.org/3/search/movie?api_key=".concat(n,"&language=en-US&query=").concat(r,"&page=").concat(e,"&include_adult=false");fetch(o).then(function(e){return e.json()}).then(function(e){a.setState({searchMovies:e.results,hasMoreMovies:e.total_pages>1})},function(e){console.log(e)})},a.loadMoreSearchResults=function(){var e=a.state,t=e.apiKey,n=e.searchQuery,r=e.searchMovies,o=a.getPageNumber(r),l="https://api.themoviedb.org/3/search/movie?api_key=".concat(t,"&language=en-US&query=").concat(n,"&page=").concat(o,"&include_adult=false");n.length&&fetch(l).then(function(e){return e.json()}).then(function(e){a.setState({searchMovies:r.concat(e.results),hasMoreMovies:a.checkMoreMovies(o,e.total_pages)})},function(e){console.log(e)})},a.getPageNumber=function(e){return e.length/20+1},a.checkMoreMovies=function(e,t){return e<t},a.toggleFavorites=function(e){var t=e.id,a=JSON.parse(localStorage.getItem("favorites"))||{};a.hasOwnProperty(t)?delete a[t]:a[e.id]=e,localStorage.setItem("favorites",JSON.stringify(a))},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchGenres()}},{key:"shouldComponentUpdate",value:function(e,t){return!(t.searchQuery!==this.state.searchQuery)}},{key:"componentWillUpdate",value:function(e,t){this.isSearch=t.searchMovies!==this.state.searchMovies}},{key:"render",value:function(){var e=this,t=this.state,a=t.genres,n=t.popularMovies,o=t.searchMovies,l=t.searchQuery,i=t.hasMoreMovies,c={genres:a,hasMoreMovies:i,popularMovies:n},s={genres:a,hasMoreMovies:i,searchMovies:o,searchQuery:l};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null),r.a.createElement(d.a,{theme:Y},r.a.createElement("div",{className:"App"},r.a.createElement(_,{searchQuery:l,onSearchChange:this.handleSearch}),r.a.createElement("main",{className:"main"},r.a.createElement(p.d,null,this.isSearch&&r.a.createElement(p.a,{to:"/search"}),r.a.createElement(p.b,{path:"/",exact:!0,render:function(t){return r.a.createElement(ae,Object.assign({},t,c,{loadPopularMovies:e.fetchPopularMovies,toggleFavorites:e.toggleFavorites}))}}),r.a.createElement(p.b,{path:"/search",render:function(t){return l.length?r.a.createElement(re,Object.assign({},t,s,{loadMoreSearchResults:e.loadMoreSearchResults,toggleFavorites:e.toggleFavorites})):r.a.createElement(p.a,{to:"/"})}}),r.a.createElement(p.b,{path:"/movie/:id",render:function(e){return r.a.createElement(Ie,Object.assign({},e,{genres:a}))}}),r.a.createElement(p.b,{path:"/favorites",render:function(e){return r.a.createElement(Be,e)}}),r.a.createElement(p.b,{component:We}))),r.a.createElement(D,null))))}}]),t}(r.a.Component),Te=Object(p.g)(ze);a(118),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(119)}},[[81,1,2]]]);
//# sourceMappingURL=main.87eb3fb1.chunk.js.map