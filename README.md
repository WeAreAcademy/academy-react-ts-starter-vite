# React app (Vite)

### Vite learning notes

-   [Vite guide](https://vitejs.dev/guide/)
-   [About the `public` directory](https://vitejs.dev/guide/assets.html#the-public-directory)

### Creation history

-   Created initially with vite, with a react-ts template

```bash
yarn create vite academy-react-starter-vite --template react-ts
```

-   Removed all unnecessary css and JSX

-   Set up testing:

Add test script in package.json (to run vitest)

Add vitest and jsdom, and @testing-library/react and others:
`yarn add -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event @vitejs/plugin-react`

Update vite.config.ts [see vitetest + react-testing-lib example](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts)

Add `src/test/setup.ts` with following content, following the new `vite.config.ts` from above:
`import '@testing-library/jest-dom'`

To tsconfig.json add `"types": ["vitest/globals"]` - TODO: is the above a required step?

Add `src/utils/test-utils.ts` from `https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/src/utils/test-utils.tsx`
