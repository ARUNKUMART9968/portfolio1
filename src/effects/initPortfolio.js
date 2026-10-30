// All interactive behaviour: sound, confetti, bug game and boss, code rain, nitro,
// terminal, sticker wall, command palette, themes and the GitHub strip.
// It runs once after React has drawn the page, and finds elements by id.
import { L } from "../data/config";
import { TH } from "../data/themes";
import { KIT } from "../data/toolkit";
import { JK } from "../data/jokes";

export function initPortfolio() {
  if (window.__portfolioStarted) return;
  window.__portfolioStarted = true;

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],RM=matchMedia("(prefers-reduced-motion:reduce)").matches,FP=matchMedia("(pointer:fine)").matches;
/* EDIT HERE: paste your links. Empty demo links hide their button. */

/* Cadence demo: paste a REAL sample netlist and the REAL OCEAN script your tool made from it into demo above. Leave empty and the section stays hidden. */

let ti=0;const CV=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
function setTh(i,m){ti=i%TH.length;const[n,y,r,a]=TH[ti],s=document.documentElement.style;s.setProperty("--y",y);s.setProperty("--r",r);s.setProperty("--a",a);if(m)try{localStorage.setItem("th2",ti)}catch(e){}return n}
let sv0=null;try{sv0=localStorage.getItem("th2")}catch(e){}const hr=new Date().getHours(),night=hr<6||hr>=20;ti=sv0!==null?+sv0||0:night?0:hr<11?2:hr<17?1:4;setTh(ti);if(night)document.body.classList.add("night");
$("#th").title="Colours follow your clock. Click to change.";$("#th").onclick=()=>setTh(ti+1,1);
$$("[data-r]").forEach(a=>a.href=L.repos[a.dataset.r]||L.gh);
$$("[data-d]").forEach(a=>{const u=L.demos[a.dataset.d];u?a.href=u:a.remove()});
$$("[data-resume]").forEach(a=>a.href=L.resume);
$$(".tp").forEach(t=>t.innerHTML=t.dataset.w.split("|").map(s=>`<span>${s}</span>`).join("").repeat(4));
$$(".hz").forEach(h=>h.firstElementChild.innerHTML+=h.firstElementChild.innerHTML);
const T=["Junior software developer at MosIC","React, .NET Core, Python, PHP","From commit to production","I build websites that (mostly) don’t crash"];
(function(){const el=$("#ty");if(RM){el.textContent=T[0];return}let i=0,j=0,d=0;(function f(){const s=T[i];j+=d?-1:1;el.textContent=s.slice(0,j);let t=d?22:55;if(!d&&j==s.length){d=1;t=1700}else if(d&&!j){d=0;i=(i+1)%T.length;t=300}setTimeout(f,t)})()})();
const nm=$("#nm");$("#hero").addEventListener("pointermove",e=>{const r=nm.getBoundingClientRect();nm.style.setProperty("--mx",e.clientX-r.left+"px");nm.style.setProperty("--my",e.clientY-r.top+"px")});
/* confetti */
const cv=$("#fx"),x=cv.getContext("2d");let W,H,P=[],on=0;const rs=()=>{W=cv.width=innerWidth;H=cv.height=innerHeight};rs();addEventListener("resize",rs);
const EM=["🎉","⭐","💥","🚀","✨","🏍️"];
function run(){x.clearRect(0,0,W,H);P=P.filter(p=>p.l-->0);P.forEach(p=>{p.vy+=.3;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;x.globalAlpha=Math.min(1,p.l/25);x.save();x.translate(p.x,p.y);x.rotate(p.r);if(p.e){x.font="22px serif";x.fillText(p.e,-11,8)}else{x.fillStyle=p.c;x.fillRect(-6,-4,12,8)}x.restore()});if(P.length)requestAnimationFrame(run);else{on=0;x.clearRect(0,0,W,H)}}
function burst(px,py,n=12){if(RM)return;for(let i=0;i<n;i++){const a=Math.random()*6.28,s=4+Math.random()*9;P.push({x:px,y:py,vx:Math.cos(a)*s,vy:Math.sin(a)*s-5,r:0,vr:(Math.random()-.5)*.4,c:[CV("--y"),CV("--r"),"#f3efe4"][i%3],e:Math.random()<.15?EM[Math.random()*6|0]:0,l:60})}if(!on){on=1;run()}}
addEventListener("click",e=>{if(!e.target.closest(".bug"))burst(e.clientX,e.clientY,e.target.closest("a,button")?10:5)});
/* sound: all synthesized in the browser, no files */
let AC,E,SND=false,nitro=0,revT=0,lg=1;
function ac(){if(!AC){AC=new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),o2=AC.createOscillator(),g=AC.createGain(),f=AC.createBiquadFilter();o.type="sawtooth";o2.type="square";f.type="lowpass";f.frequency.value=400;g.gain.value=0;o.connect(f);o2.connect(f);f.connect(g);g.connect(AC.destination);o.start();o2.start();E={o,o2,g,f}}if(AC.state=="suspended")AC.resume()}
function blip(f=600,d=.08,ty="square",v=.05){if(!SND||!AC)return;const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime;o.type=ty;o.frequency.value=f;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(AC.destination);o.start();o.stop(t+d)}
function jingle(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>blip(f,.18,"square",.07),i*110))}
function rev(){if(!SND||!E)return;const t=AC.currentTime;revT=Date.now()+1600;[[E.o,1],[E.o2,.5]].forEach(([o,m])=>{o.frequency.cancelScheduledValues(t);o.frequency.setValueAtTime(45*m,t);o.frequency.exponentialRampToValueAtTime(320*m,t+.8);o.frequency.exponentialRampToValueAtTime(70*m,t+1.5)});E.f.frequency.setTargetAtTime(1800,t,.2);E.g.gain.cancelScheduledValues(t);E.g.gain.setValueAtTime(.02,t);E.g.gain.linearRampToValueAtTime(.14,t+.7);E.g.gain.linearRampToValueAtTime(.02,t+1.5)}
function engine(){if(!E||!AC||Date.now()<revT)return;const v=Math.min(1,sv/150),t=AC.currentTime,f=55+v*150;E.o.frequency.setTargetAtTime(f,t,.08);E.o2.frequency.setTargetAtTime(f/2,t,.08);E.f.frequency.setTargetAtTime(350+v*1400,t,.1);E.g.gain.setTargetAtTime(SND?.012+v*.06:0,t,.1)}
function syncSnd(){const b=$("#snd");b.textContent=SND?"🔊":"🔇";b.setAttribute("aria-pressed",SND)}
$("#snd").onclick=()=>{SND=!SND;if(SND){ac();blip(440,.08)}syncSnd()};
/* nitro */
function nit(v){if(v&&!nitro)blip(300,.3,"sawtooth",.08);nitro=v;document.body.classList.toggle("nitro",!!v)}
addEventListener("keydown",e=>{if(e.code=="Space"&&!/INPUT|TEXTAREA|BUTTON|^A$/.test(e.target.tagName)){e.preventDefault();nit(1)}});
addEventListener("keyup",e=>{if(e.code=="Space")nit(0)});
const sk=$(".stk");let ji=0,held=0,ht;
sk.addEventListener("pointerdown",()=>{held=0;ht=setTimeout(()=>{held=1;nit(1)},250)});
["pointerup","pointerleave","pointercancel"].forEach(ev=>sk.addEventListener(ev,()=>{clearTimeout(ht);if(held)nit(0)}));
sk.addEventListener("click",e=>{if(held){held=0;return}ji=1+(ji%(JK.length-1));$("#bub").textContent=JK[ji];burst(e.clientX,e.clientY,6);blip(500+ji*40,.08);const im=sk.querySelector("img");im.classList.remove("wg");void im.offsetWidth;im.classList.add("wg");setTimeout(()=>im.classList.remove("wg"),500)});
if(FP&&!RM){const im=sk.querySelector("img"),h=$("#hero");h.addEventListener("pointermove",e=>{const r=sk.getBoundingClientRect(),dx=(e.clientX-r.left-r.width/2)/innerWidth,dy=(e.clientY-r.top-r.height/2)/innerHeight;im.style.transform=`perspective(700px) rotateY(${dx*22}deg) rotateX(${-dy*16}deg)`});h.addEventListener("pointerleave",()=>im.style.transform="")}
const T0=document.title;document.addEventListener("visibilitychange",()=>{document.title=document.hidden?"Come back, I have bugs 🐛":T0});
/* green code rain behind the hero */
const rn=$("#rn"),rc=rn.getContext("2d");let cols,dr,rv=1;
function rr(){rn.width=rn.offsetWidth;rn.height=rn.offsetHeight;cols=Math.ceil(rn.width/18);dr=Array.from({length:cols},()=>Math.random()*-50)}rr();addEventListener("resize",rr);
if(!RM){new IntersectionObserver(e=>rv=e[0].isIntersecting).observe(rn);const ch="01{}<>/;=+$#".split("");setInterval(()=>{if(!rv)return;rc.fillStyle="rgba(6,9,10,.12)";rc.fillRect(0,0,rn.width,rn.height);rc.fillStyle=CV("--y");rc.font="16px monospace";dr.forEach((y,i)=>{rc.fillText(ch[Math.random()*ch.length|0],i*18,y*18);dr[i]=y*18>rn.height&&Math.random()>.975?0:y+(nitro?3:1)})},50)}
/* dashboard: speed follows scroll, gear follows section */
let ly=scrollY,sv=0;const secs=$$("section");
function sc(){sv=Math.min(299,sv+Math.abs(scrollY-ly)*.8);ly=scrollY;let g=1;secs.forEach((s,i)=>{if(!s.hidden&&s.getBoundingClientRect().top<innerHeight*.5)g=i+1});$("#gr").textContent=g;if(g!=lg){lg=g;blip(140,.05,"square",.05)}ride()}
addEventListener("scroll",sc,{passive:true});sc();
setInterval(()=>{sv*=.8;if(nitro)sv=299;engine();$("#hud").classList.toggle("red",sv>150);$("#sp").textContent=String(Math.round(sv)).padStart(3,"0")},100);
/* bugs */
let score=0;
function bug(){const b=document.createElement("span");b.className="bug";b.textContent="🐛";let px=Math.random()*(innerWidth-50),py=70+Math.random()*(innerHeight-190),a=Math.random()*6.28,dead=0;
const mv=()=>{if(dead)return;a+=(Math.random()-.5)*.4;px+=Math.cos(a)*1.2;py+=Math.sin(a)*1.2;if(px<0||px>innerWidth-40)a=3.14-a;if(py<70||py>innerHeight-120)a=-a;b.style.transform=`translate(${px}px,${py}px) rotate(${a+1.57}rad)`;requestAnimationFrame(mv)};
b.onclick=e=>{e.stopPropagation();dead=1;b.textContent="💥";burst(e.clientX,e.clientY,10);$("#sc").textContent=++score;$("#bc").textContent=score;blip(220,.12,"sawtooth",.08);blip(880,.05);if(score==10)prize();setTimeout(()=>{b.remove();setTimeout(bug,2500)},300)};
document.body.append(b);mv()}
if(!RM)for(let i=0;i<(innerWidth<760?1:3);i++)setTimeout(bug,i*700);
/* project cards tilt toward the pointer */
if(FP&&!RM)$$(".pc").forEach(c=>{c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;c.style.transform=`perspective(900px) rotateY(${(px-.5)*8}deg) rotateX(${(.5-py)*8}deg)`;c.style.setProperty("--gx",px*100+"%");c.style.setProperty("--gy",py*100+"%")});c.addEventListener("pointerleave",()=>c.style.transform="")});
/* ignition */
const ig=$("#ig");function go(s){if(ig.dataset.d)return;ig.dataset.d=1;if(s===true){SND=true;ac();rev();syncSnd()}$("#rev").style.width="100%";setTimeout(()=>ig.classList.add("go"),950);setTimeout(()=>ig.remove(),1700)}
$("#ign").onclick=()=>go(true);$("#ign2").onclick=()=>go();if(RM)ig.remove();else setTimeout(()=>go(),5000);
/* terminal */
const CMD={help:()=>"Try: whoami, skills, projects, experience, education, contact, resume, hire\nAlso: clear, ride, theme",
whoami:()=>"Arunkumar T, junior software developer at MosIC Solutions. .NET Core, React and REST APIs, taken all the way to production.",
skills:()=>"Languages: C#, JavaScript, Python, PHP, SQL, HTML, CSS\nBackend: .NET Core, EF Core, Express.js\nFrontend: React (Vite), Tailwind CSS, Bootstrap\nDatabases: SQL Server, MySQL, PostgreSQL, MongoDB\nDevOps: Git, Docker, CI/CD concepts, Kubernetes (fundamentals), Azure (foundational), GitHub Actions (learning)",
projects:()=>"Cadence Automizer: Spectre netlist in, OCEAN script out (Python)\nMosIC Office: internal admin panel (React, PHP, MySQL)\nQuizMaster: quiz platform (React, .NET Core, PostgreSQL)\nAI Code Reviewer: AI code review chatbot (MERN, Groq)",
experience:()=>"Junior Software Developer, MosIC Solutions (present)\nWeb Application Intern, Arjun Vision Tech Solutions, Chennai",
education:()=>"B.E. Computer Science and Engineering, Saveetha Engineering College, 2022 to 2026, CGPA 8.49/10\n12th, Achievers Academy Hr. Sec. School, 2022, 81.6%",
contact:()=>"Email: arunkumart212004@gmail.com\nGitHub: github.com/ARUNKUMART9968\nLinkedIn: linkedin.com/in/arun-kumar-t-563746256",
resume:()=>{open(L.resume);return "Opening resume..."},
hire:()=>{jingle();burst(innerWidth/2,innerHeight/2,30);return "Compiling offer...\n0 errors, 0 warnings.\nSend it to arunkumart212004@gmail.com"}};
CMD["sudo hire-me"]=CMD.hire;CMD.theme=()=>"Theme: "+setTh(ti+1,1);
const out=$("#out"),inp=$("#in");let HIST=[],hi=0;
function say(s,c){const d=document.createElement("div");d.textContent=s;if(c)d.className=c;out.append(d);$("#tm").scrollTop=1e5}
function ex(c){c=c.trim().toLowerCase();if(!c)return;blip(500,.04,"square",.03);HIST.push(c);hi=HIST.length;say("$ "+c,"e");if(c=="clear"){out.innerHTML="";return}if(c=="ride"){rev();const d=document.createElement("div");out.append(d);let i=0;const iv=setInterval(()=>{d.textContent=" ".repeat(i)+"🏍️💨";$("#tm").scrollTop=1e5;if(++i>38){clearInterval(iv);d.remove();say("Ride complete. No bugs were harmed.")}},RM?1:55);return}const f=CMD[c];say(f?f():"command not found: "+c+". Try help.")}
inp.addEventListener("keydown",e=>{if(e.key=="Enter"){ex(inp.value);inp.value=""}else if(e.key=="ArrowUp"){e.preventDefault();hi=Math.max(0,hi-1);inp.value=HIST[hi]||""}else if(e.key=="ArrowDown"){e.preventDefault();hi=Math.min(HIST.length,hi+1);inp.value=HIST[hi]||""}else if(e.key=="Tab"&&inp.value){const m=[...Object.keys(CMD),"clear","ride"].filter(k=>k.startsWith(inp.value.toLowerCase()));if(m.length){e.preventDefault();inp.value=m[0]}}e.stopPropagation()});
say("Hi, I’m Arun’s terminal. Type help, or tap a button.");
["help","skills","projects","experience","education","ride","hire"].forEach(c=>{const b=document.createElement("button");b.className="b s";b.textContent=c;b.onclick=()=>ex(c);$("#chips").append(b)});
/* project selector */
$$(".tb").forEach((b,i)=>b.onclick=()=>{$$(".tb").forEach(x=>{x.classList.remove("on");x.setAttribute("aria-selected","false")});$$(".pn").forEach(x=>x.classList.remove("on"));b.classList.add("on");b.setAttribute("aria-selected","true");$("#p"+i).classList.add("on")});
$(".tabs").addEventListener("keydown",e=>{const k=e.key,s=$$(".tb"),i=s.findIndex(x=>x.classList.contains("on")),d=/Down|Right/.test(k)?1:/Up|Left/.test(k)?-1:0;if(!d)return;e.preventDefault();const n=s[(i+d+4)%4];n.click();n.focus()});
/* toolkit pegboard */

KIT.forEach(([g,ts])=>{const d=document.createElement("div");d.className="gr";d.innerHTML=`<h3 class="plate">${g}</h3><div class="hk"></div>`;ts.forEach(([n,note,l])=>{const b=document.createElement("button");b.className="tool"+(l?" l":"");b.textContent=n;b.onclick=()=>{$$(".tool").forEach(x=>x.classList.remove("on"));b.classList.add("on");$("#nn").textContent=n;$("#nd").textContent=note};d.lastChild.append(b)});$(".peg").insertBefore(d,$("#nt"))});
/* the ride */
function ride(){const r=$(".rd").getBoundingClientRect(),p=$("#rp"),L=p.getTotalLength(),f=Math.max(0,Math.min(1,(innerHeight*.6-r.top)/r.height)),a=p.getPointAtLength(f*L),b=p.getPointAtLength(Math.min(L,f*L+3)),dx=(b.x-a.x)*r.width/100,dy=(b.y-a.y)*r.height/100,th=Math.atan2(dy,dx)*180/Math.PI,k=$("#bk");k.style.left=a.x+"%";k.style.top=a.y+"%";k.style.transform="translate(-50%,-50%) "+(dx>=0?`rotate(${th}deg) scaleX(-1)`:`rotate(${th-180}deg)`)}
/* bug prize */
function prize(){jingle();const p=$("#pz");p.hidden=false;burst(innerWidth/2,innerHeight/2,40);$("#pzx").onclick=()=>{p.hidden=true;boss()}}
/* bike cursor */
if(FP&&!RM){const ck=$("#ck");let tx=0,ty=0,cx=0,cy=0,o=0;const tk=()=>{cx+=(tx-cx)*.14;cy+=(ty-cy)*.14;ck.style.transform=`translate(${cx+14}px,${cy+14}px) scaleX(${tx>cx?-1:1})`;if(Math.abs(tx-cx)+Math.abs(ty-cy)>.5)requestAnimationFrame(tk);else o=0};addEventListener("pointermove",e=>{tx=e.clientX;ty=e.clientY;ck.style.display="block";if(!o){o=1;tk()}})}
/* live GitHub strip */
(async()=>{try{let d=null;try{d=JSON.parse(sessionStorage.getItem("gh1"))}catch(e){}
if(!d){const[u,r]=await Promise.all([fetch("https://api.github.com/users/ARUNKUMART9968"),fetch("https://api.github.com/users/ARUNKUMART9968/repos?per_page=100&sort=pushed")]);if(!u.ok||!r.ok)return;d={u:await u.json(),r:await r.json()};try{sessionStorage.setItem("gh1",JSON.stringify(d))}catch(e){}}
const own=d.r.filter(x=>!x.fork),last=own[0]||d.r[0],lc={};own.forEach(x=>{if(x.language)lc[x.language]=(lc[x.language]||0)+1});
$("#g1").textContent=d.u.public_repos;$("#g2").textContent=d.u.followers;
if(last){const a=$("#g3");a.firstElementChild.textContent=last.name;if(/^https:\/\/github\.com\//.test(last.html_url))a.href=last.html_url;$("#g3s").textContent="latest push, "+new Date(last.pushed_at).toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"})}
$("#g4").textContent=Object.entries(lc).sort((a,b)=>b[1]-a[1]).slice(0,3).map(e=>e[0]).join(", ")||"-";
$("#gh").hidden=false}catch(e){}})();
/* Cadence demo: only shows when you paste real sample text into L.demo */
if(L.demo.netlist&&L.demo.ocean){$("#demo").hidden=false;$("#dn").textContent=L.demo.netlist;$("#dg").onclick=()=>{const o=$("#do"),s=L.demo.ocean;o.textContent="";if(RM){o.textContent=s;return}let i=0;const iv=setInterval(()=>{o.textContent=s.slice(0,i+=6);if(i>=s.length)clearInterval(iv)},16);blip(700,.06)}}
/* sticker wall */
(()=>{const w=$("#wl"),S=[["🪖","helmet"],["face","Arun"],["☕","chai"],["🐛","bug"],["🏍️","bike"],["🚀","ship it"],["⚡","nitro"],["💻","laptop"],["🌸","flowers"],["🐳","docker"],["🔧","wrench"]];let z=1;
S.forEach(([e,n],i)=>{const s=document.createElement("div");s.className="sk";if(e=="face"){const im=document.createElement("img");im.src=$(".stk img").src;im.alt="";im.draggable=false;im.style.cssText="position:absolute;left:-79%;top:-31%;width:235%;max-width:none;pointer-events:none";s.append(im);s.style.overflow="hidden"}else s.textContent=e;s.setAttribute("role","img");s.setAttribute("aria-label",n+" sticker");let rot=(Math.random()-.5)*30;s.style.rotate=rot+"deg";
const mw=Math.max(0,w.clientWidth-84),mh=Math.max(0,w.clientHeight-84);s.style.left=(i%5)/4*mw*.9+Math.random()*mw*.1+"px";s.style.top=(i<5?.1:.55)*mh+Math.random()*mh*.2+"px";
let ox,oy;s.addEventListener("pointerdown",ev=>{ev.stopPropagation();s.setPointerCapture(ev.pointerId);ox=ev.clientX-s.offsetLeft;oy=ev.clientY-s.offsetTop;s.style.zIndex=++z;blip(300+i*40,.05)});
s.addEventListener("pointermove",ev=>{if(!s.hasPointerCapture(ev.pointerId))return;s.style.left=Math.max(0,Math.min(w.clientWidth-84,ev.clientX-ox))+"px";s.style.top=Math.max(0,Math.min(w.clientHeight-84,ev.clientY-oy))+"px"});
s.addEventListener("dblclick",()=>{rot+=40;s.style.rotate=rot+"deg";burst(s.getBoundingClientRect().left+42,s.getBoundingClientRect().top+42,8)});w.append(s)})})();
/* boss fight */
let bossOn=0;
function boss(){if(bossOn||RM)return;bossOn=1;const max=innerWidth<760?8:12;let hp=max,px=innerWidth/2-60,py=140,a=Math.random()*6.28,dead=0;const b=document.createElement("span");b.className="bug";b.textContent="🐛";b.style.fontSize="130px";b.setAttribute("aria-hidden","true");const bar=$("#bh"),fill=$("#bf");bar.hidden=false;fill.style.width="100%";
const mv=()=>{if(dead)return;const s=1.6+(max-hp)*.25;a+=(Math.random()-.5)*.3;px+=Math.cos(a)*s;py+=Math.sin(a)*s;if(px<0||px>innerWidth-130)a=3.14-a;if(py<80||py>innerHeight-180)a=-a;b.style.transform=`translate(${px}px,${py}px) rotate(${a+1.57}rad)`;requestAnimationFrame(mv)};
b.onclick=e=>{e.stopPropagation();if(dead)return;hp--;fill.style.width=hp/max*100+"%";b.style.filter="brightness(3)";setTimeout(()=>b.style.filter="",90);burst(e.clientX,e.clientY,6);blip(120+(max-hp)*30,.1,"sawtooth",.09);if(hp<=0){dead=1;b.textContent="💥";burst(innerWidth/2,innerHeight/2,50);jingle();score+=5;$("#sc").textContent=score;$("#bc").textContent=score;bar.hidden=true;setTimeout(()=>b.remove(),700)}};
document.body.append(b);mv()}
/* command palette (Ctrl+K) */
const cpE=$("#cp"),cin=$("#ci"),cls=$("#cl");let cs=[],cf=[],cn=0;
function cmds(){const c=[],go2=h=>()=>$(h).scrollIntoView({behavior:RM?"auto":"smooth"});
[["Projects","#work"],["Toolkit","#kit"],["The road so far","#road"],["About","#about"],["Sticker wall","#wall"],["Terminal","#term"],["Contact","#contact"]].forEach(([n,h])=>c.push([n,"go to section",go2(h)]));
c.push(["Download resume","action",()=>open(L.resume)],["GitHub","open",()=>open(L.gh)],["LinkedIn","open",()=>open("https://linkedin.com/in/arun-kumar-t-563746256")],["Email me","open",()=>{location.href="mailto:arunkumart212004@gmail.com"}],["Change colour theme","action",()=>setTh(ti+1,1)],["Toggle engine sound","action",()=>$("#snd").click()],["Nitro for 2 seconds","action",()=>{nit(1);setTimeout(()=>nit(0),2000)}]);
["Cadence Automizer","MosIC Office","QuizMaster","AI Code Reviewer"].forEach((n,i)=>c.push([n,"project",()=>{go2("#work")();$("#t"+i).click()}]));
KIT.forEach(([g,ts])=>ts.forEach(([n])=>c.push([n,"tool, "+g.toLowerCase(),()=>{go2("#kit")();$$(".tool").find(b=>b.textContent==n).click()}])));return c}
function cpShow(){const q=cin.value.trim().toLowerCase();cf=cs.filter(([n,h])=>(n+" "+h).toLowerCase().includes(q)).slice(0,8);cn=0;cls.innerHTML="";cf.forEach(([n,h],i)=>{const li=document.createElement("li");if(!i)li.className="on";li.innerHTML="<span></span><small></small>";li.children[0].textContent=n;li.children[1].textContent=h;li.onclick=()=>cpPick(i);cls.append(li)});if(!cf.length)cls.innerHTML="<li><span>No match. Try docker, resume or theme.</span></li>"}
function cpPick(i){const c=cf[i];if(!c)return;cpE.hidden=true;setTimeout(c[2],60)}
function cpOpen(){cs=cmds();cpE.hidden=false;cin.value="";cpShow();cin.focus()}
cin.addEventListener("input",cpShow);
cin.addEventListener("keydown",e=>{e.stopPropagation();const k=e.key,n=cf.length;if(k=="Escape")cpE.hidden=true;else if(k=="Enter")cpPick(cn);else if(k=="ArrowDown"||k=="ArrowUp"){e.preventDefault();if(!n)return;cn=(cn+(k=="ArrowDown"?1:n-1))%n;[...cls.children].forEach((li,i)=>li.classList.toggle("on",i==cn));cls.children[cn].scrollIntoView({block:"nearest"})}});
cpE.addEventListener("click",e=>{if(e.target==cpE)cpE.hidden=true});
$("#kb").onclick=cpOpen;
addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()=="k"){e.preventDefault();cpE.hidden?cpOpen():cpE.hidden=true}});
/* Konami code */
const K="ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a".split(",");let ki=0;
addEventListener("keydown",e=>{ki=e.key===K[ki]?ki+1:0;if(ki==K.length){ki=0;document.body.classList.toggle("wild");burst(innerWidth/2,innerHeight/2,40)}});

}
