(()=>{"use strict";var e={284:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.http=void 0;var a=o(603),r=axios;t.http=r,r.defaults.withCredentials=!0,r.interceptors.request.use(a.requestInterceptor),r.interceptors.response.use(a.responseSuccessInterceptor,a.responseFailedInterceptor)},603:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.responseFailedInterceptor=t.responseSuccessInterceptor=t.handleCommonResponse=t.requestInterceptor=void 0;var a=o(973);function r(){var e=document.getElementById("form-btn"),t=document.getElementById("loading");t&&e&&(e.classList.remove("hidden"),e.classList.add("block"),t.classList.add("hidden"),t.classList.remove("flex"))}t.requestInterceptor=function(e){var t=document.getElementById("form-btn"),o=document.getElementById("loading"),a=document.getElementById("MESSAGEERROR"),r=document.getElementById("ERRORMESSAGEERROR");for(var n in e.data){var s=document.getElementById(n.toUpperCase()+"ERROR");s&&(s.innerHTML="")}return r&&(r.innerHTML=""),a&&(a.innerHTML=""),o&&t&&(t.classList.add("hidden"),o.classList.remove("hidden"),o.classList.add("flex")),e},t.handleCommonResponse=r,t.responseSuccessInterceptor=function(e){var t,o,n,s,i,d;if(r(),null===(o=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.details)||void 0===o?void 0:o.message){var l=document.getElementById("MESSAGEERROR");if(l){var p=null===(s=null===(n=null==e?void 0:e.data)||void 0===n?void 0:n.details)||void 0===s?void 0:s.message;l.innerHTML=p.slice(0,1).toUpperCase()+p.slice(1,p.length)}document.getElementById("toastify")&&(p=null===(d=null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.details)||void 0===d?void 0:d.message,(0,a.toastify)({text:p.slice(0,1).toUpperCase()+p.slice(1,p.length),duration:2e3,newWindow:!0,close:!0,gravity:"top",position:"right",backgroundColor:"#fa983a",stopOnFocus:!0}))}return e},t.responseFailedInterceptor=function(e){var t,o;if(r(),null===(o=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===o?void 0:o.details){var n=e.response.data.details;for(var s in n){var i=document.getElementById(s.toUpperCase()+"ERROR");if(i&&(i.innerHTML=i.getAttribute("data-label")+" "+n[s]),i&&("errorMessage"===s||"message"===s)){var d=""+n[s];i.innerHTML=d.slice(0,1).toUpperCase()+d.slice(1,d.length),document.getElementById("toastify")&&(0,a.toastify)({text:d.slice(0,1).toUpperCase()+d.slice(1,d.length),duration:2e3,newWindow:!0,close:!0,gravity:"top",position:"right",backgroundColor:"rgb(239, 68, 68)",stopOnFocus:!0})}}}return Promise.reject(e.response)}},312:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routers=t.routerLinks=void 0,t.routerLinks={home:"/",loginForm:"/auth/login"},t.routers={category:{create:"/api/category",update:"/api/category"},post:{create:"/api/post",addNewTagToPost:"/api/post/tag",getTagOfPost:function(e){return"/api/post/tag?postId="+e},save:"/api/post/save",uploadImagePost:"/api/post/image",addCategoryToPost:"/api/post/category",likePost:"/api/post/like",dislikePost:"/api/post/dislike",sendPost:"/api/post/send",approvedPost:"/api/admin/post/approved",deletePost:"/api/post/delete"},user:{changePassword:"/api/user/change-password",update:"/api/user",get:"/api/user",status:"/api/admin/user/status",role:"/api/admin/user/role",follow:"/api/user/follow"},tag:{getAll:"/api/tag/all",clearUnused:"/api/tag/unused",getByName:function(e){return"/api/tag?name="+e}},auth:{login:"/api/auth/login",register:"/api/auth/register"},reward:{create:"/api/reward",update:"/api/reward"}}},871:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.previewImage=void 0,t.previewImage=function(e,t){var o=document.getElementById(e);o.addEventListener("change",(function(){var e=o.files?o.files[0]:null;if(e){var a=new FileReader;a.onload=function(){var e=a.result,o=document.getElementById(t);o&&e&&"string"==typeof e&&(o.src=e)},a.readAsDataURL(e)}}))}},973:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toastify=void 0,t.toastify=function(e){return Toastify(e).showToast()}}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,o),n.exports}(()=>{var e=o(284),t=o(312);(0,o(871).previewImage)("file","preview-image");var a=document.getElementById("updateRewardForm");null==a||a.addEventListener("submit",(function(o){o.preventDefault();var a=document.getElementById("description"),r=document.getElementById("name"),n=document.getElementById("rewardId"),s=document.getElementById("file");if(null!=a&&null!=r&&null!=s){var i=s.files?s.files[0]:null,d=new FormData;d.append("name",r.value),d.append("rewardId",n.value),d.append("description",a.value),i&&d.append("file",i),e.http.put(t.routers.reward.create,d)}}))})()})();