# Interview Playbook — Video Script

One flowing ~42-minute script for the 10-lesson Interview Playbook page (`interview-playbook.html`). Written to be *spoken*, not read — so it sounds like a person teaching, not a manual being narrated.

---

## How to use this script

- **One lesson = one block of speech.** Stop at the `▸ next` marker, scroll the page, breathe, then keep going.
- **Read it out loud first.** If a sentence trips your tongue, change a word. Don't fight the page.
- **Pauses matter.** The `(...)` marks are full-stop pauses, ~0.5–1s. They give the viewer a moment to read the table or the do/don't card.
- **Emphasis** — words in *italics* are the ones to lean into when you say them.
- **Total runtime:** ~42:00. See the table at the end for per-lesson timing — copy them straight into YouTube as chapter markers.

A note on voice: this is the warmest, most personal pack of the three. Not "smart friend teaching you DSA" — more like "elder cousin who got placed last year and is now telling you, honestly, what the rounds actually feel like". The viewer is probably nervous. They're probably watching the night before. *Calm them.* Don't sound like a coach. Sound like the person they wish they could call.

---

## Cold open — the hook  *(0:00 – 1:00)*

> *(Page loads. Hero illustration on screen. Don't talk for two seconds.)*
>
> Here's the secret nobody tells you about placement interviews. (...) *Getting the offer and being good at DSA are two completely different skills.*
>
> I've watched topper after topper bomb interviews they should have walked. And I've watched mid-CGPA kids land roles that the topper couldn't. (...) The difference is everything *around* the algorithm — how you talk, how you handle a clarifying question, how you sound when you're stuck. The HR round you thought was a formality. The salary call you didn't know was a negotiation. (...) That's what this playbook is.
>
> Ten lessons. Six on behaviour — what you actually do *during* an interview. Four on placement strategy — which company tier you should even be targeting, what to do the week before, and the negotiation moves that get the offer letter rewritten in your favour. (...) India-specific, by the way. We'll talk about TCS bonds and ESOPs and bar-raiser rounds — not generic American advice that doesn't translate.
>
> No DSA in this video. No system design. That was the previous two. This is the third leg of the stool — and honestly, it's the leg most people skip. So if you've come this far in the prep, the next forty minutes might be the highest-ROI ones in your whole placement season.
>
> Let's go.
>
> ▸ next — scroll to Lesson 1

---

## Lesson 1 — The communication loop while coding  *(1:00 – 4:30)*

> *(Lesson 1 expanded. The 4-beat cadence numbered list visible.)*
>
> Lesson one. (...) The thing that decides ninety percent of your technical-round outcomes — and it has *nothing* to do with code.
>
> *Silence is the candidate's number-one killer.* (...) Picture two candidates given the exact same problem. Both arrive at the exact same solution. Both write the exact same code. (...) Candidate A coded the whole thing in silence, looked up, said "done". Candidate B narrated the whole way — "I'm noticing the array is sorted, that suggests two pointers, let me try…". (...) Same code. Same answer. Candidate B gets the offer. *Every single time.* (...) Because the interviewer wasn't grading code. The interviewer was grading *thinking*, inferred from what they could hear.
>
> So — the four-beat cadence on screen. Burn this in.
>
> **One — think out loud.** (...) The moment the problem appears, start narrating. "Okay, I'm noticing the array is sorted. That makes me think two pointers, or maybe binary search…". Don't worry if it's not your final answer. *The thinking is the answer.*
>
> **Two — announce intent.** (...) Before you put fingers on keyboard, say what you're about to code. "Let me code the two-pointer version. I'll initialise L equals zero, R equals N minus one, walk them inward." Now the interviewer knows the plan. If you're about to go wrong, they can stop you with a hint *before* you waste five minutes.
>
> **Three — narrate as you type.** (...) "Inside the loop, I check if the sum equals target…". Light narration. Not every variable name — just the *intent* of each block.
>
> **Four — check in every two to three minutes.** (...) Quick sanity beats. "Does this look right so far?" or "Should I keep going, or do you want me to pause here?" (...) That little check-in is what turns a monologue into a *conversation*. And remember — interviewers want a conversation, not a recital.
>
> Now look at the "use these / avoid these" two-column. Read it. (...) Phrases that earn you points — *"My first instinct is X, but let me think if there's a better way."* That single sentence shows two things: you have intuition, *and* you don't trust it blindly. Senior-engineer energy. (...) *"This is O of N time, O of N space — could I do it in O of one space?"* The candidate who asks that *unprompted* is the candidate who gets the offer.
>
> Now the right column — *avoid these*. (...) Silence for sixty seconds is the killer. *"This is easy"* is almost always wrong — and even if you nail it, you've set expectations you can't recover from. *"I memorised this one"* — never say that. The interviewer just lost interest. *"I've never seen this before"* — replace with *"let me reason through it from first principles"*. Same idea, completely different vibe.
>
> Tip box — *the hint protocol*. (...) When you're stuck, say *"I'm considering X but worried about Y."* (...) That phrase is *magic*. It invites a hint without sounding lost. Interviewers *want* to help — you just need to give them an opening to do it without breaking the rules of the round.
>
> Takeaway. *The candidate who codes silently and the candidate who narrates the same solution often get different verdicts.* (...) Verbalising is free points. Practice it. Even when you're solving LeetCode at home — *talk to yourself*. Sounds weird. Works.
>
> ▸ next — scroll to Lesson 2

---

## Lesson 2 — Clarifying-question checklist  *(4:30 – 7:30)*

> *(Lesson 2 expanded. The 5-question list visible.)*
>
> Clarifying questions. (...) The single highest-ROI ninety seconds of the entire interview.
>
> Read the TL;DR. (...) *Most "wrong solutions" weren't wrong — they were solving the wrong problem.* (...) Ninety seconds of questions prevents twenty minutes of dead-end coding. That's the math. *Always* invest the ninety.
>
> The universal five. Memorise these. Ask them in this order on *every* coding problem.
>
> **One — input type and size.** "Is the input an array of ints, or longs? What's the max length? Can it be empty?" (...) That last question — *can it be empty* — fishes for the edge case that bombs half of all candidates. The interviewer will smile.
>
> **Two — output format.** "Should I return indices or values? In any order, or sorted? In-place, or a new array?" (...) You'd be amazed how often "return any one valid answer" versus "return all valid answers" turns the problem from O of N to O of two-to-the-N.
>
> **Three — constraints.** "Are the values unique? Sorted? Positive only? What's the value range?" (...) The value range is huge. If values are bounded — say, integers zero to a hundred — you can use counting sort, you can use a fixed-size array as a hash. *Different algorithm entirely.*
>
> **Four — edge cases the problem ignores.** "What if no solution exists — return minus one, throw an exception, or return an empty array?" (...) The problem statement *never* tells you this. The interviewer is silently waiting for you to ask.
>
> **Five — performance expectation.** "Should I aim for O of N, or is O of N log N acceptable?" (...) If they say "O of N log N is fine", you've just been told to sort. Free hint. Don't waste it.
>
> Now — *questions that signal seniority*. Read the second list. (...) *"Should I optimise for time or space?"* — that distinction matters in production. *"Will this be invoked once, or repeatedly with new queries?"* — huge swing. If it's repeated, you preprocess. If it's one-shot, you don't. Pre-computation is wasted on a single call. *"What does the API return on invalid input — throw, or sentinel value?"* — junior engineers don't think about error contracts. *Asking the question* is the senior signal.
>
> Warning callout. *Don't over-ask.* (...) Five quick questions, *max two minutes*. If you're still asking at minute eight, the interviewer thinks you're stalling because you don't know how to solve it. (...) Quick, sharp, then start.
>
> Takeaway. *Treat the problem statement as a draft — your questions edit it into something you can actually solve.* (...) The interviewer expects this. The interviewer *waits* for this. *Always ask first.*
>
> ▸ next — scroll to Lesson 3

---

## Lesson 3 — Edge cases everyone forgets  *(7:30 – 10:30)*

> *(Lesson 3 expanded. The standard-10 list visible.)*
>
> Edge cases. (...) The free points everyone leaves on the table.
>
> The standard ten. Read them out loud, mentally tag each one to the *kind* of code that breaks on it.
>
> **Empty input.** `nums equals empty array`. `s equals empty string`. Most off-by-one bugs surface here.
>
> **Single element.** `nums equals five`. Linked list with one node. *Loops that depend on a neighbour break.*
>
> **All same.** `nums equals three three three three`. Duplicate-skipping logic that you copy-pasted from a template suddenly returns the wrong answer.
>
> **Already sorted or reverse sorted.** Often hits the *worst case* of your algorithm — quicksort goes O of N squared, certain DP solutions hit max recursion depth.
>
> **Duplicates.** Easy to skip incorrectly. 3Sum is the classic — we covered this in the DSA pack.
>
> **Negatives.** Sign-flipping bugs. Overflow when you compute `absolute value of int-min` — it's *bigger* than int-max. Famously broken in many candidate submissions.
>
> **Boundary values.** `INT_MIN`, `INT_MAX`, zero, one. Anything near the type's limit.
>
> **Overflow.** (...) The classic Java trap. `int` plus `int` overflows silently. Sum two billion-ish values, you get a *negative* result, the test grader fails you. Fix — promote to `long` early.
>
> **Cycle or loop.** Linked list with a cycle — your while-loop never exits, the interviewer's screen hangs, very awkward.
>
> **Unicode and special characters.** Strings with spaces, emoji, accents. The Turkish-i bug — `uppercase('i')` returns capital-i with a dot in Turkish locale. Famous Java/Python pitfall.
>
> Now — *the tracer-bullet pattern*. (...) After you finish coding, pick *one* normal example and *one* edge case. Walk both through the code line by line, narrating: "Okay, L is zero, R is four, mid is two, value is seven, less than target, so L moves to three…". (...) Out loud. Tracing. Bugs reveal themselves. Half the time, you'll catch a bug *as you trace*, fix it, look like a hero.
>
> Takeaway. *"I'd like to test with a small empty case…"* — the interviewer's smile widens the moment they hear that sentence. (...) Edge-case awareness is one of the cheapest senior-signals to fake. *Use it.*
>
> ▸ next — scroll to Lesson 4

---

## Lesson 4 — Time management in 45 minutes  *(10:30 – 13:30)*

> *(Lesson 4 expanded. Interview clock SVG visible.)*
>
> Forty-five minutes. (...) That's what you get. And the *first* mistake candidates make is treating those forty-five minutes as one big undifferentiated coding block. (...) It isn't. It's six distinct phases, each with a target time.
>
> Look at the schedule on screen. Read each row out loud — these are not suggestions, this is *the schedule that wins offers*.
>
> **Zero to five minutes — understand and clarify.** Five universal questions. Restate the problem in your own words. (...) Five minutes feels long when you're nervous. *Take them all.*
>
> **Five to ten — examples.** Walk the given example by hand. Invent one of your own. Especially an edge case. (...) This catches the misunderstanding *before* it becomes a bug.
>
> **Ten to fifteen — brute force.** State it out loud. You don't have to code it. *"The dumb version is two nested loops, that's O of N squared, but I can do better."* (...) Just *saying* the brute counts as showing you understood the problem.
>
> **Fifteen to twenty-five — optimise.** Find the inefficiency in brute. Propose the optimal. *And here's the critical part* — get a thumbs-up from the interviewer *before* you start coding. "I'm going to code the hash-map version, sound good?". (...) That thumbs-up is your insurance. If the approach is wrong, the interviewer redirects you *now*, not at minute thirty-five.
>
> **Twenty-five to forty — code.** Clean variable names. Tight loops. Narrate as you type. *Fifteen minutes is enough for a clean medium-difficulty solution.* If you're coding for twenty minutes and not done, *something is off* — pause and rethink.
>
> **Forty to forty-five — test.** Dry-run the example. Walk one edge case. State the time and space complexity unprompted. (...) That last five minutes — *most candidates skip it*. Don't be most candidates. The five minutes you spend testing is what separates "works on the happy path" from "production-ready".
>
> Now — *if you're behind schedule*, look at the rescue list.
>
> Stuck on the optimal at minute twenty? *Code the brute force.* Partial credit beats no credit. The interviewer would rather see a working O of N squared than a beautiful O of N that doesn't compile.
>
> Bug at minute thirty-five? *Don't try to fix it in your head*. Add a print statement. Or trace a tiny example out loud. (...) Trying to fix in your head under pressure usually introduces a *new* bug.
>
> Five minutes left, no time to test? *Walk through an example out loud.* "Let me trace through with `nums equals one, two, three`…". A confidently spoken trace counts as testing in most interviewers' rubrics.
>
> Takeaway. *Interviewers respect candidates who manage time like seniors* — explicit phases, clean transitions, no panic at minute forty. (...) The schedule is the safety net. Use it.
>
> ▸ next — scroll to Lesson 5

---

## Lesson 5 — Projects round & STAR  *(13:30 – 18:30)*

> *(Lesson 5 expanded. STAR template visible.)*
>
> Projects round. (...) Asked in ninety-five percent of placement interviews. And honestly — it's where most candidates lose offers they should have won.
>
> Here's the trap. (...) You spent six months building a college project. You know it well — *too* well. So when the interviewer says "walk me through your project", you launch into a forty-minute deep-dive of every feature, every bug fix, every component. By minute three the interviewer has tuned out. *You lost the round before they asked a follow-up.*
>
> Fix — *pre-write a two-minute story in the STAR structure*. Practice it out loud. Run it past a friend who'll tell you when it's boring.
>
> Look at the template. (...) **Situation** — fifteen seconds of context. *Why does this project exist?* "Our college event-registration site crashed during fest week, took four minutes per registration." Concrete. Vivid. Stakes. (...) **Task** — ten seconds. Your responsibility. "I was the backend lead, in a team of three." (...) **Action** — sixty seconds. What *you* did. (...) Critical: use **"I"**, not "we". "We" hides individual contribution. Interviewers want to know *your* part. Mention the specifics — the language, the framework, the *key technical decision* and *why* you made it. (...) **Result** — fifteen seconds. *Numbers.* "Registration time dropped to twelve seconds. Eight thousand students registered in two days. Zero downtime." (...) Numbers are what convert a story from a tale into a *result*.
>
> Now — *what interviewers actually probe after your STAR pitch*. Four things. Read them.
>
> **Trade-offs.** "Why MongoDB and not Postgres?" (...) Have a real answer. *Not* "MongoDB was easier". A real answer sounds like: "We had nested event data and our queries were mostly by event ID. A document store fit the access pattern better than relational joins." (...) That's a real engineering answer. Even if it's slightly wrong, it shows *you thought about it*.
>
> **The hardest bug.** What was it? How did you find it? What did you learn? (...) Have a *specific* bug story ready. Three sentences. The bug. The diagnosis. The fix and the lesson.
>
> **What you'd do differently now.** (...) Self-awareness signal. *Never* say "nothing". Even great engineers can name something. "Now I'd add monitoring from day one — we couldn't diagnose the crash quickly because we had no logs."
>
> **Your specific contribution.** (...) If you said "I built the auth system", the interviewer might ask "explain the JWT signature flow you implemented". Be ready to defend *every* claim you make, down to the lowest level. (...) If you didn't really build it, don't say you did.
>
> Now — the do-and-don't card. Read the *don't* column. (...) Never say *"It's a CRUD app for…"* — that's a dismissal of your own work. (...) Never say *"I used the MERN stack"* — generic, no signal. Say what *problem* you were solving and what the *core technical decision* was. (...) Never say *"my friend handled that part"* — even if true, it tells the interviewer you can't speak to the whole system. (...) And *never*, ever say *"I followed a YouTube tutorial"*. Even if you did. The phrase signals "I can't think originally". (...) Reframe — *"I extended an open-source library to add X"*. Same activity, completely different signal.
>
> Tip box — *build one interview-grade project*. (...) Read it. (...) Pick something with a *real* engineering decision. A rate limiter. A mini-chat with WebSockets. A URL shortener like the one we designed in System Design. A toy Kafka-style queue. (...) Two weeks of focused work on *one* of these beats a year of forgettable CRUD apps. Quality over quantity. *Always.*
>
> Takeaway. *Pre-record yourself doing a ninety-second STAR walkthrough. Play it back.* (...) If you'd hire that candidate — you're set. If you sound boring or vague — rewrite, re-record, repeat. (...) Painful exercise. Worth every minute.
>
> ▸ next — scroll to Lesson 6

---

## Lesson 6 — HR round, survival kit  *(18:30 – 23:00)*

> *(Lesson 6 expanded. The 8-evergreens list visible.)*
>
> HR round. (...) The round most engineers underestimate — and the round that quietly disqualifies more candidates than DSA does.
>
> Read the TL;DR. *HR rounds filter on culture-fit, attitude, and lying.* (...) Three filters. Lying is the dangerous one — we'll come back to it.
>
> The eight evergreens. *Every single one* of these gets asked, in some form, in every HR round you'll ever face. Prepare an answer for each. *Verbatim. Practiced. Out loud.* (...) Not because the interviewer wants robotic answers — but because rehearsed answers come out *natural and calm*, while improvised ones come out fidgety and uncertain.
>
> **"Tell me about yourself."** (...) Sixty seconds. Who you are. What you've built. What you're looking for. *Not your life story.* Don't start with "I was born in…". Start with "I'm a final-year CS student with a focus on backend, I've built X and Y, and I'm looking to join a team that…". *That* shape.
>
> **"Why this company?"** (...) Cite a *specific* product, technology, or value. Not "great work culture". Generic equals minus one. "I've been a daily user of your payments API and I want to work on the platform behind it" — *that* lands.
>
> **"Why should we hire you?"** (...) One sentence per: skill, project, attitude. Three sentences total. Crisp.
>
> **"What's your biggest strength?"** (...) A *concrete* one. Tied to a story. "I'm methodical — I once spent three days breaking down a complex bug into a four-line repro before fixing it." Stories beat adjectives.
>
> **"What's your biggest weakness?"** (...) *Real but improving.* Not the classic dodge — "I work too hard". Try this template: *"I tend to over-engineer my designs. I now timebox the design phase to thirty minutes and force myself to ship."* (...) Real flaw. Real fix. *Real* answer.
>
> **"Where do you see yourself in five years?"** (...) A *direction*, not a job title. Don't say "VP of Engineering" — sounds ridiculous from a fresher. Say "Growing into a senior engineer who can architect systems end-to-end and mentor juniors." *Direction. Growth. Modest.*
>
> **"Why are you leaving your current role / why this branch?"** (...) Honest, *positive* framing. *Never* bash your old company, your old manager, your old project. Even if they deserved it. The interviewer is sitting there thinking — "will this person say the same thing about us in two years?"
>
> **"Any questions for us?"** (...) *Always* have two. Two minimum. (...) Ask about — team structure, mentorship, the next six months of the roadmap, what success looks like in the first year. (...) Never ask salary first. *Never.* Save it for after the offer.
>
> Now — the salary conversation. (...) Read the list. (...) If asked for your expectation early — frame it as a range with homework behind it. *"Based on my research for similar roles in this city, I'm targeting X to Y — though I'm open to discuss the full package."* (...) If they say "we offer fixed CTC for freshers" — don't shrug and accept. Ask for the *breakdown*. Base. Joining bonus. ESOPs. Benefits. (...) *Don't quote a number with no homework behind it.* Glassdoor, AmbitionBox, LinkedIn — research before the call.
>
> Lies that come back to haunt. (...) Read the list. (...) *"I'm proficient in C++"* — but you stutter on virtual destructors. *"I built the backend solo"* — but your GitHub history shows four contributors. (...) Inflated CGPA. Inflated internship duration. (...) Background checks *are real*. Especially at FAANG and the big mid-tier product companies. *Lies get caught.* And when they get caught, your offer gets revoked — sometimes after you've already joined and resigned from somewhere else. Catastrophic.
>
> Takeaway. *HR is a filter for "would I want to work with this person?".* (...) Answer like a calm, curious adult — not like an exam-stressed student trying to remember bullet points — and you sail through. (...) Honestly, HR rounds get easier the more you do them. Treat each one as practice.
>
> ▸ next — scroll to Lesson 7

---

## Lesson 7 — Company-tier playbook (India)  *(23:00 – 30:00)*

> *(Lesson 7 expanded. Company pyramid SVG visible.)*
>
> Company tiers. (...) The most important strategic lesson in this whole pack — and the one your seniors are *least* honest with you about.
>
> Read the TL;DR. *Three tiers. Three different games.* (...) Don't waste FAANG-level DSA prep on a TCS interview. Don't show up to Google with only college projects on your resume. (...) Same person, two different prep regimes. *Pick your target before you start prepping.*
>
> Look at the pyramid SVG. (...) CTC bands roughly — three to five lakhs at the base service-company tier, ten to twenty-five lakhs in mid-tier product, thirty lakhs and up at the top — often much more once stock kicks in. *These are real Indian-market numbers, 2026.*
>
> **Tier one — service companies.** TCS, Infosys, Wipro, Cognizant, Capgemini, Accenture. (...) Bulk hiring — sometimes a *hundred* offers per campus visit. CTC roughly three and a half to seven lakhs. (...) Process is three rounds. Aptitude test online — quant, logical reasoning, English, basic coding. *This is the filter* — most rejections happen here. Then a thirty-minute technical interview — easy or medium DSA, language fundamentals, your project walkthrough. Then HR or managerial — the eight evergreens, will-you-relocate, will-you-sign-the-bond. (...) What to prep? *Aptitude.* IndiaBix, PrepInsta. CS fundamentals — OS, DBMS, OOP, Networks — one focused week. Under fifty LeetCode easy and medium problems. *Do not over-study DP for these companies.* It won't come up.
>
> **Tier two — mid-tier product companies.** Zoho, Freshworks, ThoughtWorks, Flipkart, Walmart, P-and-G, GE. (...) Selective — twenty to fifty offers per campus, sometimes fewer. CTC ten to twenty-five lakhs. (...) Process — online coding round with two or three medium problems. Then technical round one — one or two DSA mediums plus a project deep-dive. Then technical round two — one hard problem, *or* a low-level design round. *"Design a TinyURL class"*. Then a behavioural round, often called a bar-raiser. (...) Prep — the top one-fifty LeetCode interview problems. Neetcode 150 or Striver SDE Sheet 79. One *polished* project with real engineering decisions. OOP and SOLID solid enough to defend. Basic LLD — parking lot, library management.
>
> **Tier three — big product and FAANG.** Google, Microsoft, Amazon, Adobe, Atlassian, Uber. (...) *Very* selective — sometimes one or two offers per top-tier college. CTC thirty lakhs plus, often much more once stock vests. (...) Process — online assessment with two medium-hard problems in seventy-five minutes. Phone screen with a real engineer for one or two DSA problems. Then the loop — four to five rounds. Two DSA medium-hard. One LLD. Sometimes a scaled-down HLD even for SDE-1. One behavioural — or for Amazon specifically, the sixteen Leadership Principles. (...) Prep — around three hundred LeetCode problems. Neetcode 250, Blind 75 first, then company-tag problems. *Deep* LLD — design patterns and walkthroughs. Behavioural rehearsed in STAR format. For Amazon, *every story* you tell should map to a Leadership Principle.
>
> Tip box — *don't skip the basics on tier three*. (...) Read it. (...) The hardest questions at FAANG are still graphs and DP. But *two pointers and sliding window* show up *more* in tier-three interviews than in tier-one, because they're cleaner, more elegant problems. (...) Don't skip the foundations because they sound easy.
>
> Now — *time allocation*. The three-card row at the bottom. (...) Forty hours a week, three months.
>
> **Aiming Tier one?** Fifty percent aptitude, thirty percent CS fundamentals, twenty percent DSA easy-medium. *Don't over-invest in LeetCode.* You'll never use it.
>
> **Aiming Tier two?** Twenty percent aptitude, fifteen percent CS fundamentals, *fifty percent DSA medium*, fifteen percent projects and LLD. The DSA share is what changes — bulk of your time goes here.
>
> **Aiming Tier three?** Five percent aptitude — only to clear the OA filter. *Sixty percent DSA medium-hard*. Twenty percent LLD slash HLD. Fifteen percent behavioural and projects. (...) The numbers are different because the *bar* is different. There's no shortcut.
>
> Takeaway. *Pick your target tier before the prep starts.* (...) Trying to be everything to everyone wastes time. The prep diverges *sharply* at tier two and three. *Choose, then commit.* (...) Also — *be honest with yourself*. If you're aiming tier three but consistently can't solve LeetCode mediums in under thirty minutes, your honest target right now is tier two. *Adjust*. There's no shame in tier two — the salary is great, the work is real, and you can always lateral up after a year or two.
>
> ▸ next — scroll to Lesson 8

---

## Lesson 8 — The week before D-day  *(30:00 – 32:30)*

> *(Lesson 8 expanded. The 7-day plan visible.)*
>
> The week before. (...) The week where most students *unlearn* what they've spent months preparing.
>
> Read the TL;DR. (...) *The week before is for consolidation, not learning.* (...) Re-do problems you've already solved. Review your pattern templates. Sleep *eight hours*. (...) Whatever new pattern you're trying to cram on day minus three — you're *not* going to learn it well enough. And worse, you'll lose sleep over it.
>
> Look at the seven-day plan.
>
> **Days minus seven to minus five.** Re-do two problems from each pattern from the DSA pack. Time yourself. *Goal is muscle memory*, not new learning. Your hands should write `while L < R` without your brain weighing in.
>
> **Days minus four to minus three.** Review your *templates*. Two pointers. Sliding window. DP recurrence pattern. BFS. DFS. Rewrite each template *from memory* in your chosen interview language. If you can't, that's the template to review tonight.
>
> **Day minus two.** *One mock interview.* With a friend. Or on Pramp. (...) Practice talking out loud while solving. This is the single most useful day of the entire week. (...) The mock will reveal stuff you didn't know was broken — your pacing, your filler words, your tendency to start coding too fast.
>
> **Day minus one.** *Light review only.* Read your STAR notes. Re-read the HR evergreens. (...) Pack your bag if it's an on-site. Set up your home rig if it's virtual — test the audio, test the camera, check your charger. (...) Then — *sleep early*. I cannot stress this enough. *Don't grind LeetCode the night before.* You'll only damage your performance.
>
> **Day zero.** Light breakfast. On time. Glass of water. Deep breath. (...) You've earned this. The work is done. Today is the *performance*.
>
> Warning callout — *don't learn new patterns the night before*. (...) Read it. (...) A pattern you "kind of remember" is *more* dangerous than one you confidently don't know. Why? Because you'll try to force it into a problem where it doesn't fit, waste fifteen minutes, *then* realise it's wrong. (...) Better to admit "I don't know this pattern" and reason from first principles than to half-remember a template and miscode it.
>
> Takeaway. *The interview is a performance.* (...) Athletes don't train hard the day before a race. They taper. Sleep. Eat. Stay loose. (...) Do the same.
>
> ▸ next — scroll to Lesson 9

---

## Lesson 9 — Day-of: on-site and virtual  *(32:30 – 35:30)*

> *(Lesson 9 expanded. Two checklists visible.)*
>
> Day-of. (...) The most underrated lesson on the whole page. *Because logistics is a free win.*
>
> Let me say that again. *Logistics is a free win.* (...) The ten minutes you spend testing your microphone in the morning is the difference between an offer and a "we'll get back to you". Nobody fails an interview because their code didn't compile. People *do* fail because their audio cut out and the interviewer had to ask "could you repeat that" four times in twenty minutes.
>
> **On-site or placement-drive checklist.** (...) Reach the venue *thirty minutes* early. Not ten. Thirty. (...) Locate the water and the restroom *first* — small thing, but it matters when you're nervous. (...) What you carry: ID card, hall ticket, water bottle, *two* pens, a charger, a printed resume. *Two* pens because one will run out at the worst moment, guaranteed. (...) Eat a *light* meal. Nothing heavy. Heavy food makes you sleepy mid-interview. (...) Phone on silent. *Don't* doom-scroll while waiting — fills your head with the wrong energy.
>
> **Virtual interview checklist.** This is the default now. Read it carefully.
>
> **Background.** Plain wall, or a tidy room. *No "I live in a college hostel" vibes* — even if you do live in a hostel. Take the time to clear the frame. Hang a plain sheet behind you if you have to.
>
> **Lighting.** Face the window, or a lamp pointed at your face. *Avoid backlight* — if there's a window *behind* you, you'll be a silhouette and the interviewer will struggle to read your expression. Costs you the warmth points.
>
> **Audio.** Wired headphones beat AirPods beat the laptop mic. Test ten minutes before. (...) Wired specifically — AirPods drop, run out of battery, glitch. Wired is boring and bulletproof.
>
> **Internet.** Wired Ethernet if possible. *Always* have 4G hotspot as backup. *Restart your router thirty minutes before* — clears any flakiness. (...) If your wifi cuts out during the interview, the hotspot is your safety net.
>
> **Browser.** *Close thirty tabs.* I'm not exaggerating. Most candidates have a hundred tabs open during the interview. Slows the laptop, distracts you. Close everything except the meeting tab and the coding editor.
>
> **Camera angle.** *Eye level.* Stack books under the laptop if you have to. The "looking up the candidate's nostrils" angle is *brutal*. Eye level — like a normal conversation.
>
> **Coding editor.** *Increase the font size* to eighteen or twenty. The interviewer is squinting on their screen too — make it easy for both of you. (...) Use the editor the interviewer suggests — CoderPad, HackerRank, whatever. Don't switch to your IDE midway.
>
> Proctored online tests get their own list. (...) Read instructions *twice* — some platforms allow scratch paper, some don't. (...) Don't leave the tab. Don't open another. *Auto-disqualification* on most platforms. (...) Keep your face in frame the whole time — many tests use a webcam-monitor and flag you if your face leaves the frame. (...) If a question loads slowly, screenshot the timer and report at the end. Many systems give you time back if you have evidence.
>
> Takeaway. *Logistics is a free win.* (...) The ten minutes you spend testing your mic saves you from the only thing worse than failing — *failing because of bad audio*.
>
> ▸ next — scroll to Lesson 10

---

## Lesson 10 — Negotiation & offer evaluation  *(35:30 – 40:30)*

> *(Lesson 10 expanded. The offer-decoder table visible.)*
>
> Last lesson. (...) And honestly — the lesson that might be worth *more* in actual rupees than every other lesson in the pack combined.
>
> Read the TL;DR. *CTC is marketing, not money.* (...) That sentence — frame it. (...) When a company says "your CTC is twelve lakhs", they mean nothing of the sort. They mean — *if* every bonus pays out, *if* every stock vests, *if* you stay the full vesting period, *if* nothing changes — you'll have received twelve lakhs over four years. (...) The actual money in your bank account month-to-month? Often *half* the CTC quoted. Sometimes less.
>
> So let's decode it. Look at the table.
>
> **Base salary.** Monthly take-home, post-deductions. *This is the real number.* The one you actually live on. Demand it be sixty to seventy percent of your CTC. If it's only forty percent, something's hidden in the variable components.
>
> **Joining bonus.** One-time payout in month one to three. (...) Watch out — *almost always has a clawback*. If you leave in under one or two years, you have to pay it *back*. Read the clause.
>
> **Performance bonus.** Annual, percentage of base, tied to your rating. (...) Usually quoted as a max — "up to fifteen percent". The *actual* paid amount is often zero to ten percent. *Treat the bottom end as real.*
>
> **ESOPs or RSUs.** Stock that vests over four years, usually twenty-five percent each year. (...) Watch for the *cliff* — usually one year. Meaning, if you leave at month eleven, *you get nothing*. Zero stock. So when a company tells you "your ESOPs are worth twenty lakhs over four years", and the cliff is twelve months — you only see that money if you stick around.
>
> **Retention bonus.** Paid only if you stay N years. (...) You can't deposit a promise. *Discount it heavily.* Real money is money that's been paid.
>
> **Variable and target.** *Theoretical max* bonuses. Marketing numbers. Assume actuals are sixty to seventy percent of target.
>
> **Benefits.** Insurance, PF, meal cards, gym, learning budget. Worth fifty to eighty thousand a year *if* you use them. Not nothing — but not the headline number either.
>
> Now — *negotiation moves that work for freshers*. Read the list.
>
> **Use competing offers.** *"Company X offered me Y. I'd prefer you — can you close the gap?"* (...) Single most effective move in the entire negotiation playbook. Companies *will* match or exceed competing offers if they believe you're serious. *Get a competing offer if you can.*
>
> **Ask for joining bonus or relocation** when base is fixed. (...) Tier-one bulk hires often have a *fixed* base — they can't move the salary because it's the same for everyone in your batch. But joining bonus and relocation allowance are usually flexible. *Ask.*
>
> **Negotiate the level, not just the rupees.** (...) SDE-1 versus SDE-2 at FAANG is a thirty to fifty percent CTC swing. *Worth pushing* if you have signals — relevant internship, strong project, top performer at your current company. (...) Level changes change *all* the numbers, not just one.
>
> **Always negotiate in writing.** Verbal promises evaporate. *"I'd like to confirm what we just discussed over email — could you send a written update to the offer?"*
>
> **Stay polite. Never threaten.** (...) *"If you can do X, I'm ready to sign today"* beats *"I'll go elsewhere"*. (...) The first is a commitment. The second is a threat. Recruiters respond to commitments. *Always*.
>
> Now — *offer A versus offer B*. Don't compare CTCs. Compare these five things.
>
> **Two-year cash.** Sum of base, bonus, and *vested* stock through year two. (...) Most freshers leave within two to three years. *That's your real horizon.* The four-year stock package is fantasy if you'll be gone in eighteen months.
>
> **Growth ceiling.** Promo cadence at the company. Mentorship quality. Tech stack relevance. (...) An SDE-1 at a slow-promo company can be stuck for three years; at a fast-promo company, you make SDE-2 in eighteen months. Compounds across your career.
>
> **WLB and manager quality.** (...) Talk to current employees on LinkedIn. *Cold-message ten people from the team you'd join.* Most will reply if you're polite. (...) The *bad team at a good company* trap is real and *destroys* careers. Brand on the resume doesn't help if you're miserable.
>
> **Brand on resume.** (...) A six-month stint at FAANG can outweigh a two-year tenure at an unknown startup on your *next* application. (...) Optimise for the *next* job, not just the current one.
>
> **City, commute, family.** (...) The cost of a stressful one-hour commute is *real*. Two hours a day, five days a week, is ten hours a week. Five hundred hours a year. *That's twelve weeks of your life.* Make sure the salary compensates.
>
> Warning callout — *the notice-period trap*. (...) Many service companies require sixty to ninety days notice plus a bond. Read it. *Calculate the cost* of switching jobs in year two. *Don't sign a two-year bond casually* — it locks you out of better offers when they come.
>
> Takeaway. *You worked three years to get this offer. Spend three days evaluating it.* (...) The difference between accepting blindly and negotiating well is *often a year's worth of senior-engineer salary*. (...) Read the offer carefully. Ask questions. Negotiate. Then sign.
>
> ▸ hold on the sign-off section

---

## Outro / sign-off  *(40:30 – 42:00)*

> *(Scroll to "You're prepared — now go ship the offer." Soft tone.)*
>
> That's the whole playbook. (...) Ten lessons. The communication loop, the clarifying questions, the edge-case discipline, the time management, the project pitch, the HR survival kit, the company-tier strategy, the week-before taper, the day-of logistics, and the negotiation moves. (...) If you've watched all three videos in this series — DSA patterns, system design, *and* this — *you are now genuinely more prepared than ninety percent of candidates walking into placement season*. Not a slogan. The truth.
>
> Four takeaways on screen. Read them with me. (...) *Talk out loud — verbalising thought is free signal.* *Right tier, right prep — don't over-prep DP for TCS, don't under-prep behaviour for FAANG.* *Logistics matter — audio, lighting, internet, free wins.* *Negotiate politely — "if you can do X, I'm ready to sign" beats "I'll go elsewhere".* (...) Those four — if you forget everything else, *remember those four*.
>
> One last thing before you go. (...) Most of you watching are probably nervous. Some of you are watching the night before an interview. (...) Listen. (...) You've done the work. You're doing more work right now by watching this. The interview is *not* a measure of your worth as a person. It's just a forty-five-minute conversation. You'll have hundreds of those over your career. *This one is just the first.*
>
> Get sleep. Eat breakfast. Show up. *Talk out loud.* You've got this.
>
> Drop a like if this helped. Comment the company you're interviewing for — I'll wish you luck personally. (...) Subscribe for more deep-dives on placements, DSA, and engineering careers. (...) See you in the next one. Happy shipping.

---

## Runtime breakdown

| Chapter | Lesson | Time |
|---------|--------|------|
| 0 | Cold open — the hook | 1:00 |
| 1 | The communication loop while coding | 3:30 |
| 2 | Clarifying-question checklist | 3:00 |
| 3 | Edge cases everyone forgets | 3:00 |
| 4 | Time management in 45 minutes | 3:00 |
| 5 | Projects round & STAR | 5:00 |
| 6 | HR round — survival kit | 4:30 |
| 7 | Company-tier playbook (India) | 7:00 |
| 8 | The week before D-day | 2:30 |
| 9 | Day-of: on-site & virtual | 3:00 |
| 10 | Negotiation & offer evaluation | 5:00 |
| — | Outro / sign-off | 1:30 |
| **Total** | | **~42:00** |

Copy these timestamps into the YouTube description for chapter markers.

If you want a tighter cut:
- For a ~25-min "soft-skills only" video: keep lessons 1–6 plus the outro. Skip the placement-strategy half. Brand it as "How to win the technical round".
- For a ~20-min "placement strategy only" video: keep lessons 7–10. Brand it as "Choose the right company and negotiate the offer". This one is *very* shareable on LinkedIn the week before campus drives.
- For a ~10-min "night-before-interview" emergency cut: lessons 8 and 9 only. Pure logistics and taper. Pin it in your community tab during placement season.

---

## Delivery notes (read once before recording)

- **Pace.** Aim for ~150 words per minute. The script is written at that pace. This is the *most personal* of the three narrations — slow down even more on the empathetic moments (the outro, the "if you're watching the night before" line).
- **Pauses.** The `(...)` marks are pauses. They are *doing work*. Many of them sit between a hard truth and the next sentence — *let the truth land* before you move on.
- **Emphasis.** When you hit an italicised word, lean in — slightly louder, slightly slower. Some words here ("never", "always", "don't") carry the lesson — emphasise them.
- **Warmth.** Smile when you talk. *Especially* on the outro and the "you've got this" closer. This pack is more about confidence than knowledge — and confidence is contagious through the screen.
- **No filler.** No "uh", "um", "so basically", "you know". The script doesn't have them; your delivery shouldn't either.
- **Use the screen.** When the do/don't card is visible, point at the column you're describing (mouse cursor or callout). Don't just *say* "right column" — *show* it.
- **Read the lists slowly.** Lesson 6 (HR evergreens) and Lesson 7 (company tiers) are reference content — viewers will pause and screenshot. *Let them*. Pause an extra beat at each item so the freeze-frame is clean.
- **For the salary section in Lesson 10** — pause an extra beat between each row of the table. Viewers genuinely want to absorb each component.
- **India-specific cues** — say company names with confidence. "Razorpay" not "Razor-pay". "Swiggy" not "Swee-gee". If you mispronounce, *don't apologise* — keep going.
- **Recording tip** — split Lesson 7 (10 minutes!) into three takes if you need to. Natural breaks at the end of Tier 1, Tier 2, and Tier 3 descriptions. Stitch in the edit.
- **Levels:** -16 LUFS for YouTube; voice should peak around -6 dB.
