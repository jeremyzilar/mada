# Contributing to this site

This guide is for people who add content through **[GitHub in the browser](https://github.com/jeremyzilar/mada)** only (no local Jekyll or command line required). Maintainers still build and publish the site from the repository.

## Add a new news post

News stories are Markdown files in [`_news/`](https://github.com/jeremyzilar/mada/tree/main/_news). Each file becomes a page at `https://mada.sfai.org/news/<filename-without-extension>/` when the site is deployed.

### Step 1: Pick a filename (this sets the URL)

1. Open the [`_news` folder on GitHub](https://github.com/jeremyzilar/mada/tree/main/_news).
2. Choose a short basename (lowercase, words separated by hyphens), for example: `spring-fundraiser-2026`.
3. Your Markdown file **must** be named exactly: **`spring-fundraiser-2026.md`**. The part before `.md` is used in the site URL—no separate `slug` field is needed.

The published URL will be: `https://mada.sfai.org/news/spring-fundraiser-2026/`.

### Step 2: Add images (optional but recommended)

Featured images and extra pictures for a story live under [`assets/images/news/`](https://github.com/jeremyzilar/mada/tree/main/assets/images/news).

1. Open [`assets/images/news`](https://github.com/jeremyzilar/mada/tree/main/assets/images/news).
2. Click **Add file** → **Create new file**.
3. In the filename box, use a **folder per story**, for example: `spring-fundraiser-2026/featured.jpg`  
   (GitHub creates the folder when the path contains a `/`.)
4. Upload or paste is not available for binary files in “Create new file” in all cases—if you need to upload a binary image, use **Add file** → **Upload files** instead, drag your files into `assets/images/news/spring-fundraiser-2026/`, then commit.
5. Commit the new files to the same branch you use for the news post (often `main`, or a branch for a pull request).

Note the **site path** you will put in front matter, for example:

`/assets/images/news/spring-fundraiser-2026/featured.jpg`

### Copy as Markdown from Google Docs

Google Docs can put **Markdown on your clipboard** so you can paste the story body into GitHub without messy HTML. Full details are in Google’s help: [Use Markdown in Google Docs](https://support.google.com/docs/answer/12014036?hl=en).

1. Open your document in **Google Docs on the web** (desktop).
2. Turn Markdown copy/paste on: **Tools → Preferences**, then check **Enable Markdown** (this unlocks **Copy as Markdown** and **Paste from Markdown** in the right-click menu; it may be off by default).
3. **Select** the text you want (a section, or **Edit → Select all** for the whole story body—do not include your YAML front matter; you will type that separately in GitHub).
4. **Right-click** the selection and choose **Copy as Markdown**.
5. In GitHub, when you create or edit the `.md` file, paste **below** the closing `---` of the front matter. Skim the result: fix any odd headings or links, and remember that **images** still need to be uploaded under `assets/images/news/<basename>/` (Step 2) and referenced with `![alt](/assets/images/news/.../file.jpg)` in the Markdown.

**Whole document at once:** You can also use **File → Download → Markdown (.md)**, open the downloaded file, copy the body portion, and paste into GitHub the same way.

### Step 3: Create the news Markdown file

1. Go back to [`_news`](https://github.com/jeremyzilar/mada/tree/main/_news).
2. Click **Add file** → **Create new file**.
3. Name the file `<basename>.md` (for example `spring-fundraiser-2026.md`).
4. Copy the **front matter template** below into the editor, then fill in every value.
5. Below the closing `---`, paste or write the article body in Markdown (for Google Docs, use **Copy as Markdown** as described above).
6. Click **Commit new file** (or **Propose new file** / open a **pull request**, depending on your permissions).

### Front matter template (copy everything between the lines)

```yaml
---
title: Your headline
deck: "One or two sentences summarizing the story for listings and the top of the page."
date: 2026-04-22
author: Writer or organization name
featured_image: /assets/images/news/your-filename-basename/featured.jpg
featured_image_alt: "Short description of the image for accessibility and social previews."
# featured_link: "https://example.com/path-to-full-story"
---
```

Uncomment and set `featured_link` only when the main story lives on another site (the page will show a **Visit example.com** style button at the top).

Replace placeholders as follows:

| Field | What to put |
|--------|----------------|
| `title` | Display headline. |
| `deck` | Subhead / summary (use quotes if it contains colons or special characters). |
| `date` | Publication date as `YYYY-MM-DD` (used for sorting on the [News index](https://github.com/jeremyzilar/mada/blob/main/news/index.md)). |
| `author` | Byline after the word **By** (do not include “By” in the value—e.g. `Jamie Blosser, Midtown Arts and Design Alliance`). |
| `featured_image` | Path from site root, starting with `/assets/images/news/...` as uploaded in Step 2. Use the **same folder name as your `.md` basename** (e.g. file `spring-fundraiser-2026.md` → `/assets/images/news/spring-fundraiser-2026/featured.jpg`). If you have no image yet, ask a maintainer or use another story’s pattern after images exist. |
| `featured_image_alt` | Description of the featured image for screen readers and SEO. |
| `featured_link` | **Optional.** Full URL (`https://…`) where the story primarily lives on another site. When set, the post shows a button at the top labeled **Visit** plus the hostname (for example `Visit example.com`). Opens in a new tab. Omit this line if the story exists only on MADA. |

Optional: if the **filename** must differ from the URL you want, a maintainer can set a custom `permalink` in the file; otherwise the URL is always `/news/<basename>/` from the filename.

### Optional front matter (less common)

| Field | When to use |
|--------|-------------|
| `republished_note` + `republished_url` | Attribution line with a “Read it there »” link to the primary publication. **Do not use `canonical_url`** in front matter—Jekyll’s SEO plugin treats that as *this page’s* canonical URL. |
| `related_instagram` | URL of an Instagram post to embed (desktop layout). |
| `show_partners: true` | Include the partners block above the email signup (used for select long-form pieces). |

### Maintainers: redirect an old page to a news post

The site uses the [`jekyll-redirect-from`](https://github.com/jekyll/jekyll-redirect-from) plugin. On the **destination** news file, add a `redirect_from` list of old paths (no `https://`):

```yaml
redirect_from:
  - /old-path/
  - /old-path
```

After deploy, those URLs serve a short HTML redirect to the new `/news/<basename>/` URL. Remove the old page from `_pages/` (or elsewhere) so only the news post owns the content.

### Step 4: Get it published

- If you can merge to **`main`**: after your commit is on `main`, the usual deploy process for this repo will pick up the change.
- If you use **pull requests**: open a PR from your branch into `main`, request review, and merge when approved.

You do not need to run Jekyll locally; maintainers verify the build if needed.

### Quick links

| What | GitHub link |
|------|-------------|
| Repository home | [github.com/jeremyzilar/mada](https://github.com/jeremyzilar/mada) |
| News posts (`_news`) | [github.com/jeremyzilar/mada/tree/main/_news](https://github.com/jeremyzilar/mada/tree/main/_news) |
| News listing page | [github.com/jeremyzilar/mada/blob/main/news/index.md](https://github.com/jeremyzilar/mada/blob/main/news/index.md) |
| News images | [github.com/jeremyzilar/mada/tree/main/assets/images/news](https://github.com/jeremyzilar/mada/tree/main/assets/images/news) |
| Image author notes (plain text) | [github.com/jeremyzilar/mada/blob/main/assets/images/news/README](https://github.com/jeremyzilar/mada/blob/main/assets/images/news/README) |
| Example news post | [github.com/jeremyzilar/mada/blob/main/_news/inclusive-creative-spaces-santa-fe-op-ed.md](https://github.com/jeremyzilar/mada/blob/main/_news/inclusive-creative-spaces-santa-fe-op-ed.md) |

If your default branch is not `main`, replace `main` in those URLs with your branch name.
