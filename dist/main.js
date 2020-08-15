!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=()=>{const e=document.getElementById("content"),t=document.createElement("div");return t.className="w-75 mx-auto text-center mt-3 border rounded d-flex flex-column text-white",{container:e,dataContainer:t}},c=e=>{const t=a();t.container.innerHTML="",((e,t)=>{const n=document.createElement("div");n.innerHTML=`${t.name}, ${t.sys.country} <i class="fas fa-map-marker-alt"></i>`;const a=document.createElement("div");a.className="d-flex flex-row justify-content-between";const c=document.createElement("div");c.className="p-3 w-25 ml-3";const s=document.createElement("img");s.src=`http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`,c.appendChild(s);const i=document.createElement("div");i.className="p-3";const l=document.createElement("h1");l.id="temperature",l.style.fontSize="75px",l.className="zoom-temp",l.innerText=t.main.temp+" °",i.appendChild(l);const m=document.createElement("div");m.className="p-3 w-25 text-left";const u=document.createElement("span");u.id="cel",u.className="mt-3 hov",u.classList.add("border","border-success","rounded","bg-success"),u.innerHTML="C <br>",u.onclick=()=>{d(t.main.temp,t.main.feels_like)};const p=document.createElement("span");p.id="fah",p.className="mt-3 hov",p.innerText="F",p.onclick=()=>{o(t.main.temp,t.main.feels_like)},m.appendChild(u),m.appendChild(p),a.appendChild(c),a.appendChild(i),a.appendChild(m);const h=document.createElement("div");h.style.fontSize="30px",h.innerText=t.weather[0].main;const f=document.createElement("div");f.className="d-flex flex-row justify-content-between";const g=document.createElement("div");g.className="w-50 text-right",g.id="extraTemp",g.innerText=`Feels like ${t.main.feels_like}°c`;const b=document.createElement("div");b.className="w-50 text-center",b.innerHTML=`Wind ${t.wind.speed} mph`;const y=document.createElement("div");y.className="w-50 text-left",y.innerHTML=`Humidity ${t.main.humidity}%`,f.appendChild(g),f.appendChild(b),f.appendChild(y);const w=document.createElement("div");w.className="d-flex flex-row justify-content-between";const x=document.createElement("div");x.className="w-50 text-right p-3",x.innerText="Sunrise  "+r(t.sys.sunrise);const v=document.createElement("div");v.className="w-50 text-left p-3",v.innerHTML="Sunset "+r(t.sys.sunset),w.appendChild(x),w.appendChild(v),e.appendChild(n),e.appendChild(a),e.appendChild(h),e.appendChild(f),e.appendChild(w)})(t.dataContainer,e),t.container.appendChild(t.dataContainer)},r=e=>{let t=new Date(1e3*e),n=t.getMinutes();return n<10&&(n="0"+n),`${t.getHours()}:${n}`},s=e=>{const t=1.8*e+32;return Math.round(10*t)/10},o=(e,t)=>{const n=document.getElementById("fah"),a=document.getElementById("cel"),c=document.getElementById("temperature"),r=document.getElementById("extraTemp"),o=s(e),d=s(t);c.innerText=o+" °",r.innerText=`Feels like ${d}°F`,n.classList.add("border","border-success","rounded","bg-success"),a.classList.remove("border","border-success","rounded","bg-success")},d=(e,t)=>{const n=document.getElementById("fah"),a=document.getElementById("cel"),c=document.getElementById("temperature"),r=document.getElementById("extraTemp");c.innerText=e+" °",r.innerText=`Feels like ${t}°c`,a.classList.add("border","border-success","rounded","bg-success"),n.classList.remove("border","border-success","rounded","bg-success")},i=()=>{const e=a();e.container.innerHTML="",(e=>{const t=document.createElement("img");t.className="danger-icon m-3 mx-auto",t.src="../src/assets/images/error.gif";const n=document.createElement("h4");n.className="text-danger font-weight-bolder",n.innerText="OOPS! Something went wrong";const a=document.createElement("h6");a.className="text-danger",a.innerHTML="It seems that there was an error processing your request:<br> ---enter a valid city in the search bar to see results<br> ---enable your location <br>---check your internet connection",e.appendChild(t),e.appendChild(n),e.appendChild(a)})(e.dataContainer),e.container.appendChild(e.dataContainer)},l=()=>{i()},m=()=>{$("#loading-info").hide()},u=async e=>{const t=((e,t)=>`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&APPID=${t}`)(e,"079e5ccf7838205ec9abca89cac417bd");try{const e=await fetch(t,{mode:"cors"});return await e.json()}catch(e){console.log("Invalid")}},p=async e=>{try{let t=await e;c(t)}catch(e){l()}finally{m()}},h=async e=>{const t=e.coords.latitude,n=e.coords.longitude,a=await(async(e,t)=>{let n=`http://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&units=metric&APPID=079e5ccf7838205ec9abca89cac417bd`;try{const e=await fetch(n,{mode:"cors"});return await e.json()}catch(e){console.log("Invalid")}})(t,n);let c=await u(a.name);m(),p(c)},f=()=>{m(),l()};((e,t)=>{document.getElementById(e).onclick=t})("btn-search",async()=>{const e=(t="search-input",document.getElementById(t).value);var t;$("#loading-info").show();let n=await u(e);p(n),(e=>{const t=document.getElementById("bg-vid");switch(e){case"Thunderstorm":case"Drizzle":case"Rain":t.src="../src/assets/videos/rain.mp4";break;case"Snow":t.src="../src/assets/videos/snow.mp4";break;case"Clear":t.src="../src/assets/videos/clearsky.mp4";break;case"Clouds":t.src="../src/assets/videos/clouds.mp4";break;default:t.src="../src/assets/videos/vars.mp4"}})(n.weather[0].main)}),navigator.geolocation?navigator.geolocation.getCurrentPosition(h,f):alert("Geolocation is not supported by your browser")}]);