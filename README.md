# Yashaswini Singh Shaktawat — Portfolio

An immersive, edgy-but-minimal portfolio for a full-stack engineer. Built to marry
Dieter Rams' "less but better" minimalism with a crazy, kinetic, on-chain feel.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for the strict grid system
- **Framer Motion** for scroll-driven & kinetic motion
- Custom cursor, film grain, preloader, marquees

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build && npm run start
```

## Structure

```
app/            # layout, global styles, page
components/     # Hero, About, Experience, Projects, Skills, Awards, Contact, Cursor, ...
data/content.ts # single source of truth — edit your content here
```

To update content (experience, projects, links, traits), edit `data/content.ts`.
