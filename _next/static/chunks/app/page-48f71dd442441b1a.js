(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1392:(e,t,i)=>{"use strict";i.d(t,{default:()=>o});var n=i(5155),r=i(2115),d=i(337),l=i(7274);let o=()=>((0,r.useEffect)(()=>{let e=document.getElementById("threeDContainer");if(!e)return;let t=new d.Z58,i=new d.ubm(75,e.clientWidth/e.clientHeight,.1,1e3),n=new l.JeP;n.setSize(e.clientWidth,e.clientHeight),e.appendChild(n.domElement);let r=new d.iNn,o=new d.V9B({color:65280}),s=new d.eaF(r,o);t.add(s),i.position.z=5,!function e(){requestAnimationFrame(e),s.rotation.x+=.01,s.rotation.y+=.01,n.render(t,i)}();let h=()=>{n.setSize(e.clientWidth,e.clientHeight),i.aspect=e.clientWidth/e.clientHeight,i.updateProjectionMatrix()};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h),e.removeChild(n.domElement)}},[]),(0,n.jsx)("div",{id:"threeDContainer",style:{width:"100%",height:"500px"}}))},7812:(e,t,i)=>{Promise.resolve().then(i.bind(i,1392))}},e=>{var t=t=>e(e.s=t);e.O(0,[367,831,441,587,358],()=>t(7812)),_N_E=e.O()}]);