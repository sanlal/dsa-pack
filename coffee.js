/* ============================================================================
   coffee.js  —  "Buy me a coffee" floating button + UPI QR modal
   ----------------------------------------------------------------------------
   How it works:
     • Drop this single file at the workspace root.
     • Drop your UPI QR image at the workspace root, named  coffee-qr.png
       (any square image works; ~600x600 px gives the cleanest render).
     • In every HTML page, add a single line:
           <script src="path/to/coffee.js" defer></script>
       (use the right number of "../" depending on the page's depth).
     • Each page picks up the SAME QR image because the script resolves
       the image path relative to itself, not to the page.

   Optional per-page overrides (just add data-attributes):
     <script src="../coffee.js"
             data-qr="../assets/my-qr.png"
             data-name="Your Name"
             data-note="Thanks for the love!"
             defer></script>
   ========================================================================= */

(function () {
  'use strict';

  // ----- Resolve config -----
  var script = document.currentScript;
  // currentScript is null when script is loaded as a module or after DOMContentLoaded;
  // fall back to "last script with src ending in coffee.js"
  if (!script) {
    var all = document.querySelectorAll('script[src*="coffee.js"]');
    script = all.length ? all[all.length - 1] : null;
  }
  var SCRIPT_SRC = script ? script.src : window.location.href;

  function resolveSibling(name) {
    try { return new URL(name, SCRIPT_SRC).href; }
    catch (_e) { return name; }
  }

  var CFG = {
    qrSrc:     (script && script.dataset.qr)   || resolveSibling('coffee-qr.png'),
    payeeName: (script && script.dataset.name) || 'Santhosh Ramavath',
    note:      (script && script.dataset.note) || 'Coffee for the creator!',
    label:     (script && script.dataset.label)|| 'Buy me a coffee'
  };

  // ----- Inject styles -----
  var STYLES = ''
    + '.coffee-fab {'
    + '  position: fixed; bottom: 22px; left: 22px;'
    + '  display: inline-flex; align-items: center; gap: 8px;'
    + '  padding: 11px 18px;'
    + '  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 60%, #ec4899 100%);'
    + '  color: white;'
    + '  border: 0;'
    + '  border-radius: 999px;'
    + '  font: 600 13.5px Inter, -apple-system, "Segoe UI", Roboto, sans-serif;'
    + '  letter-spacing: -0.005em;'
    + '  cursor: pointer;'
    + '  box-shadow: 0 6px 20px -4px rgba(239, 68, 68, 0.45), 0 2px 6px -2px rgba(0,0,0,0.15);'
    + '  z-index: 9998;'
    + '  transition: transform .18s cubic-bezier(.2,.8,.2,1), box-shadow .18s ease;'
    + '  -webkit-tap-highlight-color: transparent;'
    + '}'
    + '.coffee-fab:hover {'
    + '  transform: translateY(-3px) scale(1.03);'
    + '  box-shadow: 0 12px 28px -6px rgba(239, 68, 68, 0.55), 0 4px 10px -2px rgba(0,0,0,0.2);'
    + '}'
    + '.coffee-fab:active { transform: translateY(-1px) scale(0.99); }'
    + '.coffee-fab .cup {'
    + '  display: inline-flex; width: 22px; height: 22px;'
    + '  border-radius: 50%;'
    + '  background: rgba(255,255,255,0.22);'
    + '  align-items: center; justify-content: center;'
    + '  font-size: 13px;'
    + '  animation: cupSteam 2.6s ease-in-out infinite;'
    + '}'
    + '@keyframes cupSteam {'
    + '  0%, 100% { transform: rotate(-4deg); }'
    + '  50%      { transform: rotate(6deg); }'
    + '}'
    + '@media (max-width: 600px) {'
    + '  .coffee-fab { padding: 11px 13px; bottom: 14px; left: 14px; }'
    + '  .coffee-fab .lbl { display: none; }'
    + '}'

    /* ----- Modal ----- */
    + '.coffee-modal {'
    + '  position: fixed; inset: 0;'
    + '  background: rgba(15, 23, 42, 0.55);'
    + '  backdrop-filter: blur(8px);'
    + '  -webkit-backdrop-filter: blur(8px);'
    + '  z-index: 9999;'
    + '  display: none;'
    + '  align-items: center; justify-content: center;'
    + '  padding: 20px;'
    + '  animation: coffeeBackdrop .18s ease-out;'
    + '}'
    + '.coffee-modal.open { display: flex; }'
    + '@keyframes coffeeBackdrop {'
    + '  from { opacity: 0; }'
    + '  to   { opacity: 1; }'
    + '}'
    + '.coffee-card {'
    + '  position: relative;'
    + '  width: 100%; max-width: 380px;'
    + '  background: #ffffff;'
    + '  border-radius: 20px;'
    + '  overflow: hidden;'
    + '  box-shadow: 0 30px 60px -15px rgba(0,0,0,0.35), 0 12px 24px -8px rgba(0,0,0,0.2);'
    + '  animation: coffeePop .22s cubic-bezier(.2,.8,.2,1);'
    + '  font-family: Inter, -apple-system, "Segoe UI", Roboto, sans-serif;'
    + '  color: #0f172a;'
    + '}'
    + '@keyframes coffeePop {'
    + '  from { opacity: 0; transform: translateY(12px) scale(0.96); }'
    + '  to   { opacity: 1; transform: translateY(0) scale(1); }'
    + '}'
    + '.coffee-head {'
    + '  position: relative;'
    + '  padding: 22px 24px 18px;'
    + '  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 60%, #ec4899 100%);'
    + '  color: white;'
    + '}'
    + '.coffee-head .eyebrow {'
    + '  font: 700 11px Inter, sans-serif;'
    + '  text-transform: uppercase;'
    + '  letter-spacing: 0.12em;'
    + '  opacity: 0.85;'
    + '  margin: 0 0 4px;'
    + '}'
    + '.coffee-head h2 {'
    + '  margin: 0;'
    + '  font: 700 22px Inter, sans-serif;'
    + '  letter-spacing: -0.02em;'
    + '  display: inline-flex; align-items: center; gap: 8px;'
    + '}'
    + '.coffee-head .x {'
    + '  position: absolute; top: 12px; right: 12px;'
    + '  width: 32px; height: 32px;'
    + '  border-radius: 50%;'
    + '  background: rgba(255,255,255,0.2);'
    + '  border: 0;'
    + '  color: white;'
    + '  font-size: 18px; line-height: 1;'
    + '  cursor: pointer;'
    + '  display: inline-flex; align-items: center; justify-content: center;'
    + '  transition: background .15s ease;'
    + '}'
    + '.coffee-head .x:hover { background: rgba(255,255,255,0.35); }'
    + '.coffee-body { padding: 24px; text-align: center; }'
    + '.coffee-qr-wrap {'
    + '  display: inline-block;'
    + '  padding: 14px;'
    + '  background: white;'
    + '  border: 1px solid #e2e8f0;'
    + '  border-radius: 14px;'
    + '  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);'
    + '}'
    + '.coffee-qr {'
    + '  display: block;'
    + '  width: 240px; height: 240px;'
    + '  object-fit: contain;'
    + '  background: #f8fafc;'
    + '  border-radius: 6px;'
    + '}'
    + '.coffee-qr-missing {'
    + '  width: 240px; height: 240px;'
    + '  background: repeating-linear-gradient(45deg, #f1f5f9, #f1f5f9 8px, #e2e8f0 8px, #e2e8f0 16px);'
    + '  border-radius: 6px;'
    + '  display: flex; align-items: center; justify-content: center;'
    + '  padding: 18px;'
    + '  font-size: 12.5px; line-height: 1.5;'
    + '  color: #475569;'
    + '  text-align: center;'
    + '}'
    + '.coffee-qr-missing code {'
    + '  display: inline-block;'
    + '  margin-top: 6px;'
    + '  padding: 2px 6px;'
    + '  background: white;'
    + '  border: 1px solid #cbd5e1;'
    + '  border-radius: 4px;'
    + '  font: 11px ui-monospace, "JetBrains Mono", Consolas, monospace;'
    + '  color: #0f172a;'
    + '}'
    + '.coffee-caption {'
    + '  margin: 14px 0 0;'
    + '  font-size: 13.5px;'
    + '  color: #475569;'
    + '  line-height: 1.5;'
    + '}'
    + '.coffee-caption strong { color: #0f172a; }'
    + '.coffee-apps {'
    + '  margin-top: 12px;'
    + '  display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;'
    + '}'
    + '.coffee-apps span {'
    + '  font: 600 11px Inter, sans-serif;'
    + '  padding: 4px 10px;'
    + '  background: #f1f5f9;'
    + '  color: #475569;'
    + '  border-radius: 999px;'
    + '  letter-spacing: 0.01em;'
    + '}'
    + '.coffee-foot {'
    + '  padding: 14px 24px;'
    + '  background: #f8fafc;'
    + '  border-top: 1px solid #e2e8f0;'
    + '  font-size: 12px;'
    + '  color: #64748b;'
    + '  text-align: center;'
    + '  line-height: 1.5;'
    + '}'
    + '.coffee-foot .heart { color: #ef4444; }';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-coffee', '');
  styleEl.textContent = STYLES;
  document.head.appendChild(styleEl);

  // ----- Build floating button -----
  var fab = document.createElement('button');
  fab.className = 'coffee-fab';
  fab.type = 'button';
  fab.setAttribute('aria-label', CFG.label);
  fab.setAttribute('title', CFG.label);
  fab.innerHTML = '<span class="cup" aria-hidden="true">\u2615</span><span class="lbl">' + escapeHtml(CFG.label) + '</span>';

  // ----- Build modal -----
  var modal = document.createElement('div');
  modal.className = 'coffee-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'coffeeTitle');
  modal.innerHTML = ''
    + '<div class="coffee-card">'
    + '  <div class="coffee-head">'
    + '    <p class="eyebrow">Support the creator</p>'
    + '    <h2 id="coffeeTitle">'
    + '      <span aria-hidden="true">\u2615</span>'
    + '      <span>' + escapeHtml(CFG.label) + '</span>'
    + '    </h2>'
    + '    <button type="button" class="x" aria-label="Close">\u2715</button>'
    + '  </div>'
    + '  <div class="coffee-body">'
    + '    <div class="coffee-qr-wrap">'
    + '      <img class="coffee-qr" alt="UPI QR code" src="' + escapeAttr(CFG.qrSrc) + '" />'
    + '    </div>'
    + '    <p class="coffee-caption">'
    + '      Scan this QR with <strong>any UPI app</strong> to send a tip.'
    + '    </p>'
    + '    <div class="coffee-apps" aria-hidden="true">'
    + '      <span>GPay</span><span>PhonePe</span><span>Paytm</span><span>BHIM</span><span>CRED</span>'
    + '    </div>'
    + '  </div>'
    + '  <div class="coffee-foot">'
    + '    Built with <span class="heart">\u2665</span> &middot; '
    + '    <strong>' + escapeHtml(CFG.payeeName) + '</strong> &middot; '
    + 'thanks for the love!'
    + '  </div>'
    + '</div>';

  // ----- Wire up -----
  function open()  { modal.classList.add('open');    document.body.style.overflow = 'hidden'; }
  function close() { modal.classList.remove('open'); document.body.style.overflow = ''; }

  fab.addEventListener('click', open);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) close();          // click backdrop
  });
  modal.querySelector('.x').addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });

  // Image fallback: if the QR file is missing, show a helpful placeholder
  var img = modal.querySelector('.coffee-qr');
  img.addEventListener('error', function () {
    var wrap = img.parentNode;
    var fallback = document.createElement('div');
    fallback.className = 'coffee-qr-missing';
    fallback.innerHTML = ''
      + '<div>'
      + '  <strong>QR not found yet.</strong><br>'
      + '  Save your UPI QR image as<br>'
      + '  <code>coffee-qr.png</code><br>'
      + '  next to <code>coffee.js</code>.'
      + '</div>';
    wrap.replaceChild(fallback, img);
  });

  // ----- Mount after DOM ready -----
  function mount() {
    if (!document.body) { setTimeout(mount, 30); return; }
    document.body.appendChild(fab);
    document.body.appendChild(modal);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }

  // ----- Helpers -----
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]);
    });
  }
  function escapeAttr(s) { return escapeHtml(s); }
})();
