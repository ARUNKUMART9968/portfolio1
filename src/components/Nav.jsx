
export default function Nav() {
  return (
    <>
<nav><a className="lg" href="#hero">Arun</a><div><a className="hd" href="#kit">Toolkit</a><a href="#work">Projects</a><a className="hd" href="#road">Road</a><a className="hd" href="#about">About</a><a className="hd" href="#term">Terminal</a><a className="rs" data-resume href="resume.pdf">Resume</a><button id="kb" className="b s" aria-label="Open command palette">🔎<span className="kk"> Ctrl K</span></button><button id="th" className="b s" aria-label="Change colour theme">🎨</button><button id="snd" className="b s" aria-label="Engine sound" aria-pressed="false">🔇</button></div></nav>
    </>
  );
}
