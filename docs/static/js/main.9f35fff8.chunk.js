(this["webpackJsonpflick-react"]=this["webpackJsonpflick-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=a(5),s=a(1),l=a(2),u=a(4),p=a(3),h=(a(13),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputvalue:""},e.onSubmit=function(t){t.preventDefault(),e.props.searchValue(e.state.inputvalue),e.setState({inputvalue:""})},e.onChange=function(t){e.setState({inputvalue:t.target.value})},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"controls",onSubmit:this.onSubmit},r.a.createElement("div",{className:"searchField"},r.a.createElement("input",{type:"text",placeholder:"Search Flickr for Photos.. .",name:"title",value:this.state.inputvalue,style:{border:"1px solid grey",borderRadius:"4px",height:"40px",width:"400px",fontSize:"20px",padding:"10px",marginRight:"10px"},onChange:this.onChange}),r.a.createElement("input",{name:"submit",type:"submit",value:"Submit",style:m})),r.a.createElement("div",{className:"gallery-button__wrapper"},r.a.createElement("input",{style:m,className:"gallery",type:"button",value:"Show Gallery"})))}}]),a}(n.Component)),m={minWidth:"60px",height:"40px",fontSize:"14px",lineHeight:"24px",padding:"3px",borderRadius:"10px",border:"2px solid #616161",backgroundColor:"white"},f=h,d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.url;return r.a.createElement("li",null,r.a.createElement("img",{alt:"missing pix",src:e,onClick:function(e){console.log(e.target)}}))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.photos;return r.a.createElement("ul",{className:"searchresults__list"},e.map((function(e){return r.a.createElement(d,{key:e.id,url:e.srcPath})})))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pictures:[]},e.search=function(t){fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=81e61d57864118cacd51f259fcc3c173&tags=".concat(t,"&per_page=30&page=1&format=json&nojsoncallback=1")).then((function(e){return e.json()})).then((function(t){var a=t.photos.photo.map((function(e,t){var a="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg";return Object(o.a)(Object(o.a)({},e),{},{srcPath:a})}));e.setState({pictures:a})})).catch((function(e){console.log("Oops! Something went wrong..."),console.log(e)}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(f,{searchValue:this.search}),r.a.createElement("div",{className:"searchresults"},r.a.createElement(b,{photos:this.state.pictures}))))}}]),a}(n.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9f35fff8.chunk.js.map