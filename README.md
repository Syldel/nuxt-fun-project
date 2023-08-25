# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## GitHub Pages

Define .env file with:
`GQL_HOST=`
Go in the Github repository settings, in "Secrets and variables" / "Actions" / "Variables", click "New repository variable".

Look the result (static version):
https://syldel.github.io/nuxt-fun-project/

Help here:
https://dev.to/angular/build-deploy-angular-apps-in-github-pages-using-github-actions-e7a

To enable GITHUB_TOKEN:
Go in the Github repository settings, in "Actions" / "General" / "Workflow permissions", enable "Read and write permissions"!