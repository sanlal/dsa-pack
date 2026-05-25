# DSA Pack &mdash; Patterns + System Design + Interview Playbook

A 3-page, self-hosted interactive study pack for **campus placements** and **software engineering interviews**.
Dark hand-drawn neon theme. Every code example shown in **C++**, **Java**, and **Python** &mdash; tap to switch globally.
All artwork is original SVG &mdash; no copyright risk for YouTube, courses, or anywhere else.

## What's inside

```
dsa-pack/
  dsa.html                   - 16 lessons: 5-step framework, Big-O, 14 patterns, optimisation playbook
  system-design.html         - 13 lessons: LLD (OOP, SOLID, patterns, walkthroughs) + HLD (CAP, caching, sharding, queues, microservices, URL shortener / chat / feed)
  interview-playbook.html    - 10 lessons: communication, projects, HR, India-tier playbook, prep schedule, negotiation
  dsa.css                    - shared theme + components (sticky language switcher, code-tabs, callouts...)
  dsa.js                     - tabs, copy-to-clipboard, progress bar, expand/collapse, lang-sync across tabs
  assets/                    - 22 original SVG illustrations
  README.md                  - you are here
```

## Quick start (run locally)

Just double-click any of the three `.html` files. For a proper local server (recommended &mdash; some browsers block `file://` features):

```bash
# Python 3 (pre-installed on most systems)
python -m http.server 8000
# then open http://localhost:8000/dsa.html
```

```powershell
# Windows / PowerShell
start dsa.html
```

## How to use it

1. **Land on `dsa.html`** first. Read the 5-step framework + Big-O + DS cheat sheet (lessons 1-3) to set foundations.
2. Work through the patterns (lessons 4-15) at one per day. Solve 3-5 LeetCode problems per pattern using the "Practice" links at the bottom of each lesson.
3. When DSA feels comfortable, move to `system-design.html`. LLD half is enough for mid-tier interviews; both halves for SDE-2 / FAANG.
4. Read `interview-playbook.html` in the week before your placement drive. Re-read on the day-of.

### The language switcher

A persistent `C++ | Java | Py` toggle sits in the top-right of every page. Click it once &mdash; every code block on every page flips to your language. Your choice is remembered across sessions and across tabs (via `localStorage`).

You can also click any tab on any single code block; that change syncs the rest of the page.

### Keyboard shortcuts

- <kbd>E</kbd> &mdash; Expand all lessons on the current page.
- <kbd>C</kbd> &mdash; Collapse all lessons.
- Click any TOC item &rarr; smooth-scrolls and auto-opens that lesson.

## Deploying to GitHub Pages (get a shareable link)

The pack is 100% static HTML/CSS/SVG. Deploy in 2 minutes:

```bash
# from this folder
git init
git add .
git commit -m "Initial DSA pack"

# create an empty repo on github.com, then:
git branch -M main
git remote add origin https://github.com/<your-username>/dsa-pack.git
git push -u origin main
```

Then on github.com:

1. **Settings** &rarr; **Pages**.
2. Source: **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**, **Save**.
4. ~30 seconds later your live URL appears at the top:

   `https://<your-username>.github.io/dsa-pack/dsa.html`

That's your shareable link. The three pages are at `/dsa.html`, `/system-design.html`, `/interview-playbook.html`.

### Updating after edits

```bash
git add .
git commit -m "tweak lesson 7"
git push
```

GitHub Pages re-deploys automatically within ~30 seconds.

## Editing

| You want to change&hellip;          | Edit this file                                     |
|------------------------------------|----------------------------------------------------|
| A DSA lesson                       | `dsa.html`                                         |
| A system-design lesson             | `system-design.html`                               |
| An interview / placement lesson    | `interview-playbook.html`                          |
| Colours, fonts, layout             | `dsa.css`                                          |
| Interactivity (tabs, copy, etc)    | `dsa.js`                                           |
| An illustration                    | `assets/<name>.svg` &mdash; open in any text editor or Figma/Inkscape |

### Adding a new code-tabs block

Use this exact structure inside any lesson body:

```html
<div class="code-tabs" data-snippet="my-snippet">
  <div class="tab-strip">
    <button class="tab" data-lang="cpp">C++</button>
    <button class="tab" data-lang="java">Java</button>
    <button class="tab" data-lang="python">Python</button>
  </div>
  <pre class="tab-pane" data-lang="cpp"><code>// your C++ code</code></pre>
  <pre class="tab-pane" data-lang="java"><code>// your Java code</code></pre>
  <pre class="tab-pane" data-lang="python"><code># your Python code</code></pre>
</div>
```

`dsa.js` auto-wires the click handlers and sets the active language from `localStorage`.

### Tweaking the hand-drawn wobble

Each SVG has a `<filter id="w...">` block near the top. The wobble is controlled by:

- `baseFrequency` on `feTurbulence` &mdash; higher = noisier strokes.
- `scale` on `feDisplacementMap` &mdash; higher = wobblier.

## Using the SVGs elsewhere

The 22 illustrations are standalone files. Drop any `assets/<name>.svg` into:

- Microsoft PowerPoint 2016+ (Insert &rarr; Picture supports SVG)
- Google Slides (Insert &rarr; Image &rarr; Upload)
- Canva (Upload &rarr; drag the `.svg`)
- Notion, Obsidian, any markdown editor

All artwork is original and royalty-free for videos, courses, blog posts &mdash; anywhere.

## License

Do whatever you want with the pack &mdash; share, fork, remix, teach with it.
No attribution required (but always appreciated).
