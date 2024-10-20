# My Nuxt 3 project

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

## GraphQL use

Start by create gql files in "queries" folder, ".nuxt/gql" files will be automatically updated.
Then, you can write new type in "types" folder and use them in the project.

## GitHub Pages

Define .env file with:\
`GQL_HOST=`\
Go in the Github repository settings, in "Secrets and variables" / "Actions" / "Variables", click "New repository variable".

Look the result (static version):\
https://syldel.github.io/nuxt-fun-project/

Help here:\
https://dev.to/angular/build-deploy-angular-apps-in-github-pages-using-github-actions-e7a

**To enable GITHUB_TOKEN:**\
Go in the Github repository settings, in "Actions" / "General" / "Workflow permissions", enable "Read and write permissions"!

### Relative path problems

**baseURL**\
By default, the Nuxt baseURL is set to '/'.\
However, the baseURL can be updated at runtime by setting the NUXT_APP_BASE_URL as an environment variable.

![github-env](https://github.com/user-attachments/assets/d0b6e0af-b68d-47e5-951e-ef7f2b20444e)

**underscore-prefixed directories**\
By default GitHub Pages ignores underscore-prefixed directories. The fix is to add a .nojekyll file.
