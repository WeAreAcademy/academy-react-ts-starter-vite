# React app (Vite)

## Feature summary

-   React app
-   TypeScript
-   CI with GitHub Actions
-   eslint and custom config
-   Formatting with prettier
-   Testing with vitest and react-testing-library
-   vscode debugger launch config
-   Vite
    -   Type-checking and linting errors presented into the browser (vite-plugin-checker)
-   As little other junk as possible

## Attaching the vscode javascript debugger to your react app (in dev)

(This is meant an alternative to the excellent chrome devtools)

-   Start the dev server (e.g. yarn dev)
-   In vscode, switch to the "Run and debug" tab from the side menu
-   At the top, click the green play button entitled "Launch Chrome against localhost"
    -   Browser should also launch, eventually
-   Add breakpoint(s) to your react code in vscode, or add the `debugger` keyword
-   Interact with the React app so that your breakpoints / `debugger` keyword are encountered.
-   vscode's debugger should now present you with the local variables, the call stack, etc.
-   Use the transport controls at the top to step through your code or continue execution

## Vite learning notes

-   [Vite guide](https://vitejs.dev/guide/)
-   [About the `public` directory](https://vitejs.dev/guide/assets.html#the-public-directory)
-   [Vite powerful React project setup](https://dev.to/equiman/vite-powerful-react-project-g4m) (Camilo Martinez)

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

Vite will not show the linting errors in the browser unless they're error level. You can see warnings in the dev console output.

(You may have to cause the offending file to be loaded/reloaded before the linting error is emitted.)

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
