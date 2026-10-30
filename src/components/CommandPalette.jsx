
export default function CommandPalette() {
  return (
    <>
<div id="cp" hidden role="dialog" aria-label="Command palette"><div className="cb"><input id="ci" placeholder="Type a command, like docker or resume" aria-label="Search commands" autoComplete="off" spellCheck="false" /><ul id="cl"></ul></div></div>
    </>
  );
}
