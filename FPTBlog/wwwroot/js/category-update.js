(()=>{"use strict";var e,t,o,a,r={284:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.http=void 0;var a=o(603),r=axios;t.http=r,r.defaults.withCredentials=!0,r.interceptors.request.use(a.requestInterceptor),r.interceptors.response.use(a.responseSuccessInterceptor,a.responseFailedInterceptor)},603:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.responseFailedInterceptor=t.responseSuccessInterceptor=t.handleCommonResponse=t.requestInterceptor=void 0;var a=o(973);function r(){var e=document.getElementById("form-btn"),t=document.getElementById("loading");t&&e&&(e.classList.remove("hidden"),e.classList.add("block"),t.classList.add("hidden"),t.classList.remove("flex"))}t.requestInterceptor=function(e){var t=document.getElementById("form-btn"),o=document.getElementById("loading"),a=document.getElementById("MESSAGEERROR"),r=document.getElementById("ERRORMESSAGEERROR");for(var s in e.data){var n=document.getElementById(s.toUpperCase()+"ERROR");n&&(n.innerHTML="")}return r&&(r.innerHTML=""),a&&(a.innerHTML=""),o&&t&&(t.classList.add("hidden"),o.classList.remove("hidden"),o.classList.add("flex")),e},t.handleCommonResponse=r,t.responseSuccessInterceptor=function(e){var t,o,s,n,i,d;if(r(),null===(o=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.details)||void 0===o?void 0:o.message){var l=document.getElementById("MESSAGEERROR");if(l){var u=null===(n=null===(s=null==e?void 0:e.data)||void 0===s?void 0:s.details)||void 0===n?void 0:n.message;l.innerHTML=u.slice(0,1).toUpperCase()+u.slice(1,u.length)}document.getElementById("toastify")&&(u=null===(d=null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.details)||void 0===d?void 0:d.message,(0,a.toastify)({text:u.slice(0,1).toUpperCase()+u.slice(1,u.length),duration:2e3,newWindow:!0,close:!0,gravity:"top",position:"right",backgroundColor:"#fa983a",stopOnFocus:!0}))}return e},t.responseFailedInterceptor=function(e){var t,o;if(r(),null===(o=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===o?void 0:o.details){var s=e.response.data.details;for(var n in s){var i=document.getElementById(n.toUpperCase()+"ERROR");if(i&&(i.innerHTML=i.getAttribute("data-label")+" "+s[n]),i&&("errorMessage"===n||"message"===n)){var d=""+s[n];i.innerHTML=d.slice(0,1).toUpperCase()+d.slice(1,d.length),document.getElementById("toastify")&&(0,a.toastify)({text:d.slice(0,1).toUpperCase()+d.slice(1,d.length),duration:2e3,newWindow:!0,close:!0,gravity:"top",position:"right",backgroundColor:"rgb(239, 68, 68)",stopOnFocus:!0})}}}return Promise.reject(e.response)}},312:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routers=t.routerLinks=void 0,t.routerLinks={home:"/",loginForm:"/auth/login"},t.routers={category:{create:"/api/category",update:"/api/category"},post:{create:"/api/post",addNewTagToPost:"/api/post/tag",getTagOfPost:function(e){return"/api/post/tag?postId="+e},save:"/api/post/save",uploadImagePost:"/api/post/image",addCategoryToPost:"/api/post/category",likePost:"/api/post/like",dislikePost:"/api/post/dislike",sendPost:"/api/post/send",approvedPost:"/api/admin/post/approved",deletePost:"/api/post/delete"},user:{changePassword:"/api/user/change-password",update:"/api/user",get:"/api/user",status:"/api/admin/user/status",role:"/api/admin/user/role",follow:"/api/user/follow"},tag:{getAll:"/api/tag/all",clearUnused:"/api/tag/unused",getByName:function(e){return"/api/tag?name="+e}},auth:{login:"/api/auth/login",register:"/api/auth/register"},reward:{create:"/api/reward",update:"/api/reward"}}},973:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toastify=void 0,t.toastify=function(e){return Toastify(e).showToast()}}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,n),o.exports}e=n(284),t=n(312),o=1,a=document.getElementById("updateCategoryForm"),document.querySelectorAll('input[name="status"]').forEach((function(e){var t=e;t.getAttribute("checked")&&(o=Number(t.value)),e.addEventListener("click",(function(){o=Number(t.value)}))})),null==a||a.addEventListener("submit",(function(a){a.preventDefault();var r=document.getElementById("name"),s=document.getElementById("description"),n=document.getElementById("categoryId");if(null!=r&&null!=s&&null!=o){var i={name:r.value,description:s.value,status:o,categoryId:n.value};console.log(i),e.http.put(t.routers.category.update,i)}}))})();