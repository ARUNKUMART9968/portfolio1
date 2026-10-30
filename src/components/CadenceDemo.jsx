
export default function CadenceDemo() {
  return (
    <>
<section id="demo" hidden><h2>Try the idea</h2><p style={{maxWidth:"56ch",margin:"-3vh 0 4vh",opacity:".8"}}>A real sample run of the Cadence Automizer: a Spectre netlist goes in, an OCEAN script comes out.</p>
<div className="dm"><div><h3>Spectre netlist</h3><pre id="dn"></pre></div><div><h3>OCEAN script</h3><pre id="do" aria-live="polite"></pre><button className="b f" id="dg">Generate OCEAN script</button></div></div></section>
    </>
  );
}
