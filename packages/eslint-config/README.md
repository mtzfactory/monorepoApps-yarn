# eslint-config

Helper library for code linting using Eslint rules.

### Install the package

Install the module as a dev dependency:

```bash
yarn add --dev @monorepo-apps/eslint-config
```

After installing the module:

1. Add it to the project [Eslint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats):

   ```javascript
   module.exports = {
     extends: ['@monorepo-apps/eslint-config'],
   };
   ```

2. Add it to the project [Prettier configuration file](https://prettier.io/docs/en/configuration.html)

   ```javascript
   module.exports = require('@monorepo-apps/eslint-config/prettier.config');
   ```

## What does this includes

- [Eslint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/index.html)
- [Typescript Eslint](https://typescript-eslint.io/)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

### Eslint rules

- [@typescript-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment) Bans `@ts-<directive>` comments from being used or requires descriptions after directive.
- [@typescript-eslint/ban-types](https://typescript-eslint.io/rules/ban-types) Bans specific types from being used.
- [@typescript-eslint/explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type) Require explicit return types on functions and class methods.
- [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)Require explicit accessibility modifiers on class properties and methods.
- [@typescript-eslint/explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types) Require explicit return and argument types on exported functions' and classes' public class methods.
- [@typescript-eslint/indent](https://typescript-eslint.io/rules/indent) Enforce consistent indentation.
- [@typescript-eslint/member-delimiter-style](https://typescript-eslint.io/rules/member-delimiter-style) Require a specific member delimiter style for interfaces and type literals.
- [@typescript-eslint/no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface) Disallow the declaration of empty interfaces.
- [@typescript-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any) Disallow usage of the `any` type.
- [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars) Disallow unused variables.
- [@typescript-eslint/no-var-requires](https://typescript-eslint.io/rules/no-var-requires) Disallows the use of require statements except in import statements.
- [comma-dangle](https://eslint.org/docs/rules/comma-dangle) Requires or disallows trailing commas.
- [import/named](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md) Verifies that all named imports are part of the set of named exports in the referenced module.
- [import/order](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md) Enforce a convention in the order of `require()` / `import` statements.
- [multiline-ternary](https://eslint.org/docs/rules/multiline-ternary) Enforces or disallows newlines between operands of ternary expressions.
- [no-console](https://eslint.org/docs/rules/no-console#no-console) Disallows the use of console.
- [no-redeclare](https://eslint.org/docs/rules/no-redeclare#no-redeclare) Disallows variable redeclarations.
- [no-undef](https://eslint.org/docs/rules/no-undef#no-undef) Disallows the use of undeclared variables unless mentioned in /_global_/ comments.
- [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define#no-use-before-define) Disallows the use of variables before they are defined.
- [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars#no-unused-vars) Disallows unused variables.
- [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments#no-warning-comments) Disallows specified warning terms in comments.
- [quotes](https://eslint.org/docs/rules/quotes#quotes) Enforces the consistent use of either backticks, double, or single quotes.
- [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md) Enforce boolean attributes notation in JSX.
- [react/jsx-sort-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md) Enforce props alphabetical sorting.
- [react/jsx-uses-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md) Prevent React to be incorrectly marked as unused.
- [react/jsx-uses-vars](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md) Prevent variables used in JSX to be incorrectly marked as unused.
- [react/no-unescaped-entities](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md) Prevent invalid characters from appearing in markup.
- [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md) Prevent missing props validation in a React component definition.
- [semi](https://eslint.org/docs/rules/semi#semi) Requires or disallows semicolons instead of ASI.
- [sort-keys](https://eslint.org/docs/rules/sort-keys#sort-keys) Requires object keys to be sorted.

## Configure your VSCode

The recommended way to configure Visual Studio Code to work with this library is
to copy the directory `.vscode` to the new project you are adding this library,
once copied in the consumer project, when you will open the consumer project it will
recommend you to install the needed plugins.

Another option to configure VSCode is to do it manually:

- Install the following plugin's:

  - [Prettier](https://prettier.io/docs/en/editors.html#visual-studio-code)
  - [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- Add this configuration to your user or workspace VSCode settings:

```json
{
  "editor.formatOnSave": false,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```
