# DSA Pack — Video Script

One flowing ~50-minute script for the 16-lesson DSA page (`dsa.html`). Written to be *spoken*, not read — so it sounds like a person teaching, not a manual being narrated.

---

## How to use this script

- **One lesson = one block of speech.** No artificial "intro / body / outro" splits inside a lesson — just talk through it, and when you finish a lesson, scroll to the next card and breathe. Look for the `▸ next` marker.
- **Read it out loud first.** If a sentence trips your tongue, change a word. Don't fight the page.
- **Pauses matter.** The `(...)` marks are full-stop pauses, ~0.5–1s. They give the viewer a moment to catch the visual.
- **Emphasis** — words in *italics* are the ones to lean into when you say them.
- **Total runtime:** ~50:00. See the table at the end for per-lesson timing — use them as YouTube chapter markers.

A note on voice: imagine a junior in your college walked up and said "bro, I have placements in 3 months, what do I actually need to know?". *That* is the energy. No drill-instructor voice. No "hello aspirants, today we will learn". Just a senior who shipped through it last year, telling them the truth.

---

## Cold open — the hook  *(0:00 – 0:55)*

> *(Page loads. Hero image on screen. Don't talk for two seconds — let them see the title.)*
>
> If you've been grinding LeetCode for placements, you already know the lie. (...) *"Just solve 500 problems and you'll be fine."* (...) Five hundred random problems will get you *better*, sure — but the people who actually crack the interviews? (...) They don't solve five hundred. They learn the *patterns* underneath, and then everything starts looking like the same fifteen puzzles in different clothing.
>
> So here's the deal for the next fifty minutes. (...) We're going to walk through *every single one* of those patterns. Sixteen lessons. Three languages on every code block — C++, Java, Python — pick yours from the top right and the whole page switches with you. And by the time we're done, you'll have a checklist in your head that fires the *second* an interviewer reads out a problem. (...) Recognition. Not solving from scratch.
>
> One thing before we start. (...) This isn't a leetcode farm. There are no medals at the end. If a lesson clicks, scroll on. If one feels shaky, expand the lesson card, read the code, *try one problem from the practice list at the bottom* — and only then come back. Pause me whenever. That's how this works.
>
> ▸ next — scroll to Lesson 1

---

## Lesson 1 — The 5-step framework  *(0:55 – 4:25)*

> *(Lesson card is open by default. Stay on the TL;DR block.)*
>
> Okay. Lesson one. (...) The single most undervalued skill in a coding interview. And it has absolutely nothing to do with algorithms.
>
> Here's what I see *every* candidate do — and what *every* selected candidate does instead. (...) The problem appears on screen. The average candidate immediately starts typing `for (int i = 0;` — and from that second on, the interviewer is half-checked-out. Why? Because they've seen this five hundred times. They already know how it ends. (...) The candidate who gets the offer does something visibly different: they slow down. They re-read the problem out loud. They ask one clarifying question. *Then* they start talking.
>
> That little pause — that's the framework. Five steps. (...) Understand. Examples. Brute force. Optimise. Code and test. Let me walk you through what each one actually sounds like.
>
> **Understand** — repeat the problem in your own words. "So I'm given an array of integers, I have to find two indices that add up to a target, and exactly one solution exists, right?" That sentence right there is worth thirty seconds of interview time and infinite goodwill.
>
> **Examples** — work through the given example *by hand*, on the whiteboard or in a comment. Then invent two more: a normal case, and a *nasty* case. Empty input. Single element. Duplicates. Negatives. (...) This step alone catches roughly half of all interview bugs, before you've written a single character of code.
>
> **Brute force** — state it out loud. "The dumb version is two nested loops, O(n squared)." (...) Even if you never code it, you've now communicated three things: I understood the problem, I know what slow looks like, and I'm about to make it faster. The interviewer is now invested in *watching* you optimise.
>
> **Optimise** — this is where you ask the magic question. *"What work is my brute force doing twice?"* Can a hash map remember it? Can sorting reveal structure? Can a pointer trick replace a loop? (...) This is the insight step. This is where O(n squared) becomes O(n).
>
> **Code, then test** — only *now* do you type. And after the closing brace, you walk through the example you invented in step two, line by line, in your head. (...) If it works on a normal case and one edge case before the interviewer says anything, you've separated yourself from ninety percent of the room.
>
> Look at the Two Sum walkthrough right below the steps. (...) That entire flow — understand, examples, brute, optimise, code — *that* is what an interviewer sees and immediately thinks "this person will survive on a real team". The five-step thing isn't training wheels. Even senior engineers do it. They just do it *faster*, and in their head.
>
> Common trap at the bottom there — adding the current number to the hash map *before* the lookup. Pattern `[3, 3]` target six. You'd return `[0, 0]`, which is the same index twice. (...) Always check, *then* insert. That one bug fails the question.
>
> ▸ next — scroll to Lesson 2 on Big-O

---

## Lesson 2 — Big-O in plain English  *(4:25 – 7:10)*

> *(Expand lesson 2. Pause on the complexity-chart SVG.)*
>
> Big-O. (...) The thing every YouTube tutorial makes more complicated than it is.
>
> Here's the honest version. Big-O is not about counting exact operations. It's about answering one question: *"as my input doubles, what happens to my runtime?"* If it doubles, that's linear — O of n. If it stays flat, that's constant — O of one. If it explodes, that's quadratic or exponential and you're about to time out.
>
> Look at the chart. (...) Memorise the *order* of those lines. Not the math underneath — just the shape. O of one and O of log n are flat and beautiful. O of n is the diagonal you want. O of n log n is still your friend. O of n squared starts curving up, ok for small inputs but suspicious. O of two-to-the-n and O of n factorial? (...) Those are the lines that don't even fit on the screen. If your solution lives in those tiers, you have a problem.
>
> Now the table below — *this* is the cheat code. (...) That last column. "n equals a million, how many steps?" Linear gives you a million steps. Logarithmic gives you twenty. *Twenty*. That's why binary search feels like cheating.
>
> And then the most useful heuristic in competitive programming, written right there — the ten-to-the-eighth rule. (...) A modern judge runs roughly a hundred million simple operations per second. So when the interviewer says "n is up to ten to the fifth", you multiply, and ask: does my Big-O times that input fit under ten to the eighth? If yes, you're safe. If no, you're going to TLE — *time-limit exceed* — and you should optimise before you start typing.
>
> Look at the "practical translation" panel. (...) Constraints reverse-engineer the algorithm. n less than twenty? You're allowed to do brute backtracking with memo. n up to a hundred thousand? You need n log n — which means sorting, or a heap, or a balanced tree. n up to a billion? Forget loops entirely — it's log n or it's math. (...) Read the constraint *before* you start solving and you've already narrowed the answer to two or three patterns.
>
> Beginner traps panel on the right. The big one — *hidden loops*. `string += s` inside a for-loop in Java? That's O of n squared, not O of n, because every concatenation rebuilds the string. `list.contains` is O of n. `substring` is often O of n. (...) When you write a loop, audit every single function call inside it. The hidden ones eat your complexity alive.
>
> And the takeaway at the bottom — *state both time and space complexity unprompted*. As soon as you finish typing, before the interviewer asks. "This is O of n time, O of n space, single pass." (...) Cheapest plus-one on your scorecard. Free points.
>
> ▸ next — scroll to Lesson 3

---

## Lesson 3 — Data-structure cheat sheet  *(7:10 – 9:40)*

> *(Expand lesson 3. The big table is in view.)*
>
> Lesson three. (...) This is the lesson where I save you about a hundred hours of trial and error.
>
> Every interview problem is solved by *picking the right data structure*. That's it. Once you've picked correctly, the algorithm writes itself. Once you've picked *wrong*, no amount of cleverness will save you. (...) So memorise this table.
>
> Don't read it row by row out loud — it's already on screen. Let me give you the shortcuts your brain should make automatically.
>
> *"Have I seen this before?"* That's a HashSet. Always. (...) *"How many of each?"* HashMap with the value as a count, or `Counter` in Python. *"Top K of anything"* — heap of size K, every single time. *"Matching brackets, next greater element, histogram"* — that's a stack. The hint word is "next greater" or "previous smaller". (...) *"Shortest path on a grid where every step costs one"* — BFS, no exceptions. *"All combinations, all subsets, all permutations"* — that's backtracking, which is just DFS on a decision tree. *"Are these two things in the same group?"* — Union-Find. We'll get to all of these in detail later.
>
> Two things on the table I want to call out specifically. (...) TreeMap and TreeSet — these are the *sorted* hash variants. When you need "the smallest element greater than X" — that's a floor/ceiling query, that's a TreeMap. In Python it's `sortedcontainers.SortedList`. In C++ it's `std::map` or `std::set`. Most candidates don't even know these exist, and then they reach for sorting plus binary search and lose ten minutes.
>
> Second thing — Trie. (...) Every time the word "prefix" shows up in a problem — autocomplete, word search, longest common prefix — that's a Trie. Insert in O of L, search in O of L, where L is the length of the word. *Faster than a hash map for prefix queries.* That's a memorable fact.
>
> The tip in the green box — language-specific. (...) In Java, use `ArrayDeque`, not `Stack` and not `LinkedList`. `Stack` is from Java 1.0 and is slow. In Python, `collections.deque`. In C++, the `std::stack` and `std::queue` are perfect — *never* `std::list`, it's a doubly-linked list with terrible cache behaviour.
>
> Last line. *Picking the right DS is seventy percent of the puzzle.* (...) Every pattern lesson coming next is really just "the standard trick that goes with this structure". So lock this table down before you move on.
>
> ▸ next — scroll past the "Patterns" section break

---

## Lesson 4 — Two Pointers  *(9:40 – 12:40)*

> *(Section break "Patterns" passes on screen. Lesson 4 expands.)*
>
> Welcome to the patterns half of the page. (...) Twelve patterns coming up. Each one solves a *huge* family of problems. Some of you watching this already know one or two of them. Stay anyway — the templates and the recognition cues are what matter.
>
> Pattern number one. (...) Two Pointers.
>
> Recognition first. *Sorted array. Asked for a pair, a triplet, or a partition with a sum or comparison condition.* (...) If those words show up, two pointers should be the first thing your hand reaches for. Not nested loops.
>
> Look at the illustration. (...) Left pointer at the start, right pointer at the end, both walking toward each other. If the sum of the two is less than the target, the *left* pointer moves right — we need a bigger sum. If the sum is too big, the *right* pointer moves left — we need a smaller one. Each step *kills* an entire row or column of the brute-force search. That's how O of n squared collapses to O of n.
>
> The template right below — three lines. `while l < r`, compute the sum, branch into three cases. Memorise that shape. It fits about thirty problems on LeetCode.
>
> Now the worked example — 3Sum, problem fifteen. The famous one. (...) Trick: sort the array once. Then *fix* the first number with an outer loop, and two-pointer the remaining two. That's how a three-sum problem becomes "n outer iterations, each doing a linear two-pointer scan" — O of n squared total, instead of the naive O of n cubed.
>
> Look at the code. (...) Notice the `if (i > 0 && nums[i] == nums[i-1]) continue;` line near the top — that's how we skip duplicates on the *outer* pivot. And then the two `while` loops inside — those skip duplicates on the *inner* pointers after we find a match. (...) That duplicate-skipping is what catches every beginner. They write the two-pointer logic perfectly, then return triplets like `[-1, -1, 2]` four times because they didn't skip. The output looks right; the auto-grader fails them.
>
> Common-mistake box. (...) Don't use a `HashSet` "for safety" instead of skipping duplicates. It works, sure — but it's slower constants, more memory, and signals to the interviewer that you didn't really *understand* why duplicates appear. Skip them properly. (...) And — important — *do not* try two pointers on an unsorted array. The whole trick depends on the monotonic relationship of a sorted sequence. No sort, no two pointers.
>
> Practice problems at the bottom. (...) If you've never done Container With Most Water, do that one tonight. Five minutes. The two-pointer logic there is the cleanest example of "each move eliminates an option" you'll ever see. It's a beautiful problem.
>
> ▸ next — scroll to Lesson 5

---

## Lesson 5 — Sliding Window  *(12:40 – 15:40)*

> *(Lesson 5 expands. The sliding-window SVG is on screen.)*
>
> Sliding window. (...) The twin sibling of two pointers, but *different enough* that you need to know both.
>
> Recognition. *"Longest substring with property X." "Shortest subarray with sum at least K." "Maximum sum of any window of size K."* (...) The keyword is **contiguous**. The moment you read "contiguous subarray" or "substring", your hand should be reaching for sliding window before you finish the sentence.
>
> The mental model is in the illustration. (...) You have a window — left index L, right index R. You expand R one step at a time, adding the new element into your window state. While the window is *invalid* — too big, too many distinct characters, sum too large, whatever the constraint is — you shrink from the left, removing elements from your state, until the window is valid again. Then you record the answer at this R. Move on.
>
> The magic part. (...) Each index enters the window exactly once and leaves at most once. So even though the *inner* `while` loop *looks* like it might make this O of n squared, it absolutely doesn't. The total work across the whole outer loop is at most two n. That's O of n. (...) Amortised analysis — and the only reason sliding window is so good.
>
> Look at the variable-window template. (...) Three things in the loop body. Add R to your state. Shrink while invalid. Record the answer. That structure. Burn it in.
>
> Worked example — Longest Substring Without Repeating Characters. Problem three. (...) The twist here is we don't shrink one character at a time. We *jump* L past the previous occurrence of the current character. Look at the `last` hashmap — for every character we store its most recent index. When we see a repeat, we move L to one past where we last saw it. Constant-time invalidation. O of n total.
>
> Common-mistake box. (...) The brutal one — re-iterating to recompute the window sum every time. People write the outer loop, then inside they write another loop summing from L to R. That's O of n squared, you've wrecked the whole point. The window state is supposed to be *incremental* — add the entering element, subtract the leaving one. That's it.
>
> And — second mistake — for *fixed*-size windows like "max sum of any window of size K", remember to *drop* the element that falls off the left when R passes K. People forget that and the window keeps growing.
>
> One sentence from the takeaway. *If brute force is "try every subarray", there's a seventy-percent chance a sliding window collapses it to O of n.* (...) Train yourself to ask that question every time you see "subarray" or "substring".
>
> ▸ next — scroll to Lesson 6

---

## Lesson 6 — Fast & Slow Pointers  *(15:40 – 17:40)*

> *(Lesson 6 expands. The tortoise-and-hare SVG is on screen.)*
>
> Fast and slow pointers. (...) Floyd's tortoise and hare. The most elegant trick in linked-list problems.
>
> Two pointers, same starting position. Slow moves one node per step. Fast moves *two* nodes per step. (...) Two facts fall out of that geometry, and they answer ninety percent of linked-list interview questions.
>
> Fact one. (...) If there's a cycle in the linked list, the fast pointer will eventually lap the slow one *inside* the cycle. They'll collide. So if `slow == fast` ever becomes true, you have a cycle. If `fast` runs off the end as null, no cycle. (...) Simple. Six lines of code. The template is right there.
>
> Fact two. (...) When the fast pointer reaches the end, slow is *exactly* at the middle. Half the speed, half the distance. Free middle-of-list detection. No second pass needed.
>
> Now — the interesting one. Cycle II, problem 142. *Find the node where the cycle starts.* (...) This is where the math gets cute. The little proof on screen — read it if you're a "show me why" person. The short version: after they meet, reset slow back to head, then move both *one step at a time*. They re-meet exactly at the cycle's start. (...) The math works out because of the difference between L, C, and k. You don't need to derive it in the interview — you just need to *know it works* and explain the intuition.
>
> Common mistake. (...) Forgetting `fast.next != null` in the loop condition. On an even-length list, `fast.next.next` will dereference a null pointer and crash. (...) Always guard both `fast` and `fast.next`.
>
> Takeaway. *When the problem says "without extra space" on a linked list, the answer is almost always fast-slow.* (...) Hash-set tracking each node would work, but it's O of n space — and interviewers explicitly ask for O of one. Fast-slow gives them what they want.
>
> ▸ next — scroll to Lesson 7

---

## Lesson 7 — Modified Binary Search  *(17:40 – 21:10)*

> *(Lesson 7 expands. The halving SVG is on screen.)*
>
> Binary search. (...) But not the version they taught you in class. The *modified* version.
>
> Here's the mental flip that unlocks half the hard problems on LeetCode. (...) Binary search is *not* about sorted arrays. Binary search is about *any monotonic predicate*. (...) If you can answer the question "is X big enough? yes or no" — and the answer goes from no-no-no-no-yes-yes-yes as X increases — *you can binary search the answer space*. The array doesn't need to exist.
>
> The template on screen is what I call *first-true binary search*. (...) Most bug-proof variant out there. Read it carefully. `while lo < hi`, compute mid, if `ok(mid)` is true then `hi = mid` — meaning, "mid is a candidate, but maybe smaller works, keep trying smaller" — else `lo = mid + 1`. Loop exits with `lo == hi`, which is the first true position. (...) Once you have this template, *throw out* every other binary-search template you've ever learned. This one handles everything.
>
> Worked example — Search in Rotated Sorted Array. Problem 33. (...) The array is sorted, then rotated by some amount. Your job — find a target in O of log n. The classic trick: *one half* of the array, around the midpoint, is always still sorted. Figure out which half. Check if the target lies inside that sorted half. If yes, search there. If no, search the other half. Halving continues. O of log n. (...) Look at the conditions in the code. `a[lo] <= a[mid]` means the *left* half is sorted. The two nested ifs after that check whether the target lies inside the sorted side. That logic, four lines of conditions — that's the whole problem.
>
> Now the magic one. (...) *Search the answer space.* Koko Eating Bananas. Capacity to Ship in D Days. Split Array Largest Sum. (...) The question asks "what's the minimum K such that you can finish in time?" — and instead of computing K directly, you *binary search over K*. For each candidate K, you verify in O of n. Total cost: O of n log range. (...) That trick is in maybe twenty hard LeetCode problems. Once you see the pattern, they all collapse to the same template.
>
> Common-mistake box. (...) Three things. First — `(lo + hi) / 2` overflows for huge ints in C++ and Java. Use `lo + (hi - lo) / 2`. *Always.* Second — mixing the bounds. `<` vs `<=`, `mid` vs `mid + 1` — pick one template and stick to it, do *not* mix. The infinite loops you get from mixing are nightmare to debug under interview pressure. Third — remember the answer space sometimes isn't `[0, n-1]`, it's `[1, max_val]`. Frame your bounds carefully.
>
> Takeaway. *Binary search isn't just for sorted arrays — it's for any monotonic predicate.* (...) That mental flip is worth ten LeetCode hards.
>
> ▸ next — scroll to Lesson 8

---

## Lesson 8 — BFS & DFS  *(21:10 – 24:40)*

> *(Lesson 8 expands. BFS/DFS comparison SVG on screen.)*
>
> Graph traversal. (...) Two ways to walk every reachable node. One careful — BFS. One curious — DFS. Both are essential. Both have *specific* situations where one is correct and the other is wrong. Let me tell you exactly which is which.
>
> **BFS** with a queue. Goes level by level. Visits all nodes at distance one, then all at distance two, then three. (...) Use BFS when the question contains the word "shortest" — *shortest path on a grid*, *minimum number of moves*, *minimum operations to transform*. The first time BFS reaches the target, that distance is the answer. No further work needed.
>
> **DFS** with a stack or recursion. Goes deep first, backtracks. (...) Use DFS for connected-component counting, cycle detection, topological sort, "find all paths from A to B", and the entire family of tree problems. DFS doesn't care about distance — it cares about exploration.
>
> The BFS grid template right there — twenty lines. That code solves Number of Islands. Rotting Oranges. Walls and Gates. Shortest Bridge. (...) Same template, you just change the "process" line in the middle. Memorise the shape: queue, while-not-empty, *level loop* using the queue size, four direction array, mark-seen-on-enqueue, push neighbour.
>
> Two things in that BFS template that beginners get wrong. (...) First — *mark visited when you enqueue, not when you dequeue.* Otherwise the same node gets enqueued by multiple neighbours and you do redundant work. Second — that inner `for sz times` loop is what gives you level-order. If you skip it, you still visit all nodes, but you can't tell which level any node was on. (...) The level loop is what lets you count distance, count layers, do level-order tree traversal.
>
> DFS template right below. Three lines. *Mark, then for each unvisited neighbour, recurse.* That's the whole algorithm. (...) For trees, the difference between *pre-order*, *in-order*, and *post-order* is just *where in those three lines you do the work*. The little three-card panel breaks it down. Pre-order — work before the recursion. In-order — work between the left and right recursion. Post-order — work after both recursions. (...) In-order on a binary search tree spits out the values in sorted order. That fact is the punchline of about ten tree problems.
>
> Common-mistake box. (...) Two big ones. *Mark visited on enqueue, not dequeue*, I already said this — it's worth repeating because it doubles your runtime. And in Python — *deep recursion crashes*. Python's default recursion limit is around a thousand. If you're doing DFS on a grid bigger than a thousand cells, you'll stack-overflow. Fix: either go iterative with an explicit stack, or `sys.setrecursionlimit(some_big_number)` at the top.
>
> Takeaway. *BFS for shortest, DFS for thorough.* (...) Master both templates and roughly thirty percent of LeetCode mediums become routine — Number of Islands, Course Schedule, Clone Graph, Word Ladder — same templates, different "process" line.
>
> ▸ next — scroll to Lesson 9

---

## Lesson 9 — Backtracking & Subsets  *(24:40 – 27:40)*

> *(Lesson 9 expands. Decision-tree SVG on screen.)*
>
> Backtracking. (...) The exhaustive-but-smart search.
>
> Mental model — and look at the SVG. (...) Every backtracking problem is a *tree of choices*. At each node, you pick one option, recurse into the next decision, and when you come back you *undo* the choice so the next sibling branch starts from a clean state. That undo step — that's what the word "backtrack" actually means.
>
> The universal template — five lines of pseudo-code. (...) If the current state is a complete solution, save it. Else, for each choice: if feasible, *apply* it, *recurse*, *undo* it. (...) That structure solves subsets, permutations, combinations, N-Queens, Sudoku, word search, generate parentheses — every "produce all valid X" problem on LeetCode. The only thing that changes between problems is what `choices`, `feasible`, and `isComplete` mean.
>
> Worked example. Subsets, problem 78. (...) Given an array, generate every subset — the empty set, all singletons, all pairs, all triplets, up to the full set. Two-to-the-n total. (...) Look at the code. Inside `dfs(start)`, the *very first line* pushes the current subset into the output. That's how we capture every partial state as a valid subset. Then for each index from `start` to the end, we add the element, recurse with `i + 1`, and pop the element back off. (...) That pop is the *undo*. Without it, you'd corrupt sibling branches with leftover elements.
>
> Two-to-the-n grows fast. (...) For n equals twenty, that's already a million subsets. For n equals thirty, a billion. Backtracking is brute force, and the moment your input passes about twenty elements, you need *pruning*.
>
> Pruning tip box on screen. (...) N-Queens with no pruning explodes to eight factorial — forty thousand boards. With column and diagonal pruning, only ninety-two reach the leaf. Same algorithm, hundreds of times faster. (...) Lesson: cut early, cut often. The moment you can *prove* a branch can't lead to a valid solution, prune it.
>
> Common-mistake box. (...) The classic — forgetting to *copy* `cur` when you push it into the output. If you push the reference, every entry in your output points to the *same* list, which gets emptied at the end. Always snapshot — `new ArrayList<>(cur)` in Java, `cur[:]` in Python. (...) Second mistake — missing the undo. Pull a candidate, recurse, but forget to pop. Your sibling branches inherit a polluted state, your output is full of garbage.
>
> Takeaway. *Backtracking is just DFS on the choice-tree.* (...) Once you have the template, every backtracking problem is fill-in-the-blank — what are my choices, when is a partial answer feasible, when is the answer complete.
>
> ▸ next — scroll to Lesson 10 — the big one

---

## Lesson 10 — Dynamic Programming  *(27:40 – 33:10)*

> *(Lesson 10 expands. DP table SVG on screen.)*
>
> Okay. (...) Dynamic Programming. The interview boss-fight.
>
> If you've ever watched a video about DP and walked away more confused than when you started — that was not your fault. Most explanations skip the part that *actually matters*, which is how to set up the problem. Today we fix that.
>
> Two conditions for DP. (...) One — *optimal substructure*. The best answer to the whole problem can be built from the best answers to smaller sub-problems. Two — *overlapping subproblems*. The same sub-question gets asked again and again, so caching the answer saves you exponential work. If both are true, DP applies. If only optimal substructure is true and subproblems don't overlap, that's divide-and-conquer, not DP.
>
> Now here's the only thing you need to remember when you sit down to write a DP. (...) Four questions. Answer them *in order*, on paper, *before* you type. And ninety-five percent of DP problems crack open immediately.
>
> **One. State.** What does `dp[i]` actually mean? Be *precise*. Not "something about index i". Write it as a sentence. "dp of i equals the length of the longest increasing subsequence ending *exactly* at index i." See how specific that is? *That* sentence is the entire problem. (...) If your state is vague, your transition will be vague, and your code will be wrong. State is everything.
>
> **Two. Transition.** Given your state definition, how is `dp[i]` built from smaller `dp[j]`? Write the recurrence. For LIS — `dp[i] = max(dp[j] + 1)` for every j less than i where `nums[j] < nums[i]`. (...) The recurrence falls out of the state definition. If you got step one right, step two writes itself.
>
> **Three. Base case.** What's `dp[0]`, or `dp[i][0]`, or `dp[0][j]`? The trivial answers, the ones you can read off without computation. (...) Get this wrong and your whole table is wrong, even if the transition is perfect.
>
> **Four. Order.** Iterate in an order where every dependency in your transition is already computed. (...) For most problems, that's left-to-right, top-to-bottom. For knapsack with 0/1 — *right to left* on capacity, more on that in a second.
>
> Let's climb the ladder. (...) One-D, two-D, knapsack.
>
> **House Robber** — one-D. (...) The state — "max loot from houses zero up to i". Transition — for each house, you either *skip* it and keep the previous max, or *take* it and add the max from two houses back. `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`. Look at the code. Three variables. We don't even need the full array. *That* level of compactness comes from understanding what state you actually need to keep.
>
> **Longest Common Subsequence** — two-D. (...) Classic problem. Two strings, find the longest sequence that appears in both. State — `dp[i][j]` = LCS of the first i characters of string A and the first j of string B. (...) Transition is the clever bit. If the last characters match, the LCS includes them, and we add one to the LCS of the strings without those last characters — `dp[i-1][j-1] + 1`. If they don't match, the answer is the max of "ignore A's last char" or "ignore B's last char" — `max(dp[i-1][j], dp[i][j-1])`. (...) That recurrence solves LCS, edit distance, longest palindromic subsequence, and a dozen others. *Same shape.*
>
> **Knapsack** — the famous 0/1 version. (...) Items with weights and values, knapsack with capacity W, maximise total value. State — `dp[i][c]` = max value using first i items with capacity c. For each item: *skip* (take the answer without it) or *take* (if it fits, add its value to the answer with reduced capacity). (...) Now — the gotcha. The space-optimised code on screen uses a *one-dimensional* `dp[c]` and iterates capacity *right to left*. Why? (...) Because if you iterated left to right, when you read `dp[c - w[i]]`, that cell would have *already been updated* with the current item — meaning you'd be allowing the item to be used twice. Right-to-left iteration ensures the cells you read are from the *previous* item. Subtle, critical, asked in every DP follow-up.
>
> Tip box on screen. *Top-down or bottom-up?* (...) Top-down — recursion plus memoization — is way easier to write, easier to think about, and ideal when the state isn't obvious. Write that first in the interview. *Then* if asked to optimise, convert to bottom-up tabulation. Bottom-up has better constants and lets you space-optimise — keep only the last row, like the knapsack code shows.
>
> Common-mistake box. (...) The number-one DP bug — vague state definition. If you can't write `dp[i] = the [precise thing]` in one sentence, *stop typing*. Go back to step one. (...) Second bug — *off-by-one* between "starting at i" and "ending at i". Pick one convention and stick to it across the whole solution. (...) Third — knapsack iteration direction, which I just covered. (...) Fourth — forgetting empty input as a base case.
>
> Practice list at the bottom is *paced*. (...) Start with Climbing Stairs and House Robber to build intuition. Then Coin Change and LIS for the unbounded family. Then LCS, Edit Distance for the two-string family. Partition Equal Subset Sum is your knapsack-disguised problem. Stock with Cooldown is the state-machine DP. (...) Do them in that order. If you brute-force eight problems by following the four-question framework, DP stops feeling like wizardry.
>
> Takeaway. *DP feels like wizardry until you internalise the four questions. Then every new DP problem is fill-in-the-blank.* (...) Take that one sentence home with you.
>
> ▸ next — scroll to Lesson 11

---

## Lesson 11 — Greedy  *(33:10 – 35:40)*

> *(Lesson 11 expands.)*
>
> Greedy. (...) The fastest pattern when it works — and a disaster when it doesn't. So we need to learn *both* halves.
>
> Greedy means — make the locally best choice, never reconsider, never backtrack. The opposite of DP, which considers every alternative and picks the best globally. (...) Greedy is faster, simpler, more elegant. It also gives the *wrong answer* if you apply it to the wrong problem. So how do we know when it's safe?
>
> Worked example first. Interval Scheduling — give me the maximum number of non-overlapping meetings I can attend. (...) The greedy rule, written right above the code: *sort by end time, always pick the next interval that starts after the last one ended*. (...) Why end time and not start time? Because an interval that ends earlier *leaves more room for the rest*. That's the intuition.
>
> Look at the code. Sort, then walk through. If the current interval's start is at-or-after the previously chosen end, take it. Update lastEnd. Count. Done. (...) Six lines. O of n log n because of the sort. Beautiful.
>
> Now the part most tutorials skip. (...) *Why does greedy work here?* The little block called "the exchange argument" answers it. (...) Suppose some other optimal solution didn't pick the earliest-ending interval. We swap that solution's first interval with the earliest-ending one. The new solution is still non-overlapping, still the same size, still optimal. (...) Greedy is one valid optimum. That's the proof. (...) In an interview, even saying out loud "I believe there's an exchange argument that proves swapping with the earliest-ending interval preserves optimality" — *that* is what gets you the L5 score.
>
> And — critical — *when greedy fails*. (...) Coin Change. Coins one, three, four. Target six. The greedy biggest-first approach picks four, then one, then one — three coins. But the *optimal* answer is three plus three — two coins. (...) The locally biggest choice locked us out of the globally optimal one. *That's exactly when you fall back to DP.*
>
> The interview-script box. (...) If you're not sure greedy is correct, *say so*. "Greedy might work here — I think sorting by end time gives the right ordering, but let me think for a moment if there's a counter-example." (...) Interviewers reward that honesty *enormously*. They've seen a hundred candidates confidently apply greedy to a coin-change-style problem and get it wrong. The candidate who pauses and stress-tests their assumption — that's the one who gets the offer.
>
> Takeaway. *Greedy is the fastest pattern when it works — and a disaster when it doesn't. Always sanity-check with a tiny counter-example before committing.* (...) Two-line counter-example, written in the margin. If it survives, you're safe.
>
> ▸ next — scroll to Lesson 12

---

## Lesson 12 — Top-K with Heap  *(35:40 – 38:10)*

> *(Lesson 12 expands. Heap SVG on screen.)*
>
> Top-K. (...) The pattern that turns O of n log n into O of n log K, and saves you when K is much smaller than n.
>
> Recognition is dead simple. *K largest. K smallest. K closest. K most frequent.* (...) Any time the problem says "give me the top K of something", reach for a heap.
>
> The trick that catches everyone the first time. (...) For "K *largest*", you use a **min**-heap. Not a max-heap. (...) Why? Because you want to *kick out* the smallest of the top-K every time a new candidate beats it. The min-heap's root is the smallest — easy to compare against, easy to pop. (...) For "K *smallest*", flip it — use a max-heap. Same idea, opposite direction.
>
> The template on screen — Kth Largest Element, problem 215. (...) Three lines inside the for-loop. Push the new number. If the heap is bigger than K, pop the smallest. *Done.* When the loop ends, the heap holds the K largest values, and the root is the K-th largest. (...) Total cost — n log K time, K space. When K is fifty and n is a million, that's a *massive* speedup over sorting the whole array.
>
> Now the two-heap trick — median of a stream, problem 295. (...) Two heaps. A *max*-heap called `lo` for the smaller half of the numbers, a *min*-heap called `hi` for the larger half. (...) The invariant — sizes differ by at most one, and every element in `lo` is less than every element in `hi`. (...) When you add a new number, you funnel it through the max-heap first, then push the max-heap's top into the min-heap, then if the min-heap got too big, push its top back. (...) Median is the top of the larger heap, or the average of the two tops if they're equal size.
>
> Look at the Python code — using negated numbers in `lo` because Python's heapq is min-only. That's the standard trick — Python doesn't have a built-in max-heap, so you negate on push and negate on read. (...) Same effect, a tiny bit of mental gymnastics.
>
> Quickselect tip box. (...) For a *one-shot* "give me the K-th largest" with no streaming, Quickselect beats heap on average — O of n. But the moment the data streams, or you need top-K-so-far at every step, *heap wins*. Streaming systems all over Netflix, Twitter, Spotify rely on this trick.
>
> Takeaway. *Heap means "I only care about the best K I've seen so far."* (...) Cheap. Elegant. Often the line between TLE and accepted.
>
> ▸ next — scroll to Lesson 13

---

## Lesson 13 — Union-Find (DSU)  *(38:10 – 40:40)*

> *(Lesson 13 expands. DSU tree SVG on screen.)*
>
> Union-Find. (...) Also called Disjoint Set Union — DSU. The data structure for the question *"are these two things in the same group?"*.
>
> Imagine you're tracking friendships. Three friends form a group, then someone joins, then two groups merge. You want to answer — at any moment — "are person A and person B in the same group?". (...) DSU answers that in *essentially constant time*. Inverse Ackermann. For all practical input sizes, treat it as O of one.
>
> Two operations. (...) `find(x)` — given x, return the representative of its group. `union(a, b)` — merge the groups of a and b. (...) Internally, every element points to its *parent*. The root of each tree is the representative. Merge two groups by attaching one root under the other. Easy.
>
> Now — *the two optimisations on screen are what make DSU fast.* (...) Without them, in the worst case the trees become long chains and you've got O of n per operation. With them, you get the inverse Ackermann magic.
>
> First — *path compression*. When you call `find(x)` and walk up to the root, *re-point every node along the way directly to the root*. So next time, find is one step. Look at the C++ template — that `p[x] = p[p[x]]` line inside the while loop. That's *grandparent compression*, a simpler variant that's almost as good.
>
> Second — *union by rank*. When merging two trees, attach the *shorter* one under the *taller* one. This keeps trees shallow. The `r` array tracks the rank — basically the height upper bound. Bump it only when both roots have equal rank.
>
> With both optimisations, the amortised cost per operation is the inverse Ackermann of n. Which means — for any input the universe will ever produce — *constant time*. (...) Memorise the template. Don't try to derive it during the interview. Just paste it.
>
> Worked example — Number of Provinces, problem 547. (...) Cities and a connection matrix. Number of connected components. *Trivial in DSU.* Union every connected pair, then count distinct roots. Six lines beyond the template.
>
> Reverse-time trick box. (...) This one's beautiful. When the question asks "edges are removed one at a time — after each removal, how many components?" — you cannot easily *delete* from a DSU. So you *reverse the timeline*. Start from the final, sparse graph. Add edges in reverse order — which is union. Answer queries in reverse. (...) Convert any "deletion" problem into an "insertion" problem. Works for a whole family of competitive-programming problems.
>
> Takeaway. *If the problem screams "groups + merges + queries", DSU is faster and cleaner than BFS/DFS on the same graph.* (...) And it's a memorised template — you're not solving the data structure under pressure, you're just using it.
>
> ▸ next — scroll to Lesson 14

---

## Lesson 14 — Graph Algorithms  *(40:40 – 44:10)*

> *(Lesson 14 expands. Weighted-graph SVG on screen.)*
>
> Graph algorithms. (...) The classics. Dijkstra. Bellman-Ford. Kruskal. Prim. Topological sort. (...) Most candidates know the *names*. The actual skill is knowing *which one to reach for, given the constraints*. So let's build that map.
>
> Look at the cheat sheet at the bottom of the lesson. That table is the whole game. (...) Let me walk you through the choice tree out loud.
>
> *Shortest path. Unweighted graph.* BFS. Always. O of V plus E. (...) No need for anything fancier because every edge costs one, and BFS already explores in order of distance.
>
> *Shortest path. Positive weights.* Dijkstra. O of V plus E, log V — using a heap. (...) Look at the template. Heap of `(distance, node)` pairs. Pop the closest unvisited. Relax its neighbours. If we already had a shorter distance, skip — that's the `if (d > dist[u]) continue;` line. The stale-entries trick that makes the heap-based version work.
>
> *Shortest path with negative weights.* Bellman-Ford. O of V times E. Slower, but it works where Dijkstra would silently break. (...) Bonus — Bellman-Ford detects *negative cycles*. If after V minus one passes any distance still decreases, you have a negative cycle.
>
> *All-pairs shortest path.* Floyd-Warshall. O of V cubed. Three nested loops, twelve lines. Only works for V up to about four hundred — V cubed gets brutal — but for those small dense problems, no algorithm is more elegant.
>
> *MST — Minimum Spanning Tree.* (...) Two choices. Kruskal — sort edges by weight, add the cheapest if it doesn't create a cycle, using DSU to check. O of E log E. Best for sparse graphs. Prim — start from any node, grow the tree using a heap of frontier edges. O of E log V. Best for dense graphs. (...) In an interview either is fine. If you've already coded DSU as part of your prep, Kruskal is the cheaper write.
>
> *Ordering tasks with prerequisites.* Topological sort. The Kahn's algorithm template is on screen. (...) Compute in-degrees for every node. Put all zero-in-degree nodes into a queue. Pop one, add it to the output, *decrement* every neighbour's in-degree. When a neighbour hits zero, push it. (...) If at the end the output has all n nodes — valid topological order. If it has fewer than n — *there's a cycle*. Course Schedule, problem 207, is literally this. Course Schedule II, problem 210, returns the order.
>
> Common-mistake box. (...) Three things. *Dijkstra with negative weights* gives wrong answers silently — it's not a bug, it's an algorithmic limitation. If you see negatives, switch to Bellman-Ford. (...) *Topological sort on a cyclic graph* — the output is shorter than n. Always check the length before using the result. (...) And *adjacency matrix versus list* — for sparse graphs use the list. A matrix with V equal to a hundred thousand allocates ten gigs. *Memory error before you've even started*.
>
> Takeaway. *Match the algorithm to the constraint, not to your favourite.* (...) Knowing *when* to use each is the interview skill. The code is templated.
>
> ▸ next — scroll to Lesson 15

---

## Lesson 15 — Bit Manipulation  *(44:10 – 46:10)*

> *(Lesson 15 expands.)*
>
> Bit manipulation. (...) The rare-but-deadly pattern.
>
> Honest disclaimer up front. (...) Bit tricks show up in maybe one in twenty interviews. So this isn't where you spend your prep budget. *But* — when they do show up, the entire problem is a one-liner if you know the trick, and you'll freeze solid if you don't. So learn the five operations on screen, and move on.
>
> Test bit K. AND with one shifted left by K. (...) Set bit K. OR with one shifted left by K. (...) Clear bit K. AND with the *bitwise-NOT* of one shifted left by K. (...) Toggle bit K. XOR with one shifted left by K. (...) And the most elegant one of all — *isolate the lowest set bit*. `x AND negative x`. The bit hack that makes Fenwick trees and bit DP possible.
>
> Now — the famous XOR trick. Single Number, problem 136. (...) Every number appears twice except one. Find the loner. (...) Mental model: `a XOR a = 0`. So if you XOR the entire array together, every duplicate cancels out and you're left with the lone number. *Three lines of code.* Read the template — that's it. O of n time, O of one space. (...) The interviewer cannot beat that. Doesn't exist a faster solution.
>
> Subsets as bitmasks. (...) For n up to about twenty, you can enumerate every subset with a single loop — `for mask from zero to two-to-the-n minus one`. Bit i of the mask tells you whether element i is in the subset. (...) That trick powers DP-on-subsets — Travelling Salesman, bitmask DP for assignment problems. Niche, but worth knowing the *shape*.
>
> Java gotcha box. (...) `1 << 31` on an `int` is the sign bit. Negative number. For shifts at or above bit 31, you *must* use `1L << k`, the long literal. C++ devs — same warning, use `1LL`. (...) Subtle bug, easy to miss.
>
> Takeaway. *Bit ops are rare in interviews, but when they show up the solution is usually a one-liner — if you know the trick.* (...) Five operations. Twenty minutes of practice. Done forever.
>
> ▸ next — scroll to Lesson 16, the final one

---

## Lesson 16 — The optimisation playbook  *(46:10 – 48:40)*

> *(Lesson 16 expands. The 10-card grid is visible.)*
>
> Last lesson. (...) And this is the one to *screenshot*.
>
> You're in the interview. You have a brute force. It's O of n squared. The interviewer is looking at you with a polite but expectant expression. (...) Your brain freezes. (...) What do you do?
>
> You walk this menu, top to bottom. *Out loud.* (...) Ten questions. One of them will unlock the optimal solution. Probably the first three.
>
> One. *Can a HashMap remember work?* (...) If your brute force re-asks "have I seen this?" or "what's the index of this?", a hash collapses it. Two Sum's O of n squared to O of n — that exact transformation.
>
> Two. *Does sorting reveal structure?* (...) Sorting costs n log n, but it unlocks two pointers, binary search, greedy. If your brute is n squared and sorting is "free", you've already won.
>
> Three. *Can two pointers replace a loop?* (...) Brute is "for each i, scan j greater than i"? If a monotonic relationship exists, collapse to one linear walk.
>
> Four. *Can a sliding window slide?* (...) Sub-array, substring, where each element enters and leaves the window at most once — O of n.
>
> Five. *Can I binary-search the answer?* (...) The "search the answer space" trick from lesson seven. If you can verify any candidate, you can search them.
>
> Six. *Are subproblems overlapping?* (...) Recursion that re-solves the same state? DP. Two-to-the-n becomes n squared.
>
> Seven. *Is there a greedy choice?* (...) Sort by some key, commit to the local best, skip the whole DP. Faster if it works.
>
> Eight. *Is the structure actually a graph?* (...) "Connected components", "shortest path", "dependencies" — even when no graph is mentioned, model it as one and reach for BFS, DFS, or DSU.
>
> Nine. *Do I need only the top K?* (...) Sorting is overkill. Size-K heap. n log K beats n log n.
>
> Ten. *Is there math?* (...) Prefix sums, GCD, modular arithmetic, combinatorics — one formula can replace a whole loop.
>
> The interview-cheat box. (...) When you're stuck, *narrate the menu out loud*. "Could a hash map help here? Doesn't seem so. What about two pointers? The array isn't sorted, but I could sort it… hmm, would that help?" (...) The interviewer often nudges you when you brush past the right one. They want you to succeed. They're rooting for you. Use that.
>
> And finally — at the bottom of the lesson — the **constraint-to-algorithm table**. (...) This is the inverse map. They tell you the constraint, you reverse-engineer the algorithm. (...) n up to a hundred — n cubed is fine, think DP or Floyd-Warshall. n up to ten thousand — n squared, two-D DP. n up to a hundred thousand — n log n, sort or heap or Dijkstra. n up to a million — O of n, two pointers or sliding window or hashing. n up to a billion — log n or square root n, binary search or pure math. (...) Take a screenshot of *this* table. Tape it next to your monitor for the next ninety days.
>
> Takeaway. *When the constraint screams a target complexity, only a handful of patterns can deliver it. Reverse-engineer from n to the technique.* (...) That sentence — that's how strong DSA people think.
>
> ▸ hold on the sign-off section

---

## Outro / sign-off  *(48:40 – 50:00)*

> *(Scroll to the "You now know the playbook" section. Stay there. Soften the tone.)*
>
> That's the whole map. (...) Sixteen lessons. Fourteen patterns. The universal framework. The optimisation playbook. (...) If you genuinely internalise this — not memorise, *internalise* — you'll start seeing problems the way the senior interviewers do. *Recognition*, not solving.
>
> Look at the four takeaways on screen. (...) *Don't memorise solutions, memorise templates.* The template for each pattern fits about fifty problems. *Daily reps* — one medium per day for sixty days will beat any single Sunday grind. *Talk while you code* — interviewers grade thought, not silence. *Time, then space* — state both, unprompted, every time. Free points.
>
> One more thing before you go. (...) The two buttons at the bottom — Next: System Design, and Or: Interview Playbook. (...) If your placement is in the next few weeks, do the Interview Playbook next — clarifying questions, communication, the company-tier playbook, the day-of stuff. If you're earlier in your prep and you have time, do System Design next. (...) Either way — bookmark this page, share it with your study group, and come back to it every time you start a new pattern.
>
> If this helped, hit like, drop a comment with the pattern that finally clicked, and I'll see you in the next one. (...) Happy shipping.

---

## Runtime breakdown

| Chapter | Lesson | Time |
|---------|--------|------|
| 0 | Cold open — the hook | 0:55 |
| 1 | The 5-step framework | 3:30 |
| 2 | Big-O in plain English | 2:45 |
| 3 | Data-structure cheat sheet | 2:30 |
| 4 | Two Pointers | 3:00 |
| 5 | Sliding Window | 3:00 |
| 6 | Fast & Slow Pointers | 2:00 |
| 7 | Modified Binary Search | 3:30 |
| 8 | BFS & DFS | 3:30 |
| 9 | Backtracking & Subsets | 3:00 |
| 10 | Dynamic Programming | 5:30 |
| 11 | Greedy | 2:30 |
| 12 | Top-K with Heap | 2:30 |
| 13 | Union-Find (DSU) | 2:30 |
| 14 | Graph Algorithms | 3:30 |
| 15 | Bit Manipulation | 2:00 |
| 16 | The optimisation playbook | 2:30 |
| — | Outro / sign-off | 1:20 |
| **Total** | | **~50:00** |

Copy these timestamps straight into the YouTube description for chapter markers — viewers can jump to any pattern.

If you want a tighter cut:
- For a ~30-min video: trim the worked examples in lessons 5, 7, 9, 14 to a single sentence; lessons 10 and 16 are load-bearing, *don't* trim them.
- For a ~20-min "patterns whirlwind": skip lessons 1, 2, 3 (foundations) entirely and start at the Patterns section break — assume the viewer already knows Big-O and DS choices.

---

## Delivery notes (read once before recording)

- **Pace.** Aim for ~150 words per minute. The script is written at that pace. If you find yourself hurrying, you're rushing — slow down.
- **Pauses.** The `(...)` marks are pauses. They are *doing work*. Don't skip them — they give the viewer a moment to read the table or trace through the code on screen.
- **Emphasis.** When you hit an italicised word, lean in — slightly louder, slightly slower. That's the word doing the teaching.
- **No filler.** No "uh", "um", "so basically", "kind of", "you know". The script doesn't have them; your delivery shouldn't either.
- **Use the screen.** When the camera is on a code block, *point* at the actual line you're describing (mouse cursor or callout). Saying "look at this line" without showing it wastes the visual.
- **Smile when you talk.** It's audible. Especially in the takeaways and the outro.
- **Record per lesson, not all at once.** Stop after each `▸ next` marker. Sip water. Check your notes. Resume. Stitch in the edit. Lesson 10 (DP) is the longest single block — give yourself two takes for it.
- **For LeetCode references** — say the number, not the URL. "Problem fifteen, 3Sum." "Problem two-fifteen, Kth Largest." Viewers Google by number.
- **Levels:** -16 LUFS for YouTube; voice should peak around -6 dB. Quick test — record ten seconds, listen on phone speakers; if you can hear it clearly, it's right.
- **B-roll suggestion** — when you're on the optimisation playbook in lesson 16, cut between the ten-card grid and a candidate-at-whiteboard b-roll if you have it. Otherwise just leave the camera on the page; the grid is already visual enough.
