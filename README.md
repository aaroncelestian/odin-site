# Odin website

Static landing page for Odin — no build step, just `index.html` + `style.css`.

## Preview locally

```bash
open index.html
```

or serve it:

```bash
python3 -m http.server 8000
```

## Publish with GitHub Pages

1. Create a repo (e.g. `odin-site`) and push this folder.
2. Repo → Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Your site goes live at `https://<username>.github.io/odin-site/`.

Use that URL as the **Homepage URL** when registering the Odin Web GitHub OAuth app.
