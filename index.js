import{a as y,S as g,i as c}from"./assets/vendor-D94OL8Qp.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const h="49359478-baf2a77463771851b04b26e30",p="https://pixabay.com/api/",l=15;async function f(i,t=1){try{return(await y.get(p,{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:l}})).data}catch(r){console.error("Error fetching data:",r)}}let u=null;function m(i=[]){const t=document.querySelector(".gallery"),r=i.map(e=>`
      <div class="card-container">
        <div class="card">
          <a href="${e.largeImageURL}">
            <img class="card-image" src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="card-body">
            <div class="card-item">
              <h4>Likes</h4><p>${e.likes}</p>
            </div>
            <div class="card-item">
              <h4>Views</h4><p>${e.views}</p>
            </div>
            <div class="card-item">
              <h4>Comments</h4><p>${e.comments}</p>
            </div>
            <div class="card-item">
              <h4>Downloads</h4><p>${e.downloads}</p>
            </div>
          </div>
        </div>
      </div>
    `).join("");t.insertAdjacentHTML("beforeend",r),u?u.refresh():u=new g(".gallery a")}let n=1;const s={form:document.querySelector(".form"),searchQueryInput:document.querySelector(".form-input"),imagesContainer:document.querySelector(".gallery"),button:document.querySelector(".form-button"),loader:document.querySelector(".loader"),buttomLoadMore:document.querySelector(".add-posts-button")};s.form.addEventListener("submit",async i=>{i.preventDefault();const t=s.searchQueryInput.value.trim();n=1;const r=document.querySelector(".gallery");if(r.innerHTML="",!t){c.error({messageColor:"#FAFAFB",iconUrl:"./img/bi_x-octagon.svg",iconColor:"white",message:"Please enter a search word!",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"});return}s.loader.style.display="inline-block";try{const e=await f(t);if(Math.ceil(e.totalHits/l)>n?s.buttomLoadMore.style.display="flex":(s.buttomLoadMore.style.display="none",c.error({messageColor:"#FAFAFB",iconUrl:"./img/bi_x-octagon.svg",iconColor:"white",message:"We are sorry, but you have reached the end of search results.",position:"topRight",backgroundColor:"#4e75ff",color:"#fafafb"})),e.hits.length===0)throw new Error("No images found for this query");m(e.hits),console.log(e)}catch{c.error({messageColor:"#FAFAFB",iconUrl:"./img/bi_x-octagon.svg",iconColor:"white",message:"Sorry, there are no images matching</br> your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"})}finally{s.loader.style.display="none"}});s.buttomLoadMore.addEventListener("click",async i=>{i.preventDefault();const t=s.searchQueryInput.value.trim();n++;try{const r=await f(t,n),e=document.querySelector(".card-container").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),m(r.hits),console.log(r),s.buttomLoadMore.style.display="flex",r.hits>l||Math.ceil(r.totalHits/l)>n?s.buttomLoadMore.style.display="flex":s.buttomLoadMore.style.display="none"}catch{c.error({messageColor:"#FAFAFB",iconUrl:"./img/bi_x-octagon.svg",iconColor:"white",message:"Sorry, there are no images matching</br> your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"})}});
//# sourceMappingURL=index.js.map
