# Kirill Rybkov CV

Print-friendly resume site for blockchain and DeFi roles, built on top of the excellent [`BartoszJarocki/cv`](https://github.com/BartoszJarocki/cv) template.

## Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Resume Content

Most of the content lives in [`src/data/resume-data.tsx`](./src/data/resume-data.tsx). That file drives:

- header and summary
- work experience
- skills
- projects
- hackathons

## Local Development

```bash
yarn install
yarn dev
```

To create a production build:

```bash
yarn build
```

## Docker

```bash
docker compose build
docker compose up -d
docker compose down
```
