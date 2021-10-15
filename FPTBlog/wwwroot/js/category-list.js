(()=>{"use strict";var e={284:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.http=void 0;var a=n(603),o=axios;t.http=o,o.defaults.withCredentials=!0,o.interceptors.request.use(a.requestInterceptor),o.interceptors.response.use(a.responseSuccessInterceptor,a.responseFailedInterceptor)},603:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.responseFailedInterceptor=t.responseSuccessInterceptor=t.handleCommonResponse=t.requestInterceptor=void 0;var a=n(973);function o(){var e=document.getElementById("form-btn"),t=document.getElementById("loading");t&&e&&(e.classList.remove("hidden"),e.classList.add("block"),t.classList.add("hidden"),t.classList.remove("flex"))}t.requestInterceptor=function(e){var t=document.getElementById("form-btn"),n=document.getElementById("loading"),a=document.getElementById("MESSAGEERROR"),o=document.getElementById("ERRORMESSAGEERROR");for(var r in e.data){var i=document.getElementById(r.toUpperCase()+"ERROR");i&&(i.innerHTML="")}return o&&(o.innerHTML=""),a&&(a.innerHTML=""),n&&t&&(t.classList.add("hidden"),n.classList.remove("hidden"),n.classList.add("flex")),e},t.handleCommonResponse=o,t.responseSuccessInterceptor=function(e){var t,n,r,i,s,l;if(o(),null===(n=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.details)||void 0===n?void 0:n.message){var d=document.getElementById("MESSAGEERROR");if(d){var u=null===(i=null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.details)||void 0===i?void 0:i.message;d.innerHTML=u.slice(0,1).toUpperCase()+u.slice(1,u.length)}document.getElementById("toastify")&&(u=null===(l=null===(s=null==e?void 0:e.data)||void 0===s?void 0:s.details)||void 0===l?void 0:l.message,(0,a.toastify)({text:u.slice(0,1).toUpperCase()+u.slice(1,u.length),duration:2e3,newWindow:!0,close:!0,gravity:"top",position:"right",backgroundColor:"#fa983a",stopOnFocus:!0}))}return e},t.responseFailedInterceptor=function(e){var t,n;if(o(),null===(n=null===(t=e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.details){var r=e.response.data.details;for(var i in r){var s=document.getElementById(i.toUpperCase()+"ERROR");if(s&&(s.innerHTML=s.getAttribute("data-label")+" "+r[i]),s&&("errorMessage"===i||"message"===i)){var l=""+r[i];s.innerHTML=l.slice(0,1).toUpperCase()+l.slice(1,l.length),document.getElementById("toastify")&&(0,a.toastify)({text:l.slice(0,1).toUpperCase()+l.slice(1,l.length),duration:2e3,newWindow:!0,close:!0,gravity:"top",position:"right",backgroundColor:"rgb(239, 68, 68)",stopOnFocus:!0})}}}return Promise.reject(e.response)}},312:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routers=t.routerLinks=void 0,t.routerLinks={home:"/",loginForm:"/auth/login"},t.routers={category:{create:"/api/category",update:"/api/category",chart:"/api/category/chart"},post:{create:"/api/post",addNewTagToPost:"/api/post/tag",getTagOfPost:function(e){return"/api/post/tag?postId="+e},save:"/api/post/save",uploadImagePost:"/api/post/image",addCategoryToPost:"/api/post/category",likePost:"/api/post/like",dislikePost:"/api/post/dislike",sendPost:"/api/post/send",approvedPost:"/api/admin/post/approved",deletePost:"/api/post/delete"},user:{changePassword:"/api/user/change-password",update:"/api/user",get:"/api/user",chart:"/api/admin/user/chart",status:"/api/admin/user/status",role:"/api/admin/user/role",follow:"/api/user/follow"},tag:{getAll:"/api/tag/all",clearUnused:"/api/tag/unused",getByName:function(e){return"/api/tag?name="+e}},auth:{login:"/api/auth/login",register:"/api/auth/register"},reward:{create:"/api/reward",update:"/api/reward",getOne:"/api/reward",give:"/api/reward/give",delete:"/api/reward/delete",removeUserReward:"/api/reward/remove"}}},623:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.pageChange=void 0,t.pageChange=function(e){var t=document.getElementById("pagination-size"),n=document.getElementById("pagination-btn");null==t||t.addEventListener("change",(function(n){var a=t.options[t.selectedIndex];document.getElementById("pageSize").value=a.value,document.getElementById("pageIndex").value="0",document.getElementById(e).submit()}));var a=null==n?void 0:n.getElementsByTagName("button");if(a)for(var o=function(t){var n=a[t];n.addEventListener("click",(function(t){var a=document.getElementById("pageIndex"),o=n.getAttribute("data-index");o&&(a.value=o),document.getElementById(e).submit()}))},r=0;r<a.length;r++)o(r)}},341:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.slideOver=void 0,t.slideOver=function(e){var t=document.getElementById(e+"-btn"),n=document.getElementById(e+"-btn-close"),a=document.getElementById(e+"-wrapper"),o=document.getElementById(e+"-bg"),r=document.getElementById(e+"-panel"),i=function(){null==a||a.classList.add("invisible")};null==t||t.addEventListener("click",(function(){null==a||a.classList.remove("invisible"),null==o||o.classList.add("opacity-100"),null==o||o.classList.remove("opacity-0"),null==r||r.classList.add("translate-x-0"),null==r||r.classList.remove("translate-x-full"),null==r||r.removeEventListener("transitionend",i)})),null==n||n.addEventListener("click",(function(){null==o||o.classList.remove("opacity-100"),null==o||o.classList.add("opacity-0"),null==r||r.classList.remove("translate-x-0"),null==r||r.classList.add("translate-x-full"),null==r||r.addEventListener("transitionend",i)}))}},973:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toastify=void 0,t.toastify=function(e){return Toastify(e).showToast()}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}(()=>{var e=n(623),t=n(341),a=n(284),o=n(312);(0,e.pageChange)("listCategoryForm"),(0,t.slideOver)("modal");var r,i,s,l,d,u=1,c=document.getElementById("createCategoryForm");document.querySelectorAll('input[name="status"]').forEach((function(e){e.addEventListener("click",(function(){u=Number(e.value)}))})),null==c||c.addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("name"),n=document.getElementById("description");if(null!=t&&null!=n&&null!=u){var r={name:t.value,description:n.value,status:u};a.http.post(o.routers.category.create,r).then()}})),i=document.getElementById("view-chart"),s=null==i?void 0:i.getElementsByTagName("span")[0],l=document.getElementById("chart"),d=!1,null==i||i.addEventListener("click",(function(){d?(d=!1,s.innerText="View Chart",r.destroy()):a.http.get(o.routers.category.chart).then((function(e){var t=e.data,n=t.data.map((function(e){return e.name})),a=t.data.map((function(e){return e.total}));d=!0,r=new ApexCharts(l,{series:a,chart:{width:380,type:"pie"},title:{text:"Category and post chart",align:"center"},labels:n,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}),s.innerText="Close Chart",r.render()}))}))})()})();