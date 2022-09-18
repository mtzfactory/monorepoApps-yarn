![React Native](https://img.shields.io/badge/react_native_v0.70-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Testig-Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

# A React Native Monorepo Test With Yarn Workspaces

This repository is just a PoC of a RN mono-repo using [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces#search).

## Installation

Follow this instructions to install the dependencies:

1. Clone the repo:

   ```bash
   git clone git@github.com:mtzfactory/monorepoApps-yarn.git
   ```

2. Install dependencies:

   ```bash
   cd monorepoApps-yarn
   yarn
   ```

## Folder structure

The mono-repo uses `yarn workspaces` to help us organize the repository.

The folder structure is divided mainly into two workspaces: `apps` and `packages`,
with the following structure:

```
├── apps/
│   └──  my-app/
├── packages/
│   ├── eslint-config/
│   ├── mobile/
│   └── ui/
└── package.json
```

The `apps` folder keeps the apps:

- `my-app/`, folder containing a basic app logic.

The `packages` folder keeps all the shared packages used by the apps:

- `eslint-config/`, folder containing the eslint rules shared between our codebase.
- `mobile/`, folder containing the native side of the apps, with the RN package.
- `trades-ui/`, folder containing the implementation of a basic UI library.

## Starting the app

Start the metro server with the following command:

`yarn mobile start`

Build the app and start the simulator with the following commands:

`yarn mobile {andorid|ios}`

## Available commands

Common commands:

- `yarn lint`, to analyze the code to quickly find problems.
- `yarn reset`, to reset the _node_modules_.
- `yarn test`, to run the tests in the different packages.

Package commands:

- `yarn mobile {package_command}`

## Working with workspaces

### Runing workspace commands

The project configuration should enable us to run the available package commands
from the root directory, for example:

```bash
yarn <package_name> <command>
```

To enable this option, we have to add to the root package scripts section a line like:

```bash
"scripts": {
  "<package_name": "yarn workspace <package_name>"
  ...
}
```

### Adding dependencies to nohoist

The project is configured to use the [nohoist][nohoist]
feature from _yarn workspaces_ for the react packages, so React Native can find the
packages in its workspace _node_modules_ directory.

If we add a new dependency to the yarn workspaces nohoist section, we have to run
the following command:

```bash
yarn reset && yarn
```

[nohoist]: https://classic.yarnpkg.com/blog/2018/02/15/nohoist/
