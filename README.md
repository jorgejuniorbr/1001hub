# 1001HUB

Organic playlist promotion and music curation platform for independent artists, DJs, producers and labels.

## Tech Stack

- **Next.js 15** — App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **lucide-react** — icons
- **Vercel** — deployment

## Project Structure

```
app/
  layout.tsx              ← Root layout + metadata
  page.tsx                ← Home page
  submit/page.tsx         ← Submit music page
  rankings/page.tsx       ← Full rankings page
  globals.css             ← Global styles + Tailwind

components/
  layout/
    Header.tsx            ← Sticky nav
    Footer.tsx            ← Footer + CTA block
  home/
    Hero.tsx              ← Hero section (mobile card + desktop visual)
    Intro.tsx             ← Platform intro
    EditorialBlocks.tsx   ← Editorial feature grid
    SelectPlan.tsx        ← 1001HUB Select pricing card
    Rankings.tsx          ← Rankings section (homepage preview)
    HowItWorks.tsx        ← 4-step process
    TrustAndBenefits.tsx  ← No bots, safety section
    DashboardPreview.tsx  ← Artist dashboard mockup
    FAQ.tsx               ← Accordion FAQ
  ui/
    Button.tsx            ← Reusable button (primary/outline/ghost)
    SectionLabel.tsx      ← Section tag label
    Container.tsx         ← Max-width wrapper
  submit/
    SubmitHero.tsx        ← Submit page hero
    SubmitForm.tsx        ← Submission form + success state
  rankings/
    RankingCountrySelector.tsx  ← Country list selector
    RankingTable.tsx            ← Ranking entries table
    RankingsPageContent.tsx     ← Full rankings page assembly

data/
  countries.ts            ← Country list
  rankings.ts             ← DJ rankings by country

lib/
  utils.ts                ← cx(), getTrendClass()

types/
  index.ts                ← Shared TypeScript types
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

Push to GitHub and import the repository on [vercel.com](https://vercel.com). Zero configuration required — Next.js is auto-detected.

## Public Offer

**1001HUB Select — €49/month**

- 1 active song per month
- Organic playlist promotion
- Human curation before approval
- Minimum 1,001+ monthly plays
- Campaign tracking
- Cancel anytime

> Private upgrades, additional songs and discounts are internal offers only. They do not appear on the public website.

## Next Steps (Backend Integration)

- [ ] Connect `/submit` form to a database (Supabase, PlanetScale or MongoDB)
- [ ] Add authentication (NextAuth.js or Clerk) for artist dashboard
- [ ] Integrate Stripe for €49/month recurring subscriptions
- [ ] Build admin panel at `/admin` (protected route)
- [ ] Replace static `rankings.ts` data with CMS or database-driven content
- [ ] Add email notifications on submission (Resend or SendGrid)
