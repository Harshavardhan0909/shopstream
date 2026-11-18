# ShopStream

An Amazon-style e-commerce storefront built with plain HTML, CSS and JavaScript. No build step and no dependencies. It is a learning/portfolio project and is not affiliated with any retailer.

## Features

- Sticky header with category search, cart counter and orders link
- Auto-rotating hero banner and category cards
- 24 products with ratings, discounts, "Deal" badges
- Filters: category, price range, customer rating; sorting
- Product detail modal, Add to Cart and Buy Now
- Cart drawer with quantity controls, persisted in `localStorage`
- Checkout form with order summary (delivery, tax) and order confirmation
- Order history saved locally
- Responsive layout (desktop and mobile)

## Run locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` and visit http://localhost:8000.

## Deploy (GitHub Pages, free)

1. Create a new GitHub repository (for example `shopstream`) and push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ShopStream storefront"
   git branch -M main
   git remote add origin https://github.com/<your-username>/shopstream.git
   git push -u origin main
   ```
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. The included workflow (`.github/workflows/pages.yml`) runs on every push. When it finishes, your live link is:
   `https://<your-username>.github.io/shopstream/`

Alternative: drag the folder onto https://app.netlify.com/drop or run `npx vercel` for an instant live URL.

## Tech

HTML5, CSS3 (grid/flexbox), vanilla ES6, `localStorage`.
