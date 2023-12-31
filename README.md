>

# Next JS Template

![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=flat&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-%23F7B93E.svg?style=flat&logo=prettier&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%23006AFF.svg?style=flat&logo=tailwind-css&logoColor=white)
![Headless UI](https://img.shields.io/badge/Headless%20UI-%23111827.svg?style=flat)
![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-%23E33332.svg?style=flat&logo=testing-library&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-%23C21325.svg?style=flat&logo=jest&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-%23E95E25.svg?style=flat&logo=cypress&logoColor=white)
![Lighthouse](https://img.shields.io/badge/Lighthouse-%23F47A20.svg?style=flat&logo=lighthouse&logoColor=white)

- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Recommended VSCode Extensions](#recommended-vscode-extensions)

## Installation

Open your command line interface (e.g., Terminal on macOS, Command Prompt on Windows, or a terminal emulator on Linux).

Navigate to the directory where you want to clone the repository. You can use the cd command to change directories. For example, to clone the repository into your home directory on a Unix-like system:

```sh
cd ~
```

Use the git clone command to clone the repository to the directory you cd'd to:

> Note: If you don't have git installed, you will need to install it [here](https://git-scm.com/).

```sh
git clone https://github.com/mariawarnes/next-template.git
```

Git will download the repository and create a local copy in a directory named "next-template" (the same name as the repository) in your current location. You can then navigate into this directory to work with the cloned code:

```sh
cd next-template
```

Once you are inside the project directory, run the following command to install the project's dependencies using npm (Node Package Manager):

> Note: If you don't have npm installed, you will need to install it, along with node [here](https://nodejs.org/en).

```sh
npm install
```

## Scripts

- `npm run dev`: Start the development server using Next.js.
- `npm run build`: Build the production-ready application.
- `npm run start`: Start the production server.
- `npm run format`: Run Prettier formatting.
- `npm run lint`: Run linting checks using ESLint.
- `npm run test`: Run Jest tests in watch mode.
- `npm run test:ci`: Run Jest tests in continuous integration mode.
- `npm run e2e:audit`: Open Cypress for end-to-end auditing tests.
- `npm run e2e:audit:headless`: Run headless Cypress tests with Chrome for auditing.

## Dependencies

### Production Dependencies

- `@headlessui/react`: React components for building accessible and customizable UIs.
- `next`: Framework for server-rendered React applications.
- `next-themes`: Utility for managing themes in Next.js applications.
- `react`: React library.
- `react-dom`: React DOM library.

### Development Dependencies

- `prettier`: Opinionated code formatter.

**TypeScript dependencies**

- `typescript`: TypeScript language support.
- `ts-node`: TypeScript execution environment.
- `@types/react`: TypeScript type declarations for React.
- `@types/react-dom`: TypeScript type declarations for React DOM.
- `@types/node`: TypeScript type declarations for Node.js.

## Recommended VSCode Extensions

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - Go to `Settings` > `editor.defaultFormatter` and set the Editor to Prettier
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
