module.exports = {

  //env: "Which environments your script is designed to run in. Each environment brings with it a certain set of predefined global variables."
  //Remember: the node dev server doesn't itself run in the browser but is a node program.
  //without this, module.exports at the top of this file is not accepted by eslint.  (we could have the linter ignore it)
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'eslint:recommended',
    'plugin:react/recommended',
    "plugin:react-hooks/recommended",

    //react-app is from facebook's from Create React App
    //I think we have most of it from elsewhere, but not everything.
    // eqeqeq: "warn"
    "react-app",

    //react-app/jest is also from facebook's from Create React App
    //but based on https://github.com/jest-community/eslint-plugin-jest/
    // "react-app/jest", 

    //linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names
    'plugin:import/recommended',

    //accessibility rules on JSX elements
    'plugin:jsx-a11y/recommended',

    //https://typescript-eslint.io/getting-started
    'plugin:@typescript-eslint/recommended',

    //(no thanks!)
    //Runs Prettier as an ESLint rule and reports differences as individual ESLint issues
    // 'plugin:prettier/recommended' 

    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'eslint-config-prettier',
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'
        ],
      },
    },
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.

    //So that we don't need to import React just to use JSX
    "react/jsx-uses-react": "off", // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    "react/react-in-jsx-scope": "off", // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint,

    //In production you might want to change these:
    "no-debugger": "off",
    // "no-console": ["error", { allow: ["warn", "error"] }]

    //TODO: don't disallow this - it SHOULD adjust to TypeScript, but doesn't at the moment
    //"Note: You can provide types in runtime types using PropTypes and/or statically using TypeScript or Flow. This rule will validate your prop types regardless of how you define them."
    // "react/prop-types": "off"
  },
};