# Maisy Holehouse — Portfolio Site

A static HTML/CSS website ready to deploy on GitHub Pages.

## Files
- `index.html` — Homepage
- `experience.html` — Experience page
- `projects.html` — Projects page
- `writing.html` — Thoughts/writing page
- `contact.html` — Contact page
- `style.css` — Shared styles

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `maisy-site`)
2. Upload all files to the repo root
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch → `/root` folder → Save
5. Your site will be live at `https://yourusername.github.io/maisy-site`

## Connecting your custom domain

1. In your GitHub repo, go to **Settings → Pages**
2. Under **Custom domain**, enter your domain (e.g. `maisy.studio`)
3. At your domain registrar (GoDaddy, Namecheap, etc.), add these DNS records:

**Option A — Apex domain (maisy.studio):**
Add 4 A records pointing to GitHub's IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Option B — www subdomain:**
Add a CNAME record: `www` → `yourusername.github.io`

4. Create a file called `CNAME` in your repo root containing just your domain:
```
maisy.studio
```

DNS can take up to 48 hours to propagate. GitHub will handle the HTTPS certificate automatically.

## Customizing

- Swap placeholder images by replacing `src` URLs in the HTML files
- Update dates and company names in `experience.html`
- Add new writing entries in `writing.html` by copying an existing `.writing-item` block
- Colors and fonts are all in the `:root` block in `style.css`
