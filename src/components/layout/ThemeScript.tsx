/**
 * Runs before first paint to set the theme (avoiding a flash) and to flag
 * that JS is available so reveal animations engage — without JS, content
 * stays fully visible (see globals.css).
 */
export function ThemeScript() {
  const script = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('markdev-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}d.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
