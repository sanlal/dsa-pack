# System Design — Video Script

One flowing ~55-minute script for the 13-lesson System Design page (`system-design.html`). Written to be *spoken*, not read — so it sounds like a person teaching, not a manual being narrated.

---

## How to use this script

- **One lesson = one block of speech.** No artificial intro/body/outro splits inside a lesson — just talk through it, scroll to the next card, breathe. Look for the `▸ next` marker.
- **There are two section breaks on the page** — *Low-Level Design* and *High-Level Design*. Each gets a short tonal reset (one sentence) so the viewer feels the gear shift.
- **Read it out loud first.** If a sentence trips your tongue, change a word. Don't fight the page.
- **Pauses matter.** The `(...)` marks are full-stop pauses, ~0.5–1s. They give the viewer a moment to read the table or trace the SVG.
- **Emphasis** — words in *italics* are the ones to lean into when you say them.
- **Total runtime:** ~55:00. See the table at the end for per-lesson timing — copy them straight into YouTube as chapter markers.

A note on voice: imagine a friend who just got their first SDE-1 role at a mid-tier product company and your batchmate is asking them "okay, how do I prep for system design rounds?". *That* is the energy. No textbook voice. No "in this video we will discuss the theoretical foundations of distributed systems". Just a senior who survived it last cycle and is telling them the truth.

---

## Cold open — the hook  *(0:00 – 1:00)*

> *(Page loads. Hero illustration on screen. Don't talk for two seconds — let them see the title.)*
>
> Here's a thing about system-design rounds that nobody warns you about. (...) The interviewer is not actually checking if you've memorised the Cassandra read-write path. (...) They're checking whether you can have *a structured conversation* about a problem that doesn't have one right answer. That's a completely different skill from coding rounds. *Completely.*
>
> And the bad news? (...) Most YouTube tutorials prep you for the wrong version. They give you a six-hundred-page database internals course, you watch four hours, you walk into the interview, and the first question is "how would you design WhatsApp?" — and your brain just *blanks*. (...) Because you learned facts, not the framework for *using* those facts.
>
> So this page is built differently. (...) Thirteen lessons. First four are *low-level design* — the OOP, SOLID, patterns, and "design a parking lot" classes. That's what you'll get in your first one or two rounds at most product companies. (...) The next nine are *high-level design* — caching, sharding, queues, microservices, and three full walkthroughs at the end. That's the SDE-2 round, the FAANG round, the "design Twitter" round.
>
> Switch the language at the top right — C++, Java, or Python — and every code block updates. Stay if your weapon's there. (...) Let's go.
>
> ▸ next — scroll past the section break "Low-Level Design"

---

## Section break — Low-Level Design  *(1:00 – 1:15)*

> *(Section-break banner with the label "Low-Level Design" on screen.)*
>
> Low-level design first. (...) The four lessons in this section are about *one room* of the building — the code level. Classes, objects, methods, the relationships between them. (...) This is the round where they hand you "design a parking lot" and you have thirty minutes to draw classes on a whiteboard. Let's make sure you never freeze on that prompt again.
>
> ▸ next — open Lesson 1

---

## Lesson 1 — OOP foundations  *(1:15 – 4:15)*

> *(Lesson 1 expanded. Encapsulation code block visible.)*
>
> OOP. (...) Object-oriented programming. The four pillars — encapsulation, inheritance, polymorphism, abstraction. (...) Every tutorial recites these. *Almost no interviewer cares about the definitions.* What they care about is whether you *use* them correctly when you're designing.
>
> So forget the textbook for a second. Let me reframe each pillar as a *purpose*.
>
> **Encapsulation** — hide your state, expose behaviour. (...) Look at the BankAccount example on screen. `balance` is private. The outside world can't reach in and set it to negative ten thousand. They have to go through `deposit`, which validates. (...) The class is *free* to change how it stores the balance — maybe later it splits into pending and settled — and no caller breaks. That's encapsulation. Not "make fields private". It's "give yourself the freedom to change your mind".
>
> **Inheritance** — share, don't duplicate. (...) A `SavingsAccount` is a `BankAccount` plus interest. So it inherits, and adds. (...) Here's the trap though: inheritance is a *strict promise*. Once `SavingsAccount` extends `BankAccount`, you've welded them together. If the relationship is fuzzy — *"oh, an `Employee` is sort of like a `Person` but also like an `Asset`"* — that's a signal to use *composition* instead. Has-a, not is-a. (...) The rule of thumb senior engineers follow: *prefer composition over inheritance*. Inheritance for true is-a, composition for everything else.
>
> **Polymorphism** — one call, many forms. (...) Look at the Shape example. There's an abstract `Shape` with an `area` method. `Circle` overrides it. `Square` overrides it. (...) Then `totalArea` takes a list of Shapes and just calls `area()` on each one. *It doesn't know or care which shape it's holding.* (...) That's the magic. The caller code stays clean and short. Add a `Triangle` next month? You write the class, the `totalArea` function doesn't change. Not one line.
>
> **Abstraction** — program to interfaces, not implementations. (...) In Java, you declare a variable as `List<String>`, even though the concrete object might be an `ArrayList`. *Why?* Because tomorrow if you switch to `LinkedList`, every method that took a `List` still works. (...) Abstraction is what gives your code the ability to *swap parts* without ripples. In interview-speak — it's why dependency injection works, why mocks work, why your tests don't need a real database.
>
> Look at the takeaway. (...) "In LLD interviews, every class should be small, hide its fields, and depend on abstractions." (...) If your design produces one giant `God` class with two hundred methods — *stop, decompose*. The interviewer is already mentally writing "monolithic thinker" in their notes.
>
> ▸ next — scroll to Lesson 2

---

## Lesson 2 — SOLID principles  *(4:15 – 7:45)*

> *(Lesson 2 expanded. The Bad/Good two-column example for SRP visible.)*
>
> SOLID. (...) Five letters. Five rules. Each one prevents a specific kind of code pain. (...) Memorise the *pain*, not just the acronym. Because in the interview, the interviewer will deliberately *write* the pain on the whiteboard and watch which principle you reach for.
>
> **S — Single Responsibility Principle.** (...) A class should have one reason to change. (...) Look at the Bad column. A `User` class that holds data, saves to DB, sends emails, and formats CSV. *Three* reasons to change. Marketing changes the welcome email? Edit `User`. DBA migrates to Postgres? Edit `User`. Compliance team wants a new CSV column? Edit `User`. (...) The Good column splits it: `User` is just data, `UserRepository` saves, `WelcomeMailer` mails, `UserCsv` formats. Each class — one job, one reason to change.
>
> **O — Open/Closed.** (...) Open for extension, closed for modification. (...) Bad column — a giant switch statement on payment method. Adding PayPal means editing the switch, re-testing every existing branch, possibly breaking card payments by accident. (...) Good column — an interface called `PaymentMethod`, with a `Card` implementation and a `Upi` implementation. Adding PayPal? Write a new class. Done. *Nothing else changes.* (...) That's Open/Closed. *Old code stays closed; behaviour gets extended.*
>
> **L — Liskov Substitution.** (...) A subclass should be usable wherever its parent is, with no surprises. (...) The classic violation right there in the text: `Square extends Rectangle`. Sounds fine, right? A square *is* a rectangle. (...) But then `Square` overrides `setWidth` to also change height — to preserve squareness. Now any function that takes a `Rectangle`, calls `setWidth(5)` then `setHeight(10)`, expects an area of 50 — and gets 100 because the Square silently broke the contract. (...) Liskov says — if subclass behaviour *surprises* code that handles the parent, your inheritance is wrong. Use composition instead.
>
> **I — Interface Segregation.** (...) Many small interfaces beat one giant one. (...) The example written on screen — a `Printer` interface that also forces every implementation to provide a `scan` method. Your plain old printer has to throw `NotImplementedException` from `scan`. (...) That's a smell. Split — `Printer` for printing, `Scanner` for scanning. A multi-function device implements both. A regular printer implements just one. *Each client depends only on what it actually needs.*
>
> **D — Dependency Inversion.** (...) Depend on abstractions, not concrete classes. (...) The code example below shows it best. `OrderService` doesn't `new StripeClient()` inside itself. It takes a `PaymentGateway` interface in its constructor. The actual `StripeClient` gets injected from outside. (...) Two wins. Today — easy to swap Stripe for Razorpay. Tomorrow — your unit tests can pass in a `FakePaymentGateway` that always returns success, without ever talking to a real payment provider. (...) Testing becomes trivial. Onboarding becomes trivial. Future-proofing becomes free.
>
> Takeaway at the bottom. (...) *SOLID isn't dogma — it's a checklist when you smell bad code.* (...) "Does this class do too much?" — SRP. "Does this `switch` grow every release?" — OCP. "Does this subclass surprise me?" — LSP. (...) Don't *apply* SOLID upfront. *React* to it when you smell pain.
>
> ▸ next — scroll to Lesson 3

---

## Lesson 3 — Design patterns interviewers love  *(7:45 – 12:45)*

> *(Lesson 3 expanded. Singleton code visible.)*
>
> Design patterns. (...) Seven of them. Just seven. They cover roughly eighty percent of every LLD interview at every Indian product company. So let's run through them — *with the situation each one solves*, not just the textbook name.
>
> **Singleton.** (...) Exactly one instance of a class, ever, in the whole application. Use it for shared things — a logger, a config object, a database connection pool. (...) Look at the C++ version on screen — the Meyers' singleton. Six lines. Thread-safe by the C++ eleven memory model. (...) The Java version is the double-checked locking pattern with a `volatile` field — that combination is what gives you safe lazy initialisation. (...) Singleton has a dark side though. Hard to mock in tests. Hard to scale to multi-threaded if you mutate it. If you can avoid it with dependency injection — *do*. But for genuinely global stuff like a logger, Singleton is fine.
>
> **Factory.** (...) Callers don't know which concrete class they need. They ask the factory: "give me a parser for JSON" — factory returns a `JsonParser`. "Give me a parser for XML" — factory returns an `XmlParser`. (...) Adding a new format tomorrow? One new class, one new line in the factory's switch. *Zero changes to anyone calling the factory.* That's the win.
>
> **Builder.** (...) When a constructor needs ten parameters, half of them optional, you reach for Builder. (...) The example on screen — `new Pizza.Builder().crust(THIN).cheese().pepperoni().build()`. Fluent. Readable. Every option is *named* — no more guessing "wait, is the fifth boolean parameter `addOlives` or `addOnions`?". (...) Use Builder any time you'd otherwise write a constructor that takes more than four arguments.
>
> **Observer.** (...) Publish/subscribe. (...) A `Subject` keeps a list of subscribers. On a state change, it notifies all of them. (...) This is the backbone of every UI event system, every Kafka consumer, every Redux store, every notification service. Internalise it. (...) Look at the code below — `subscribe` adds to a list, `publish` walks the list. Six lines. (...) When the interviewer says "the order service needs to tell five other services when an order is placed" — they want to hear *Observer*.
>
> **Strategy.** (...) Swap the algorithm at runtime. (...) Sorting by different comparators. Paying via different `PaymentMethod`s. Compressing files with different `Compressor` implementations. (...) Strategy is the *Open/Closed principle made code*. It is literally what we used in the SOLID example two minutes ago. (...) Probably the single most useful pattern in interview LLDs. Show me an LLD problem and I'll show you where Strategy fits.
>
> **Decorator.** (...) Wrap an object to add behaviour without modifying it. (...) The Starbucks example everyone uses — `Coffee`, wrapped by `MilkDecorator(Coffee)`, wrapped by `SugarDecorator(MilkDecorator(Coffee))`. Each layer adds its own price and description. The original `Coffee` class never changes. (...) Decorator is what `BufferedReader(FileReader(...))` is doing in Java's standard library. Composable layers.
>
> **Adapter.** (...) Your app expects one interface; the third-party library exposes a different one. An adapter class translates between them. (...) Common situation — you migrate from old logging library to new one, but you don't want to change every file in your codebase. Wrap the new library in an adapter that mimics the old API. *One class, zero changes elsewhere.*
>
> Now — the *most* important box on this lesson. Read the tip. (...) *In the interview, don't shout "Observer pattern!".* (...) Instead, describe the design — "the cart will notify subscribers whenever totals change, so the UI and analytics services can react without the cart knowing about them". (...) The interviewer recognises the pattern themselves. Naming feels show-off. *Describing* feels confident. (...) That subtle posture difference — it's the difference between sounding like a student and sounding like an engineer.
>
> Takeaway. *Seven patterns cover eighty percent of LLD interviews.* (...) Don't memorise UML diagrams. Memorise the *problem each one solves*, and they'll surface naturally when you need them.
>
> ▸ next — scroll to Lesson 4

---

## Lesson 4 — LLD walkthroughs  *(12:45 – 19:15)*

> *(Lesson 4 expanded. The 5-step approach numbered list visible.)*
>
> Walkthroughs. (...) This is the lesson you *practice with*, not just watch.
>
> Three classics: Parking Lot, Splitwise, BookMyShow. Every Indian product-company LLD round picks from this shortlist — Flipkart, Swiggy, PhonePe, Razorpay, all of them. (...) Before we do the three, let's lock in the *approach* — the same five steps work for *any* LLD problem they throw at you.
>
> Look at the numbered list on screen. (...) **One — clarify scope.** What's in, what's out? "Are we doing payments too, or just the booking?" (...) **Two — list entities.** *The nouns become classes.* ParkingLot. Spot. Vehicle. Ticket. Payment. Write them all on the whiteboard. (...) **Three — define relationships.** A ParkingLot has-many Spots. A Ticket belongs-to one Vehicle. *Has-many, belongs-to, has-one* — those three words structure every diagram. (...) **Four — methods on each class.** What can a `ParkingLot` *do*? `park`, `leave`. What does each return? (...) **Five — discuss concurrency and one extension.** Two cars enter at the same time — what happens? Adding EV spots tomorrow — how easy is it? (...) Five steps. Thirty minutes. *Always* in that order.
>
> Now — **Parking Lot**. (...) Clarify first: multi-level? Vehicle types? Pricing model? Pre-booking? (...) Then *announce your assumptions*: "I'll assume multi-floor, three vehicle types — bike, car, truck — pay-on-exit." (...) Look at the class list. `VehicleType` enum. `Vehicle`, `Spot`, `Floor`, `ParkingLot`, `Ticket`, `Payment`. Notice — *`PricingStrategy` as an interface*, with `HourlyPricing` and `FlatPricing` implementations. That's Strategy pattern showing up in the wild. The interviewer will smile when you draw it.
>
> Concurrency callout. *Two cars contend for the same spot.* What's your story? (...) Two valid answers — *lock the floor* during `findFreeSpot`, or maintain a `BlockingQueue` of free spots per type so reservation is atomic. State the trade-off. Locks are simpler; queues are more scalable. *Mention both* — even if you only build one.
>
> Extension scenario. (...) "Now we support EV charging." Add `EvSpot extends Spot`, add `VehicleType.EV`, and — *here's the design call* — should an EV car fall back to a regular spot if no EV spot is free? Yes? No? Document the policy. (...) The fact that you *asked* that question — that's the senior-engineer move.
>
> Now — **Splitwise**. (...) The expense-splitter app. Clarify: groups? Split types — equal, percentage, exact, shares? Settlement suggestions? (...) Classes — `User`, `Group`, `Expense`. And here's the elegant part: `Split` is *abstract*, with three implementations — `EqualSplit`, `PercentageSplit`, `ExactSplit`. *Strategy pattern again.* (...) `BalanceSheet` — a map of user-to-map-of-user-to-amount. Who owes how much to whom. (...) And the spicy class — `SettlementService.minimiseTransactions`. Turn the balance graph into the *fewest* transfers. Greedy: pop the biggest creditor and the biggest debtor off two heaps, settle, repeat. That's a beautiful little algorithm at the heart of an LLD problem.
>
> Concurrency — two members add expenses to the same group simultaneously. *Serialise per group.* Lock at the group level, not the whole app.
>
> Finally — **BookMyShow**. (...) The hardest of the three because of one specific moment: *two users tap the same seat at the same instant*. (...) Classes — `City`, `Theatre`, `Screen`, `Show`, `Seat`, `Booking`. And the critical helper — `SeatHold` with a five-minute TTL. Abandoned carts release their seats automatically. (...) Now the hard part — look at that SQL on screen. `UPDATE seats SET held_by = ?, expires = ? WHERE show_id = ? AND seat_id IN (...) AND held_by IS NULL`. (...) That `AND held_by IS NULL` clause is doing all the work. If zero rows update, *someone else got the seat first*. You return an error, refresh the seat map, the user picks again. (...) Database-level optimistic locking. Cleaner than any application-level mutex.
>
> Warning callout — *don't draw God classes*. (...) `BookMyShow` with two hundred methods is a red flag. Decompose into services — `CatalogService`, `SeatService`, `BookingService`, `PaymentService`, `NotificationService`. *Even at the LLD level*, decomposition signals seniority.
>
> Takeaway. *The LLD interview rewards narrating your design as you build it.* (...) Talk through the entities. Drop in one or two patterns. Mention concurrency. Stick the extension. Thirty minutes. Done.
>
> ▸ next — scroll past the section break "High-Level Design"

---

## Section break — High-Level Design  *(19:15 – 19:30)*

> *(Section-break banner with the label "High-Level Design" on screen.)*
>
> Now we *zoom out*. (...) High-level design is the same building, but now we're standing across the street looking at the whole skyline. (...) Servers. Databases. Caches. Queues. Load balancers. (...) Nine lessons to come — vocabulary first, then each big component, then three full walkthroughs. *Take a sip of water. This half is the meat.*
>
> ▸ next — open Lesson 5

---

## Lesson 5 — Scalability vocabulary  *(19:30 – 22:00)*

> *(Lesson 5 expanded. The vocabulary table visible.)*
>
> Vocabulary first. (...) Ten words that, if you confuse them, the interviewer will quietly mark "junior" in their notes. So let's pin them down. Cold.
>
> **Latency** — time for *one* request to finish. Fifty milliseconds at p50, two hundred at p99. Always quote latency as a *percentile* number, not an average. Averages lie. (...) **Throughput** — also called QPS, queries per second. Total requests served per second. (...) These two are independent. A system can have low latency and low throughput, or high throughput and high latency. *Do not* confuse them.
>
> **Vertical scaling** — bigger box. More CPU, more RAM, more disk. (...) **Horizontal scaling** — more boxes, behind a load balancer. (...) Look at the side-by-side. Vertical is free in terms of code change — your app doesn't know the box got bigger — but you eventually hit the ceiling of the biggest box on the market. And one box is one point of failure. (...) Horizontal scales near-infinitely, and surviving one box dying is built-in — but it forces you into stateless services or sharding, and brings all the distributed-systems pain with it.
>
> **Availability** — fraction of time the system answers correctly. Ninety-nine point nine-nine percent — *four nines* — means about fifty-two minutes of downtime per year. Five nines is five minutes. *Every nine you add* costs you ten times more engineering. So don't promise more than the business needs. (...) **Durability** is different — probability your stored data survives. S3 famously claims *eleven* nines of durability. That's "lose a single object in two hundred million years" odds.
>
> **SLA, SLO, SLI** — three letters apart, very different meanings. (...) **SLI** is the indicator — the metric you're actually measuring, like "percentage of requests under three hundred milliseconds". (...) **SLO** is the objective — the target you set yourself, like "p99 latency under three hundred milliseconds". (...) **SLA** is the agreement — the *contractual* promise to your customer, often with penalty clauses. "Ninety-nine point nine percent uptime or you get refunded." (...) SLI measures, SLO targets, SLA promises. Get the order right.
>
> **Idempotent** — calling N times equals calling once. HTTP PUT, DELETE — idempotent. POST — *usually not*. (...) Distributed systems rely on this constantly. We'll see it again in queues, in retries, everywhere.
>
> Takeaway. *"Scale up first, scale out next" is a fine rule of thumb.* (...) Start vertical, switch to horizontal when latency or HA demands it.
>
> ▸ next — scroll to Lesson 6

---

## Lesson 6 — CAP theorem & consistency  *(22:00 – 25:00)*

> *(Lesson 6 expanded. CAP triangle SVG visible.)*
>
> CAP theorem. (...) The triangle on screen — Consistency, Availability, Partition tolerance. *Pick two.* (...) Most candidates have memorised that line. Almost none can apply it in a real design.
>
> Here's the honest version. (...) *Network partitions will happen.* Always. Cables get cut, switches fail, packets drop — partition tolerance is *not* optional in a distributed system. So really, the choice is between **C and A** *during a partition*. (...) You can be a **CP** system — refuse writes when the network splits, guarantee no stale data, sacrifice availability. Banking systems do this. (...) Or you can be an **AP** system — keep accepting writes on both sides of the split, reconcile later, return potentially stale reads to keep the lights on. Social-media systems do this.
>
> Look at the consistency-models list. (...) From strongest to loosest. (...) **Strong / linearizable** — every read sees the latest write. Expensive. A single MySQL primary gives you this. (...) **Read-your-writes** — *you* see your own writes; other people might lag. Sticky sessions on the load balancer give you this. (...) **Monotonic reads** — once you've seen version twelve, you never see version eleven again. Prevents users from seeing the news go *backwards*. (...) **Eventual** — all replicas converge eventually. Cheapest, fastest. DynamoDB by default. Cassandra. (...) **Causal** — operations that depend on each other appear in the right order; unrelated ones can reorder.
>
> Now — *how to talk about this in an interview*. (...) Read that paragraph. (...) Don't say "CAP theorem!" as an abstract statement. Say: *"For a banking system, I'd pick CP — we can't show a stale balance. For a social feed, AP is fine — a five-second-stale like count won't ruin anyone's day."* (...) That single sentence is what separates a candidate who memorised CAP from a candidate who *uses* it.
>
> PACELC tip box. (...) The modern refinement. *If Partition, choose A or C. Else, choose Latency or Consistency.* (...) Spanner is CP-EL — sacrifices latency for consistency even when there's no partition. Cassandra is AP-EL — sacrifices consistency for latency. (...) Drop "PACELC" in your answer once and you'll see the interviewer's eyebrows go up. They don't expect it from a junior candidate.
>
> Takeaway. *"We need strong consistency" is rarely true.* (...) Most domains tolerate eventual consistency just fine — and unlock huge scale by accepting it. Push back when an interviewer assumes strong consistency without justifying it. *That's* the senior move.
>
> ▸ next — scroll to Lesson 7

---

## Lesson 7 — Load balancing  *(25:00 – 28:30)*

> *(Lesson 7 expanded. Load-balancer SVG visible.)*
>
> Load balancing. (...) The piece that sits between your users and your servers, and decides which server gets each request.
>
> Two big choices to make. (...) *L4 versus L7*, and *which algorithm*.
>
> **L4** — layer four — works at the transport layer. It looks at IP and port, doesn't open the HTTP payload. Fast, simple, cheap. AWS NLB, IPVS, HAProxy in TCP mode. (...) **L7** — layer seven — works at the application layer. Reads the HTTP headers, the path, the cookies. Can route `/api/orders` to one fleet and `/api/payments` to another. Can do TLS termination, retries, rate limiting. AWS ALB, NGINX, Envoy, Istio. (...) Default to L7 for HTTP apps. The routing flexibility pays for itself the first time you need to do a canary deploy.
>
> Algorithms. (...) Read them on screen. (...) **Round-robin** — request one goes to server A, two to B, three to C. Simple, but it ignores actual load. (...) **Least connections** — send the new request to whichever server has the fewest active connections. Better for variable-length work. (...) **Weighted** — bigger servers get more weight. Useful during a rolling deploy. (...) **IP hash** — same client always lands on the same server. The cheap version of sticky sessions.
>
> And the *important* one. (...) **Consistent hashing.** (...) Most balancers use plain `hash(key) % N`. The problem — when N changes, *every* key gets re-mapped. If your cache fleet adds one node, ninety-nine percent of your cache entries become useless. Thundering herd to the database. (...) Consistent hashing fixes that. Add a node, and only *one over N* of the keys move. Remove a node, same thing. (...) *Critical* for cache fleets, sharded databases, and anything where node changes happen regularly. Memorise the name.
>
> Health checks and failover paragraph. (...) The load balancer pings each backend every few seconds — a TCP connect, an HTTP `/health` request, whatever you configure. If a backend fails K consecutive checks, the LB pulls it from rotation. Re-adds when it's healthy again. (...) And the meta-point — the load balancer itself can become a single point of failure. *Don't run one*. Run multiple, behind DNS round-robin or BGP anycast. (...) Cloudflare and AWS handle this for you; if you're self-hosting NGINX, you absolutely have to think about it.
>
> Takeaway. *Default to L7 for HTTP apps. Use consistent hashing for any cache or sharded backend.* (...) Two sentences. Worth taping above your desk.
>
> ▸ next — scroll to Lesson 8

---

## Lesson 8 — Caching layers  *(28:30 – 32:00)*

> *(Lesson 8 expanded. Cache-layers SVG visible.)*
>
> Caching. (...) The lesson with the highest return on study time of anything in this whole pack. Because almost every "make it faster" answer in a system-design interview is some variation of *add a cache here*.
>
> Read the TL;DR. *Cache aggressively, invalidate carefully.* (...) The cache always wins on read performance. The cost is paid on writes — and on managing *staleness*.
>
> Look at the SVG. (...) Five layers, from closest-to-the-user to closest-to-the-database. *Each one is faster than the layer behind it, and staler.* (...) **Browser cache** — `Cache-Control` headers, service workers, IndexedDB. Microseconds. (...) **CDN** — Cloudflare, CloudFront, Akamai. About ten milliseconds because the user is hitting a server near them, not your origin. (...) **App-level / in-process** — an LRU map sitting *inside* your server process. Nanoseconds. Lost on restart, not shared across instances. (...) **Distributed cache** — Redis, Memcached. Shared across the fleet. Sub-millisecond. (...) **DB cache** — the buffer pool, the query cache. Mostly automatic; you just tune the size.
>
> Write strategies. (...) Three cards on screen. **Write-through** — write to cache *and* DB in the same operation. Safe, never stale, but slower writes. **Write-back** — write to cache, flush to DB later. Fast writes, risky if the cache dies before the flush. **Write-around** — bypass the cache, write straight to DB. Cache fills on the next read. Fine for "write once, read rarely" data.
>
> Eviction policies. (...) **LRU**, least recently used — Redis's default, works great for general traffic. (...) **LFU**, least frequently used — resists the "viral tweet pollutes the cache" problem. A one-hit wonder gets evicted faster than a steadily-popular item. (...) **TTL** — just expire after N seconds. Simple, predictable.
>
> Cache invalidation — the famous "one of the two hard problems in computer science". (...) Three approaches on screen. **Write-through** always updates the cache, so it's never stale. **Cache-aside with TTL** — the cache is populated by reads, invalidated by writes, and the TTL caps how long a missed invalidation can live as a bug. (...) **Pub/sub invalidation** — the writer publishes "user-123 changed", every app server listens and drops that entry from its local cache. *Cleanest answer when you have an in-process cache fleet.*
>
> Warning callout — *thundering herd*. (...) A hot key expires. In the next millisecond, ten thousand requests all miss the cache simultaneously and all hammer the database with the same query. The database falls over. (...) Two fixes. **Request coalescing** — only one of those requests actually goes to the DB, the others wait for the result. **Stale-while-revalidate** — serve the *stale* value to all callers and refresh in the background. Either one prevents the herd.
>
> Takeaway. *If your read traffic to write traffic ratio is more than ten to one, you should be caching. If it's more than a hundred to one, the cache is doing ninety-nine percent of the work.* (...) That ratio — read-write — is the first number to figure out for *any* system-design question.
>
> ▸ next — scroll to Lesson 9

---

## Lesson 9 — Databases: SQL, NoSQL, sharding  *(32:00 – 37:00)*

> *(Lesson 9 expanded. SQL-vs-NoSQL comparison table visible.)*
>
> Databases. (...) The longest lesson on the page. Worth it. The right database choice is fifty percent of any system-design answer.
>
> Look at the SQL-vs-NoSQL table. (...) **SQL** — Postgres, MySQL. Strict schema. Joins are first-class. ACID — atomicity, consistency, isolation, durability. Scales mostly vertically, with read replicas for read throughput. *Default choice for anything with foreign keys* — orders, payments, inventory. (...) **NoSQL** — flexible schema, joins usually denormalised, eventual consistency by default, horizontal-first. *Best for feeds, logs, key-value, time series.*
>
> Now — NoSQL is not one thing. (...) Look at the flavours list. **Key-value** — Redis, DynamoDB. Given a key, get a value. Sessions, profiles, simple caches. (...) **Document** — MongoDB, Couchbase. JSON-ish docs with nested fields. Good when your data is naturally hierarchical and you want flexibility. (...) **Wide-column** — Cassandra, HBase, ScyllaDB. Tunable consistency, write-heavy, time-series. The data store behind Netflix, Discord, Instagram. (...) **Graph** — Neo4j, Neptune. Friend-of-friend queries, recommendation networks. (...) **Search** — Elasticsearch, OpenSearch. Full-text, faceted search. *Not* a primary store — always paired with another DB that holds the source of truth.
>
> Pick by your *access pattern*, not by what's trendy.
>
> **Indexing.** (...) A B-tree index turns "search by column X" from order n into order log n. (...) *But* — every insert, update, delete has to update every index on that table. So indexes speed reads, slow writes. (...) Three rules on screen. Index the columns you query in `WHERE`, `JOIN`, `ORDER BY`. A composite index on `(a, b)` works for queries on `a` alone *and* on `(a, b)` together — but *not* on `b` alone. (...) And the meta-rule — never over-index a write-heavy table. *Always* measure with `EXPLAIN` before adding an index.
>
> **Replication.** (...) Three modes on screen. **Leader-follower** — also called primary-replica — writes go to the leader, reads can go to followers with a small lag. Standard MySQL, standard Postgres. (...) **Multi-leader** — writes accepted on any node, conflicts resolved by some logic. Powerful, complicated. (...) **Leaderless** — Cassandra-style. Every node accepts writes. Use quorum reads and quorum writes to get consistency.
>
> **Sharding.** (...) Horizontal partitioning. Slice the data across N machines based on some key. (...) Look at the SVG — hash-shard `user_id` into three shards. (...) Four sharding strategies on screen. (...) **Hash sharding** — `shard = hash(user_id) % N`. Even distribution. Range queries become a fan-out across all shards. (...) **Range sharding** — users A through F on shard zero, G through M on shard one. Range queries fast. Hot keys cause hotspots — if one user is huge, they all hammer one shard. (...) **Geo sharding** — partition by region. Good for latency, mandatory for GDPR and India's data-localisation rules. (...) **Consistent hashing** — same as the load-balancer lesson. Add a shard, only one-over-N of keys move.
>
> Warning callout — *do not shard early*. (...) Sharding is a *one-way door*. Cross-shard joins are painful. Cross-shard transactions are painful. Rebalancing is painful. (...) Always exhaust the cheaper options first — vertical scaling, read replicas, caching. Reach for sharding only when one box truly cannot fit your hot data.
>
> Takeaway. *Start with a single Postgres. Add a read replica. Add a cache. Shard only when you've exhausted the above — usually past ten terabytes of hot data.* (...) Real talk: most companies you'll work at will never need to shard. Don't volunteer it in the interview if the problem doesn't demand it.
>
> ▸ next — scroll to Lesson 10

---

## Lesson 10 — Message queues & events  *(37:00 – 40:30)*

> *(Lesson 10 expanded.)*
>
> Message queues. (...) The single biggest unlock for system reliability that I know of.
>
> Mental model. (...) A queue is a *buffer* between "I'm done" and "you take it from here". Producer drops a message in, consumer picks it up later. Producer doesn't wait. Consumer doesn't have to be alive at the moment of the drop. (...) Three things you get for free. *Producers and consumers scale independently.* A slow downstream doesn't break your upstream. *Retries* are built-in — failed message? Put it back, try again.
>
> Three use cases on screen. (...) **Async work** — user uploads a video, web server returns 202 Accepted immediately, the video service picks the job off the queue and processes it for the next three minutes. User isn't blocked. (...) **Spike absorption** — flash sale, a hundred thousand orders a second land in the queue, the downstream processes them at a steady one thousand per second. *The queue stretches; nothing crashes.* (...) **Decoupling** — order service publishes one `OrderPlaced` event. Mail service consumes it. Analytics consumes it. Fraud detection consumes it. None of them know about each other. Add a new consumer next year? Order service doesn't change.
>
> Tool comparison table. (...) **Kafka** — append-only log, *replayable*. New consumer joining next year can read from the beginning. Best for event sourcing, analytics pipelines, audit logs. The high-throughput champion. (...) **RabbitMQ** — traditional queue with smart routing via exchanges. Better for task queues with complex routing rules — *"send this message to all consumers with this header"*. (...) **SQS** — managed AWS queue. Boring. Zero ops. Good default if you're on AWS and your needs are simple. (...) **Redis Streams** — a lightweight log inside Redis. Use if Redis is already in your stack and the volume is small.
>
> Now — *memorise this section*. **Delivery guarantees.** (...) **At-most-once** — might lose messages, never duplicates. Fire-and-forget metrics. (...) **At-least-once** — never loses, may duplicate. *This is the default in practice.* Which means — *your consumers must be idempotent*. Calling them twice with the same message must produce the same effect as calling them once. (...) **Exactly-once** — the holy grail. Kafka can offer it for the Kafka-to-Kafka path with transactions enabled. End-to-end exactly-once across multiple services? *Essentially impossible* without using idempotency keys at the consumer.
>
> Idempotency-trick tip box. (...) The pattern is — *producer attaches a UUID per logical event*. Consumer keeps a "processed IDs" set, in Redis, or a DB unique index. When a duplicate arrives, the unique constraint rejects it, consumer skips. (...) That pattern — at-least-once delivery plus idempotent consumers — gives you the *effect* of exactly-once, with none of the heavy infrastructure. *That* is how production systems do it. Memorise the trick.
>
> Dead-letter queues. (...) After N retries — usually three to five — the message goes to a *DLQ* instead of looping forever. Engineers triage the DLQ on Monday morning. (...) *Never auto-drop messages*. You're throwing away evidence of bugs. Always route to a DLQ for inspection.
>
> Takeaway. *Add a queue the moment two services can answer "does this need to be synchronous?" with "no".* (...) Latency drops. Resilience climbs. Free win.
>
> ▸ next — scroll to Lesson 11

---

## Lesson 11 — Microservices & API gateway  *(40:30 – 44:00)*

> *(Lesson 11 expanded. Microservices SVG visible.)*
>
> Microservices. (...) The most over-recommended architecture in tech.
>
> Let me say the unpopular thing up front. (...) *Most companies should not be doing microservices.* (...) Microservices solve organisational problems, not technical ones. They trade *internal complexity* for *independent deployment and team scaling*. Worth it past roughly fifty engineers. Usually overkill below that.
>
> Look at the two-column comparison on screen. (...) **Monolith wins** when — small team, domain is still being discovered, you need cross-table transactions a lot, you want simple deploys. (...) That describes most startups and most college projects and most internal tools. *Default to monolith.* (...) **Microservices win** when — teams need to deploy independently, different services have wildly different scale or tech stacks, blast radius of a bad deploy must be small, your org chart maps to natural service boundaries — that last one is Conway's Law.
>
> Now — *if* you've decided microservices, you need the supporting cast. Read the list.
>
> **API gateway** — one front door for the whole system. Authn, authz, rate limiting, routing, request shaping. Hides the internal mesh from the outside world. (...) **Service discovery** — how does the `orders` service find `payments`? In Kubernetes, that's DNS — service names resolve to ClusterIPs. Outside K8s, that's Consul or Eureka. (...) **Circuit breaker** — if a downstream service starts failing fifty percent of its requests, *stop calling it for thirty seconds*. Prevents one bad service from cascading into a full outage. Hystrix popularised this, resilience4j is the modern Java version. (...) **Distributed tracing** — OpenTelemetry, Jaeger. One request ID flows through every service so you can see the waterfall when something is slow. *Cannot* debug microservices without this. (...) **Saga pattern** — replaces the cross-service transaction you can't have. Each step has a compensating action. *"If payment fails, cancel the order, refund the wallet, mark the inventory as released."* Each undo is its own step.
>
> Warning callout — *distributed monolith*. (...) The anti-pattern. If your "microservices" must all be deployed together, in lockstep, then congratulations — you've built a distributed monolith. The worst of both worlds. (...) The fix is clear service boundaries and async communication. *Each service owns its data, exposes an API, talks to others through events or well-defined RPCs.* That's the contract.
>
> Takeaway. *Start with a modular monolith. Extract a service only when a boundary screams — different scale, different team, different lifecycle.* (...) Premature microservices waste years of engineering time. Make sure the *reason* for splitting is real before you split.
>
> ▸ next — scroll to Lesson 12

---

## Lesson 12 — Rate limiting & auth  *(44:00 – 47:00)*

> *(Lesson 12 expanded. Token-bucket code visible.)*
>
> Rate limiting and auth. (...) The two security-flavoured topics every system-design round will ask you about at some point.
>
> **Rate limiting.** (...) Five algorithms on screen. Let me rank them by what an interviewer actually wants to hear.
>
> **Fixed window** — "a hundred requests per minute, starting on the minute". Dead simple, but it allows a two-x burst at the boundary. If a user fires a hundred at 11:59:59 and another hundred at 12:00:01 — that's two hundred in two seconds, which violates the spirit of the limit. (...) **Sliding window log** — store every request's timestamp, count the ones in the current window. Accurate. Memory-hungry — every request stored. (...) **Sliding window counter** — approximate by blending the current window count with the previous window's count, weighted by how far into the current window you are. Cheap and accurate enough. *This is what production systems usually pick.* (...) **Token bucket** — bucket of capacity B, refills at R tokens per second. Each request consumes one token. Drops if empty. *Allows controlled bursts*, which is often what you actually want. (...) **Leaky bucket** — token bucket's strict cousin. Smooths bursty input into a steady output stream.
>
> Look at the token-bucket sketch. (...) Five-ish lines. Lazy refill — we don't run a background thread topping up the bucket every millisecond, we compute "how many tokens should have been added since the last call" on demand. *Then* decide if there's enough for one more request. (...) Implement this in twenty minutes during the interview and you'll get the points.
>
> **Auth choices.** (...) Three modern options on screen. (...) **Session cookies** — server stores the session in Redis or a DB, client just holds a cookie with the session ID. *Easy to invalidate* — delete the session row, user is logged out everywhere instantly. Best for browser-based apps. Mark the cookie HttpOnly and SameSite to defend against XSS and CSRF. (...) **JWT** — JSON Web Token. A signed payload the client carries. Server doesn't need to look anything up — just verify the signature. (...) Great for stateless APIs, mobile apps, internal service-to-service calls. The catch — *hard to revoke before expiry*. The token is valid until it expires. So you keep TTLs short, like fifteen minutes, and pair with a refresh token mechanism. (...) **OAuth 2.0** — the "Login with Google" flow. Authorisation server returns an access token your app uses to call APIs on behalf of the user. The standard for *third-party* access.
>
> Match the auth choice to *who the caller is*. Browser app — sessions. Mobile or service-to-service — JWT. Third-party access — OAuth.
>
> Warning callout — *don't roll your own crypto*. (...) Use a library. Hash passwords with bcrypt or argon2 — *never* MD5, never plain SHA-256. Always TLS in transit. Secrets in a vault, never in source code, never in `.env` files committed to git. (...) That last one is the most common bug in startup codebases. *Do not* commit secrets.
>
> Takeaway. *Apply rate limits at the edge — the API gateway — and at the service for defence-in-depth.* (...) Two layers. Edge catches the gross abuse. Service catches the sneaky stuff that slips past the edge.
>
> ▸ next — scroll to Lesson 13, the big one

---

## Lesson 13 — HLD walkthroughs  *(47:00 – 54:00)*

> *(Lesson 13 expanded. Universal HLD framework numbered list visible.)*
>
> Last lesson. (...) And the *most important* one if you have a real interview this month.
>
> Three walkthroughs — URL shortener, chat, news feed. Three of the most common HLD prompts at every level, from SDE-1 right up to staff. Same framework solves all of them. *Memorise the framework first; the walkthroughs are just applications.*
>
> **Universal HLD framework.** Six steps. Read them. (...) **Clarify scope and SLAs** — what's in, what's out, what's the latency target. (...) **Back-of-envelope estimation** — users, QPS, storage, bandwidth. *Write actual numbers on the whiteboard.* This converts "design" into "engineering". (...) **Data model** — the core entities and the queries that hit them. (...) **High-level diagram** — client, load balancer, service, cache, DB, queue. Boxes and arrows. (...) **Deep-dive** — pick the spiciest component and go deeper. Don't try to deep-dive everything. *Pick one or two.* (...) **Bottlenecks and trade-offs** — what breaks at ten-x, what consistency choices, what SPOFs you accept.
>
> Now — *the trick of the entire HLD interview*. Step one matters more than steps two through six combined. (...) Five minutes of clarifying questions saves thirty minutes of building the wrong thing. *Always* clarify first. The interviewer often deliberately under-specifies the problem and *waits* for you to ask.
>
> **Walkthrough A — URL shortener. Bit.ly.** (...) Clarify: custom aliases? Expiry? Analytics? (...) Estimate — read the numbers on screen. A hundred million writes per month, so about forty writes per second. Read-to-write ratio is roughly a hundred to one, so four thousand reads per second steady, a hundred thousand at peak. Storage at five hundred bytes per record times one hundred million per month times five years is around three terabytes. (...) Notice — *we just made the problem feel concrete*. The interviewer now sees you're an engineer, not a hand-waver.
>
> Data model is one table. `(short_key PRIMARY, long_url, owner, created_at, expires_at)`. Done. (...) Look at the architecture SVG. Read-heavy, so we cache the redirect aggressively. CDN in front. Redis hot cache behind the LB. KV store as the source of truth, replicated for availability.
>
> Three short-key generation options on screen. (...) **Hash and truncate** — MD5 the long URL, take the first seven characters in base 62. Collisions are possible — rehash with a salt. (...) **Counter or Snowflake** — a central ID generator gives a monotonically-increasing sixty-four-bit ID; encode to base 62. *Collision-free*. But the URLs become predictable, which is a security smell — mitigate by shuffling the encoding. (...) **Pre-generated pool** — a background job creates batches of unused keys ahead of time; the service grabs one per request. *Decouples the write path from key generation* — the service is fast even if key gen is slow.
>
> Bottlenecks paragraph. (...) Hot reads — CDN plus Redis handles ninety-nine percent of traffic. Sharded KV store keyed by short_key. Analytics — drop every click event into Kafka, batch-process into ClickHouse for queries. *Don't try to count clicks in your hot read path.* Asynchronous, always.
>
> **Walkthrough B — Chat. WhatsApp-lite.** (...) Clarify — one-to-one or groups, delivery semantics, online status. (...) Estimate — five hundred million users, fifty messages per user per day, that's about two hundred ninety thousand messages per second. Storage roughly five hundred gigs a day at two hundred bytes per message.
>
> Components. (...) **Edge layer** — a WebSocket gateway. Roughly one million open connections per box. Load balancer is sticky-hashed on `user_id` so a user always lands on the same gateway. (...) **Presence service** — Redis with a TTL per user. Heartbeats every thirty seconds. If the heartbeat stops, the TTL expires, the user shows as offline. (...) **Message service** — writes to Cassandra, keyed by `(conversation_id, msg_id ascending)`. *Range-scan efficient* for "load the last fifty messages of this chat". (...) **Pub/sub layer** — Kafka topic per shard. Gateways subscribe, push to connected clients. (...) **Offline delivery** — when the recipient isn't connected, push via FCM or APNS.
>
> The hardest paragraph — *delivery guarantees*. WebSocket can drop at any moment. Solution — every message has an ID, client ACKs on receipt, server keeps unacked messages for some seconds and resends on reconnect. (...) And — end-to-end encryption. WhatsApp uses it. The server never sees plaintext. This complicates server-side search and analytics, but it's the privacy story. *Trade-off* — call it out in the interview.
>
> **Walkthrough C — News feed. Instagram-lite.** (...) Clarify — chronological or ranked? Followers up to millions for celebrities? (...) The *fundamental* design choice for any feed system is **fan-out**.
>
> Look at the two-column callout. (...) **Fan-out on write — push.** When user A posts, copy the post-id into the feed cache of *every single follower*. (...) Reads are O of one — your feed key is precomputed, you just read it. (...) Writes are catastrophic for celebrities — a celebrity with a hundred million followers does a hundred million writes per post. (...) **Fan-out on read — pull.** Don't precompute. At read time, fetch recent posts from everyone you follow and merge. (...) Writes are O of one. Reads are O of followees, which is brutal for power users.
>
> The hybrid — *the answer most modern feeds actually use*. (...) Push for normal users — most accounts have under ten thousand followers, push is fine. Pull for celebrities — Bieber's posts aren't pre-fanned-out to a hundred million feed caches. At read time, the feed service does a precomputed-feed-plus-celebrity-merge. *Best of both worlds.* Twitter, Instagram, every feed at scale.
>
> Ranking paragraph. (...) Offline model scores `(user_id, post_id)` pairs for affinity. Feed service pulls top-N candidate posts and re-ranks on read. Don't try to do ML in the hot path.
>
> Storage paragraph. (...) Posts in a sharded blob/KV store, partitioned by user_id. Media — S3, fronted by a CDN. Feeds — Redis sorted-sets keyed by user_id, score equals timestamp or rank.
>
> Tip callout — *always close with trade-offs*. (...) Read it out loud. *"I chose push for the common case because reads dominate. For celebrities, I'd switch to pull because the write amplification would crush the system."* (...) That sentence — *that's* what wins offers. The candidate who can explain *why* and acknowledge *when their choice breaks* is the one who gets to the offer call.
>
> Takeaway. *The HLD interview isn't a quiz on tools — it's a structured conversation.* (...) Memorise the framework, practice five walkthroughs out loud, and you'll never be lost.
>
> ▸ hold on the sign-off section

---

## Outro / sign-off  *(54:00 – 55:00)*

> *(Scroll to "Boxes & arrows — now with reasons." Soft tone.)*
>
> That's the whole system-design map. (...) Four LLD lessons. Nine HLD lessons. Three walkthroughs. The vocabulary, the trade-offs, the framework. (...) You now have *more* than enough to walk into a system-design round and have a structured conversation.
>
> Four takeaways on screen. (...) *Clarify first* — five minutes of questions saves thirty of building the wrong thing. *Estimate openly* — numbers on the whiteboard convert design into engineering. *One deep-dive* — better to nail one component than skim everything. *Trade-offs beat perfect* — every choice has a downside; say it out loud.
>
> One practice ritual before you go. (...) Pick an app you use every day — Swiggy, Zomato, Ola, anything. Don't open this page. Don't watch any video. *Just talk through the design out loud for thirty minutes.* Estimate it. Diagram it. Pick one component, deep-dive it. Then come back, expand the relevant lessons here, and audit your answer. (...) Five apps that way and you'll have done more prep than ninety percent of candidates do.
>
> If your placement is next month, head to the Interview Playbook next — clarifying questions, communication, the company tier guide. If you're earlier in your prep, go back to DSA and lock down the patterns.
>
> If this helped — like, subscribe, share with your study group. (...) See you in the next one. Happy designing.

---

## Runtime breakdown

| Chapter | Lesson | Time |
|---------|--------|------|
| 0 | Cold open — the hook | 1:00 |
| — | Section: Low-Level Design | 0:15 |
| 1 | OOP foundations | 3:00 |
| 2 | SOLID principles | 3:30 |
| 3 | Design patterns interviewers love | 5:00 |
| 4 | LLD walkthroughs (Parking Lot / Splitwise / BookMyShow) | 6:30 |
| — | Section: High-Level Design | 0:15 |
| 5 | Scalability vocabulary | 2:30 |
| 6 | CAP theorem & consistency | 3:00 |
| 7 | Load balancing | 3:30 |
| 8 | Caching layers | 3:30 |
| 9 | Databases: SQL, NoSQL, sharding | 5:00 |
| 10 | Message queues & events | 3:30 |
| 11 | Microservices & API gateway | 3:30 |
| 12 | Rate limiting & auth | 3:00 |
| 13 | HLD walkthroughs (URL / Chat / Feed) | 7:00 |
| — | Outro / sign-off | 1:00 |
| **Total** | | **~55:00** |

Copy these timestamps into the YouTube description for chapter markers. Viewers can jump straight to any topic.

If you want a tighter cut:
- For a ~35-min video: trim lessons 1 and 2 to bullet-point flybys (the OOP/SOLID audience already knows it from school), and condense the LLD walkthroughs to one example instead of three.
- For a ~25-min "HLD whirlwind": start at the High-Level Design section break and skip lessons 1–4 entirely. Assume the viewer is past LLD and only here for scaling.
- For an LLD-only ~20-min cut: stop after Lesson 4 and record the LLD section as its own standalone video. Recover ~36 minutes for a separate HLD upload.

---

## Delivery notes (read once before recording)

- **Pace.** Aim for ~150 words per minute. The script is written at that pace. If you find yourself hurrying, you're rushing — slow down. System-design takes more breathing room than DSA does.
- **Pauses.** The `(...)` marks are pauses. They are *doing work*. Don't skip them — many of them sit right after a definition that the viewer needs a beat to absorb.
- **Emphasis.** When you hit an italicised word, lean in — slightly louder, slightly slower. *That's* the word doing the teaching.
- **Use the screen.** When the camera is on a table or a diagram, *point* at the row you're describing — mouse cursor, callout box, anything. Saying "look at the bottom row" without showing it wastes the visual.
- **Don't read the tables.** They're already on screen. Pick *one or two interesting rows* and explain them; the viewer's eyes will scan the rest.
- **Drop tool names with confidence.** "Cassandra." "Envoy." "Snowflake." Confidence sells expertise here. If you mispronounce something, *don't apologise* — keep moving.
- **No filler.** No "uh", "um", "so basically", "kind of", "you know". The script doesn't have them; your delivery shouldn't either.
- **Record per lesson.** Stop after each `▸ next` marker. Sip water. Check your notes. Resume. Lesson 13 (HLD walkthroughs) is the longest single block — split it across two or three takes if you need to, the section breaks (A, B, C) are natural stitch points.
- **B-roll suggestions** — when you're on the Microservices lesson, the architecture SVG is on screen, no extra visual needed. For the URL-shortener walkthrough, consider a hand-drawn whiteboard cut to a finished architecture diagram. Pure storytelling otherwise.
- **Indian audience cues** — when you mention companies, mention *Indian* product companies first (Razorpay, PhonePe, Swiggy, Flipkart), then FAANG. Localises the prep. Avoid US-only references like "Stack Overflow questions" without context.
- **Levels:** -16 LUFS for YouTube; voice should peak around -6 dB. Quick test — record ten seconds, listen on phone speakers; if you can hear it clearly, it's right.
