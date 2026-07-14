# RenderReady Labs

Premium, Stripe-compliant business website for **RenderReady Labs** — a professional video & photo editing agency.

## Quick start

```bash
npm install
cp .env.example .env.local   # add your Stripe keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe setup

1. Create a [Stripe account](https://dashboard.stripe.com/register) and copy test keys.
2. Set in `.env.local`:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` (e.g. `http://localhost:3000`)
3. Packages are created dynamically via Checkout `price_data` (no Dashboard prices required for demo).
4. Without keys, checkout shows a clear configuration message instead of failing silently.

## Brand kit

| Token | Value |
|-------|--------|
| Ink | `#0A0C10` |
| Surface | `#12151C` |
| Mist (text) | `#E8EAED` |
| Signal (accent) | `#E8FF47` |
| Teal | `#3DBFB0` |
| Display font | Montserrat |
| Body font | Source Sans 3 |

Logo: wordmark + icon in `src/components/Logo.tsx` and `public/favicon.svg`.

## Site map

- `/` Home
- `/about` About Us
- `/services` Services overview
- `/services/video-editing` Video packages
- `/services/photo-editing` Photo packages
- `/portfolio` Work showcase
- `/reviews` Testimonials (samples marked)
- `/contact` Contact + business address
- `/checkout` Packages + Stripe Checkout (policies linked)
- `/legal/*` Terms, Privacy, Refund, Return, Cancellation, Disclaimer, Disputes

## Business identity (demo)

Update `src/lib/site.ts` with your real legal name, registration, address, and phone before production. The footer and Contact page surface legal name, DBA, address, and support email for Stripe transparency.
