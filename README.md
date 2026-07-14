# Maisy Holehouse — Portfolio

Plain HTML/CSS/JS, no build tools required. Open `index.html` in a browser to
preview locally, or push the whole folder to GitHub (see **Deploying** below).

## Pending: apparel photos

`apparel.html` currently has 4 dashed placeholder tiles waiting on real
photos: **prom dress** (plus its commentary text), **denim top**, **navy &
white striped shorts**, and **red top**. Once you have the files:

1. Drop each image into `images/`, e.g. `images/prom-dress.jpg`.
2. In `apparel.html`, find the matching `<div class="thumb placeholder-tile">...</div>`
   and replace it with:
   ```html
   <div class="thumb"><img src="images/prom-dress.jpg" alt="Prom dress"></div>
   ```
3. For the prom dress, also fill in the empty `<p></p>` right below its
   heading with the commentary text.

## Files

```
index.html       Home
projects.html    Projects hub (links to the 4 sections below)
research.html    Projects / Research
apparel.html     Projects / Apparel
video.html       Projects / Video
audio.html       Projects / Audio (DJ)
education.html   Education
contact.html     Contact
style.css        All styling, one file
main.js          Shared nav + footer (edit once, updates every page)
images/          Put your own photos here
```

Every page loads the same `style.css` and `main.js`, and the header/footer are
injected by `main.js` so you only ever edit navigation in **one place**
(the `NAV_LINKS` list at the top of `main.js`).

## Adding a new photo / project

1. Drop the image file into the `images/` folder, e.g. `images/mycelium-02.jpg`.
   Keep file names lowercase with hyphens, no spaces.
2. Open the page you want it on (e.g. `apparel.html`) and find a `<div class="work-card">`
   block to copy, or one of the dashed **"Add your next..."** placeholder tiles.
3. Replace the placeholder tile's contents with a real image:

   ```html
   <div class="thumb"><img src="images/mycelium-02.jpg" alt="Describe the photo"></div>
   ```

4. Update the heading, year/tag, and description text right below it.
5. Save, then commit + push to GitHub (see below). That's it — no build step.

To add another **video**, swap the `src="..."` on the YouTube `<iframe>` in
`video.html` for a new video's embed URL (from YouTube's Share → Embed), or
duplicate the whole `.embed-frame` block for a second video.

To add another **mix**, do the same in `audio.html` — get a new embed URL from
SoundCloud's "Share" → "Embed" panel, or just swap the `url=` part of the
existing `src` for your new track link.

## One-time setup

- **LinkedIn**: open `main.js`, find `LINKEDIN_URL` near the top, and paste in
  your real profile URL. It automatically updates the footer on every page
  and the button on the Education page.
- **Instagram / SoundCloud**: already linked to the accounts you gave me
  (`@maisystravel` and your SoundCloud mix). If those ever change, search
  each file for the old link and replace it — or ask me to do a project-wide
  swap next time.
- **Images currently hotlinked from Framer**: a few photos (the woven material
  shot, the work-table gif) are pulled directly from your old Framer site's
  image URLs so the pages look complete right away. These will keep working
  as long as that Framer site exists. When you have a moment, download those
  files and drop them into `images/`, then update the `src="..."` to point
  locally (e.g. `images/apparel-workbench.gif`) so the site doesn't depend on
  Framer at all.

## Deploying to GitHub Pages

1. Create a new GitHub repo and push all these files to the `main` branch
   (same as last time — just replace the old files with these).
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and `/ (root)` folder, then Save.
4. GitHub gives you a URL like `https://yourusername.github.io/reponame/` —
   that's your live site. Every time you push a change (new photo, new text),
   it updates automatically within a minute or two.

## Notes on structure

- Nav is: **Home · Projects (Research / Apparel / Video / Audio) · Education · Contact.**
  If you'd rather have Education or Contact live *under* Projects, or want a
  different arrangement, edit the `NAV_LINKS` array in `main.js` — the dropdown
  and page-highlighting are generated from that list automatically.
- The dashed "add your next project" tiles on `research.html`, `apparel.html`,
  `video.html`, and `audio.html` are just visual reminders — delete them
  whenever you don't need the nudge anymore.
