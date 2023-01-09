### This is a [Next.js -v13](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), Typescript, Tailwindcss, Prettier, Eslint and Husky.

![banner](/public/banner.jpg?raw=true)

## Getting Started

First, clone this repository to your local machine:

```bash
git clone http://github.com/danmesfin/Nextjs-starter-Template.git <my-project-name>
npm install
```

then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## scripts detail

- check-types:runs TypeScript's tsc CLI command and pretty prints any warnings/errors.
- check-format: asks Prettier to check all of our files (excluding the ones in .prettierignore) for formatting issues.
- check-lint: asks ESLint to check for any linting warnings/errors on an .ts, .tsx or .js files.
- format: tells prettier to automatically re-write all of our files with proper formatting.
- test-all: runs a number of the above commands in sequence. https://blog.jarrodwatts.com/nextjs-eslint-prettier-husky

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
