# Daily Desk Todo

A polished React todo app for planning simple daily tasks. Daily Desk Todo includes a clean responsive interface, task progress tracking, and focused add, complete, and delete workflows.

## Features

- Add new tasks with whitespace trimming
- Mark tasks as complete or open
- Delete completed or unwanted tasks
- Live task summary for total, open, and done items
- Progress ring that updates as tasks are completed
- Empty state for a clean first-use experience
- Responsive layout for desktop and mobile screens
- ESLint configured for React and Jest globals

## Tech Stack

- React 19
- Vite 7
- CSS
- ESLint
- Testing Library and Jest dependencies

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

On Windows PowerShell, if `npm` is blocked by execution policy, use:

```powershell
npm.cmd run dev
npm.cmd run build
npm.cmd run lint
```

## Project Structure

```text
src/
  components/
    TodoApp.jsx
    TodoApp.test.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Deployment

This project can be deployed on GitHub Pages, Netlify, Vercel, or any static hosting platform that supports Vite builds.

Production output is generated in the `dist/` folder after running:

```bash
npm run build
```

## Repository

```text
https://github.com/abhishek989618-dev/daily-desk-todo.git
```
