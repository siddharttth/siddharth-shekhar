/* ==========================================================================
   Everything you might want to edit lives here: words, links, photos.
   Photos: drop the file in assets/img/ and put its path in "photo" or "image".
   Leave a photo as "" and the site shows its designed placeholder instead.
   ========================================================================== */

/* First day in the industry (ScaleX internship). The "years" figures on the page count up from this date, in half-year steps. */
export const careerStart = "2024-03-01";

export const links = {
  email: "siddharth.shekharr@gmail.com",
  linkedin: "https://linkedin.com/in/siddharttth",                  // paste your LinkedIn URL: a LinkedIn stamp appears in the footer
  resume: "assets/Siddharth Shekhar Resume.pdf", // your résumé PDF: shows a Résumé pill in the nav and a stamp in the footer
  caseStudy: "astroverse.html",
};

/* Send-a-postcard (the contact section).
   firebase: your Realtime Database URL. Every card is saved to /inbox (private:
   message, name, email, stamp). If the visitor ticks "Pin it to the wall", a public
   copy (first name + message) goes to /wall with approved: false. Flip approved to
   true in the Firebase console and it appears on the wall.
   endpoint: an optional form service (Formspree…) used only if firebase is "".
   With neither, or if saving fails, "Drop it in" opens the visitor's email app.
   assets/data/postcards.json holds your own pinned card(s). */
export const postcard = {
  firebase: "https://portfolio-3f7c6-default-rtdb.firebaseio.com",
  endpoint: "",
  maxLength: 400,
};

/* The trail in the hero. x / y = where the stop sits on the illustration
   (0–1 from the left / top of assets/img/trail.jpg). The last stop is the
   summit: the team I join next. */
export const stops = [
  {
    id: "diploma", x: 0.856, y: 0.772,
    pin: "Diploma · 2019",
    when: "2019 – 2022",
    title: "Diploma, Mechanical Engineering",
    role: "Dayalbagh Educational Institute, Agra",
    body: "Where I learned how machines work, and where I noticed I cared more about the logic running behind them. That curiosity is what moved me into software.",
    note: "engineer by training",
  },
  {
    id: "btech", x: 0.619, y: 0.646,
    pin: "B.Tech · 2022",
    when: "2022 – 2025",
    title: "B.Tech, Computer Science",
    role: "Pranveer Singh Institute of Technology, Kanpur",
    body: "Where I learned data structures, databases and distributed systems, and started building backends in Go and Python.",
    note: "",
  },
  {
    id: "internship", x: 0.828, y: 0.515,
    pin: "Internship · 2024",
    when: "Mar 2024 – Mar 2025",
    title: "Internship",
    role: "Software Development Engineer Intern · ScaleX",
    body: "Built RESTful APIs for a real-time cricket stock trading platform with 5,000+ users, and cut critical latency issues by 65% under 100K+ concurrent users.",
    note: "",
  },
  {
    id: "scalex", x: 0.724, y: 0.322,
    pin: "ScaleX · 2025",
    when: "Mar 2025 – now",
    title: "ScaleX",
    role: "Software Development Engineer",
    body: "Backends for client launches like Horocosmo and ClickNumero, alongside our own product, Astroverse.",
    note: "owned it end to end",
  },
  {
    id: "next", x: 0.85, y: 0.141,
    pin: "Your team · next",
    when: "Next",
    title: "Your team",
    role: "The next summit",
    body: "I'm looking for a team building a consumer product people return to, where backend sits next to product and data from day one.",
    note: "",
    link: { label: "Say hello", href: "mailto:siddharth.shekharr@gmail.com" },
  },
];

/* Selected work: postcards, front and back side by side.
   tint: blush | wheat | sage | slate. kind: "app" (phones) or "web" (browser).
   image: a real screenshot or mockup (leave "" for the drawn placeholder).
   video: path without extension to a looping mockup (.webm + .mp4 + -poster.jpg). */
export const work = [
  {
    id: "astroverse",
    label: "Astroverse 2.0 · Dating",
    tint: "blush",
    kind: "app",
    image: "",
    video: "assets/video/astroverse",
    stamp: "AV",
    year: "2026",
    title: "Fewer profiles, better matches",
    problem: "A swipe clone with a compatibility score that had to hold up at scale.",
    role: "Founding engineer: Database, Backend Development, Auth & JWTs, Algo, Cloud, Pipelines.",
    metric: "5X",
    metricLabel: "traffic spikes absorbed by AWS auto-scaling",
    link: { label: "Read the case study", href: "astroverse.html" },
  },
  {
    id: "horocosmo",
    label: "Horocosmo · Astrology",
    tint: "wheat",
    kind: "app",
    image: "",
    video: "assets/video/horocosmo",
    stamp: "HC",
    year: "2024",
    title: "A celebrity astrologer’s app, from blank canvas to launch",
    problem: "Astro Arun Pandit needed his own app, and it had to survive live events.",
    role: "Developed features and algo, optimized latency, caching, monitoring.",
    metric: "100K+",
    metricLabel: "downloads in the first month",
    link: { label: "Ask me about it", href: "#hello" },
  },
];

/* How I work: the same five switchbacks on every project, the hat I wear at
   each, and where it showed up in real work. Every number comes from shipped work.
   art: signal | note | phones | copy | ledger (how the window draws it). */
export const steps = [
  {
    title: "Find the signal", hat: "Profiler", tools: ["CloudWatch", "Load tests", "Logs"], art: "signal",
    did: "I start with what the system actually does: latency graphs, slow queries and a handful of load tests. I'm looking for the one or two signals worth acting on, not a long list of findings.",
    proof: "Horocosmo: CloudWatch metrics set the target, 500ms down to 200ms.",
  },
  {
    title: "Name the insight", hat: "Systems architect", tools: ["Design doc", "Team review"], art: "note",
    did: "I turn the signal into one sentence the whole team can repeat. Every decision after that gets checked against it.",
    proof: "Astroverse 2.0: “Fewer profiles, better matches” steered the matching rewrite.",
  },
  {
    title: "Design the smallest move", hat: "Backend engineer", tools: ["Go", "PostgreSQL", "Redis"], art: "phones",
    did: "I look for the smallest change that fixes the problem, then build it on a schema the next ten services can reuse.",
    proof: "ClickNumero & Horocosmo: a Redis layer cut database load by 55%.",
  },
  {
    title: "Write the contract", hat: "API designer", tools: ["REST", "gRPC", "JWT"], art: "copy",
    did: "I write the API contracts myself, from the client's side of the call. The right response at the right moment does more than another endpoint.",
    proof: "Astroverse 2.0: JWT auth and the matching APIs answer in under 200ms.",
  },
  {
    title: "Ship and measure", hat: "DevOps · Backend", tools: ["GitHub Actions", "CloudWatch"], art: "ledger",
    did: "I write the pipelines with clear checks, stay close to the deploy, then read the dashboards to see whether it worked.",
    proof: "Three products, three kinds of result: a latency cut, a scale-out and a deploy that went from 4 hours to 15 minutes.",
  },
];

/* The toolbox row under How I work. */
export const tools = ["Go", "Python", "PostgreSQL", "Redis", "AWS", "Claude"];

/* Services & platforms: the souvenir shelf. image: "" shows a drawn placeholder.
   video (optional): path to a recording in assets/video (.webm or .mp4); it plays on hover, and image is the still shown first.
   brief (what it is, in plain words) + role (what I did) + stack: shown on the back of the card, which flips when the name is clicked.
   href (optional) turns the card into a link to a short case study; stats and cta show on that card. */
export const sites = [
  { name: "Astroverse", kind: "Backend APIs", who: "Buildd", image: "assets/img/site-astroverse.webp", video: "assets/video/Astroverse LP.webm", tint: "blush", brief: "A dating app that matches people using their Kundli (birth chart), with fewer but better matches.", role: "Founding engineer: database, login & security, matching algorithm, cloud, deployment pipelines.", stack: "PostgreSQL · JWT · AWS" },
  { name: "Arvind Sud (ClickNumero)", kind: "Report APIs & analytics", who: "ScaleX client", image: "assets/img/site-arvind.webp", video: "assets/video/Arvind Sud Report LP.webm", tint: "slate", brief: "A website where followers of a well-known astrologer order personalised numerology reports.", role: "Go APIs, database speed-ups, caching, third-party analytics integrations.", stack: "Go · Redis · AWS" },
  /* Hidden for now, bring back by removing the comment markers. The short case study page (wishup-website.html) is still in the repo.
  { name: "Wishup", kind: "Lead-gen website", who: "Hucentric", image: "", tint: "blush", stats: "+25% pageviews · −15% bounce · 10% lead conversion", href: "wishup-website.html", cta: "Read the short case study" },
  */
  { name: "MoneyFlow", kind: "Personal finance ledger", who: "Personal project", image: "assets/img/site-moneyflow.jpg", video: "assets/video/MoneyFlow LP.webm", tint: "wheat", brief: "A personal expense tracker that shows what you spent on, and who you spent it with.", role: "Solo build: database, login, APIs and the app itself.", stack: "Next.js · Postgres · Drizzle · JWT" },
  { name: "MedicoHub", kind: "Student community platform", who: "Personal project", image: "assets/img/site-medicohub.jpg", video: "assets/video/MedicoHub LP.webm", tint: "slate", brief: "A study community where MBBS students share notes, prepare for exams and help each other.", role: "Solo build: backend APIs, login, notes, exams, notifications, AI features, landing page.", stack: "Node · Express · MongoDB · Redis · Socket.IO" },
  { name: "MakeUGC", kind: "AI video engine", who: "Buildd", image: "assets/img/site-makeugc.jpg", video: "assets/video/MakeUGC LP.webm", tint: "sage", brief: "Turns a product link into a ready-to-post video ad using AI, in minutes.", role: "Built end to end: AI pipeline, cloud servers, storage, deployment.", stack: "Claude · ElevenLabs · ComfyUI · AWS" },
];

/* Off the clock: fridge door magnets.
   image: the souvenir magnet (transparent PNG/WebP in assets/img/magnets/).
   w: how wide it sits on the fridge, in px (it scales down on phones).
   photo: an optional travel photo for the tip card (otherwise it shows the magnet).
   A place without an image falls back to a coloured text magnet (color + shape: rect | round | tri).
   sample: true shows a small "sample" mark until you swap in your own tip. */
export const places = [
  { name: "Nainital",        state: "Uttarakhand", kind: "Lake town",    image: "assets/img/magnets/nainital.webp",        w: 190, photo: "", tip: "Row across the lake at 7 am, before the boats crowd in.", who: "", sample: true },
  { name: "Mussoorie",       state: "Uttarakhand", kind: "Hill station", image: "assets/img/magnets/mussoorie.webp",       w: 112, photo: "", tip: "Walk up to Lal Tibba at sunrise. The snow peaks show up before the haze does.", who: "", sample: true },
  { name: "McLeodganj",      state: "Himachal",    kind: "Little Lhasa", image: "assets/img/magnets/mcleodganj.webp",      w: 128, photo: "", tip: "Walk the kora around the temple at dusk, with the monks.", who: "", sample: true },
  { name: "Udaipur",         state: "Rajasthan",   kind: "City of Lakes", image: "assets/img/magnets/udaipur.webp",        w: 126, photo: "", tip: "Take the last boat on Lake Pichola and watch the City Palace light up.", who: "", sample: true },
  { name: "Jaipur",          state: "Rajasthan",   kind: "Pink City",    image: "assets/img/magnets/jaipur.webp",          w: 150, photo: "", tip: "See Hawa Mahal from the rooftop cafés across the road, not the street.", who: "", sample: true },
  { name: "Jibhi",           state: "Himachal",    kind: "Valley",       image: "assets/img/magnets/jibhi.webp",           w: 96,  photo: "", tip: "Carry cash. The nearest ATM is a long way down the valley.", who: "", sample: true },
  { name: "Jaisalmer",       state: "Rajasthan",   kind: "Golden City",  image: "assets/img/magnets/jaisalmer.webp",       w: 132, photo: "", tip: "Skip the safari crowds. Ask for Khuri village.", who: "", sample: true },
  { name: "Floating Market", state: "Thailand",    kind: "Market",       image: "assets/img/magnets/floating-market.webp", w: 140, photo: "", tip: "Get there by 7 am, before the tour buses, and eat straight off the boats.", who: "", sample: true },
];
