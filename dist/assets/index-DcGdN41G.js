(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();function B({col:t,row:n}){return`
    <div class="switch" data-name="${t}${n}">
      <div class="knob-lane">
        <button 
        class="btn" 
        type="button" 
        data-col="${t}"
        data-row="${n}" 
        data-target="button${t}c${n}"
        data-co="co${t}"
        data-sum="sum${t}"
        data-total="total${t}" data-totalBinary="totalBinary"></button>
      </div>
    </div>
  `}function T({col:t,a:n,b:e,ci:r}){return`
    <div class="top-labels">
      <p>A</p>
      <p>B</p>
      <p>CI</p>
    </div>
    <div class="top-values">
      <p id="button${t}c1">${n}</p>
      <p id="button${t}c2">${e}</p>
      <p id="button${t}c3">${r}</p>
    </div>
  `}function x({col:t,co:n,sum:e}){return`
  <div class="bottom-values">
    <p ${t===8?"":`data-target="button${t+1}c3"`} id="co${t}">${n}</p>
    <p></p>
    <p id="sum${t}">${e}</p>
  </div>
  <div class="bottom-labels">
    <p>CO</p>
    <p></p>
    <p>Sum</p>
  </div>
  `}function A({col:t,a:n,b:e,ci:r,co:o,sum:s}){return`
    <section class="column column-${t}">
      <div class="row row-1">
        ${B({col:t,row:1})}
      </div>
      <div class="row row-2">
        ${B({col:t,row:2})}
      </div>
      <div class="row row-3">
        ${T({col:t,a:n,b:e,ci:r})}
        <div class="column-name">
          <span>Adder ${t}</span>
        </div>
        ${x({col:t,co:o,sum:s})}
      </div>
      <div class="row row-4 total">
        <p id="total${t}">${Math.pow(2,t-1)}</p>
      </div>
    </section> `}function R(){return`
    <section class="column column-9">
      <div class="row row-1">
        <p>0</p>
        <p>00000000</p>
      </div>
      <div class="row row-2">
        <p>0</p>
        <p>00000000</p>
      </div>
      <div class="row row-3">
        <p>+</p>
      </div>
      <div class="row row-4">
        <p>0</p>
        <p id="totalBinary">00000000</p>
      </div>
    </section>
  `}const g=new DocumentFragment,S=new DOMParser,v=[];function D(t){const n=t.parentElement,e=n?.clientHeight,r=n?.clientWidth;t.style.setProperty("--intrinsicValue",e-r+"px"),t.classList.toggle("bottom"),t.parentElement?.parentElement?.classList.toggle("switch-on")}const a=t=>document.querySelector(t),E=t=>t==null?[document.createElement("div")]:[...S.parseFromString(t,"text/html").body.children],L=t=>t.forEach(n=>{g.appendChild(n)});function $(t,n){if(n==null){v.push(t());return}v.push(t(n))}function O(t){const n=a(`#${t.dataset.target}`),e=a(`#${t.dataset.co}`),r=a(`#${t.dataset.sum}`),o=a(`#${t.dataset.total}`),s=e===null?null:a(`#${e.dataset.target}`),i=s===null?null:s.parentElement?.nextElementSibling?.nextElementSibling,l=i?.lastElementChild,m=i?.parentElement?.nextElementSibling?.firstElementChild,d=a(".column-9 .row-4 p"),p=a(".column-9 .row-4 p:last-child"),h=a(".column-9 .row-1 p:first-child"),w=a(".column-9 .row-1 p:last-child"),f=a(".column-9 .row-2 p:first-child"),C=a(".column-9 .row-2 p:last-child");return new V(n,e,r,o,s,l,m,d,p,h,f,w,C)}function j(t){const n=parseInt(t.dataset.col),e=t.dataset.row,r=u[`col${n}`],o=u[`col${n===8?8:n+1}`];return new _(n,e,r,o)}function I(){const t=[...u.Binary1].reverse().join(""),n=[...u.Binary2].reverse().join(""),e=parseInt(t,2),r=parseInt(n,2),o=e+r;let s=o.toString(2);return new q(t,n,e,r,o,s)}function P(t){t.row==="1"&&(t.state.setA(t.state.a===0?1:0),u.Binary1[t.col-1]=t.state.a),t.row==="2"&&(t.state.setB(t.state.b===0?1:0),u.Binary2[t.col-1]=t.state.b),t.nextState.setCarryIn(t.state.co)}function F(t,n){t.Wire.textContent=n.row==="1"?n.state.a.toString():n.state.b.toString(),t.CarryOut.textContent=n.state.co.toString(),t.SumWire.textContent=n.state.sum.toString(),t.AdjacentCarryIn&&(t.AdjacentCarryIn.textContent=n.nextState.ci.toString()),t.AdjacentSum&&(t.AdjacentSum.textContent=`${n.nextState.sum}`)}function N(t,n){t.TopRowBinaryTotal.textContent=n.TopRowBinaryNumber,t.RowTwoBinaryTotal.textContent=n.RowTwoBinaryNumber,t.TopRowDecimalTotal.textContent=n.TopRowDecimal.toString(),t.RowTwoDecimalTotal.textContent=n.RowTwoDecimal.toString(),t.BottomRowDecimalTotal.textContent=n.BottomRowDecimal.toString(),t.BottomRowBinaryTotal.textContent=n.BottomBinaryNumber.padStart(8,"0")}function M(t,n){t.state.sum===1?n.BitNumber.style.setProperty("--text-color","yellow"):n.BitNumber.style.setProperty("--text-color","#3a3a3a"),t.nextState.sum===1&&n.AdjacentNumber?n.AdjacentNumber.style.setProperty("--text-color","yellow"):n.AdjacentNumber&&n.AdjacentNumber.style.setProperty("--text-color","#3a3a3a")}function y(t,n){if(t>1||n>1)throw new Error("Values must be 0 or 1");return t&&n?1:0}function W(t,n){if(t>1||n>1)throw new Error("Values must be 0 or 1");return t||n?1:0}function b(t,n){if(t>1||n>1)throw new Error("Values must be 0 or 1");return t!==n?1:0}class V{constructor(n,e,r,o,s,i,l,m,d,p,h,w,f){this.Wire=n,this.CarryOut=e,this.SumWire=r,this.BitNumber=o,this.AdjacentCarryIn=s,this.AdjacentSum=i,this.AdjacentNumber=l,this.BottomRowDecimalTotal=m,this.BottomRowBinaryTotal=d,this.TopRowDecimalTotal=p,this.RowTwoDecimalTotal=h,this.TopRowBinaryTotal=w,this.RowTwoBinaryTotal=f}}class _{constructor(n,e,r,o){this.col=n,this.row=e,this.state=r,this.nextState=o}}class q{constructor(n,e,r,o,s,i){this.TopRowBinaryNumber=n,this.RowTwoBinaryNumber=e,this.TopRowDecimal=r,this.RowTwoDecimal=o,this.BottomRowDecimal=s,this.BottomBinaryNumber=i}}class c{constructor(n,e,r,o,s,i){this.col=n,this.a=e,this.b=r,this.ci=o,this.co=s,this.sum=i,this.col=n,this.a=e,this.b=r,this.ci=o,this.co=s,this.sum=i}__halfAdder(n,e){return{sum:b(n,e),co:y(n,e)}}FullAdder(n,e,r){const o=b(n,e),s=b(o,r),i=y(o,r),l=y(n,e),m=W(i,l);return{sum:s,co:m}}setA(n){this.a=n;const e=this.FullAdder(this.a,this.b,this.ci);this.co=e.co,this.sum=e.sum}setB(n){this.b=n;const e=this.FullAdder(this.a,this.b,this.ci);this.co=e.co,this.sum=e.sum}setCarryIn(n){this.ci=n;const e=this.FullAdder(this.a,this.b,this.ci);this.co=e.co,this.sum=e.sum}}const u={col1:new c(1,0,0,0,0,0),col2:new c(2,0,0,0,0,0),col3:new c(3,0,0,0,0,0),col4:new c(4,0,0,0,0,0),col5:new c(5,0,0,0,0,0),col6:new c(6,0,0,0,0,0),col7:new c(7,0,0,0,0,0),col8:new c(8,0,0,0,0,0),Sum1:0,Sum2:0,Binary1:[0,0,0,0,0,0,0,0],Binary2:[0,0,0,0,0,0,0,0]},U=Array.from({length:8},()=>0).map((t,n)=>u[`col${n+1}`]);function G(){$(R,null),U.reverse().forEach(n=>{$(A,n)});const t=E(v.join(""));L(t),a(".app").append(g)}addEventListener("DOMContentLoaded",G);function H(t){const n=t.target;if(n.localName!=="button")return;const e=j(n);P(e);const r=I(),o=O(n);F(o,e),N(o,r),M(e,o),D(n)}const K=a(".app");function X(t){return()=>{t.addEventListener("click",H)}}addEventListener("load",X(K));
