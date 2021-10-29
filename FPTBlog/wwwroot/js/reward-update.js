(()=>{"use strict";var e={284:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.http=void 0;var o=a(603),r=axios;t.http=r,r.defaults.withCredentials=!0,r.interceptors.request.use(o.requestInterceptor),r.interceptors.response.use(o.responseSuccessInterceptor,o.responseFailedInterceptor)},603:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.responseFailedInterceptor=t.responseSuccessInterceptor=t.handleCommonResponse=t.requestInterceptor=void 0;var o=a(973);function r(){var e=document.getElementById("form-btn"),t=document.getElementById("loading");t&&e&&(e.classList.remove("hidden"),e.classList.add("block"),t.classList.add("hidden"),t.classList.remove("flex"))}t.requestInterceptor=function(e){var t=document.getElementById("form-btn"),a=document.getElementById("loading"),o=document.getElementById("MESSAGEERROR"),r=document.getElementById("ERRORMESSAGEERROR");for(var n in e.data){var i=document.getElementById(n.toUpperCase()+"ERROR");i&&(i.innerHTML="")}return r&&(r.innerHTML=""),o&&(o.innerHTML=""),a&&t&&(t.classList.add("hidden"),a.classList.remove("hidden"),a.classList.add("flex")),e},t.handleCommonResponse=r,t.responseSuccessInterceptor=function(e){var t,a,n,i,s,d;if(r(),null===(a=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.details)||void 0===a?void 0:a.message){var l=document.getElementById("MESSAGEERROR");if(l){var p=null===(i=null===(n=null==e?void 0:e.data)||void 0===n?void 0:n.details)||void 0===i?void 0:i.message;l.innerHTML=p.slice(0,1).toUpperCase()+p.slice(1,p.length)}document.getElementById("toastify")&&(p=null===(d=null===(s=null==e?void 0:e.data)||void 0===s?void 0:s.details)||void 0===d?void 0:d.message,(0,o.toastify)({text:p.slice(0,1).toUpperCase()+p.slice(1,p.length),duration:4e3,newWindow:!0,close:!0,gravity:"top",position:"right",backgroundColor:"#4CAF50",avatar:"/images/check.svg",stopOnFocus:!0}))}return e},t.responseFailedInterceptor=function(e){var t,a;if(r(),null===(a=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===a?void 0:a.details){var n=e.response.data.details;for(var i in n){var s=document.getElementById(i.toUpperCase()+"ERROR"),d=document.getElementById("toastify");if(s&&(s.innerHTML=s.getAttribute("data-label")+" "+n[i]),s&&("errorMessage"===i||"message"===i)){var l=""+n[i];s.innerHTML=l.slice(0,1).toUpperCase()+l.slice(1,l.length)}!d||"errorMessage"!==i&&"message"!==i||(l=""+n[i],(0,o.toastify)({text:l.slice(0,1).toUpperCase()+l.slice(1,l.length),duration:4e3,newWindow:!0,close:!0,gravity:"top",position:"right",avatar:"/images/minus.svg",backgroundColor:"#F44336",stopOnFocus:!0}))}}return Promise.reject(e.response)}},312:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routers=t.routerLinks=void 0,t.routerLinks={home:"/",loginForm:"/auth/login"},t.routers={category:{create:"/api/category",update:"/api/category",chart:"/api/category/chart"},post:{create:"/api/post",chart:"/api/admin/post/chart",addNewTagToPost:"/api/post/tag",getTagOfPost:function(e){return"/api/post/tag?postId="+e},save:"/api/post/save",uploadImagePost:"/api/post/image",addCategoryToPost:"/api/post/category",likePost:"/api/post/like",dislikePost:"/api/post/dislike",sendPost:"/api/post/send",approvedPost:"/api/admin/post/approved",deletePost:"/api/post/delete"},user:{changePassword:"/api/user/change-password",update:"/api/user",get:"/api/user",chart:"/api/admin/user/chart",status:"/api/admin/user/status",role:"/api/admin/user/role",follow:"/api/user/follow"},tag:{getAll:"/api/tag/all",chart:"/api/tag/chart",clearUnused:"/api/tag/unused",getByName:function(e){return"/api/tag?name="+e}},auth:{login:"/api/auth/login",register:"/api/auth/register"},reward:{create:"/api/reward",update:"/api/reward",getOne:"/api/reward",chart:"/api/reward/chart",give:"/api/reward/give",delete:"/api/reward/delete",removeUserReward:"/api/reward/remove"},comment:{create:"/api/comment",getComment:"/api/comment/post",deleteComment:"/api/comment/delete",updateComment:"/api/comment",likeComment:"/api/comment/like",dislikeComment:"/api/comment/dislike"},notification:{createUser:"/api/notification",create:"/api/admin/notification",get:"/api/admin/notification"}}},871:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.previewImage=void 0,t.previewImage=function(e,t){var a=document.getElementById(e);a.addEventListener("change",(function(){var e=a.files?a.files[0]:null;if(e){var o=new FileReader;o.onload=function(){var e=o.result,a=document.getElementById(t);a&&e&&"string"==typeof e&&(a.src=e)},o.readAsDataURL(e)}}))}},973:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toastify=void 0,t.toastify=function(e){return Toastify(e).showToast()}}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,a),n.exports}(()=>{var e=a(284),t=a(312);(0,a(871).previewImage)("file","preview-image");var o=document.getElementById("updateRewardForm");null==o||o.addEventListener("submit",(function(a){a.preventDefault();var o=document.getElementById("description"),r=document.getElementById("name"),n=document.getElementById("rewardId"),i=document.getElementById("file"),s=document.getElementById("type"),d=document.getElementById("constraint");if(null!=o&&null!=r&&null!=i){var l=i.files?i.files[0]:null,p=new FormData;p.append("name",r.value),p.append("rewardId",n.value),p.append("description",o.value),p.append("type",s.value),p.append("constraint",d.value),l&&p.append("file",l),e.http.put(t.routers.reward.create,p)}}))})()})();