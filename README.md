# Siddharth Shekhar: the Trek Journal

This is Siddharth Shekhar's portfolio, a backend developer's. A painted trail runs through it: his career is the route, and each section is an object picked up on the way. It reads as a backend developer's portfolio first. The hero is quiet, the work cards lead with metrics, and the case study walks through real backend decisions.

The layout, art and components come from the original "Trek Journal" template by Deeva Gupta. The words, projects, recordings and case study are Siddharth's.

- `index.html`: the home page
- `astroverse.html`: the Astroverse 2.0 backend case study
- `wishup-website.html`: an old, hidden short case study from the template. Nothing links to it; it is waiting to be rewritten or deleted.

**Look and feel:** `assets/css/site.css` holds the colour, type and spacing tokens, so change a token and not a component.

- **Colour:** paper `#F5EFE3`, ink `#1E1B16`, forest `#22352B` for the two dark chapters, terracotta `#C2553A` for marks, and ochre `#D99A2B` for the single primary action in a section.
- **Type:** Fraunces for headlines and numbers, Geist for UI and body, Geist Mono for eyebrows, and Caveat for margin notes only. All fonts are self-hosted in `assets/fonts/` (loaded by `assets/css/fonts.css`), so nothing is fetched from Google at run time.

It is a static site with no build step. It runs on GitHub Pages as it is.

## The page, top to bottom

| # | Section | Object | Content lives in |
|---|---|---|---|
| 1 | Hero | Painted trail with 5 stops (Diploma, B.Tech, Internship, ScaleX, your team). Tapping a stop opens a bottom sheet | `content.js` → `stops` (x / y place the pin on the art) |
| 2 | Story | Boarding pass on grid paper. Tearing off the stub reveals the skills and the numbers | `index.html` |
| 3 | Work | Postcards, front (product recording) and back (problem, role, result) side by side: Astroverse and Horocosmo | `content.js` → `work` |
| 4 | How I work | Five switchbacks of my process, the hat worn at each, where it showed up in real projects, plus the toolbox | `content.js` → `steps`, `tools` |
| 5 | Side trails | Shelf of project recordings. Hover plays the recording; tap flips the card to a short brief and "my role" | `content.js` → `sites` |
| 6 | Off the clock | Fridge door with souvenir magnets (hidden for now) | `content.js` → `places`, art in `assets/img/magnets/` |
| 7 | Say hello | Post office desk and corkboard wall (hidden for now) | `content.js` → `postcard`, `assets/data/postcards.json` |
| 8 | Footer | Rubber stamps on an ink pad (Email, Résumé, LinkedIn, Case study) | `content.js` → `links` |

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

You have to serve the site over HTTP because ES modules don't load from `file://`.

## Editing the content

Everything you would want to change is in `assets/js/content.js`.

- **Years of experience** are not typed in. They are worked out from `careerStart` (the first day of the ScaleX internship) and shown in half-year steps ("2.5+"). Any element with a `data-years` attribute is filled in by `main.js`, and so is the number in the page's meta description.
- **Links:** `links.email`, `links.linkedin` and `links.resume` (the résumé PDF in `assets/`).
- **Trail stops:** `stops` (pin label, dates, title, role, body).
- **Work postcards:** `work`. Each has a `video` path (without extension) to a looping mockup (`.webm` + `.mp4` + `-poster.jpg` in `assets/video/`).
- **Side trails shelf:** `sites`. Each card has:
  - `image`: the still shown first, 16:10, in `assets/img/`
  - `video`: a recording in `assets/video/` (`.webm` or `.mp4`, muted, 10 to 40 seconds). Leave it out and the drawn placeholder shows.
  - `brief`: what the project is, in plain words (back of the card)
  - `role`: the areas I worked on (back of the card)
  - `stack`: the tech, one short line (back of the card)

## Making a recording

The shelf recordings are scroll-throughs of each live site: a slow scroll that pauses at each section, then a smooth return to the top. To make a new one, capture frames of the page while scrolling (for example with Playwright) and encode them with ffmpeg (`libvpx-vp9`, no audio, about 1,600 px wide). Give the card a still of the first frame.

## Postcards (the contact form)

The Say hello section is hidden in `index.html`. To bring it back, delete the `hidden` attribute on the section and on its nav link.

Cards are saved to Firebase Realtime Database (`postcard.firebase` in `content.js`). **That URL still points at the template's original database; replace it with your own before turning the section on.**

- **Every card** goes to `/inbox` with the message, name, email and chosen stamp. Read them in the Firebase console under Realtime Database → `inbox`.
- **Cards for the wall:** if the visitor ticks "Pin it to the wall", a public copy (first name and message only) goes to `/wall` with `approved: false`. To pin it, open it in the console and set `approved` to `true`.
- **Your own card(s)** stay in `assets/data/postcards.json` and always show first.
- **If saving fails** (offline, blocked), "Drop it in" falls back to opening the visitor's email app with the card already written.
- **Security rules:** paste `firebase.rules.json` into Realtime Database → Rules. With them, nobody can read the inbox, nobody can edit or delete cards, and the wall only returns approved cards.

## Deploy on GitHub Pages

1. Go to the repo's **Settings → Pages** (GitHub Pages on a private repo needs a paid plan, or make the repo public first).
2. Under **Source**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
3. The site goes live at `https://siddharttth.github.io/siddharth-shekhar/`.
4. For a custom domain, enter it under **Settings → Pages → Custom domain**, add the DNS records GitHub shows you, and tick **Enforce HTTPS** once DNS has propagated.
