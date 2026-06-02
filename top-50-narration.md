# Top 50 Problems — Video Scripts

Spoken-style narration for the 50 problems in `top-50-problems.html`. One block per problem — record each as its own YouTube video, or string a topic group together into one longer playlist episode.

---

## How to use this script

- **One problem = one video.** Aim for **6–10 minutes** of screen time per problem. The script gives you the *skeleton* (problem → brute → better → optimal → trap). You'll naturally add 2–4 minutes by dry-running code on screen and answering the "but what if…" thoughts as they pop up.
- **Spoken, not read.** The `(...)` marks are full-stop pauses (~0.5–1s). The *italics* are the words to lean into. Don't read robotically; talk like you're explaining it to a friend.
- **What's on screen.** Each block opens with *(parenthetical stage direction)* — what to display, when to switch tabs, when to stay silent. Use the Top 50 page's chip + ladder for the visual scaffolding.
- **Voice.** Imagine a junior at your college asked "yaar, this problem just came in my interview, kya kya try karoon?". That's the energy. No "hello aspirants". Just: *here's how I would actually attack this.*
- **Once a video is live**, paste its URL into `videos.js` next to the matching `p-N` key. The chip on the page updates automatically.

---

## Cold open — the series intro  *(use once at the start of the playlist)*

> *(Show the Top-50 hero on screen for two seconds before speaking.)*
>
> Fifty problems. (...) That's the whole game.
>
> *Fifty.* (...) If you can stand up at a whiteboard tomorrow and re-derive *each one* of these — not from memory, from *first principles* — you will recognise 80% of what every product company in the world throws at you. (...) Google. Meta. Microsoft. Amazon. Atlassian. Uber. The Indian unicorns. The startups. (...) Same fifty puzzles, different costumes.
>
> So here's how we're doing this. (...) One video per problem. Same structure every time. (...) I read the problem out loud. (...) I show you the *brute force* — the obvious, slow, embarrassing version — because every interviewer expects you to *say it before you solve it*. (...) Then we go to *better*, if there's a meaningful middle step. Then we land at the *optimal*. (...) And at the end I'll point out the one mistake that gets *most* candidates rejected on this exact problem.
>
> Code in C++, Java *and* Python on the page — pick yours from the top right. (...) LeetCode link is right there too. Pause this video, open it in a new tab, and try the problem first. *Even if you fail.* Especially if you fail. (...) Then come back and we walk through it together.
>
> Let's go.
>
> ▸ to problem 1

---

# Section 1 of 10 — Arrays & Hashing  *(problems 1–8)*

The warm-up, but don't underestimate it. *Two Sum* gets asked more than every other problem combined. *Longest Consecutive Sequence* hides a beautiful hashing trick that shows up everywhere. Get the reflex: "is this a set/map problem?" — that reflex alone solves half this section.

---

## P-1 — Two Sum  *(~7 min)*

> *(Show the LeetCode tab first, then flip back to your editor.)*
>
> Two Sum. (...) Most-asked interview question in history. You'd be amazed at how many candidates *still* fumble it because they jump straight to code. Don't. (...) Read the problem out loud first. *"Given an array of integers and a target. Return the indices of the two numbers that add up to the target. Exactly one solution exists. Don't use the same element twice."*
>
> **Brute force.** Two nested loops. For every `i`, walk every `j > i` and check if `nums[i] + nums[j] == target`. (...) Works. Always. (...) But it's O(n²) — and the interviewer is now looking at you with that *"yes, and?"* face. *Say the brute force out loud anyway.* It shows you understood the problem. Then promise to do better.
>
> **Better — sorting.** Sort the array, then run two pointers from both ends. O(n log n). (...) Sounds nice, but *we lose the original indices* — and the problem asks for indices. So we'd have to pair each value with its original index *before* sorting, which makes the code uglier than the optimal one. Mention it, move on.
>
> **Optimal — hash map.** *Here's the insight.* (...) For every `x` I see, the question is just *"have I already seen `target - x`?"*. A hash map answers that in O(1). (...) So one walk through the array: for each value, check the map for the complement. If it's there — return the two indices. If not — store this value with its index and keep going.
>
> Code. (...) Empty map. For loop. `need = target - nums[i]`. If `seen.count(need)` is non-zero, return `{seen[need], i}`. Otherwise insert `nums[i] -> i`. Done. (...) Time O(n). Space O(n). The classic *trade space for time* move.
>
> **The trap.** (...) People insert `nums[i]` into the map *before* the lookup. Then `[3, 3]` with target 6 returns `[0, 0]` — same index twice. *Always check, then insert.*
>
> ▸ to problem 2

---

## P-2 — Contains Duplicate  *(~5 min)*

> *(Tiny problem, perfect for warming up the audience on hashing.)*
>
> Contains Duplicate. (...) Return true if *any* value appears at least twice. Otherwise false.
>
> **Brute force.** Compare every pair. O(n²). Mention it, move on.
>
> **Better.** Sort the array, then scan once for adjacent equals. O(n log n). Constant extra space, which is occasionally what an interviewer wants. *Worth mentioning as a "memory-tight" option.*
>
> **Optimal.** A HashSet. Walk the array once; before inserting `x`, check `if seen.contains(x) return true;`. Otherwise insert. Reach the end — return false. O(n) time, O(n) space.
>
> *Pro tip.* (...) In Python, `len(set(nums)) != len(nums)` is a one-liner. In Java, you can `return new HashSet<>(Arrays.asList(...)).size() != nums.length;`. But in an interview, *write the explicit loop* — it's faster, allocates less, and shows you understand what's happening.
>
> **The trap.** *Reading the problem.* It says "*any* duplicates" — not "*all* values are duplicates" and not "*two adjacent* duplicates". Don't over-engineer.
>
> ▸ to problem 3

---

## P-3 — Valid Anagram  *(~6 min)*

> Valid Anagram. (...) `s` and `t`. Return true iff `t` is a permutation of `s`.
>
> **Brute force.** For each character of `s`, scan `t` to "use up" a matching letter; mark it used so you don't double-count. O(n²). Don't do this. *Just say it exists.*
>
> **Better — sort.** Sort both strings. If the sorted versions are equal — anagram. (...) O(n log n) time, O(n) space for the sort. *Acceptable* answer. Some interviewers stop here. Many don't.
>
> **Optimal — frequency count.** (...) If the alphabet is just lowercase English letters, a *26-slot integer array*. Walk `s`, `++` for each character. Walk `t`, `--` for each. At the end, all 26 slots should be zero. *O(n) time, O(1) space* — because 26 is a constant. (...) If the alphabet is Unicode, swap to a HashMap.
>
> **Pro tip.** Length check first. `if (s.length() != t.length()) return false;` — one line, saves you a wasted pass.
>
> **The trap.** Two of them. (...) One — Unicode. If the problem allows non-ASCII, the 26-int array silently wraps. Use a HashMap. (...) Two — case. Read the problem. Are `'A'` and `'a'` the same letter? Usually yes for "anagram", but *ask* in an interview.
>
> ▸ to problem 4

---

## P-4 — Group Anagrams  *(~7 min)*

> Group Anagrams. (...) Given a list of strings, group all anagrams together. Order of groups doesn't matter.
>
> **Brute force.** For every word, check it against every other word using your Valid-Anagram routine. O(n² · k) where k is the word length. *Too slow* the moment n hits the thousands.
>
> **Better — sort key.** For each word, sort its letters into a *canonical form*. "eat" and "tea" both sort to `"aet"`. Use that as the key in a HashMap of `string -> list<string>`. Walk the list once, append to the right bucket. (...) O(n · k log k). *Clean. Easy to write. Acceptable in most interviews.*
>
> **Optimal — count key.** (...) Sorting is overkill. The *real* anagram fingerprint is the letter count, not the order. For each word, build a 26-int frequency array, turn it into a tuple/string like `"1#0#0#...#2#0"`, and use *that* as the HashMap key. Now the per-word work is linear, not log-linear. (...) O(n · k) time, same O(n · k) space.
>
> *In code.* In Python, `tuple(count)` is hashable, no string-building needed. In Java, build a `StringBuilder` with delimiters — otherwise `[1,11]` and `[11,1]` collide. (...) In C++, `string(count.begin(), count.end())` after small offsets.
>
> **The trap.** The "use the count as a string" version *without* delimiters. `count = [1, 12, 0, ...]` and `count = [11, 2, 0, ...]` would both flatten to `"1120..."`. Use a delimiter like `'#'` between numbers. *Boring detail, dropped interviews.*
>
> ▸ to problem 5

---

## P-5 — Top K Frequent Elements  *(~8 min)*

> Top K Frequent Elements. (...) Return the k most frequent values. Order among them doesn't matter.
>
> Most candidates start with the wrong solution. Let me walk through all three.
>
> **Brute / naive.** HashMap of `value -> count`. Sort the (value, count) pairs by count descending. Take the first k. (...) O(n log n). *Works.* Most interviewers won't even fight you on it. But it tells them you don't know that "find top-k" almost always has a sub-n-log-n trick.
>
> **Better — min-heap of size k.** Count frequencies. Push (count, value) into a *min-heap*. The moment the heap grows past size k, pop the smallest. (...) At the end, the heap holds your k most-frequent. (...) O(n log k). Much better than n log n when k is small. *Memorise this — same trick solves "k closest points", "k largest stocks", "k longest words".*
>
> **Optimal — bucket sort by frequency.** (...) Here's the magic. (...) Frequencies range from 1 to n. So make a buckets array of length n+1, where `buckets[f]` is the list of values that appear exactly `f` times. Walk the frequency map, drop each value into its bucket. (...) Then walk buckets from high to low, collecting values, until you have k. (...) O(n) time. *Linear.* O(n) space.
>
> **The trap.** Two heap mistakes. (...) One — using a *max-heap of size n* instead of a *min-heap of size k*. That collapses you to O(n log n). (...) Two — popping the wrong end. The min-heap kicks out the *least frequent* element when it overflows, leaving the *top k* inside. Get that direction wrong and you'll silently return the *bottom* k.
>
> ▸ to problem 6

---

## P-6 — Product of Array Except Self  *(~7 min)*

> Product of Array Except Self. (...) For each index `i`, return the product of all elements *except* `nums[i]`. **No division allowed.** **O(n) time.**
>
> The "no division" line is the whole challenge. If we could divide, we'd compute total product once and do `ans[i] = total / nums[i]` — three lines. But zeros break that, and the problem disallows it anyway.
>
> **Brute force.** Two nested loops. For each `i`, multiply everything else. O(n²). Skip.
>
> **Better — prefix + suffix arrays.** Build `left[i]` = product of everything strictly left of `i`. Build `right[i]` = product of everything strictly right. Then `ans[i] = left[i] * right[i]`. Two passes plus a combine pass. *O(n) time, O(n) extra space.* Easy to explain on a whiteboard.
>
> **Optimal — O(1) extra space.** (...) The trick: we don't need to *store* both prefix and suffix arrays. We can fold them in. (...) First pass, left to right, writing the *prefix product* directly into `ans`. After this pass, `ans[i]` holds the product of elements before `i`. (...) Second pass, right to left, with a *running variable* `suffix` that accumulates the product of elements after `i`. Multiply `ans[i] *= suffix`, then `suffix *= nums[i]`. (...) Output array doesn't count as extra space. So this is *O(1) auxiliary*.
>
> **The trap.** *Off-by-one on the boundaries.* `ans[0]` should be the product of everything to the right of index 0 — meaning, the left prefix at index 0 is the empty product, which is 1. Same for `ans[n-1]` on the suffix side. Initialise both edges to 1 and you sleep at night.
>
> ▸ to problem 7

---

## P-7 — Encode and Decode Strings  *(~6 min)*

> Encode and Decode Strings. (...) Design `encode(List<String>)` and `decode(String)` so a round-trip preserves the original list. (...) The "design" part is the interview signal. They want you to *justify* your encoding.
>
> **Brute attempt #1 — magic delimiter.** "I'll just join them with `'#'`." (...) Until one of the strings contains `'#'`. Then your decoder breaks. *State this approach and then knock it down yourself.*
>
> **Brute attempt #2 — escape the delimiter.** Walk each string, replace `'#'` with `'\#'` first, then join. (...) Works. But the decoder gets ugly, and any new "special" character you ever add has to be handled too. Brittle.
>
> **Optimal — length prefix.** (...) Encode each string as `"<length>#<string>"`. So `["abc", "de#f"]` becomes `"3#abc4#de#f"`. *No matter what's inside the string,* the decoder reads the integer up to the first `#`, then slices exactly that many characters, then repeats from the next position.
>
> *Walk through the decoder.* `i = 0`. Read digits until you hit `'#'` — that's `len`. Skip the `'#'`. The next `len` characters are the string. Push it. Move `i` forward by `len`. Loop until `i` reaches the end.
>
> **Time:** O(N) where N is total characters across all strings. **Space:** same.
>
> **The trap.** Multi-digit lengths. `"12#hello world!!"` — the length is `12`, not `1`. The decoder must keep reading digits until it sees `#`. *Always test with a string ≥ 10 characters long.*
>
> ▸ to problem 8

---

## P-8 — Longest Consecutive Sequence  *(~8 min)*

> Longest Consecutive Sequence. (...) Find the length of the longest run of consecutive integers — *in any order in the array.* (...) `[100, 4, 200, 1, 3, 2]` answers 4, because 1,2,3,4 are all present.
>
> **Brute force.** For each value `v`, scan the array to keep checking `v+1, v+2, ...`. O(n³). *Embarrassing,* but state it.
>
> **Better — sort.** Sort the array. Walk it once. Whenever the next element is exactly previous+1, extend the run. Else reset. (...) O(n log n) time, O(1) extra space if you're allowed to mutate. Acceptable. Not what they want.
>
> **Optimal — hash set + "only start runs from the head".** (...) Here's the trick that turns this into linear. (...) Put every value into a HashSet. (...) Now scan the *set*. For each `v`, *only* try to extend a run starting at `v` if `v - 1` is NOT in the set. Because if `v - 1` is in the set, `v` is in the middle of a longer run that will be counted when we start from its actual head.
>
> *That single "is v-1 here?" check* is what cuts the work. Each value is the "head" of at most one run, and the head walks each value exactly once. So the total work across the whole scan is O(n).
>
> **Time:** O(n). **Space:** O(n) for the set.
>
> **The trap.** Forgetting the "is v-1 here?" gate. Without it, you re-walk overlapping runs and silently re-collapse to O(n²). (...) Also — duplicates. The HashSet kills them for free. If you use an unordered_multiset by accident, your run counts double-count.
>
> ▸ to problem 9

---

# Section 2 of 10 — Two Pointers & Sliding Window  *(problems 9–14)*

Six problems, one mental model: *use two indices that move with rules, not nested loops*. Once you internalise it, "longest substring with X" and "smallest subarray with Y" stop feeling scary.

---

## P-9 — Valid Palindrome  *(~5 min)*

> Valid Palindrome. (...) A string. Ignore non-alphanumeric. Case-insensitive. Is it a palindrome?
>
> **Brute force.** Build a cleaned copy — only letters and digits, all lowercase. Compare it to its reverse. (...) O(n) time. O(n) space. *Three lines in Python.* Fine answer. Many interviewers accept it.
>
> **Optimal — two pointers, no extra string.** Two pointers `l = 0`, `r = n - 1`. (...) Loop while `l < r`: skip non-alphanumerics on both sides, lowercase-compare, return false on a mismatch, else move both inward. (...) O(n) time. *O(1) space.* This is the version that earns the offer.
>
> **The trap.** (...) Forgetting that the skip loops can run `l` past `r`. Guard with `while (l < r && !isAlnum(s[l])) l++;` — *both* conditions on the inner while. Otherwise you'll dereference past the end on edge cases like `",,,"`.
>
> ▸ to problem 10

---

## P-10 — 3Sum  *(~9 min)*

> 3Sum. (...) Find *all unique* triplets `(a, b, c)` from the array with `a + b + c == 0`.
>
> Two pieces matter equally: *finding* the triplets, and *deduping* them. Most candidates handle one and trip on the other.
>
> **Brute force.** Three nested loops. Then a HashSet to dedupe the triplets after sorting each. O(n³). Skip.
>
> **Better — fix one, 2-Sum the rest.** Outer loop picks `a`. Inner solves 2-Sum on the remaining array for target `-a` using a HashMap. (...) O(n²) time, O(n) space for the inner map. Works, but deduping is fiddly.
>
> **Optimal — sort + two pointers.** (...) *Sort the array first.* Now duplicates sit next to each other, which makes deduping trivial. (...) Outer loop `i` from 0 to n-3. *Skip if `nums[i] == nums[i-1]`* — that's our first dedupe gate. Set two pointers `l = i + 1`, `r = n - 1`. (...) Sum the three. If sum is too small, move `l` right. Too big, move `r` left. Just right — record the triplet, then *advance both `l` and `r` past their duplicates* — that's the second dedupe gate.
>
> Time O(n²). Space O(1) extra (output excluded).
>
> *Walk through `[-1, 0, 1, 2, -1, -4]`* on screen. Sort to `[-4, -1, -1, 0, 1, 2]`. i=0, a=-4 — no pair sums to 4 in the rest. i=1, a=-1, l=2, r=5 — l points at -1, r at 2 — sum is 0, record `[-1, -1, 2]`. Advance, advance — now l at 3, r at 4 — sum is 0 again, record `[-1, 0, 1]`. (...) That's it.
>
> **The trap.** Two dedupe gates. People remember the outer one and forget the inner one — then they spam `[-1, 0, 1]` multiple times when the array has multiple zeros. (...) Also: *the sort matters.* Without it, the two-pointer move-direction logic doesn't work.
>
> ▸ to problem 11

---

## P-11 — Container With Most Water  *(~7 min)*

> Container With Most Water. (...) Each value is a vertical wall. Pick two walls, the water between them is `min(left, right) * (right - left)`. Maximise it.
>
> **Brute force.** Try every pair. O(n²). State it, move on.
>
> **Optimal — two pointers shrinking inward.** (...) Set `l = 0`, `r = n - 1`. Compute area, track the max. Now *which pointer do we move?* (...) Here's the insight. The width strictly *decreases* every step. So to have a hope of beating the current area, we need the height to *increase*. The height is `min(h[l], h[r])`. (...) Moving the *taller* wall inward — the `min` is still capped by the shorter one. We *cannot* do better. Moving the *shorter* wall inward might find a taller new wall, which *might* help. (...) So: always move the shorter side.
>
> Time O(n). Space O(1).
>
> *That argument matters more than the code.* If you can articulate "moving the taller wall can never improve area" out loud, the interviewer mentally checks the box for "this candidate proves correctness, not guesses".
>
> **The trap.** Ties — when `h[l] == h[r]`, *either* pointer can move. Pick one and document it; don't loop forever.
>
> ▸ to problem 12

---

## P-12 — Trapping Rain Water  *(~10 min)*

> Trapping Rain Water. (...) Classic hard problem. Heights array. After rain, how much water is trapped?
>
> Picture the histogram. At each index `i`, the water sitting on top equals `min(tallestToTheLeft, tallestToTheRight) - height[i]` — and if that's negative, it's zero.
>
> **Brute force.** For each `i`, scan left to find max, scan right to find max. O(n²). The right answer, but quadratic.
>
> **Better — prefix arrays.** Pre-compute `leftMax[i]` and `rightMax[i]` in two linear passes. Then a third pass to sum the water. (...) O(n) time, O(n) extra space. *Cleanest answer to write.* Many interviewers accept this.
>
> **Optimal — two pointers, O(1) space.** (...) The clever observation: at any moment, if my `leftMax` is *smaller* than my `rightMax`, then the water above the left pointer's cell is bounded by `leftMax` — I don't need to know the exact rightMax. I just need to know it's bigger, which I already do. So I can safely compute the water at the left pointer and advance it.
>
> Pseudocode. `l = 0, r = n-1, leftMax = rightMax = 0, water = 0`. Loop while `l < r`. If `height[l] < height[r]`: update `leftMax = max(leftMax, height[l])`; add `leftMax - height[l]` to `water`; `l++`. Else mirror with the right side. (...) Time O(n). Space O(1).
>
> *Why does this work?* Because we always move the side with the *smaller* current height, and that side's water is provably bounded by its own running max — the other side is taller, *period*.
>
> **The trap.** People forget to update `leftMax` / `rightMax` *before* computing the water. If you compute water first, you'll underflow into negative on the first cell. *Max first, then water.*
>
> ▸ to problem 13

---

## P-13 — Longest Substring Without Repeating Characters  *(~8 min)*

> Longest Substring Without Repeating Characters. (...) Given a string, find the longest contiguous substring with all distinct characters.
>
> **Brute force.** Enumerate every substring, check uniqueness with a HashSet. O(n³). Skip.
>
> **Better — classic sliding window.** Two pointers `l = 0`, `r = 0`. A HashSet of characters currently in the window. (...) Move `r` right. If `s[r]` is new, add it, update max length, advance r. If `s[r]` is a duplicate — *shrink from the left* one character at a time, removing each from the set, until the duplicate is gone. Then add `s[r]` and continue.
>
> Time O(n) — every character is added and removed at most once. Space O(min(n, alphabet)).
>
> **Optimal — window with last-seen index map.** (...) The shrinking loop in the better version is wasteful. We *know exactly* where the previous occurrence of `s[r]` was. We can jump `l` directly to one past that position. (...) HashMap of `char -> last index seen`. As you walk `r`: if `s[r]` is in the map *and* `lastSeen[s[r]] >= l`, set `l = lastSeen[s[r]] + 1`. Then update `lastSeen[s[r]] = r`. Then `maxLen = max(maxLen, r - l + 1)`. *Single pass. No shrink loop.*
>
> Same O(n) time on paper, but the constant factor is meaningfully better, and the *code* is shorter.
>
> **The trap.** Forgetting the `lastSeen[s[r]] >= l` guard. Without it, you'd jump `l` backwards on characters whose previous occurrence was already outside the window. (...) Try `"abba"` mentally — at index 3, you see `'a'` whose last-seen is 0, but `l` is already at 2. *Don't jump backwards.*
>
> ▸ to problem 14

---

## P-14 — Minimum Window Substring  *(~10 min)*

> Minimum Window Substring. (...) Two strings `s` and `t`. Find the *smallest* substring of `s` that contains *every character of t including duplicates*. If none, empty string.
>
> Hard problem. Worth the 10 minutes.
>
> **Brute force.** Try every (l, r) substring, check the window contains `t`. O(n² · k). *Too slow* on the upper-bound constraints.
>
> **Optimal — sliding window with a "have / need" counter.** (...) Two things to track: a *need map* of `char -> required count`, built from `t`. A *have map* of the same shape for the current window. (...) And — *this is the trick* — a single counter called `formed`, which is the number of *unique characters* whose count in `have` has reached the count in `need`. The window is "valid" iff `formed == required` where `required = need.size()`. *That's an O(1) check* — no map comparison.
>
> *Walk through.* Expand `r` rightward, adding characters to `have`. Whenever a character in `t` hits its required count, increment `formed`. (...) When `formed == required`, try to shrink from the left: record window length, then remove `s[l]` from `have`, decrement `formed` if that drops a character below its required count, and `l++`. (...) Keep going until `formed` falls below `required`, then expand `r` again.
>
> Time O(n + k). Space O(k).
>
> *Walk a small example* like `s = "ADOBECODEBANC"`, `t = "ABC"`. Required = 3. Window expands until "ADOBEC" — that's all three letters, formed=3. Try to shrink — drop A, formed drops to 2, expand again. Eventually we land on "BANC" of length 4 — the answer.
>
> **The trap.** Two. (...) One — forgetting that *t* itself can have duplicates. `t = "AABC"` needs *two* A's in the window, not one. (...) Two — using `have == need` as the validity check. That's O(k) per step and kills your runtime on long inputs. The `formed` counter exists for exactly this reason.
>
> ▸ to problem 15

---

# Section 3 of 10 — Stack  *(problems 15–17)*

Three problems. The first warms you up. The second adds a constraint. The third introduces *monotonic stacks*, one of the most reused patterns in hard interviews.

---

## P-15 — Valid Parentheses  *(~5 min)*

> Valid Parentheses. (...) A string of `()[]{}`. Return true iff every bracket is properly closed in the right order.
>
> **Brute force.** Repeatedly find and remove `"()"`, `"[]"`, `"{}"`. Empty string at the end = valid. O(n²). State it, move on.
>
> **Optimal — stack.** Walk the string. If `c` is an opening bracket — *push* it. If it's a closing bracket — *pop* the stack and check that the popped opener matches. If the stack was empty before the pop, fail immediately. (...) At the end of the string, the stack must be empty. (...) O(n) time. O(n) space.
>
> *Two clean ways to do the "match" check.* Either a HashMap from closer to opener (`')' -> '('`), or a 6-line switch. The map is shorter and reads nicer.
>
> **The trap.** Forgetting to check stack empty at the end. `"(((("` will pass the per-character logic — never tries to pop — but it's invalid. *Always finish with `return stack.empty();`*.
>
> ▸ to problem 16

---

## P-16 — Min Stack  *(~6 min)*

> Min Stack. (...) Design a stack with `push`, `pop`, `top`, and `getMin` — all in *O(1)*.
>
> **Brute force.** Plain stack. `getMin` scans the whole thing. (...) push/pop are O(1), but getMin is O(n). *Fail the spec.*
>
> **Better — parallel min-stack.** Two stacks. The main one stores values. A second one stores the *current minimum* at every depth. On push, append `min(currentMin, newVal)` to the second. On pop, pop both. `getMin` reads the top of the second. (...) O(1) everything. *Easy to write. Easy to explain.*
>
> **Optimal — single stack of pairs.** (...) Same idea, fewer allocations. Push `(value, runningMin)` onto one stack. `getMin` reads the second element of the top pair. (...) Same asymptotic complexity, one less data structure. Pick this if the interviewer pushes for less memory.
>
> **The trap.** Comparing `currentMin` with the *value being popped*. The current min lives *with* the element — it's not derived from "the element below". If you try to maintain a single int `min` and re-derive on pop, you're back to O(n). *The min must travel with each push.*
>
> ▸ to problem 17

---

## P-17 — Daily Temperatures  *(~7 min)*

> Daily Temperatures. (...) For each day, how many days until a warmer temperature? Zero if no warmer day ever comes.
>
> **Brute force.** For each `i`, walk forward until you find `t[j] > t[i]`. Record `j - i`. O(n²). Acceptable on n = 100, brutal on n = 100,000.
>
> **Optimal — monotonic decreasing stack.** (...) Walk left to right. Maintain a stack of *indices* whose temperatures are strictly decreasing. (...) When we see a new day `i` with temperature *warmer* than the index on top of the stack — we've found the answer for *that* index. Pop it, record `result[poppedIdx] = i - poppedIdx`. Keep popping while the top is still colder than today's `t[i]`. Then push `i`. (...) At the end, anything still on the stack never found a warmer day — their result stays 0.
>
> Time O(n) — each index is pushed once and popped at most once. Space O(n).
>
> *Walk through* `[73, 74, 75, 71, 69, 72, 76, 73]`. Stack starts empty. i=0, push. i=1, 74 > 73, pop 0, result[0]=1, push 1. i=2, 75 > 74, pop 1, result[1]=1, push 2. i=3, 71 < 75, push 3. i=4, 69 < 71, push 4. i=5, 72 > 69 and > 71 — pop 4, result[4]=1, pop 3, result[3]=2, push 5. And so on.
>
> *Once this pattern clicks, it solves "Next Greater Element", "Largest Rectangle in Histogram", "Stock Span" — same template.*
>
> **The trap.** Storing temperatures on the stack instead of indices. You need the index to compute the distance. *Store indices, look up temperatures via the original array.*
>
> ▸ to problem 18

---

# Section 4 of 10 — Binary Search  *(problems 18–20)*

Three problems. One basic, one rotated, one of the hardest interview problems on Earth. *Binary search is rarely about searching a sorted array — it's about searching a monotonic answer space.*

---

## P-18 — Binary Search  *(~5 min)*

> Binary Search. (...) Sorted array, target. Return index or -1.
>
> The reason this problem is on the top-50 isn't its difficulty — it's the *template*. Get this right and you can replicate it on every binary-search problem.
>
> **Brute force.** Linear scan. O(n). Mention it, especially to highlight what we're improving.
>
> **Optimal — binary search.** Two pointers `l = 0`, `r = n - 1`. Loop while `l <= r`. Compute `mid = l + (r - l) / 2` — *not* `(l + r) / 2`, because that can overflow on huge inputs. (...) If `nums[mid] == target`, return mid. If `nums[mid] < target`, `l = mid + 1`. Else `r = mid - 1`. Return -1 after the loop.
>
> Time O(log n). Space O(1).
>
> **The trap.** Off-by-one. *Three* common ones. (...) `while (l < r)` instead of `<= ` — you'll miss the case where `l == r` is the answer. (...) `l = mid` instead of `mid + 1` — infinite loop. (...) `mid = (l + r) / 2` — overflow on `l = r = INT_MAX / 2 + 1`. (...) Memorise the template. *Don't re-derive in interviews.*
>
> ▸ to problem 19

---

## P-19 — Search in Rotated Sorted Array  *(~8 min)*

> Search in Rotated Sorted Array. (...) The array was sorted, then rotated at some unknown pivot. Find `target`. O(log n).
>
> The brute force here is O(n) linear scan — *but the problem demands O(log n)*. So skip it.
>
> **Better — find pivot, then standard binary search.** Two binary searches. First, find the index of the minimum element using the standard rotated-pivot search. Then binary-search the correct half. (...) O(log n) total, but two passes' worth of code.
>
> **Optimal — single binary search with a sort-side decision.** (...) Two pointers, mid as usual. *On each step,* one half of `[l, mid]` and `[mid, r]` is sorted, the other is not. (...) Compare `nums[l]` to `nums[mid]`. If `nums[l] <= nums[mid]`, the left half is sorted. Otherwise the right half is. (...) Now check: *is `target` in the sorted half's range?* If yes, search that half. Otherwise search the other half.
>
> *Walk through* `[4, 5, 6, 7, 0, 1, 2]`, target 0. l=0, r=6, mid=3. `nums[0]=4 <= nums[3]=7` — left is sorted, range [4, 7]. Target 0 is NOT in [4, 7] — so go right. `l=4, r=6`. mid=5. `nums[4]=0 <= nums[5]=1` — left sorted, range [0, 1]. Target 0 is in [0, 1] — go left. `l=4, r=4`. `nums[4] == 0` — return 4.
>
> Time O(log n). Space O(1).
>
> **The trap.** *Duplicates.* The classic problem assumes distinct values. If duplicates are allowed (LC 81), this algorithm degenerates to O(n) worst case, because `nums[l] == nums[mid]` becomes ambiguous about which half is sorted. *Read the problem.*
>
> ▸ to problem 20

---

## P-20 — Median of Two Sorted Arrays  *(~14 min)*

> Median of Two Sorted Arrays. (...) Two sorted arrays, lengths `m` and `n`. Return the median of the combined array. Required: O(log(min(m, n))).
>
> *Hardest problem on this list.* (...) Worth doing slowly and visually. Don't memorise — *understand*.
>
> **Brute force.** Merge into one sorted array. Pick the middle. O(m + n). *Works, but the problem explicitly asks for log time.*
>
> **Better — merge until the median.** Two-pointer merge, but stop at index `(m + n) / 2`. O(m + n) time, O(1) space. Still linear.
>
> **Optimal — binary search on the smaller array.** (...) The insight. We don't need the merged array. We just need to split *both* arrays into a "left half" and a "right half" such that all left-half elements (combined) are ≤ all right-half elements (combined), and the left half contains exactly `(m + n + 1) / 2` elements total. Then the median sits at the boundary.
>
> *Binary search the partition.* Pick `i` = how many elements of `nums1` go into the left half. Then `j = (m + n + 1) / 2 - i` for `nums2`. (...) Check four edge values: `A_left = nums1[i-1]`, `A_right = nums1[i]`, `B_left = nums2[j-1]`, `B_right = nums2[j]` (using ±∞ when an index is out of bounds). (...) If `A_left <= B_right` AND `B_left <= A_right` — we found the right partition. Return median from the four edges. (...) If `A_left > B_right`, our partition gave `nums1` too many elements on the left — `r = i - 1`. Else `l = i + 1`.
>
> *Always binary-search the smaller array.* Smaller means tighter log factor *and* it bounds `j` to be a valid index.
>
> Time O(log min(m, n)). Space O(1).
>
> **The trap.** The infinity sentinels. *Forget them and you'll index out of bounds on edge cases* like `nums1 = []` or `i == 0`. Use `Integer.MIN_VALUE` / `Integer.MAX_VALUE` (or `-inf` / `inf` in Python) to handle the borders cleanly.
>
> *This problem is the kind of question you'll be glad you saw before the interview, not during it.*
>
> ▸ to problem 21

---

# Section 5 of 10 — Linked List  *(problems 21–25)*

Five problems. The first three are warm-ups; #24 introduces *fast-slow pointers*; #25, LRU Cache, is the classic "combine two data structures" design problem.

---

## P-21 — Reverse Linked List  *(~6 min)*

> Reverse Linked List. (...) Singly-linked list. Reverse it. Return the new head.
>
> **Brute force.** Walk the list, push values to an array, build a new list from the array backwards. O(n) time, O(n) space, plus extra allocation. *Wasteful.*
>
> **Better — recursion.** `reverseList(head)`. If head or head.next is null, return head. Otherwise recurse on `head.next`, which gives us the new head. Then bend the current node's next: `head.next.next = head; head.next = null;`. Return new head. (...) O(n) time, O(n) stack space.
>
> **Optimal — iterative three-pointer flip.** (...) Three variables: `prev = null, curr = head, next = null`. Loop while `curr != null`. Save `next = curr.next`. Bend `curr.next = prev`. Slide `prev = curr; curr = next;`. At the end, `prev` is the new head.
>
> Time O(n). Space O(1).
>
> *Memorise this template.* It's the building block for "Reverse Nodes in K-Group", "Reorder List", "Palindrome Linked List" — every list-reversal problem uses this exact dance.
>
> **The trap.** Forgetting to save `next` *before* you bend `curr.next = prev`. If you skip the save, you've lost the rest of the list. *next first, then bend.*
>
> ▸ to problem 22

---

## P-22 — Linked List Cycle  *(~6 min)*

> Linked List Cycle. (...) Does the list have a cycle?
>
> **Brute force — hashing.** Walk the list. Insert each node *reference* (not value) into a HashSet. If you see a repeat — cycle. If you reach null — no cycle. (...) O(n) time, O(n) space.
>
> **Optimal — Floyd's tortoise and hare.** (...) Two pointers. `slow` moves 1 step per iteration. `fast` moves 2. If there's no cycle, `fast` (or `fast.next`) reaches null. If there is one, `fast` will *lap* `slow` from behind inside the cycle, and they'll meet.
>
> *Why does that work?* Once both pointers are inside the cycle, the gap between them shrinks by 1 every step (fast gains 1 net step on slow each iteration). So they must meet in at most `cycleLength` steps. (...) Time O(n). Space O(1).
>
> *Follow-up the interviewer might ask.* Find the *node where the cycle begins*. That's Floyd's full algorithm. (...) After they meet, reset slow to head, keep fast where it is, then move both one step at a time. They'll meet again *exactly at the cycle entry*. Math proof omitted but the result is gorgeous — and worth knowing.
>
> **The trap.** Initialising `fast = head.next`. Many tutorials do this. It works *but* the proof is messier and the cycle-entry follow-up needs a different formula. Start both pointers at `head` — cleaner reasoning.
>
> ▸ to problem 23

---

## P-23 — Merge Two Sorted Lists  *(~6 min)*

> Merge Two Sorted Lists. (...) Two sorted linked lists. Return a single sorted list, splicing nodes (no new node allocation).
>
> **Brute force.** Dump all values into a list, sort, build a new linked list. O((m+n) log(m+n)). Defeats the entire point of the input being sorted.
>
> **Optimal — dummy head + tail pointer.** (...) The dummy-head trick saves you a special case for the start. (...) `Dummy dummy(0); ListNode* tail = &dummy;`. (...) Loop while both lists are non-null. Compare heads. Splice the smaller one onto `tail.next`, advance that list, advance `tail`. (...) At the end, whichever list is still non-null — append its remaining tail in one step. (...) Return `dummy.next`.
>
> Time O(m + n). Space O(1).
>
> *Why dummy head?* Without it, the first iteration has to special-case "is the result list empty yet?". The dummy is a sentinel that's discarded at the end. (...) *Use this trick on every list-building problem.*
>
> **The trap.** Forgetting to append the leftover tail. After the while loop, *one* of the two lists is non-null and is already sorted — just point `tail.next` at it. Skip this and you'll truncate the result.
>
> ▸ to problem 24

---

## P-24 — Remove Nth Node From End  *(~7 min)*

> Remove Nth Node From End. (...) Remove the n-th node *from the end* of a singly linked list.
>
> **Brute force — two passes.** First pass: count length L. Second pass: walk to position `L - n - 1`, splice. (...) O(n) time. Two passes.
>
> **Optimal — one pass with two pointers.** (...) Dummy head pointing to head — saves the "delete head" edge case. (...) Two pointers, both starting at dummy. *Advance `fast` n+1 steps.* Now there's a gap of exactly n+1 between them. (...) Walk both pointers together until `fast` becomes null. At that point, `slow` sits *just before* the node to remove. (...) Splice: `slow.next = slow.next.next;`. Return `dummy.next`.
>
> Time O(n). Space O(1). Single pass.
>
> *Why `n+1` and not `n`?* Because we want `slow` to land on the *predecessor* of the node-to-remove so we can do the splice. The extra step of separation buys us that.
>
> **The trap.** Removing the head. Without the dummy head, you'd need an `if (slow == head) head = head.next;` special case. The dummy makes the code symmetric — head is just another node. *Always reach for the dummy on linked-list splice problems.*
>
> ▸ to problem 25

---

## P-25 — LRU Cache  *(~12 min)*

> LRU Cache. (...) Design a cache with O(1) `get` and `put`. Capacity-bounded. On overflow, evict the *least recently used* entry.
>
> The textbook "two data structures, glued together" interview problem. Worth full attention.
>
> **Brute force.** Array of `(key, value, lastUsedTimestamp)`. Get scans, updates timestamp. Put scans for the key; on overflow, scans for the min timestamp. (...) O(n) per operation. *Fails the spec.*
>
> **Better — language-provided ordered map.** Java's `LinkedHashMap` (with `accessOrder = true`) or Python's `OrderedDict` does exactly what we want. Move-to-end on access. Pop-from-front on overflow. (...) O(1) per operation. *Acceptable* in an interview if you can describe what's happening under the hood — but most interviewers will ask you to build it yourself.
>
> **Optimal — HashMap + doubly linked list.** (...) HashMap: `key -> node`. Doubly linked list: ordered by recency, *head = most recent, tail = least recent*. Both structures share the same nodes — they're two views of the same data. (...) On `get(key)`: HashMap finds the node in O(1). Unlink it from its current position. Move it to the head. Return the value. (...) On `put(key, value)`: if exists, update value and move-to-head. Else, allocate a new node, add at head, insert in map. If size exceeds capacity, remove the *tail* — both from the list and from the map.
>
> *The doubly linked list is the only structure where you can `unlink` a node in O(1) given a pointer to it.* That's why we don't use a singly linked list. (...) The two operations — `addToHead(node)` and `remove(node)` — are five lines each.
>
> Time: O(1) per op. Space: O(capacity).
>
> *Use a dummy head and dummy tail* — same trick as #24. The list is never empty, the splice code never special-cases.
>
> **The trap.** Forgetting to remove the evicted node *from the HashMap* when you pop the tail. *Both* structures must stay in sync. The map will silently leak otherwise.
>
> ▸ to problem 26

---

# Section 6 of 10 — Trees  *(problems 26–31)*

Six tree problems. Every one of them follows one of three templates: recursive DFS, BFS with a queue, or BST-aware "use the order". Master those three and 95% of tree questions fall.

---

## P-26 — Invert Binary Tree  *(~5 min)*

> Invert Binary Tree. (...) Mirror image. Left becomes right and vice versa, at every level.
>
> Made famous by Max Howell's "Google rejected me for not being able to invert a binary tree on a whiteboard" tweet. Don't be Max.
>
> **BFS approach.** Level-order traversal with a queue. For every node dequeued, swap its left and right children, enqueue both. (...) O(n) time, O(n) space.
>
> **Optimal — DFS recursion.** Three lines. (...) If node is null, return null. Swap left and right. Recursively invert each subtree. Return node. (...) O(n) time, O(h) call-stack space.
>
> *Why is this on the list?* Because it's the simplest possible "every-node DFS template" — and every tree problem from here on out uses some variation. Internalise the rhythm: *base case, do something with the node, recurse on children*.
>
> **The trap.** Recursing *before* the swap and using the recursed values. The recursion mutates the children — if you save references in the wrong order, you'll un-invert what you just inverted. Easiest fix: swap pointers first, *then* recurse.
>
> ▸ to problem 27

---

## P-27 — Maximum Depth of Binary Tree  *(~4 min)*

> Maximum Depth. (...) Longest root-to-leaf path. Number of nodes.
>
> **BFS.** Queue, level by level. Increment depth at each level boundary. O(n) time, O(n) space.
>
> **Optimal — DFS one-liner.** `return node == null ? 0 : 1 + max(depth(left), depth(right));`. O(n) time, O(h) stack.
>
> *Why both?* Because the *BFS variant* is the template for "level order traversal", "right side view", "rightmost node at each level" — all of which show up in interviews. And the *DFS variant* is the template for "diameter", "balanced tree", "max path sum". One problem, two reusable templates.
>
> **The trap.** Conflating *height* with *depth*. Height of a node is the longest path to a leaf below it. Depth of a node is the distance from the root. *Max depth of the tree* = height of the root. Same number, different vocabulary — read the problem carefully.
>
> ▸ to problem 28

---

## P-28 — Same Tree  *(~5 min)*

> Same Tree. (...) Two binary trees. Are they identical in *both structure and values*?
>
> **Serialize approach.** Serialize both trees with explicit nulls — `"1,2,null,null,3,null,null"` — and compare the strings. O(n) time, O(n) space. *Hack-y but works.*
>
> **Optimal — synchronous DFS.** (...) Three cases. (...) Both null → true. (...) Exactly one null → false. (...) Both non-null → values equal AND recurse on left pair AND recurse on right pair.
>
> O(n) time. O(h) stack.
>
> **The trap.** Comparing only values without comparing structure. `{1, 2}` and `{1, null, 2}` are *not* the same tree — one has the 2 on the left, the other on the right. The "exactly one null" check handles this — *do not skip it*.
>
> ▸ to problem 29

---

## P-29 — Binary Tree Level Order Traversal  *(~6 min)*

> Level Order Traversal. (...) Return a list of lists — each inner list is the node values at that level, top to bottom.
>
> **DFS approach.** Recurse with a `depth` parameter. Append `node.val` to `result[depth]`, creating the list if it doesn't exist. (...) O(n) time, O(h) stack. Cute, but the BFS version is the canonical interview answer.
>
> **Optimal — BFS with level snapshotting.** (...) Queue, starting with root. (...) Outer loop while queue isn't empty: take a *snapshot* of `queue.size()` — call it `levelSize` — and pop exactly that many nodes for this level. Append their values to a new sub-list. Enqueue their children. Push the sub-list into the result. (...) O(n) time, O(n) space.
>
> *That `levelSize` snapshot is the trick.* Without it, your loop can't tell where one level ends and the next begins.
>
> *Variants you should also know.* Zigzag (alternate left-to-right and right-to-left per level — reverse the sub-list on odd levels). Right side view (last element of each level). Bottom-up (just reverse the result at the end). All built on this same template.
>
> **The trap.** Looping `for (Node n : queue)` instead of using the snapshot — that *iterates* the queue instead of *consuming* it, and children added during the loop will get processed in this level. Always: `int size = queue.size(); for (int i = 0; i < size; i++) ...`.
>
> ▸ to problem 30

---

## P-30 — Validate Binary Search Tree  *(~8 min)*

> Validate Binary Search Tree. (...) A BST means: for every node, all values in the left subtree are strictly less, all in the right are strictly greater.
>
> *The naive trap.* Many candidates check `node.left.val < node.val < node.right.val`. **Wrong.** That only checks immediate children. The constraint applies to the *entire* subtree. (...) Take a tree: root 5, left 1, right 4 — wait, 4's right subtree contains 6 which is greater than root 5? Then 6 ends up on the wrong side of 5 — invalid BST. But local checks pass. *Subtle.*
>
> **Brute force.** For every node, scan its full left subtree for any value ≥ node and full right subtree for any value ≤ node. O(n²) time, O(h) stack. *Correct*, but slow.
>
> **Better — inorder traversal.** A valid BST has a strictly increasing inorder traversal. So: inorder-traverse, save values into a list, check the list is strictly increasing. O(n) time, O(n) space. *Works.*
>
> **Optimal — range-passing DFS.** (...) Recurse with a `(min, max)` window. Initial call: `(null, null)` meaning unbounded. For each node, check `node.val > min` and `node.val < max`. Recurse left with `(min, node.val)` — tighter upper bound. Recurse right with `(node.val, max)` — tighter lower bound. (...) O(n) time. O(h) stack.
>
> *This pattern — "pass a constraint down recursively"* — appears in many tree problems. Worth internalising.
>
> **The trap.** Using `int` instead of `long` for min/max bounds. The problem allows nodes with `Integer.MIN_VALUE` or `MAX_VALUE`. Comparing those with `int` bounds breaks at the edges. *Use `long` or nullable Integer in Java; use `float('inf')` in Python.*
>
> ▸ to problem 31

---

## P-31 — Lowest Common Ancestor of a BST  *(~6 min)*

> LCA of a BST. (...) Two nodes p and q. Return their lowest common ancestor.
>
> The general-tree version of this requires a recursion that returns triple values — but BSTs let us cheat *hard* using the ordering.
>
> **Brute force — path comparison.** Find the root-to-p path. Find the root-to-q path. Walk both — last common node is the LCA. (...) O(n) time, O(n) space.
>
> **Optimal — BST property walk.** (...) Walk from the root. If both p.val and q.val are less than node.val → both nodes are in the left subtree → go left. If both are greater → go right. *Otherwise* (one's on each side, or one of them IS the node) — *this is the split point*, return it. (...) O(h) time. O(1) iterative.
>
> *Why this works.* In a BST, the LCA is the first node where p and q diverge. As we descend, the moment p and q are on different sides (or one equals the current node), we've found it.
>
> **The trap.** Assuming p < q. Don't. Use both comparisons explicitly: `if (p.val < node.val && q.val < node.val)` — *both* — go left. Same for right. The "else" handles the split case correctly regardless of which is bigger.
>
> ▸ to problem 32

---

# Section 7 of 10 — Tries & Heap  *(problems 32–34)*

Two specialised data structures, three problems. Tries unlock prefix-search and autocomplete. Heaps unlock "top-k" and "running median" — both interview staples.

---

## P-32 — Implement Trie  *(~8 min)*

> Implement Trie. (...) Insert, search, startsWith — all on a prefix tree.
>
> **Brute force — HashSet.** Store all inserted words. `search(word)` is O(1). `startsWith(prefix)` requires scanning every stored word — O(N · k). *Defeats the purpose.*
>
> **Optimal — trie nodes.** Each node has 26 child slots (or a HashMap of `char -> child`) and an `isWord` flag. (...) `insert(word)`: walk from root, character by character. If a child doesn't exist, create it. After the last char, set `isWord = true`. (...) `search(word)`: walk; if any child is missing, return false. After the last char, return `isWord`. (...) `startsWith(prefix)`: same as search but ignore `isWord` — just check the path exists.
>
> Time O(k) per operation, where k = word length. Space O(N · k).
>
> *The `isWord` flag is the key.* Without it, you can't distinguish "the word `apple` was inserted" from "the path `app` exists because `apple` was inserted". Search needs both pieces of info.
>
> **The trap.** Using a static 26-slot array when the alphabet might be Unicode. *Use a HashMap*. The constants are bigger but you don't blow up on emoji input.
>
> *Trie is the backbone of:* word search II, autocomplete, IP routing tables, T9 keypad — keep it warm.
>
> ▸ to problem 33

---

## P-33 — Kth Largest Element in an Array  *(~7 min)*

> Kth Largest. (...) Find the k-th *largest* element. (1-indexed from the end.)
>
> **Brute force.** Sort descending, return `nums[k-1]`. O(n log n). *Acceptable* in most interviews — but if they push for "can you do better?", say yes.
>
> **Better — min-heap of size k.** Walk the array. Push each element. Whenever the heap grows past size k, pop. (...) At the end, the heap holds the k largest elements; its top (the min of those k) is the k-th largest. (...) O(n log k) time, O(k) space.
>
> **Optimal — Quickselect.** (...) Variation of quicksort. Pick a pivot. Partition the array — elements ≥ pivot on the left, < on the right (or however your convention runs). After partitioning, the pivot sits at some index `p`. If `p == k-1` (0-indexed), we're done. If `p < k-1`, recurse on the right half. Otherwise recurse on the left. (...) **Crucially, we only recurse into one side.** That's why average time drops to O(n).
>
> Worst case O(n²) on adversarial pivots — randomise the pivot to make worst case essentially never happen.
>
> **The trap.** Off-by-one on "k-th largest". If your partition puts *bigger* elements on the left, the answer sits at index `k-1`. If smaller on the left, at index `n-k`. *Pick one convention, stick to it for the whole function.*
>
> ▸ to problem 34

---

## P-34 — Find Median from Data Stream  *(~10 min)*

> Find Median from Data Stream. (...) Two ops. `addNum(int)` and `findMedian()`. Both should be fast — addNum better than O(n), findMedian O(1) ideally.
>
> **Brute force.** Append to a list. `findMedian` sorts and picks the middle. O(n log n) per median. *Murder on long streams.*
>
> **Better — keep the list sorted.** Insert in O(n) via binary search and shift. Median lookup is O(1). (...) Add is still linear — that's the bottleneck.
>
> **Optimal — two heaps.** (...) Split the data into a *lower half* and an *upper half*. The lower half is a *max-heap* — its top is the largest of the small numbers. The upper half is a *min-heap* — its top is the smallest of the big numbers. (...) Keep the sizes balanced (within 1 of each other). (...) Median is then: if sizes equal, average the two heap tops. If sizes differ by one, the median is the top of the larger heap.
>
> *Add operation.* Push into one heap (typically lower), then *peel the max off lower and push to upper* to maintain order. If upper is now bigger than lower by more than one, push its min back to lower. (...) O(log n) per add.
>
> findMedian — O(1). Just peek.
>
> *Walk it through* with a stream: 1, 2, 3, 4, 5. After 1: lower=[1], upper=[], median=1. After 2: lower=[1], upper=[2], median=1.5. After 3: lower=[1, ...] wait — depends on the rebalance rules. *Walk it slowly on screen.*
>
> **The trap.** Forgetting the cross-heap rebalance. After pushing to lower, you *must* move its max to upper, even if it ends up in upper for one step. Otherwise the heaps drift out of order, and your median becomes garbage.
>
> ▸ to problem 35

---

# Section 8 of 10 — Backtracking  *(problems 35–37)*

Three problems, one mental model: a decision tree where you *try, recurse, undo*. Most candidates skip these and bomb the interview round that includes one. Don't be that candidate.

---

## P-35 — Subsets  *(~7 min)*

> Subsets. (...) Generate the power set: every subset of the input array.
>
> **Bitmask approach.** Enumerate every integer from 0 to 2^n - 1. For each, include `nums[i]` when bit i is set. (...) O(n · 2^n) total. *Crisp, no recursion.* Works great when n ≤ 20.
>
> **Iterative.** Start with `result = [[]]`. For each element, double the result by appending the element to every existing subset. (...) Same O(n · 2^n).
>
> **Optimal — backtracking template.** (...) The version you *must* know, because it generalises to every other backtracking problem. (...) Recurse with `(start_index, current_subset)`. *At each call, record a copy of `current_subset`* — that's a valid subset on its own. Then loop `i` from start_index to n-1: append `nums[i]`, recurse with `i + 1`, pop. (...) The pop is the *undo*. Without it, your current_subset keeps growing forever.
>
> Time O(n · 2^n). Space O(n) recursion depth.
>
> *Drill the template.* Memorise the *try / recurse / undo* rhythm. (...) Subsets, permutations, combination sum, palindrome partitioning, generate parentheses, N-Queens — same skeleton, different constraint.
>
> **The trap.** Pushing the *reference* to `current_subset` into `result` instead of a *copy*. In Java, `result.add(new ArrayList<>(current));`. In Python, `result.append(current[:])`. (...) Forget the copy and your final result is filled with references to one perpetually-mutating object — usually ends up as N copies of the empty list.
>
> ▸ to problem 36

---

## P-36 — Combination Sum  *(~7 min)*

> Combination Sum. (...) Candidates array, target. Find all *unique* combinations summing to target. Each candidate can be used *any number of times*. Combinations differing only in order count as the same.
>
> **Brute force.** Generate every subset (with repeats), sum it, keep matches. Exponential and full of duplicates.
>
> **Optimal — backtracking with a `start` index.** (...) Recurse with `(start_index, current_combination, remaining_target)`. (...) Base case: if remaining == 0 — record a copy. If remaining < 0 — return (prune). (...) Loop `i` from `start_index` to n-1: append `candidates[i]`, recurse with `i` (*not i+1* — because we can reuse this candidate), subtract `candidates[i]` from remaining, then pop.
>
> *That single change — `i` instead of `i+1` in the recursive call* — is what allows reuse of the same candidate.
>
> Time O(2^target). Space O(target).
>
> *Variant Combination Sum II* (each candidate once): change `i` back to `i + 1`, *and* sort the candidates first plus skip duplicates at the same recursion depth: `if (i > start && candidates[i] == candidates[i-1]) continue;`. Same template, two adjustments.
>
> **The trap.** Forgetting the `start_index` and instead looping from 0 each call. Then you generate `[2, 3]` *and* `[3, 2]` — and they're the "same" per the problem, but you've now produced duplicates that need a HashSet to filter. The `start_index` enforces order intrinsically.
>
> ▸ to problem 37

---

## P-37 — N-Queens  *(~10 min)*

> N-Queens. (...) Place n queens on an n×n board so none attack each other. Return all distinct solutions as board strings.
>
> **Brute force.** Generate every placement of n queens, validate each. C(n², n) — astronomical even for n = 10. Skip.
>
> **Optimal — row-by-row backtracking with attack sets.** (...) Place exactly one queen per row. So the only thing to decide is the *column* for each row. (...) Track three sets: `cols` (used columns), `posDiag` (used positive diagonals — where `r + c` is constant), `negDiag` (used negative diagonals — where `r - c` is constant). (...) For row r, loop c from 0 to n-1. If `c in cols` or `r+c in posDiag` or `r-c in negDiag` — skip. Else place: add to all three sets, recurse on row r+1, then undo all three on the way back.
>
> Time O(n!). Space O(n) for the sets, plus O(n) recursion.
>
> *The diagonal trick is the magic.* Each `/` diagonal has constant `r + c`. Each `\` diagonal has constant `r - c`. O(1) lookup. Compare with the brute approach of scanning the whole row, column, and both diagonals for an existing queen — that's O(n) per check, O(n²) per placement. The set trick drops it to O(1).
>
> **The trap.** Forgetting to *undo all three sets* on backtrack. If you forget even one, the next branch sees phantom queens that aren't there.
>
> ▸ to problem 38

---

# Section 9 of 10 — Graphs  *(problems 38–42)*

Five graph problems. Two are flood-fill (grid as implicit graph). Two introduce *real* graphs with cycle detection. The last is bidirectional BFS — the hardest of the section.

---

## P-38 — Number of Islands  *(~7 min)*

> Number of Islands. (...) Grid of `1`s and `0`s. Count connected components of `1`s. 4-directional adjacency.
>
> **DSU approach.** Treat each land cell as a node. Union it with its already-seen land neighbours (up and left, since we scan top-left to bottom-right). Final answer = number of distinct roots. (...) O(m·n · α) time, O(m·n) space.
>
> **Optimal — DFS or BFS flood fill.** (...) Scan the grid. Every time you hit a `1`, increment the island count and *flood-fill* the entire connected component to `0` so we never re-count it. (...) The flood-fill is DFS recursion or BFS queue — either works. (...) Time O(m · n) — each cell visited once. Space O(m · n) worst case for the call stack.
>
> *Coding tip.* Mark the cell as `0` (or `'#'` or a separate visited matrix) the moment you enter it, *before* recursing on neighbours. Otherwise the same cell gets queued from multiple directions and you re-process it.
>
> **The trap.** Diagonal neighbours. The problem says 4-directional unless it says 8. *Read it.* The same problem with 8-directional adjacency is a different question (LC 200 is 4-dir; LC 695 max area is 4-dir; LC 1568 is more complex).
>
> ▸ to problem 39

---

## P-39 — Clone Graph  *(~7 min)*

> Clone Graph. (...) Given a node in an undirected connected graph, return a deep copy.
>
> **Two-pass DFS.** Pass 1: DFS the original; for each node, allocate a clone with the same val. Store `original -> clone` in a HashMap. Pass 2: DFS again; for each original, set `clone.neighbours = [map[n] for n in original.neighbours]`. (...) O(V + E) time and space. *Easy to explain.*
>
> **Optimal — one-pass DFS with the map as a "visited" guard.** (...) HashMap of `original -> clone`. Recurse on a node: if it's already in the map, return the existing clone. Otherwise allocate a new clone, *put it in the map immediately*, then recurse on each neighbour and append the recursed clones to `clone.neighbours`. (...) The early `map.put` is critical — it prevents infinite loops on cycles.
>
> Time O(V + E). Space O(V).
>
> *BFS variant.* Same idea with a queue. Initial node enqueued; clone allocated and mapped. Pop a node; if its neighbours aren't in the map, allocate their clones and enqueue. Append the mapped clones to `clone.neighbours`. (...) Both variants are common in interviews.
>
> **The trap.** Forgetting to seed the map with the starting node's clone *before* recursing. The cycle through the starting node will revisit it and allocate a duplicate clone.
>
> ▸ to problem 40

---

## P-40 — Course Schedule  *(~9 min)*

> Course Schedule. (...) `numCourses` courses and a list of prerequisite pairs. Can you finish all of them? *Equivalent* problem: is the prereq graph acyclic?
>
> **Brute force.** For each course, DFS the prereq chain looking for revisits along the current path. O(V² + E). Slow.
>
> **Better — DFS with three colours.** (...) WHITE (unvisited), GRAY (in current DFS path), BLACK (fully processed). (...) DFS from each WHITE node. Mark it GRAY. Recurse on neighbours: if neighbour is GRAY → cycle → return false. If WHITE → recurse. If BLACK → skip. After recursion, mark BLACK. (...) O(V + E).
>
> **Optimal — Kahn BFS, a.k.a. topological sort.** (...) Compute every node's in-degree. Enqueue every node with in-degree 0. Process the queue: pop, increment a `processed` counter, decrement in-degree of each neighbour, enqueue any neighbour whose in-degree hit 0. (...) At the end, `processed == numCourses` iff no cycle.
>
> Time O(V + E). Space O(V + E).
>
> *Why is Kahn often preferred?* It's iterative — no stack overflow on 100,000-node graphs. And it naturally returns the topological order, which is what Course Schedule II asks for.
>
> **The trap.** Reading the prerequisite direction wrong. `[a, b]` usually means "to take `a`, you must take `b` first" — so the edge goes `b -> a`. Get that backwards and *every* topological order in your output is reversed.
>
> ▸ to problem 41

---

## P-41 — Pacific Atlantic Water Flow  *(~9 min)*

> Pacific Atlantic Water Flow. (...) Matrix of heights. Pacific borders top and left; Atlantic borders bottom and right. A cell drains into an ocean iff there's a non-increasing path to its border. Return the cells that drain into *both*.
>
> The trap is the *direction*. Water flows downhill, but if we BFS from every cell to see whether it reaches an ocean, we'll repeat work massively.
>
> **Brute force.** From every cell, BFS twice — once trying to reach Pacific, once Atlantic. O((m·n)²). *Don't.*
>
> **Optimal — reverse the flow.** (...) Run two BFS/DFS sweeps. First from every Pacific-border cell, marking everything reachable *uphill* (i.e., neighbour height ≥ current height — that's the reverse of "water flows downhill"). Second from every Atlantic-border cell, same rule. (...) Cells marked by *both* sweeps are the answer.
>
> Time O(m · n). Space O(m · n).
>
> *Why the reversal?* Because we want to know which cells can reach the ocean, not which cells the ocean can reach physically. By starting from the ocean and going uphill, we mark exactly the cells whose downhill path leads back to that ocean.
>
> **The trap.** Comparing heights with strict less-than instead of less-than-or-equal. The problem allows water to flow to a *neighbour at the same height*. Reversed, that means we expand to neighbours with height *greater than or equal to* current. *Get the equality right.*
>
> ▸ to problem 42

---

## P-42 — Word Ladder  *(~11 min)*

> Word Ladder. (...) Transform `beginWord` to `endWord` one letter at a time, every intermediate word must be in the dictionary. Return the *shortest* transformation length.
>
> Shortest path on an implicit graph. *BFS, not DFS.*
>
> **Brute force.** Pre-build the adjacency: compare every pair of words for "differ by exactly one char". O(N² · k). Then BFS from `beginWord`. (...) The N² adjacency build is the bottleneck.
>
> **Better — wildcard buckets.** (...) Build a HashMap of `pattern -> list<words>`. For each word, generate every "wildcard" by replacing one position with `*`: "hit" → "*it", "h*t", "hi*". Push the word into each pattern's bucket. (...) Now from any word, the neighbours are found in O(k) lookups instead of O(N) comparisons.
>
> BFS from `beginWord`. Each level represents one transformation. When we dequeue `endWord`, return the current level + 1.
>
> **Optimal — bidirectional BFS.** (...) Two frontiers — one growing from `beginWord`, one from `endWord`. At each step, expand the *smaller* frontier using the wildcard-bucket neighbours. (...) Stop when the two frontiers *meet* — i.e., the expansion of one frontier contains a word the other frontier already discovered. Total length is their depths combined plus 1.
>
> Time O(N · k²). Space O(N · k).
>
> *Why bidirectional?* Because BFS branching is exponential. Two BFS-es of depth d/2 each have far fewer nodes than one BFS of depth d. Roughly squares the speed-up.
>
> **The trap.** Bidirectional BFS is easy to bug. Use `Set<String>` for the frontiers (not a queue) so the "do these sets intersect" check is O(min size). And *always expand the smaller side* — that's where the gain comes from.
>
> ▸ to problem 43

---

# Section 10 of 10 — Dynamic Programming  *(problems 43–50)*

The big one. Eight problems. The first three teach 1-D DP. The next two teach 2-D DP. The last three are knapsack variants. Once you're comfortable here, you can attack 90% of "hard" interview problems on first sight.

---

## P-43 — Climbing Stairs  *(~5 min)*

> Climbing Stairs. (...) `n` steps. Each move climbs 1 or 2. How many ways to reach the top?
>
> The "hello world" of DP.
>
> **Brute force.** Recursion: `f(n) = f(n-1) + f(n-2)`, base cases f(1)=1, f(2)=2. Recomputes the same subproblems exponentially. O(2^n). Don't run it past n = 30.
>
> **Better — memoise.** Same recursion, but cache `f(n)` in an array. Each subproblem solved once. (...) O(n) time, O(n) space.
>
> **Optimal — rolling variables.** (...) We only need the previous two values. Two ints, one loop. (...) O(n) time, O(1) space.
>
> *That's Fibonacci with a costume.* Internalise it. (...) Variations: "min cost climbing stairs" (LC 746), "distinct ways with steps 1, 2, 3" (LC 70 generalised) — all use the same rolling-variable template.
>
> **The trap.** Off-by-one on the base case. `f(0)`, `f(1)`, `f(2)` — make sure your starts are correct. Pick *exactly one convention* and stick with it across the function.
>
> ▸ to problem 44

---

## P-44 — House Robber  *(~6 min)*

> House Robber. (...) Houses in a row, each with some money. You can't rob two adjacent houses. Maximise loot.
>
> **Brute force.** Two choices per house — rob or skip. 2^n leaves. *State it, kill it.*
>
> **Better — memoised recursion or bottom-up tabulation.** (...) `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`. Either rob house i (and take dp[i-2]) or skip it (and take dp[i-1]). (...) O(n) time, O(n) space.
>
> **Optimal — rolling two variables.** Same recurrence with `prev1, prev2`. (...) O(n) time, O(1) space.
>
> *The "two choices per element" framing* is the template for: House Robber II (circular, two passes), Delete and Earn (LC 740), Paint House (LC 256). Memorise the rhythm.
>
> **The trap.** Off-by-one when `n < 2`. Handle `nums.length == 0` returns 0, `length == 1` returns `nums[0]`. *Test the edges or you'll catch a NullPointer.*
>
> ▸ to problem 45

---

## P-45 — Coin Change  *(~8 min)*

> Coin Change. (...) Coin denominations, target amount. Fewest coins to make the amount, or -1 if impossible.
>
> **Brute force — recursion.** Try every coin at every subtotal. Branches like crazy. (...) O(C^amount). *Way too slow.*
>
> **Better — top-down memo.** `minCoins(remaining)` = `1 + min(minCoins(remaining - coin))` over all coins; memoise. (...) O(amount · C) time, O(amount) space.
>
> **Optimal — bottom-up DP.** (...) `dp[0] = 0`. For amount `a` from 1 to target: `dp[a] = 1 + min(dp[a - coin])` over all coins where `coin <= a` and `dp[a - coin]` is reachable. Initialise the dp array to a sentinel (Integer.MAX_VALUE - 1 or amount + 1) for "unreachable". (...) O(amount · C) time, O(amount) space.
>
> *Walk a quick example.* Coins [1, 2, 5], amount 11. dp[1]=1, dp[2]=1, dp[3]=2, ..., dp[5]=1, dp[6]=2 (5+1), dp[7]=2 (5+2), ..., dp[11]=3 (5+5+1). Answer 3.
>
> **The trap.** Choosing the wrong sentinel. If you use `Integer.MAX_VALUE`, then `1 + dp[smaller]` overflows. Use `amount + 1` instead — bigger than any possible answer, safe arithmetic.
>
> ▸ to problem 46

---

## P-46 — Longest Increasing Subsequence  *(~9 min)*

> LIS. (...) Length of the longest strictly-increasing *subsequence* (not contiguous).
>
> **Brute force.** Every subsequence. 2^n. *Skip.*
>
> **Better — DP.** `dp[i]` = length of LIS *ending at* index i. Recurrence: `dp[i] = 1 + max(dp[j])` over all `j < i` with `nums[j] < nums[i]`. Final answer is max of dp[]. (...) O(n²) time, O(n) space. *Easy to code, easy to explain.*
>
> **Optimal — patience sort.** (...) Maintain a list `tails`, where `tails[len]` is the *smallest possible tail* of any LIS of length `len + 1`. (...) Walk the array. For each `x`, binary-search `tails` for the leftmost position with `tails[pos] >= x`. If found, replace `tails[pos] = x` (now an LIS of that length ends with a smaller value, opening more future room). If not found, append `x` — we've extended the longest LIS by one.
>
> The *length* of `tails` at the end is the LIS length. *Note: the contents of `tails` are NOT a valid LIS — they're a clever bookkeeping.*
>
> Time O(n log n). Space O(n).
>
> **The trap.** Using "strictly less" vs "less or equal" wrong. The classic LIS is *strictly* increasing — so when binary-searching, use lower-bound on `>= x`. If the problem says "non-decreasing", use upper-bound on `> x`. *Read the problem.*
>
> ▸ to problem 47

---

## P-47 — Longest Common Subsequence  *(~8 min)*

> LCS. (...) Two strings. Length of the longest subsequence (not contiguous) that appears in both.
>
> The 2-D DP archetype. Once this clicks, Edit Distance and many others fall.
>
> **Brute force.** Recurse: if last chars match, +1 and recurse on both shorter; else max of dropping one from either side. O(2^(n+m)). Skip.
>
> **Better — 2-D tabulation.** Build `dp[n+1][m+1]`. `dp[i][j]` = LCS of `text1[..i]` and `text2[..j]`. Recurrence: if `text1[i-1] == text2[j-1]`, `dp[i][j] = dp[i-1][j-1] + 1`. Else `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`. (...) O(n · m) time, O(n · m) space.
>
> **Optimal — rolling rows.** (...) `dp[i][j]` only depends on the previous row and the current row's previous column. Keep two rows of size m+1. (...) O(n · m) time, O(min(n, m)) space.
>
> *Always rotate the shorter string into the "column" dimension* so the rolling array stays small.
>
> **The trap.** Confusing subsequence with substring. *Subsequence* doesn't need to be contiguous; *substring* does. The recurrence above is for subsequence. For substring, you reset to 0 on mismatch — different problem (LC 718).
>
> ▸ to problem 48

---

## P-48 — Word Break  *(~9 min)*

> Word Break. (...) Can string `s` be segmented into a sequence of dictionary words?
>
> **Brute force.** Recurse on every split point; check each prefix in the dictionary. Each character has "split here or not" — 2^n branches. Skip.
>
> **Better — memoised recursion.** `canBreak(start)` = true iff some prefix `s[start..i]` is in the dictionary AND `canBreak(i)` is true. Cache. (...) O(n² · k) where k = avg word length.
>
> **Optimal — bottom-up DP.** (...) `dp[0] = true`. For each `i` from 1 to n: for each `j` from 0 to i-1: if `dp[j]` is true AND `s[j..i]` is in the dictionary, set `dp[i] = true` and break. Final answer is `dp[n]`. (...) O(n² · k) time, O(n) space.
>
> *Optimisation.* Put the dictionary in a HashSet for O(k) lookup. (...) *Bigger optimisation.* If you build a Trie from the dictionary, the inner loop becomes O(longest dictionary word) instead of O(n).
>
> **The trap.** Allowing only one *fixed* split. The problem asks whether *any* split is valid. Make sure your loop doesn't break on the first failed prefix — it must try every j until one succeeds.
>
> ▸ to problem 49

---

## P-49 — Edit Distance  *(~12 min)*

> Edit Distance. (...) Two strings. Minimum number of single-character insert / delete / replace operations to turn `word1` into `word2`.
>
> The hardest "classic DP" problem on the list. Worth recording slowly.
>
> **Brute force — recursion.** Three choices per character — insert, delete, replace. Three branches per step. Exponential. Skip.
>
> **Better — 2-D tabulation.** (...) `dp[i][j]` = edits to convert `word1[..i]` to `word2[..j]`. (...) Base: `dp[i][0] = i` (delete all i chars), `dp[0][j] = j` (insert all j chars). (...) Recurrence. If `word1[i-1] == word2[j-1]`: `dp[i][j] = dp[i-1][j-1]` (no-op). Else: `dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])` — delete, insert, replace respectively. (...) O(n · m) time and space.
>
> **Optimal — rolling rows.** Same as LCS — only two rows needed. O(n · m) time, O(min(n, m)) space.
>
> *Walk a small example* on screen. "horse" → "ros". 5x3 grid. Fill it out. Final cell answers 3. *Show the operations:* delete 'h' → "orse" → replace 'o' with — wait, walk through carefully. (...) Practice this once before recording.
>
> **The trap.** Mixing up the three operations in the `min`. (...) `dp[i-1][j]` = delete a char from word1 (because we've already converted i-1 chars and now drop the i-th). `dp[i][j-1]` = insert a char into word1 to match word2's j-th. `dp[i-1][j-1]` = replace. (...) Get the meaning right *before* you write code, or you'll get a working algorithm that returns wrong answers in subtle ways.
>
> ▸ to problem 50

---

## P-50 — Partition Equal Subset Sum  *(~9 min)*

> Partition Equal Subset Sum. (...) Can the array be split into two subsets with equal sums?
>
> Reframe: let `S = sum(nums)`. We want a subset that sums to `S / 2`. If `S` is odd, instantly false. Otherwise: classic 0/1 knapsack — can we hit a target sum using each element at most once?
>
> **Brute force.** Try every subset, sum it, check. O(2^n). Skip.
>
> **Better — 2-D DP.** `dp[i][s]` = "can we hit sum `s` using the first `i` items?". (...) Recurrence: `dp[i][s] = dp[i-1][s]` (skip item i) OR `dp[i-1][s - nums[i-1]]` if `nums[i-1] <= s` (take item i). (...) O(n · S) time, O(n · S) space.
>
> **Optimal — 1-D DP, right-to-left iteration.** (...) Keep a single boolean array `dp[0..target]`. `dp[0] = true`. For each num: iterate `s` from `target` down to `num`, set `dp[s] = dp[s] || dp[s - num]`. (...) *The right-to-left iteration is critical* — going left-to-right would let the same item contribute multiple times (unbounded knapsack instead of 0/1).
>
> Time O(n · S). Space O(S).
>
> *In code.* A `BitSet` makes this even faster — `dp |= dp << num` in one machine-word-parallel operation. Mention this if the interviewer asks about optimisation.
>
> **The trap.** The iteration direction. *Always* right-to-left for 0/1 knapsack. Left-to-right is unbounded knapsack (each item can be reused) — a different problem (LC 322 Coin Change is unbounded; LC 416 is 0/1). *Get the direction right.*
>
> ▸ to problem playlist outro

---

## Series outro  *(use once at the end of the playlist, ~2 min)*

> *(Back to the Top-50 hero screen, all 50 checkmarks visible.)*
>
> Fifty problems. That's the whole list. (...) If you watched every video in this playlist — first of all, thank you. (...) But more importantly: *you now have a checklist in your head*. The next time an interviewer reads out a problem, your brain doesn't go "uhhh"; it goes "*this smells like sliding window*", or "*this looks like Two-Sum's cousin*", or "*this is a 0/1 knapsack in disguise*". (...) That recognition is the entire game.
>
> Three things before you close the tab.
>
> One — *go re-solve.* Pick five problems at random tomorrow. Time yourself. 25-minute timer. Do them without watching the videos again. (...) If three out of five fall in 25 minutes — you're interview-ready on those. If only one or two — you've identified what to drill. (...) Repeat next week with five fresh ones.
>
> Two — *talk while you code.* Even when you're alone at your desk. Out loud. (...) "Brute force is O of n squared because I'd have two nested loops. I want to do better — let me think what work I'd be repeating..." (...) That voice in your head needs to be a *recording*, not improvisation. Practice it.
>
> Three — *the rest of the pack is there for you.* The Fundamentals page, the Patterns page, the System Design page, the Interview Playbook page. (...) They're not extras. They're the rest of the conversation. (...) Especially the Playbook — read it the week of your placement drive. The communication chapter alone has moved more offers than any algorithm.
>
> All of it is free. Forever. Share the link with anyone you know who's also grinding. (...) You've got this. (...) See you in the offer letter.
>
> ▸ end of series

---

## Timing reference

Use these as YouTube chapter markers per video, *or* as estimated runtime if you string a section together into one longer playlist episode.

| #  | Problem                                                   | Target time |
|----|-----------------------------------------------------------|-------------|
| 1  | Two Sum                                                   | ~7 min      |
| 2  | Contains Duplicate                                        | ~5 min      |
| 3  | Valid Anagram                                             | ~6 min      |
| 4  | Group Anagrams                                            | ~7 min      |
| 5  | Top K Frequent Elements                                   | ~8 min      |
| 6  | Product of Array Except Self                              | ~7 min      |
| 7  | Encode and Decode Strings                                 | ~6 min      |
| 8  | Longest Consecutive Sequence                              | ~8 min      |
| 9  | Valid Palindrome                                          | ~5 min      |
| 10 | 3Sum                                                      | ~9 min      |
| 11 | Container With Most Water                                 | ~7 min      |
| 12 | Trapping Rain Water                                       | ~10 min     |
| 13 | Longest Substring Without Repeating Characters            | ~8 min      |
| 14 | Minimum Window Substring                                  | ~10 min     |
| 15 | Valid Parentheses                                         | ~5 min      |
| 16 | Min Stack                                                 | ~6 min      |
| 17 | Daily Temperatures                                        | ~7 min      |
| 18 | Binary Search                                             | ~5 min      |
| 19 | Search in Rotated Sorted Array                            | ~8 min      |
| 20 | Median of Two Sorted Arrays                               | ~14 min     |
| 21 | Reverse Linked List                                       | ~6 min      |
| 22 | Linked List Cycle                                         | ~6 min      |
| 23 | Merge Two Sorted Lists                                    | ~6 min      |
| 24 | Remove Nth Node From End                                  | ~7 min      |
| 25 | LRU Cache                                                 | ~12 min     |
| 26 | Invert Binary Tree                                        | ~5 min      |
| 27 | Maximum Depth of Binary Tree                              | ~4 min      |
| 28 | Same Tree                                                 | ~5 min      |
| 29 | Binary Tree Level Order Traversal                         | ~6 min      |
| 30 | Validate Binary Search Tree                               | ~8 min      |
| 31 | Lowest Common Ancestor of a BST                           | ~6 min      |
| 32 | Implement Trie                                            | ~8 min      |
| 33 | Kth Largest Element in an Array                           | ~7 min      |
| 34 | Find Median from Data Stream                              | ~10 min     |
| 35 | Subsets                                                   | ~7 min      |
| 36 | Combination Sum                                           | ~7 min      |
| 37 | N-Queens                                                  | ~10 min     |
| 38 | Number of Islands                                         | ~7 min      |
| 39 | Clone Graph                                               | ~7 min      |
| 40 | Course Schedule                                           | ~9 min      |
| 41 | Pacific Atlantic Water Flow                               | ~9 min      |
| 42 | Word Ladder                                               | ~11 min     |
| 43 | Climbing Stairs                                           | ~5 min      |
| 44 | House Robber                                              | ~6 min      |
| 45 | Coin Change                                               | ~8 min      |
| 46 | Longest Increasing Subsequence                            | ~9 min      |
| 47 | Longest Common Subsequence                                | ~8 min      |
| 48 | Word Break                                                | ~9 min      |
| 49 | Edit Distance                                             | ~12 min     |
| 50 | Partition Equal Subset Sum                                | ~9 min      |
|    | **Total runtime (all 50 + intro + outro)**                | **~6.5 hours** |

---

*Once a video is published, paste its URL into `videos.js` next to the matching `p-N` key. The chip on the Top-50 page goes from grey "Video coming soon" to a live red play-button automatically.*
