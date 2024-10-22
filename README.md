# Dashboard Page

This application uses NextJS for Dashboard web application. The application will manage the dashboard.

## Targets

- Initialize a Next.js application using a single command line or migrate to the Next.js latest version from current practice.
- Apply all the knowledge learned about Next JS into practice
- Understand when to use the server side and when to use the client side.
- Write unit tests and acquire coverage greater than 80%.

## Requirements

- Users can view the product list
- Users can search for products by product name
- Users can filter products by clicking on the filter button.
- Users can change pages by clicking on the Previous button or the Next button.
- Users can switch to dark or light mode by clicking the switch

## Technical stacks

- ⚡ [Next.js](https://nextjs.org/) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org/)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com/)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) for efficiently merge Tailwind CSS classes without style conflicts
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org/)
- 💖 Code Formatter with [Prettier](https://prettier.io/)
- 🦊 [Husky](https://github.com/typicode/husky) for Git Hooks
- 🚫 [Lint-staged](https://github.com/lint-staged/lint-staged) for running linters on Git staged files
- 🦺 Unit Testing with Jest and React Testing Library
- ☂️ Code coverage with [V8](https://v8.dev/blog/javascript-code-coverage)
- 🎉 Storybook for UI development

## Developer tools

- [pnpm](https://pnpm.io/)
- [eslint](https://eslint.org/)
- [prettier](https://storybook.js.org/)
- [husky](https://www.npmjs.com/package/husky)
- [commitlint](https://commitlint.js.org/#/)

## Design on figma

- Design via [Figma](https://www.figma.com/design/kyzwfLIAiVu8tklQk2qUAn/WunderUI-(Preview)?node-id=0-20627&node-type=frame&t=AVcYhjdEo6qMOsQe-0)

## Editor

- Visual Studio Code

## Author

- **Hoa Nguyen**
  - Email: hoa.nguyen@asnet.com.vn
  - GitLab: [@hoa.nguyen](https://gitlab.asoft-python.com/hoa.nguyen)
  - Slack: hoa.nguyen

## Project structure
```shell
.
├── README.md
├── .husky
├── .storybook
├── .vscode
├── public
├── src
│   ├── app
│   ├── components
│   ├── constants
│   ├── context
│   ├── icons
│   ├── layouts
│   ├── mocks
│   ├── services
│   ├── themes
│   ├── types
│   ├── models
│   ├── types
│   ├── ui
├── .editorconfig
├── .eslintrc.json
├── .lintstagedrc
├── .npmrc
├── .prettierrc
├── jest.config.ts
├── jest.setup.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## How to run

### Prerequisites

Make sure you install packages with correct version below:
  - [node v18.18.2+](https://nodejs.org/en/download/package-manager)
  - [pnpm 9.1.2+](https://pnpm.io/installation)

- **Note:**:
    - Please add `.env` into root of project source code, refer `.env.sample`.

### Get source code

| Command                                                                                                            | Action                    |
| :------------------------------------------------------------------------------------------------------------------| :------------------------ |
| `git clone https://gitlab.asoft-python.com/hoa.nguyen/nextjs.git`| Clone Repository with HTTPS |
| `$ cd nextjs`                                                                                              | Redirect to folder        |

### Build and Run app

| Command            | Action                                        | Port                  |
| :----------------- | :---------------------------------------------|:--------------------- |
| `$ pnpm install`   | Install packages dependencies                 | N/A                   |
| `$ pnpm build`     | Build app with optimized production mode      | N/A                   |
| `$ pnpm start`     | Starts the application in production mode.    | http://localhost:3000 |
| `$ pnpm dev`       | Run the app in development mode               | http://localhost:3000 |
| `$ pnpm storybook` | Run Storybook.                                | http://localhost:6006 |
| `$ pnpm test`      | Run Unit Test                                 | N/A                   |
| `$ pnpm coverage`  | Generate code coverage                        | N/A                   |
