import faceImg from "../assets/arun-cutout.webp";

export default function Hero() {
  return (
    <>
<section id="hero"><canvas id="rn" aria-hidden="true"></canvas>
<h1 id="nm" data-t="ARUNKUMAR T" aria-label="Arunkumar T">ARUNKUMAR T</h1>
<p className="hint">Move your mouse: it’s your headlamp. Click my face for jokes. Hold Space or my face for nitro. Colours follow your local time.</p>
<div className="hr"><div>
<p id="ty" aria-live="off"></p>
<p className="edu">B.E. Computer Science, Saveetha Engineering College, class of 2026.</p>
<div className="btns"><a className="b f" href="#work">See my projects</a><a className="b" data-resume href="resume.pdf">Download resume</a><a className="b x" href="#contact">Say hi</a></div></div>
<div className="stk"><img alt="Illustrated portrait of Arunkumar in a patterned bandana and glasses, arms crossed" src={faceImg} /><p className="bub" id="bub" role="status">Click my face.</p><svg className="bdg" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" style={{fill:"var(--r)"}}/><defs><path id="c" d="M60 60m-40 0a40 40 0 1 1 80 0a40 40 0 1 1-80 0"/></defs><text><textPath href="#c">OPEN TO WORK, HIRE ME, </textPath></text><text x="60" y="74" textAnchor="middle" style={{fontSize:"34px"}}>👋</text></svg></div>
</div></section>
    </>
  );
}
