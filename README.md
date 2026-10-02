# Task Manager Frontend

A lightweight React app for creating, editing, completing, and deleting tasks. Tasks are stored locally in the browser, so they remain after a refresh on the same device and browser.

## Features

- Add a task with the task form.
- Edit an existing task and save the change.
- Mark a task complete or incomplete.
- Delete a task.
- Persist the task list in browser `localStorage`.

## Requirements

- Node.js 16 or later
- npm

## Run locally

```bash
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Starts the development server. |
| `npm test` | Runs the test runner. |
| `npm run build` | Creates an optimized production build in `build/`. |

## Data persistence

The app saves its task array under the `tasks` key in `localStorage`:

```json
[
  { "name": "Review pull request", "completed": false }
]
```

At startup, the app reads this key and restores the saved task list. Invalid saved JSON is discarded so that it cannot prevent the app from loading. Any task change writes the latest list back to the same key.

To reset all tasks, remove the `tasks` key using your browser's developer tools, then refresh the page.

## Project structure

```text
src/
  App.js                 # Task state and localStorage persistence
  components/
    TaskForm.js          # Create-task form
    TaskList.js          # Task collection renderer
    TaskItem.js          # Complete, edit, and delete controls
```
