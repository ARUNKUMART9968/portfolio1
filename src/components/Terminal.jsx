
export default function Terminal() {
  return (
    <>
<section id="term"><h2>Ask my terminal</h2>
<div className="tm" id="tm" role="group" aria-label="Interactive terminal"><div id="out" aria-live="polite"></div><label className="pr"><span>arun@mosic:~$</span><input id="in" autoComplete="off" autoCapitalize="off" spellCheck="false" aria-label="Type a command, try help" /></label></div>
<div className="btns" id="chips" style={{marginTop:"22px"}}></div></section>
    </>
  );
}
