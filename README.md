# React app (Vite)

## Vite learning notes

-   [Vite guide](https://vitejs.dev/guide/)
-   [About the `public` directory](https://vitejs.dev/guide/assets.html#the-public-directory)

## Creation history

-   Created initially with vite, with a react-ts template

```bash
yarn create vite academy-react-starter-vite --template react-ts
```

-   Removed all unnecessary css and JSX

## Linting Setup

```
yarn add -D vite-plugin-eslint eslint eslint-config-react-app
touch .eslintrc
```

Contents for .eslintrc:

```
{
    "extends": [
        "react-app"
    ]
}
```

### Observing linting reportings:

Install the [vscode eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to see linting errors highlit in the editor.

If you already have it installed you may have to reload vscode after you've made the .eslintrc (or at least run the command `developer:reload window` or `ESLint: Restart ESLint Server`), before the editor shows you linting problems.

Vite will not show the linting errors in the browser, rather in the dev console output.

You may have to cause the offending file to be loaded/reloaded before the linting error is emitted.

## Testing Setup

-   Set up testing:

Add test script in package.json (to run vitest)

### Simplest testing setup - if you're not testing react components

-   Add vitest only: `yarn add -D vitest`
-   Then in each test import: `import { describe, test, expect } from 'vitest';`

### Fuller testing setup - to allow testing react components

Add vitest and jsdom, and @testing-library/react and others:
`yarn add -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event @vitejs/plugin-react`

Update vite.config.ts [see vitetest + react-testing-lib example](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts)

Add `src/test/setup.ts` with following content, following the new `vite.config.ts` from above:
`import '@testing-library/jest-dom'`

To tsconfig.json add `"types": ["vitest/globals"]` - TODO: is the above a required step?

Add `src/utils/test-utils.ts` from `https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/src/utils/test-utils.tsx`

-   Set up CI (github actions)

add `.github/workflows/ci.yaml` - will only do a subset of tasks, initially

-   add prettier

`yarn add -D prettier`
