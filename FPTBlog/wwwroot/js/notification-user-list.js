(()=>{"use strict";var e={284:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.http=void 0;var s=a(603),n=axios;t.http=n,n.defaults.withCredentials=!0,n.interceptors.request.use(s.requestInterceptor),n.interceptors.response.use(s.responseSuccessInterceptor,s.responseFailedInterceptor)},603:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.responseFailedInterceptor=t.responseSuccessInterceptor=t.handleCommonResponse=t.requestInterceptor=void 0;var s=a(973);function n(){var e=document.getElementById("form-btn"),t=document.getElementById("loading");t&&e&&(e.classList.remove("hidden"),e.classList.add("block"),t.classList.add("hidden"),t.classList.remove("flex"))}t.requestInterceptor=function(e){var t=document.getElementById("form-btn"),a=document.getElementById("loading"),s=document.getElementById("MESSAGEERROR"),n=document.getElementById("ERRORMESSAGEERROR");for(var i in e.data){var o=document.getElementById(i.toUpperCase()+"ERROR");o&&(o.innerHTML="")}return n&&(n.innerHTML=""),s&&(s.innerHTML=""),a&&t&&(t.classList.add("hidden"),a.classList.remove("hidden"),a.classList.add("flex")),e},t.handleCommonResponse=n,t.responseSuccessInterceptor=function(e){var t,a,i,o,r,l;if(n(),null===(a=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.details)||void 0===a?void 0:a.message){var d=document.getElementById("MESSAGEERROR");if(d){var c=null===(o=null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.details)||void 0===o?void 0:o.message;d.innerHTML=c.slice(0,1).toUpperCase()+c.slice(1,c.length)}document.getElementById("toastify")&&(c=null===(l=null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.details)||void 0===l?void 0:l.message,(0,s.toastify)({text:c.slice(0,1).toUpperCase()+c.slice(1,c.length),duration:4e3,newWindow:!0,close:!0,gravity:"top",position:"right",backgroundColor:"#4CAF50",avatar:"/images/check.svg",stopOnFocus:!0}))}return e},t.responseFailedInterceptor=function(e){var t,a;if(n(),null===(a=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===a?void 0:a.details){var i=e.response.data.details;for(var o in i){var r=document.getElementById(o.toUpperCase()+"ERROR");if(r&&(r.innerHTML=r.getAttribute("data-label")+" "+i[o]),r&&("errorMessage"===o||"message"===o)){var l=""+i[o];r.innerHTML=l.slice(0,1).toUpperCase()+l.slice(1,l.length),document.getElementById("toastify")&&(0,s.toastify)({text:l.slice(0,1).toUpperCase()+l.slice(1,l.length),duration:4e3,newWindow:!0,close:!0,gravity:"top",position:"right",avatar:"/images/minus.svg",backgroundColor:"#F44336",stopOnFocus:!0})}}}return Promise.reject(e.response)}},312:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routers=t.routerLinks=void 0,t.routerLinks={home:"/",loginForm:"/auth/login"},t.routers={category:{create:"/api/category",update:"/api/category",chart:"/api/category/chart"},post:{create:"/api/post",chart:"/api/admin/post/chart",addNewTagToPost:"/api/post/tag",getTagOfPost:function(e){return"/api/post/tag?postId="+e},save:"/api/post/save",uploadImagePost:"/api/post/image",addCategoryToPost:"/api/post/category",likePost:"/api/post/like",dislikePost:"/api/post/dislike",sendPost:"/api/post/send",approvedPost:"/api/admin/post/approved",deletePost:"/api/post/delete"},user:{changePassword:"/api/user/change-password",update:"/api/user",get:"/api/user",chart:"/api/admin/user/chart",status:"/api/admin/user/status",role:"/api/admin/user/role",follow:"/api/user/follow"},tag:{getAll:"/api/tag/all",chart:"/api/tag/chart",clearUnused:"/api/tag/unused",getByName:function(e){return"/api/tag?name="+e}},auth:{login:"/api/auth/login",register:"/api/auth/register"},reward:{create:"/api/reward",update:"/api/reward",getOne:"/api/reward",chart:"/api/reward/chart",give:"/api/reward/give",delete:"/api/reward/delete",removeUserReward:"/api/reward/remove"},comment:{create:"/api/comment",getComment:"/api/comment/post",deleteComment:"/api/comment/delete",updateComment:"/api/comment",likeComment:"/api/comment/like",dislikeComment:"/api/comment/dislike"},notification:{create:"/api/admin/notification",get:"/api/admin/notification"}}},973:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toastify=void 0,t.toastify=function(e){return Toastify(e).showToast()}}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,a),i.exports}(()=>{for(var e=a(284),t=a(312),s=document.getElementsByClassName("view-more"),n=document.getElementById("modal-btn-close"),i=document.getElementById("modal-wrapper"),o=document.getElementById("modal-bg"),r=document.getElementById("modal-panel"),l=function(){null==i||i.classList.add("invisible")},d=function(a){var n=s[a];n&&n.addEventListener("click",(function(){null==i||i.classList.remove("invisible"),null==o||o.classList.add("opacity-100"),null==o||o.classList.remove("opacity-0"),null==r||r.classList.add("opacity-100","translate-y-0","sm:scale-100"),null==r||r.classList.remove("opacity-0","translate-y-4","sm:translate-y-0","sm:scale-95"),null==r||r.removeEventListener("transitionend",l)})),n.addEventListener("click",(function(){var a=n.getAttribute("data-notificationId"),s=t.routers.notification.get+"?notificationId="+a;e.http.get(s).then((function(e){var t=e.data,a=document.getElementById("notification-content"),s=1===t.data.level?"font-semibold text-sm text-green-500":2===t.data.level?"font-semibold text-sm  text-yellow-500":"font-semibold text-sm  text-red-500",n='\n                    <div class="mt-2 space-y-4">\n                        <div class="space-y-1">\n                            <h4 class="text-sm font-semibold">Notification ID</h4>\n                            <p class="opacity-70">'+t.data.notificationId+'</p>\n                        </div>\n                        <div class="space-y-1">\n                            <h4 class="text-sm font-semibold">Level</h4>\n                            <p class="'+s+'">'+(1===t.data.level?"Information":2===t.data.level?"Warning":"Banned")+'</p>\n\n                        </div>\n                        <div class="space-y-1">\n                            <h4 class="text-sm font-semibold">Reciever</h4>\n                            <p class="opacity-70">'+t.data.receiver.name+'</p>\n\n                        </div>\n                        <div class="space-y-1">\n                            <h4 class="text-sm font-semibold">Sender</h4>\n                            <p class="opacity-70">'+t.data.receiver.name+'</p>\n                        </div>\n                        <div class="space-y-1">\n                            <h4 class="text-sm font-semibold">Content</h4>\n                            <p class="opacity-70">'+t.data.content+"</p>\n\n                        </div>\n                    </div>";a.innerHTML=n}))}))},c=0;c<s.length;c++)d(c);null==n||n.addEventListener("click",(function(){null==o||o.classList.remove("opacity-100"),null==o||o.classList.add("opacity-0"),null==r||r.classList.remove("opacity-100","translate-y-0","sm:scale-100"),null==r||r.classList.add("opacity-0","translate-y-4","sm:translate-y-0","sm:scale-95"),null==r||r.addEventListener("transitionend",l)}))})()})();