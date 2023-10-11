>

# Next JS Template

![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=flat&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-%23F7B93E.svg?style=flat&logo=prettier&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%23006AFF.svg?style=flat&logo=tailwind-css&logoColor=white)
![Headless UI](https://img.shields.io/badge/Headless%20UI-%23111827.svg?style=flat)
![Heroicons](https://img.shields.io/badge/Heroicons-%238B5CF6.svg?style=flat&logo=heroicons&logoColor=white)
![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-%23E33332.svg?style=flat&logo=testing-library&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-%23C21325.svg?style=flat&logo=jest&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-%23E95E25.svg?style=flat&logo=cypress&logoColor=white)
![Lighthouse](https://img.shields.io/badge/Lighthouse-%23F47A20.svg?style=flat&logo=lighthouse&logoColor=white)
![JSON Web Token](https://img.shields.io/badge/JSON%20Web%20Token-%23376EE8.svg?style=flat&logo=json-web-tokens&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-%23E434AA.svg?style=flat&logo=graphql&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth-%23E4E4E4.svg?style=flat&logo=next.js&logoColor=black)

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

- `@grafbase/sdk`: Connect your APIs, databases and microservices to a unified API.
- `@headlessui/react`: React components for building accessible and customizable UIs.
- `@heroicons/react`: React icons.
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

**Tailwind dependencies**

- `postcss`: CSS preprocessor.
- `autoprefixer`: CSS autoprefixer.
- `tailwindcss`: Utility-first CSS framework.
- `prettier-plugin-tailwindcss`: Prettier plugin for Tailwind CSS.

**ESLint dependencies**

- `eslint`: ESLint for linting.
- `eslint-config-next`: ESLint configuration for Next.js projects.
- `eslint-plugin-jsx-a11y`: ESLint plugin for accessibility.

**Jest dependencies**

- `jest`: JavaScript testing framework.
- `@types/jest`: TypeScript type declarations for Jest.
- `jest-axe`: Jest plugin for axe-core accessibility testing.
- `@types/jest-axe`: TypeScript type declarations for Jest Axe.
- `@testing-library/react`: Testing utilities for React.
- `@testing-library/jest-dom`: Jest DOM testing utilities.
- `@testing-library/user-event`: Testing utilities for user interactions.
- `jest-environment-jsdom`: Jest environment for testing in a browser-like environment.

**Cypress dependencies**

- `cypress`: End-to-end testing framework.
- `start-server-and-test`: Utility to start servers and run tests.
- `@cypress-audit/lighthouse`: Lighthouse plugin for Cypress auditing.
- `@cypress-audit/pa11y`: Pa11y plugin for Cypress auditing.
- `eslint-plugin-cypress`: ESLint plugin for Cypress.
- `lighthouse`: Lighthouse for performance auditing.

**Login/Auth dependencies**

- `@types/jsonwebtoken`: Provides TypeScript type definitions for JSON Web Tokens.
- `graphql-request`: A tool for sending GraphQL queries to a GraphQL server.
- `jsonwebtoken`: Creating and verify JSON Web Tokens for secure data user authentication.
- `next-auth`: Library for user authentication and session management for Next.js applications.
