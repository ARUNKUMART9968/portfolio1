import roninSunset from "../assets/ronin-sunset.jpg";
import helmetSunset from "../assets/helmet-sunset.jpg";
import roninTank from "../assets/ronin-tank.jpg";

export default function About() {
  return (
    <>
<section id="about"><div className="pho">
<figure className="an"><div className="fr"><img alt="Arunkumar sitting on his TVS Ronin motorcycle by a river at sunset, a pole beside him reads good rides, good food, good mood" src={roninSunset} /></div><figcaption>Good rides, good food, good mood.</figcaption></figure>
<figure><div className="fr sq"><img alt="Rider in a full-face helmet and glasses against a sunset sky" src={helmetSunset} style={{objectPosition:"50% 70%"}} /></div><figcaption>Golden hour is debug hour.</figcaption></figure>
<figure className="an an2"><div className="fr sq"><img alt="Close-up of the white tank, engine and TVS badge of the Ronin motorcycle" src={roninTank} /></div><figcaption>The TVS Ronin.</figcaption></figure></div>
<div><h2 style={{fontSize:"clamp(52px,8vw,120px)",marginBottom:"3vh"}}>Hey, I’m Arun</h2>
<p className="ld2">Developer by day. Rider the rest of the time.</p>
<p style={{maxWidth:"46ch",opacity:".85"}}>I build and maintain web apps with .NET Core, React and REST APIs, and I’ve taken projects all the way to production. I’m building hands-on skills in Docker, Kubernetes, CI/CD and Azure, and I like improving how software is built, tested and deployed.</p>
<div className="sts"><div><b>8.49</b><small>CGPA</small></div><div><b>4</b><small>projects built</small></div><div><b>∞</b><small>chai cups</small></div><div><b id="bc">0</b><small>bugs squashed on this page</small></div></div></div></section>
    </>
  );
}
