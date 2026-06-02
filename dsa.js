/* ==============================================================
   DSA Pack - shared interactivity
   ============================================================== */

(function () {
  'use strict';

  const LS_KEY = 'dsa-pack-lang';
  const VALID_LANGS = ['cpp', 'java', 'python'];

  function getStoredLang() {
    try {
      const v = localStorage.getItem(LS_KEY);
      return VALID_LANGS.includes(v) ? v : 'cpp';
    } catch (e) {
      return 'cpp';
    }
  }

  function setStoredLang(lang) {
    try { localStorage.setItem(LS_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* ---------- Reading progress bar ---------- */
  const progress = document.getElementById('progress');
  function updateProgress() {
    if (!progress) return;
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const ratio = max > 0 ? h.scrollTop / max : 0;
    progress.style.width = (ratio * 100) + '%';
  }
  document.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  /* ---------- Expand-all / Collapse-all ---------- */
  function getLessons() {
    return document.querySelectorAll('details.lesson');
  }
  const expandBtn   = document.getElementById('expand-all');
  const collapseBtn = document.getElementById('collapse-all');
  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      getLessons().forEach(l => { l.open = true; });
    });
  }
  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      getLessons().forEach(l => { l.open = false; });
      const toc = document.getElementById('contents');
      if (toc) window.scrollTo({ top: toc.offsetTop - 100, behavior: 'smooth' });
    });
  }

  /* ---------- Copy-to-clipboard for code blocks ---------- */
  function attachCopyButtons() {
    document.querySelectorAll('pre').forEach(pre => {
      if (pre.querySelector('.copy-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.type = 'button';
      btn.textContent = 'Copy';
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const code = pre.querySelector('code');
        const text = code ? code.innerText : pre.innerText;
        try {
          await navigator.clipboard.writeText(text);
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 1500);
        } catch (err) {
          btn.textContent = 'Press Ctrl+C';
        }
      });
      pre.appendChild(btn);
    });
  }
  attachCopyButtons();

  /* ---------- Code-tab switching with global sync ---------- */
  function applyLangToAllTabs(lang) {
    document.querySelectorAll('.code-tabs').forEach(block => {
      // Find tab + pane for requested lang; fall back to first available if missing.
      const tabs  = block.querySelectorAll('.tab');
      const panes = block.querySelectorAll('pre.tab-pane');
      let targetTab = block.querySelector('.tab[data-lang="' + lang + '"]');
      let targetPane = block.querySelector('pre.tab-pane[data-lang="' + lang + '"]');
      if (!targetTab || !targetPane) {
        targetTab  = tabs[0];
        targetPane = panes[0];
      }
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));
      if (targetTab)  targetTab.classList.add('active');
      if (targetPane) targetPane.classList.add('active');
    });
    document.querySelectorAll('.lang-switcher').forEach(sw => {
      sw.querySelectorAll('button').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
      });
    });
  }

  function wireUpCodeTabs() {
    document.querySelectorAll('.code-tabs').forEach(block => {
      block.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
          const lang = tab.dataset.lang;
          if (!VALID_LANGS.includes(lang)) return;
          setStoredLang(lang);
          applyLangToAllTabs(lang);
        });
      });
    });
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (!VALID_LANGS.includes(lang)) return;
        setStoredLang(lang);
        applyLangToAllTabs(lang);
      });
    });
  }
  wireUpCodeTabs();
  applyLangToAllTabs(getStoredLang());

  /* ---------- Cross-tab language sync (other open pages) ---------- */
  window.addEventListener('storage', (e) => {
    if (e.key === LS_KEY && VALID_LANGS.includes(e.newValue)) {
      applyLangToAllTabs(e.newValue);
    }
  });

  /* ---------- TOC active-section highlight ---------- */
  const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
  const sectionIds = Array.from(tocLinks)
    .map(a => a.getAttribute('href').slice(1))
    .filter(Boolean);
  if (sectionIds.length && 'IntersectionObserver' in window) {
    const map = new Map();
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) map.set(el, id);
    });
    const linkByHash = new Map();
    tocLinks.forEach(a => linkByHash.set(a.getAttribute('href').slice(1), a));

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = map.get(entry.target);
        const a = linkByHash.get(id);
        if (!a) return;
        if (entry.isIntersecting) {
          tocLinks.forEach(l => l.classList.remove('active'));
          a.classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });

    map.forEach((id, el) => io.observe(el));
  }

  /* ---------- Open lesson when its TOC link is clicked ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target && target.tagName === 'DETAILS') {
        target.open = true;
      }
    });
  });

  /* ---------- Open lesson if URL hash points at it on load ---------- */
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target && target.tagName === 'DETAILS') {
      target.open = true;
    }
  }

  /* ---------- Keyboard: "/" focuses TOC, "e" expand-all, "c" collapse-all ---------- */
  document.addEventListener('keydown', (e) => {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === 'e' && expandBtn)   expandBtn.click();
    if (e.key === 'c' && collapseBtn) collapseBtn.click();
  });

  /* ==============================================================
     YouTube link wiring (Top 50)
     Looks up each <a data-yt="p-N"> in window.PROBLEM_VIDEOS:
       - URL string -> set href, mark as live
       - null/empty -> mark as "video coming soon", click is a no-op
     ============================================================== */
  function wireYouTubeLinks() {
    const map = (window && window.PROBLEM_VIDEOS) || {};
    document.querySelectorAll('a[data-yt]').forEach(a => {
      const key = a.getAttribute('data-yt');
      const url = key ? map[key] : null;
      const lbl = a.querySelector('.label');
      if (typeof url === 'string' && url.length > 0) {
        a.setAttribute('href', url);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
        a.setAttribute('data-yt-status', 'live');
        if (lbl) lbl.textContent = 'Watch the walkthrough';
      } else {
        a.setAttribute('href', '#');
        a.setAttribute('data-yt-status', 'pending');
        a.setAttribute('aria-disabled', 'true');
        a.setAttribute('title', 'Video coming soon - check back later');
        if (lbl) lbl.textContent = 'Video coming soon';
        a.addEventListener('click', (ev) => {
          ev.preventDefault();
        });
      }
    });
  }
  wireYouTubeLinks();

})();
