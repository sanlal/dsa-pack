## Link: https://sanlal.github.io/dsa-pack/index.html
# DSA Pack &mdash; Home + Fundamentals + Patterns + Top 50 + System Design + Interview Playbook

A 6-page, self-hosted interactive study pack for **campus placements** and **software engineering interviews**.
Dark hand-drawn neon theme. Every code example shown in **C++**, **Java**, and **Python** &mdash; tap to switch globally.
Every page carries a consistent header *and* a footer with **&larr; Previous / Home / Next &rarr;** buttons so you can move between sections without ever hitting the browser back button.
All artwork is original SVG &mdash; no copyright risk for YouTube, courses, or anywhere else.

## What's inside

```
dsa-pack/
  index.html                 - landing page: pick any of the 5 sections below as a card
  dsa-fundamentals.html      - 30 lessons: every DS & algorithm from arrays to segment trees, explained from first principles
  dsa.html                   - 16 lessons: 5-step framework, Big-O, 14 patterns, optimisation playbook
  top-50-problems.html       - the 50 must-do interview problems with full C++/Java/Python solutions
  system-design.html         - 13 lessons: LLD (OOP, SOLID, patterns, walkthroughs) + HLD (CAP, caching, sharding, queues, microservices, URL shortener / chat / feed)
  interview-playbook.html    - 10 lessons: communication, projects, HR, India-tier playbook, prep schedule, negotiation
  dsa.css                    - shared theme + components (sticky language switcher, code-tabs, callouts, landing cards, footer-nav...)
  dsa.js                     - tabs, copy-to-clipboard, progress bar, expand/collapse, lang-sync across tabs, YouTube-link wiring
  videos.js                  - one central map of "p-1 ... p-50" -> YouTube URL. Edit this ONE file when your videos go live.
  top-50-narration.md        - spoken-style video script for each of the 50 problems (Brute -> Better -> Optimal + the common-mistake "trap")
  narration.md               - video script for the Patterns page (dsa.html)
  system-design-narration.md - video script for system-design.html
  interview-playbook-narration.md - video script for interview-playbook.html
  assets/                    - 22 original SVG illustrations
  README.md                  - you are here
```

## Quick start (run locally)

**Start at `index.html`** &mdash; it's the home page and links to every other page as a card. Just double-click it. For a proper local server (recommended &mdash; some browsers block `file://` features):

```bash
# Python 3 (pre-installed on most systems)
python -m http.server 8000
# then open http://localhost:8000/index.html
```

```powershell
# Windows / PowerShell
start index.html
```

## How to use it

The home page (`index.html`) lets you jump to any section. The intended learning order:

1. **Start at `dsa-fundamentals.html`** &mdash; the 30-lesson encyclopedia. Read it once end-to-end (a couple of hours) to learn every data structure and algorithm from first principles. Already strong? Skim the section breaks and skip ahead.
2. **Move to `dsa.html`** for the 14 pattern templates (sliding window, two pointers, BFS/DFS, DP, etc). One pattern per day; solve 3-5 LeetCode problems per pattern using the "Practice" links.
3. **Drill `top-50-problems.html`** until you can re-derive each problem in under 25 minutes. These are the actual questions FAANG and product companies rotate.
4. When DSA feels comfortable, move to `system-design.html`. LLD half is enough for mid-tier interviews; both halves for SDE-2 / FAANG.
5. Read `interview-playbook.html` in the week before your placement drive. Re-read on the day-of.

At the bottom of every page you'll find **&larr; Previous &middot; Home &middot; Next &rarr;** buttons so you can walk through the pack in order, or jump back to home at any time.

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

   `https://<your-username>.github.io/dsa-pack/`

That's your shareable link &mdash; it serves `index.html` (the home page). The five inner pages are at `/dsa-fundamentals.html`, `/dsa.html`, `/top-50-problems.html`, `/system-design.html`, `/interview-playbook.html`.

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
| The landing-page cards / hero      | `index.html`                                       |
| A fundamentals lesson              | `dsa-fundamentals.html`                            |
| A DSA pattern lesson               | `dsa.html`                                         |
| A Top 50 problem solution          | `top-50-problems.html`                             |
| **Add a YouTube URL for a problem**| `videos.js` &mdash; one line per problem, that's it |
| A system-design lesson             | `system-design.html`                               |
| An interview / placement lesson    | `interview-playbook.html`                          |
| Colours, fonts, layout, cards, nav | `dsa.css`                                          |
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

### Recording the Top 50 YouTube videos

Each of the 50 problems on `top-50-problems.html` shows two chips:

- **`LC Solve on LeetCode`** &mdash; jumps to the official problem in a new tab.
- **`▶ Video coming soon` / `▶ Watch the walkthrough`** &mdash; the matching YouTube video.

To wire a video in, edit just one file:

1. Open **`videos.js`**.
2. Find the key for the problem (e.g. `"p-7"` for *Encode and Decode Strings*).
3. Replace `null` with your video URL in quotes:
   ```js
   "p-7": "https://youtu.be/abc123xyz",
   ```
4. Save. Refresh the page. The chip flips to red and becomes a live link automatically.

A complete spoken-style script is in **`top-50-narration.md`** &mdash; one block per problem covering Brute &rarr; Better &rarr; Optimal plus the common-mistake "trap" to point out at the end. Each block has a target runtime; the whole playlist comes out to ~6.5 hours of video.

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
