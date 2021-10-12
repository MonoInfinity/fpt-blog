(()=>{"use strict";var e,t,o,s,a,i,n,r={284:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.http=void 0;var s=o(603),a=axios;t.http=a,a.defaults.withCredentials=!0,a.interceptors.request.use(s.requestInterceptor),a.interceptors.response.use(s.responseSuccessInterceptor,s.responseFailedInterceptor)},603:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.responseFailedInterceptor=t.responseSuccessInterceptor=t.handleCommonResponse=t.requestInterceptor=void 0;var s=o(973);function a(){var e=document.getElementById("form-btn"),t=document.getElementById("loading");t&&e&&(e.classList.remove("hidden"),e.classList.add("block"),t.classList.add("hidden"),t.classList.remove("flex"))}t.requestInterceptor=function(e){var t=document.getElementById("form-btn"),o=document.getElementById("loading"),s=document.getElementById("MESSAGEERROR"),a=document.getElementById("ERRORMESSAGEERROR");for(var i in e.data){var n=document.getElementById(i.toUpperCase()+"ERROR");n&&(n.innerHTML="")}return a&&(a.innerHTML=""),s&&(s.innerHTML=""),o&&t&&(t.classList.add("hidden"),o.classList.remove("hidden"),o.classList.add("flex")),e},t.handleCommonResponse=a,t.responseSuccessInterceptor=function(e){var t,o,i,n,r,d;if(a(),null===(o=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.details)||void 0===o?void 0:o.message){var l=document.getElementById("MESSAGEERROR");if(l){var p=null===(n=null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.details)||void 0===n?void 0:n.message;l.innerHTML=p.slice(0,1).toUpperCase()+p.slice(1,p.length)}document.getElementById("toastify")&&(p=null===(d=null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.details)||void 0===d?void 0:d.message,(0,s.toastify)({text:p.slice(0,1).toUpperCase()+p.slice(1,p.length),duration:2e3,newWindow:!0,close:!0,gravity:"top",position:"right",backgroundColor:"#fa983a",stopOnFocus:!0}))}return e},t.responseFailedInterceptor=function(e){var t,o;if(a(),null===(o=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===o?void 0:o.details){var i=e.response.data.details;for(var n in i){var r=document.getElementById(n.toUpperCase()+"ERROR");if(r&&(r.innerHTML=r.getAttribute("data-label")+" "+i[n]),r&&("errorMessage"===n||"message"===n)){var d=""+i[n];r.innerHTML=d.slice(0,1).toUpperCase()+d.slice(1,d.length),document.getElementById("toastify")&&(0,s.toastify)({text:d.slice(0,1).toUpperCase()+d.slice(1,d.length),duration:2e3,newWindow:!0,close:!0,gravity:"top",position:"right",backgroundColor:"rgb(239, 68, 68)",stopOnFocus:!0})}}}return Promise.reject(e.response)}},312:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routers=t.routerLinks=void 0,t.routerLinks={home:"/",loginForm:"/auth/login"},t.routers={category:{create:"/api/category",update:"/api/category"},post:{create:"/api/post",addNewTagToPost:"/api/post/tag",getTagOfPost:function(e){return"/api/post/tag?postId="+e},save:"/api/post/save",uploadImagePost:"/api/post/image",addCategoryToPost:"/api/post/category",likePost:"/api/post/like",dislikePost:"/api/post/dislike",sendPost:"/api/post/send",approvedPost:"/api/admin/post/approved",deletePost:"/api/post/delete"},user:{changePassword:"/api/user/change-password",update:"/api/user",get:"/api/user",status:"/api/admin/user/status",role:"/api/admin/user/role",follow:"/api/user/follow"},tag:{getAll:"/api/tag/all",clearUnused:"/api/tag/unused",getByName:function(e){return"/api/tag?name="+e}},auth:{login:"/api/auth/login",register:"/api/auth/register"},reward:{create:"/api/reward",update:"/api/reward",getOne:"/api/reward",give:"/api/reward/give",delete:"/api/reward/delete"}}},973:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toastify=void 0,t.toastify=function(e){return Toastify(e).showToast()}}},d={};function l(e){var t=d[e];if(void 0!==t)return t.exports;var o=d[e]={exports:{}};return r[e](o,o.exports,l),o.exports}e=l(284),t=l(312),o=document.getElementById("like-count"),s=document.getElementById("dislike-count"),a=document.getElementById("post-like"),i=document.getElementById("post-dislike"),n=document.getElementById("postId"),null==a||a.addEventListener("click",(function(){var a={postId:n.value};e.http.post(t.routers.post.likePost,a).then((function(e){var t,a,i=e.data,n=null!==(t=i.data.like)&&void 0!==t?t:"",r=null!==(a=i.data.dislike)&&void 0!==a?a:"";o&&(o.innerText=n),s&&(s.innerText=r)}))})),null==i||i.addEventListener("click",(function(){var a={postId:n.value};e.http.post(t.routers.post.dislikePost,a).then((function(e){var t,a,i=e.data,n=null!==(t=i.data.like)&&void 0!==t?t:"",r=null!==(a=i.data.dislike)&&void 0!==a?a:"";o&&(o.innerText=n),s&&(s.innerText=r)}))}))})();