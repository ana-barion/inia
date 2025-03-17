# CS410 Intro to Software Engineering - Inia Biosciences Website Project

This repository contains the Inia Biosciences website project for CS410 Intro to Software Engineering. This document provides all the information you'll need to get started, understand the project structure, set up your development environment, and contribute effectively.

## Table of Contents

- [Project Overview](#project-overview)
  - [Project Goals](#project-goals)
  - [What is This Project?](#what-is-this-project)
  - [Development Methodology](#development-methodology)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Step-by-Step Installation](#step-by-step-installation)
  - [Setting Up Your Code Editor](#setting-up-your-code-editor)
  - [Common Setup Issues](#common-setup-issues)
- [Development Workflow](#development-workflow)
  - [Running the Development Server](#running-the-development-server)
  - [Project Structure](#project-structure)
  - [Key Technologies](#key-technologies)
  - [Basic React & Next.js Concepts](#basic-react--nextjs-concepts)
  - [Making Your First Code Change](#making-your-first-code-change)
- [Git Workflow](#git-workflow)
  - [What is Git?](#what-is-git)
  - [Basic Git Commands](#basic-git-commands)
  - [Branch Structure](#branch-structure)
  - [Branching Strategy](#branching-strategy)
  - [Commit Guidelines](#commit-guidelines)
  - [Pull Requests](#pull-requests)
  - [Dealing with Merge Conflicts](#dealing-with-merge-conflicts)
  - [Code Reviews](#code-reviews)
- [Code Standards](#code-standards)
  - [Formatting and Linting](#formatting-and-linting)
  - [Documentation](#documentation)
  - [Component Structure](#component-structure)
  - [Naming Conventions](#naming-conventions)
- [Testing](#testing)
  - [Manual Testing](#manual-testing)
  - [Testing Checklist](#testing-checklist)
  - [Browser Compatibility](#browser-compatibility)
- [Deployment](#deployment)
  - [Environments](#environments)
  - [Deployment Process](#deployment-process)
- [Team Collaboration](#team-collaboration)
  - [Communication](#communication)
  - [Agile Practices](#agile-practices)
  - [Roles and Responsibilities](#roles-and-responsibilities)
  - [Project Timeline](#project-timeline)
  - [How to Ask for Help](#how-to-ask-for-help)
- [Additional Resources](#additional-resources)
  - [Learning Resources](#learning-resources)
  - [Beginner-Friendly Tutorials](#beginner-friendly-tutorials)
  - [Glossary of Terms](#glossary-of-terms)
- [Troubleshooting](#troubleshooting)
  - [Common Setup Issues](#common-setup-issues-1)
  - [Git Problems](#git-problems)
  - [Code Problems](#code-problems)
  - [Getting Help](#getting-help)

## Project Overview

### Project Goals

This project is a website for Inia Biosciences built using Next.js, a React framework. The goal is to create a modern, responsive website that showcases Inia's work and services. This project is being developed as part of the CS410 Intro to Software Engineering course, providing hands-on experience with real-world software development practices and teamwork.

- Create a professional, responsive website for INIA
- Learn modern web development frameworks and tools
- Practice collaborative software development using Git
- Apply software engineering best practices and Agile principles
- Learn to work as a team using modern collaboration tools

### What is This Project?

If you're completely new to web development, here's what you need to know:

- We're building a website using modern technologies
- The website will be interactive and work well on all devices (phones, tablets, computers)
- We'll be working as a team, with each person contributing different parts
- We'll be following Agile development principles with regular sprints and standups
- The project gives us hands-on experience with real-world software development
- The final product will be a professional website that Inia can actually use

### Development Methodology

We will be using **Agile methodology** for this project:

- **Iterative Development**: We'll work in short "sprints" (typically 1-2 weeks) to deliver working features incrementally
- **Daily Standups**: Quick daily check-ins where each team member shares what they're working on
- **Sprint Planning**: At the beginning of each sprint, we'll decide what features to work on next
- **Sprint Reviews**: At the end of each sprint, we'll demo completed features and get feedback
- **Continuous Improvement**: We'll regularly reflect on how to improve our process

This approach helps us adapt to changes, deliver value regularly, and maintain high-quality code throughout the project.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)

  - This is the JavaScript runtime that powers our project
  - Download and install it from the official website
  - To check if it's installed, open your terminal or command prompt and type: `node --version`

- [pnpm](https://pnpm.io/installation) (We use pnpm instead of npm for this project)

  - pnpm is a package manager, similar to npm but faster and more efficient
  - To install pnpm, run: `npm install -g pnpm`
  - To check if it's installed correctly, run: `pnpm --version`

- [Git](https://git-scm.com/downloads)

  - Git is a version control system that helps us track changes and collaborate
  - Download and install it from the official website
  - To check if it's installed, run: `git --version`

- A code editor (we recommend [Visual Studio Code](https://code.visualstudio.com/))
  - VS Code is a free, powerful code editor that works well with JavaScript
  - After installing, open VS Code and navigate to the Extensions tab (or press Ctrl+Shift+X)
  - Install recommended extensions listed in the next section

### Step-by-Step Installation

#### 1. Setting up Git (one-time setup)

If this is your first time using Git, you'll need to configure it:

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

#### 2. Clone the repository

"Cloning" means downloading a copy of the project to your computer:

```bash
# Navigate to where you want to store the project
# For example:
# On Windows: cd C:\Projects
# On Mac/Linux: cd ~/Projects

# Clone the repository
git clone https://github.com/INIABiosciences/inia.git

# Navigate into the project folder
cd inia
```

#### 3. Install dependencies

Dependencies are external libraries and tools our project needs to work:

```bash
# Install all the project dependencies
pnpm install
```

This might take a few minutes. It's normal to see a lot of text scrolling by.

#### 4. Create a new branch for your work

```bash
# First, make sure you have the latest testing branch
git checkout testing
git pull

# Then create your feature branch (replace "your-feature-name" with a descriptive name)
git checkout -b feature/your-feature-name
```

#### 5. Start the development server

```bash
pnpm dev
```

After running this command:

1. Wait for the server to start (you'll see some messages in the terminal)
2. Open your web browser and go to: http://localhost:3000
3. You should see the website running locally on your computer

Congratulations! You've successfully set up the project! 🎉

### Setting Up Your Code Editor

We recommend using Visual Studio Code with the following extensions to enhance your development experience:

1. Open VS Code
2. Go to the Extensions tab (or press Ctrl+Shift+X)
3. Search for and install these extensions:

- **ESLint**: For real-time linting feedback (shows errors and warnings as you type)
- **Prettier**: For code formatting (makes your code look nice and consistent)
- **JavaScript and TypeScript Intellisense**: For improved code suggestions
- **Tailwind CSS IntelliSense**: For Tailwind CSS class suggestions
- **GitLens**: For enhanced Git capabilities (see who changed what and when)

Recommended VS Code settings (create or edit `.vscode/settings.json` in the project):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact"],
  "files.autoSave": "onFocusChange"
}
```

To create this file:

1. In VS Code, open the project folder
2. Create a new folder called `.vscode` if it doesn't exist
3. Inside that folder, create a file called `settings.json`
4. Copy and paste the above JSON into that file
5. Save the file

### Common Setup Issues

#### Node.js Installation Problems

- **Windows**: If you see "node is not recognized" errors, you may need to restart your computer after installation
- **Mac**: If you installed Node.js but terminal doesn't recognize it, try closing and reopening your terminal

#### pnpm Installation Issues

- If you see "pnpm is not recognized" errors, make sure you installed it globally: `npm install -g pnpm`
- Try closing and reopening your terminal after installing

#### Git Clone Errors

- If you get "permission denied" errors, make sure you have a GitHub account and are logged in
- If you get "SSL certificate problem" errors, your network might be blocking secure connections. Try:
  ```bash
  git config --global http.sslVerify false
  ```
  (Note: This is not recommended for security reasons, but might help in educational environments)

#### Dependency Installation Errors

- If `pnpm install` fails, try deleting the `node_modules` folder (if it exists) and running it again
- Make sure your internet connection is stable during installation

## Development Workflow

### Running the Development Server

To start the development server:

```bash
pnpm dev
```

What this does:

1. Starts a local web server on your computer
2. Automatically reloads the page when you make changes to the code
3. Shows errors in the browser and terminal if something goes wrong

Other useful commands:

- `pnpm build` - Builds the app for production (creates optimized files)
- `pnpm start` - Runs the built app in production mode (after building)
- `pnpm lint` - Runs ESLint to check for code issues
- `pnpm format` - Formats all files using Prettier

### Project Structure

Here's a detailed explanation of the project structure:

```
/
├── .github/              # GitHub specific files
│   ├── ISSUE_TEMPLATE/   # Templates for creating issues
│   ├── workflows/        # GitHub Actions CI/CD workflows
│   │   └── ci.yml        # Continuous Integration configuration
│   └── pull_request_template.md # Template for creating pull requests
├── .vscode/              # VS Code settings
│   └── settings.json     # Editor settings for consistent formatting
├── app/                  # Next.js app directory (pages and components)
│   ├── layout.js         # Root layout component (applies to all pages)
│   ├── page.js           # Homepage component
│   └── globals.css       # Global CSS styles
├── components/           # Reusable React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   │   └── Button.js     # Example button component
│   └── layout/           # Layout components (header, footer, etc.)
│       ├── Header.js     # Site header with navigation
│       └── Footer.js     # Site footer
├── public/               # Static files (images, fonts, etc.)
│   ├── file.svg          # Icon SVGs
│   ├── globe.svg         # Icon SVGs
│   ├── next.svg          # Icon SVGs
│   ├── vercel.svg        # Icon SVGs
│   └── window.svg        # Icon SVGs
├── styles/               # CSS modules and theme files
│   └── globals.css       # Additional global styles
├── utils/                # Utility functions
│   └── formatters.js     # Formatting utility functions
├── .env.example          # Example environment variables
├── .gitignore            # Specifies intentionally untracked files to ignore
├── jsconfig.json         # JavaScript configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration (for Tailwind)
└── README.md             # This file
```

Simple explanation of each part:

- **.github/**: Contains templates for GitHub issues and pull requests

  - **ISSUE_TEMPLATE/**: Templates to help team members create standardized issues
  - **workflows/**: GitHub Actions configurations for automating builds and checks
    - **ci.yml**: Configuration for our continuous integration pipeline
  - **pull_request_template.md**: Template to help standardize pull requests

- **.vscode/**: Visual Studio Code settings for consistent development

  - **settings.json**: Editor settings for consistent code formatting and linting

- **app/**: This is where the main website pages live

  - **layout.js**: The template that wraps around every page (like a frame)
  - **page.js**: The homepage content
  - **globals.css**: Styles that apply to the whole website

- **components/**: Reusable pieces of the website (think of them as building blocks)

  - **ui/**: Small UI elements like buttons, cards, etc.
    - **Button.js**: Reusable button component with various styles
  - **layout/**: Larger structural elements like headers and footers
    - **Header.js**: Site navigation header with responsive mobile menu
    - **Footer.js**: Site footer with links and copyright information

- **public/**: Images, icons, and other static files

- **styles/**: Additional CSS styles beyond Tailwind

  - **globals.css**: Custom animations, utilities, and enhancements

- **utils/**: Helper functions

  - **formatters.js**: Functions for formatting dates, text, and numbers

- **.env.example**: Example file showing what environment variables to set up
- **.gitignore**: Tells Git which files to ignore (like node_modules, .env files, etc.)
- **package.json**: Lists all the tools and libraries the project uses

**Note:** Some of these directories might not exist yet and will be created as the project progresses.

### Key Technologies

- **Next.js**: React framework that enables server-side rendering and other features

  - Makes creating web pages easier
  - Handles routing (going from one page to another)
  - Optimizes images and other assets automatically

- **React**: JavaScript library for building user interfaces

  - Allows us to create reusable components
  - Makes it easy to update only the parts of a page that change

- **Tailwind CSS**: Utility-first CSS framework for styling

  - Provides pre-built styling classes
  - Makes responsive design easier (looks good on all screen sizes)

- **ESLint**: Tool for identifying and fixing problems in JavaScript code

  - Helps catch errors before they cause problems
  - Enforces consistent coding style

- **Prettier**: Code formatter to maintain consistent code style

  - Automatically formats code to look consistent
  - Saves time and prevents style disagreements

- **Husky**: Git hooks to enforce code quality before commits
  - Runs tests and checks before allowing code to be committed
  - Helps prevent broken code from being added to the project

### Basic React & Next.js Concepts

For team members new to React and Next.js, here's a beginner-friendly primer:

#### React Basics

React is all about components - reusable pieces of your website:

- **Components**: Think of these as custom LEGO pieces you create once and reuse everywhere
- **Props**: Information you pass to components (like arguments to a function)
- **State**: Data that can change over time (like a variable that remembers its value)
- **JSX**: HTML-like code written inside JavaScript (looks like HTML but has JavaScript superpowers)

Example of a simple React component:

```jsx
// This is a simple Button component
function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">
      {text}
    </button>
  );
}

// How to use this Button in another component:
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button text="Click me!" onClick={() => alert("Button clicked!")} />
    </div>
  );
}
```

In this example:

- We created a reusable Button component
- It accepts two props: `text` (what the button says) and `onClick` (what happens when clicked)
- We then used this Button in another component

#### Next.js Basics

Next.js makes it easy to create complete websites with React:

- **App Router**: File-based routing where each file in the `app` folder becomes a page on your website

  - For example, `app/about/page.js` becomes the `/about` page on your site

- **Pages**: Files named `page.js` that represent different pages of your website

  - Simple example: `app/page.js` is your homepage at '/'
  - Another example: `app/contact/page.js` is your contact page at '/contact'

- **Layout**: Shared elements that appear on multiple pages

  - Example: Header and footer that stay the same across pages

- **Server Components**: Components that run on the server (default in Next.js)

  - These are pre-rendered and sent to the browser as HTML
  - Good for content that doesn't need much interactivity

- **Client Components**: Components that run in the browser
  - Add `'use client'` at the top of the file to make it a client component
  - Good for interactive elements like forms and buttons

### Making Your First Code Change

Let's walk through a simple example of making a change to the homepage:

1. Open the file `app/page.js` in VS Code
2. Look for some text you want to change
3. Make your change and save the file
4. If the development server is running (`pnpm dev`), the browser will automatically refresh
5. See your change live in the browser!

Then, to save your change to Git:

```bash
# See what files you changed
git status

# Add the file you changed to staging
git add app/page.js

# Create a commit with a message describing your change
git commit -m "docs: update homepage welcome message"

# Push your changes to GitHub
git push
```

## Git Workflow

### What is Git?

Git is a version control system that helps teams work together on code:

- It keeps track of all changes to the code
- It allows multiple people to work on the same project without overwriting each other's work
- It maintains a history of who made what changes and when
- It enables you to create "branches" where you can work on new features without affecting the main code

Think of Git like a super-powered "Track Changes" feature in a word processor, but designed for code and with more capabilities.

### Basic Git Commands

Here are the essential Git commands you'll use regularly:

```bash
# Get the latest changes from the remote repository (GitHub)
git pull

# See what files you've changed
git status

# Add a specific file to be committed
git add filename.js

# Add all changed files
git add .

# Create a commit (a saved point in history) with a message
git commit -m "type: brief description of changes"

# Send your commits to GitHub
git push

# Create a new branch
git checkout -b branch-name

# Switch to an existing branch
git checkout branch-name

# See a list of all branches
git branch
```

### Branch Structure

Our repository has two main branches:

- **`main`**: The production branch containing stable, reviewed code. Only the team lead (admin) has direct push access.
- **`testing`**: The integration branch where all pull requests should be directed. After review and testing in this branch, changes will be merged into `main` by the team lead.

Think of it this way:

- `main` is like the published version of a book
- `testing` is like the final draft being reviewed by editors
- Your feature branches are like individual chapters being written

### Branching Strategy

We use a feature branch workflow:

1. Always create your feature branches from the latest `testing` branch:

   ```bash
   # Go to the testing branch
   git checkout testing

   # Get the latest changes
   git pull

   # Create a new branch for your feature
   git checkout -b feature/your-feature-name
   ```

   Use these prefixes for your branches:

   - `page/` for new pages (example: `page/about-page`)
   - `feature/` for new features (example: `feature/add-contact-form`)
   - `bugfix/` for bug fixes (example: `bugfix/fix-mobile-menu`)
   - `docs/` for documentation changes (example: `docs/update-readme`)
   - `refactor/` for code refactoring (example: `refactor/improve-navigation`)

2. Work on your feature, making regular commits (see [Commit Guidelines](#commit-guidelines))
3. When your work is complete, push your branch and create a pull request to the `testing` branch (NOT to `main`)

**IMPORTANT: Never commit directly to `main` or `testing` branches! Always create a feature branch first.**

### Commit Guidelines

Write clear, concise commit messages that explain the "why" of your changes:

```
feat: add navigation component

Adds responsive navigation with mobile dropdown menu
```

Use these prefixes (this is called "Conventional Commits" style):

- `page:` for new pages
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding or modifying tests
- `chore:` for maintenance tasks

**Best Practices for Commits:**

- Commit frequently with small, logical changes rather than large commits
- Each commit should do ONE thing
- Make sure the code works before committing
- Write clear commit messages that explain WHY you made the change

Bad commit message: "Fixed stuff"
Good commit message: "fix: correct responsive layout on mobile devices"

### Pull Requests

When your feature is ready, it's time to create a Pull Request (PR). A PR is a request to merge your changes into the main codebase.

1. Before creating a PR, make sure your branch is up to date with the latest changes from `testing`:

   ```bash
   # Go to the testing branch
   git checkout testing

   # Get the latest changes
   git pull

   # Go back to your branch
   git checkout your-branch-name

   # Merge the latest testing changes into your branch
   git merge testing

   # If there are conflicts, resolve them (see the next section)

   # Push your updated branch to GitHub
   git push
   ```

2. Push your branch to GitHub:

   ```bash
   git push -u origin your-branch-name
   ```

   The first time you push a new branch, you need the `-u origin` part. For subsequent pushes, you can just use `git push`.

3. Go to the repository on GitHub and create a new pull request:

   - Go to: https://github.com/INIABiosciences/inia
   - You should see a prompt to create a PR for your recently pushed branch
   - If not, click on "Pull requests" then "New pull request"
   - Set the **base** branch to `testing` (NOT `main`)
   - Set the **compare** branch to your feature branch
   - Click "Create pull request"

4. Fill in the PR template with details about your changes:

   - The template will automatically appear when you create a PR
   - Fill in all required sections:
     - Description: Brief summary of your changes
     - Related Issue: Link to the issue this PR addresses (use #issue-number)
     - Type of Change: Mark the appropriate option
     - How Has This Been Tested: Describe your testing approach
     - Screenshots: Add screenshots if applicable
     - Checklist: Make sure all items are checked off

5. Request reviews from team members
6. Address any feedback and make necessary changes
7. Once approved, your PR will be merged into `testing`
8. The team lead will periodically merge `testing` into `main` after thorough testing

> **Note:** We have PR templates set up to make this process easier. Just fill in the sections and submit your PR!

### Dealing with Merge Conflicts

Merge conflicts happen when you and another team member change the same part of the same file. Git doesn't know which change to keep, so it asks you to decide.

When you see a message about merge conflicts, don't panic! Here's how to resolve them:

1. Open the file(s) with conflicts in VS Code
2. Look for sections marked with `<<<<<<<`, `=======`, and `>>>>>>>`
3. The code between `<<<<<<<` and `=======` is YOUR change
4. The code between `=======` and `>>>>>>>` is the OTHER person's change
5. Edit the file to combine both changes or choose one over the other
6. Remove the `<<<<<<<`, `=======`, and `>>>>>>>` markers
7. Save the file
8. Add the resolved file to Git: `git add filename.js`
9. Complete the merge: `git commit` (a commit message will be pre-filled)

Example of a conflict:

```javascript
<<<<<<< HEAD (your changes)
function greeting() {
  return "Hello, world!";
}
=======
function greeting() {
  return "Hi, everyone!";
}
>>>>>>> testing (their changes)
```

To resolve it, you might change it to:

```javascript
function greeting() {
  return "Hello, everyone!";
}
```

### Code Reviews

Code reviews are an essential part of our workflow:

- Focus on code quality, not personal preferences
- Check for:
  - Bugs or potential issues
  - Code clarity and maintainability
  - Adherence to project standards
  - Performance considerations
- Use GitHub's review features to comment on specific lines
- Approve the PR once you're satisfied with the changes

**For Reviewers:**

1. Look at the code changes carefully
2. Test the feature if possible
3. Provide constructive feedback
4. Suggest improvements, don't just criticize
5. Approve the PR if it meets the standards

**For Code Authors:**

1. Be open to feedback
2. Address all comments
3. Explain your decisions if you disagree
4. Make requested changes promptly
5. Thank reviewers for their time and input

## Code Standards

### Formatting and Linting

We use ESLint and Prettier to maintain code quality and consistency. These tools run automatically when you commit code through Husky hooks, but you can also run them manually:

```bash
# Check for code issues
pnpm lint

# Format all files
pnpm format
```

**What these tools do:**

- **ESLint**: Checks for code quality issues and potential bugs
- **Prettier**: Formats code consistently (spacing, indentation, etc.)

Don't worry too much about memorizing all the rules. The tools will automatically check your code and tell you what needs to be fixed.

### Documentation

Good documentation is crucial for maintaining the project:

- Comment complex code sections
- Use JSDoc comments for functions when appropriate:
  ```javascript
  /**
   * Calculates the total price with tax
   * @param {number} price - The base price
   * @param {number} taxRate - The tax rate (e.g., 0.07 for 7%)
   * @returns {number} The total price including tax
   */
  function calculateTotal(price, taxRate) {
    return price * (1 + taxRate);
  }
  ```
- Keep README and other documentation up to date
- Document any non-obvious design decisions

**When to comment your code:**

- When the code does something complex or non-obvious
- When you use a workaround or unusual solution
- When there's important context that isn't clear from the code itself

**When NOT to comment:**

- Don't comment obvious things
- Don't write comments that just repeat what the code does
- Don't leave commented-out code in the final version

### Component Structure

For consistency, follow these guidelines for React components:

- One component per file
- Use descriptive, PascalCase names for component files (e.g., `NavigationBar.js`)
- Group related components in folders
- For complex components, split into smaller sub-components
- Use proper prop validation

Example of a well-structured component:

```jsx
// components/ui/Button.js
"use client";

/**
 * A reusable button component
 * @param {string} variant - The button style (primary, secondary, etc.)
 * @param {string} size - The button size (small, medium, large)
 * @param {function} onClick - Click handler function
 * @param {React.ReactNode} children - Button content
 */
export default function Button({
  variant = "primary",
  size = "medium",
  onClick,
  children,
}) {
  // Build class names based on props
  const classes = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    sizes: {
      small: "px-2 py-1 text-sm",
      medium: "px-4 py-2",
      large: "px-6 py-3 text-lg",
    },
  };

  return (
    <button
      className={`rounded ${classes[variant]} ${classes.sizes[size]} transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Naming Conventions

Following consistent naming conventions makes code easier to understand:

- **Files and Folders**:

  - React components: PascalCase (`Button.js`, `NavigationBar.js`)
  - Utility functions: camelCase (`formatDate.js`, `apiHelpers.js`)
  - CSS modules: camelCase (`button.module.css`)

- **JavaScript**:

  - Variables and functions: camelCase (`userName`, `calculateTotal`)
  - Constants: UPPER_SNAKE_CASE for true constants (`MAX_ITEMS`, `API_URL`)
  - Classes and React components: PascalCase (`UserProfile`, `Button`)
  - Boolean variables: prefixed with "is", "has", "should" (`isLoading`, `hasError`)

- **CSS Classes with Tailwind**:
  - Use the utility classes provided by Tailwind
  - For custom classes, use kebab-case (`user-avatar`, `nav-link`)

## Testing

### Manual Testing

For this project, we'll primarily rely on manual testing:

1. Test your feature thoroughly before submitting a PR
2. Test across different screen sizes for responsive design
3. Verify all interactive elements work as expected
4. Check for visual consistency with the design

Remember: Testing is everyone's responsibility! Don't assume someone else will catch your bugs.

### Testing Checklist

Before submitting a PR, go through this checklist:

- [ ] Does the feature work as expected?
- [ ] Does it look good on mobile devices? (Use browser dev tools to simulate different screen sizes)
- [ ] Does it look good on desktop?
- [ ] Does it work in different browsers (Chrome, Firefox, Safari, Edge)?
- [ ] Are there any console errors?
- [ ] Is the code clean and following our standards?
- [ ] Is the UI consistent with the rest of the app?
- [ ] Are there any edge cases that might cause problems?

### Browser Compatibility

Ensure your code works on the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

You can test browser compatibility by:

1. Opening your local development server in different browsers
2. Using browser developer tools to test responsive designs
3. Checking for any JavaScript errors in the console

## Continuous Integration and Deployment

### CI Pipeline

We use GitHub Actions for continuous integration. The CI pipeline automatically:

1. Runs on every push to `main` and `testing` branches
2. Runs on every pull request to `main` and `testing` branches
3. Performs the following checks:
   - Linting with ESLint
   - Format checking with Prettier
   - Building the Next.js application

This helps catch errors early and ensures code quality.

To see CI results:
1. After pushing your branch or creating a PR, go to the GitHub repository
2. Click on the "Actions" tab
3. Find your workflow run and check the results

If the CI checks fail, you'll need to fix the issues before your PR can be merged.

### Environments

We have two environments:

- **Development**: Your local environment for building features

  - This is what you run with `pnpm dev` on your computer
  - Changes here only affect your local copy

- **Production**: The live site (deployed from the `main` branch)
  - This is the public-facing website
  - Changes here affect all users

### Deployment Process

1. Changes are merged into `testing` branch through PRs
2. After thorough testing in the `testing` branch, changes are merged into `main` by the team lead
3. The team lead will handle deployment to production

As a team member, you don't need to worry about the deployment process. Just focus on getting your code into the `testing` branch through pull requests.

## Team Collaboration

### Communication

- **GitHub Issues**: Use for task tracking and bug reports

  - Create new issues for bugs you find
  - Claim issues you're working on
  - Use labels to categorize issues (bug, enhancement, etc.)

- **Pull Requests**: Use for code review and discussion

  - Link PRs to related issues
  - Tag relevant team members for review
  - Respond to feedback promptly

- **Discord**: Our primary communication platform

  - Join our team Discord server (link will be provided separately)
  - Check Discord daily for updates and announcements
  - Use appropriate channels for different topics:
    - `#general` - Team-wide announcements and discussions
    - `#help` - Ask questions when you're stuck
    - `#resources` - Share useful links and learning materials
    - `#random` - Off-topic conversations
  - Tag specific people with `@username` when needed
  - React to messages to acknowledge you've read them

- **Daily Bot**: We'll use a daily standup bot in Discord
  - The bot will prompt you once a day with three questions:
    1. What did you accomplish yesterday?
    2. What are you working on today?
    3. Are there any blockers in your way?
  - Everyone should respond to these prompts each weekday
  - This replaces the need for daily meetings and keeps everyone in sync
  - If you can't work on a particular day, just mention that in your response

### Agile Practices

Our team will follow Agile practices to manage the project efficiently:

#### Sprints

- We'll work in **3-class sprints**
- Each sprint will have specific goals and deliverables
- At the end of each sprint, we'll have working code to demonstrate

#### User Stories

- We'll break down requirements into user stories
- Format: "As a [type of user], I want [goal] so that [benefit]"
- Example: "As a site visitor, I want to see a contact form so that I can reach out to INIA"

#### Task Board

- We'll use GitHub Projects as our task board
- Tasks will move through these columns:
  - **Backlog**: Future tasks not yet scheduled
  - **To Do**: Tasks planned for the current sprint
  - **In Progress**: Tasks someone is actively working on
  - **Review**: Tasks waiting for code review
  - **Done**: Completed tasks

#### GitHub Issues

- We use GitHub Issues to track tasks, bugs, and feature requests
- We have issue templates set up to make creating new issues easier:
  - **Feature Request template**: For suggesting new features
  - **Bug Report template**: For reporting bugs

To create a new issue:

1. Go to the repository on GitHub
2. Click on the "Issues" tab
3. Click "New Issue"
4. Select the appropriate template
5. Fill in the required information
6. Submit the issue

When working on an issue:

1. Assign it to yourself
2. Move it to "In Progress" on the task board
3. Create a branch related to the issue (use the issue number in the branch name)
4. Reference the issue in your commit messages (e.g., "fix: resolve #42")

#### Daily Standups

- Daily check-ins via Discord bot
- Answer three questions:
  1. What did you accomplish yesterday?
  2. What are you working on today?
  3. Are there any blockers in your way?
- Keep responses brief and focused

#### Sprint Meetings

- **Sprint Planning**: Beginning of sprint, assign tasks for the sprint
- **Sprint Review**: End of sprint, demo completed work
- **Sprint Retrospective**: End of sprint, discuss what went well and what could be improved

### How to Ask for Help

Everyone gets stuck sometimes. Here's how to ask for help effectively:

1. **Try to solve it yourself first**:

   - Google the problem
   - Check documentation
   - Look at similar code in the project

2. **Clearly describe the problem**:

   - What were you trying to do?
   - What happened instead?
   - What have you tried already?

3. **Share code/errors**:

   - Include relevant code snippets
   - Share exact error messages
   - Provide screenshots if relevant

4. **Use the right channel**:
   - Technical questions: Discord
   - Bugs: GitHub Issues
   - Design questions: Tag designers
   - Process questions: Ask the team lead

Example of a good help request:
"I'm trying to make the navigation menu responsive, but it's not collapsing on mobile. I've tried changing the CSS classes in NavigationBar.js (link to file). Here's what it looks like now (screenshot). The error I'm getting is: 'TypeError: Cannot read property 'toggle' of undefined'. Any ideas?"

## Additional Resources

### Learning Resources

- [Next.js Documentation](https://nextjs.org/docs) - Official docs for Next.js
- [React Documentation](https://react.dev/) - Official docs for React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Official docs for Tailwind CSS
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf) - Quick reference for Git commands
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/) - How to format markdown files
- [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Comprehensive JavaScript reference
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/) - How GitHub workflow works

### Beginner-Friendly Tutorials

- [Next.js Foundations Course](https://nextjs.org/learn/foundations/about-nextjs) - Step-by-step Next.js tutorial
- [React Beginners Tutorial](https://react.dev/learn) - Learn React from scratch
- [Git & GitHub Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk) - 30-minute Git tutorial video
- [Visual Introduction to React](https://ui.dev/c/react/a-visual-guide-to-react) - Learn React with visualizations
- [JavaScript for Beginners](https://javascript.info/) - Modern JavaScript tutorial
- [Tailwind CSS Crash Course](https://www.youtube.com/watch?v=dFgzHOX84xQ) - Quick intro to Tailwind CSS
- [VS Code Crash Course](https://www.youtube.com/watch?v=WPqXP_kLzpo) - Learn VS Code basics

### Glossary of Terms

#### General Software Terms

- **Repository (Repo)**: The place where all project files and their history are stored
- **API**: Application Programming Interface - how different software components interact
- **Responsive Design**: Making websites look good on all device sizes
- **Linting**: Checking code for potential errors or style issues
- **Formatting**: Applying consistent style to code
- **Debugging**: Finding and fixing errors in code
- **Deployment**: The process of making the website available on the internet

#### Git & GitHub Terms

- **Branch**: A parallel version of the code that allows you to work on features separately
- **Commit**: A saved point in Git history with changes and a message describing them
- **Pull Request (PR)**: A request to merge changes from one branch to another
- **Merge**: Combining changes from different branches
- **Merge Conflict**: When Git can't automatically combine changes
- **Clone**: Creating a local copy of a repository
- **Push**: Sending local commits to the remote repository
- **Pull**: Getting the latest changes from the remote repository
- **Fork**: A personal copy of someone else's repository

#### JavaScript & Web Development

- **npm/pnpm**: Package managers for JavaScript
- **Dependencies**: External libraries that a project relies on
- **DOM**: Document Object Model - the browser's representation of a web page
- **ES6/ES2015+**: Modern JavaScript syntax and features
- **Transpiling**: Converting modern JavaScript to a version compatible with older browsers

#### React & Next.js Terms

- **Component**: A reusable piece of UI in React
- **Props**: Data passed to React components
- **State**: Data that can change within a component
- **JSX**: JavaScript XML - a syntax extension for JavaScript used in React
- **Hooks**: Functions that let you use React features in functional components
- **Server-Side Rendering (SSR)**: Rendering React components on the server
- **Client-Side Rendering (CSR)**: Rendering React components in the browser
- **Static Site Generation (SSG)**: Pre-rendering pages at build time

#### Agile Development Terms

- **Sprint**: A fixed time period during which specific work has to be completed
- **User Story**: A description of a feature from the user's perspective
- **Backlog**: A prioritized list of work to be done
- **Daily Standup**: A daily meeting where team members share progress
- **Sprint Planning**: Meeting to decide what will be done in the upcoming sprint
- **Sprint Review**: Demo of completed work at the end of a sprint
- **Sprint Retrospective**: Meeting to discuss what went well and what can be improved
- **Velocity**: Measure of how much work a team can complete in a sprint

## Troubleshooting

### Common Setup Issues

#### Node.js Issues

- **Error**: "node is not recognized as an internal or external command"

  - **Solution**: Make sure Node.js is installed and your PATH environment variable is set correctly. Try restarting your computer.

- **Error**: "This version of Node.js is not compatible with..."
  - **Solution**: Install the correct version of Node.js (v18 or later).

#### pnpm Issues

- **Error**: "pnpm is not recognized as an internal or external command"

  - **Solution**: Install pnpm globally: `npm install -g pnpm`

- **Error**: "Cannot find module..."
  - **Solution**: Run `pnpm install` again to make sure all dependencies are installed.

#### Next.js Issues

- **Error**: "Failed to compile"

  - **Solution**: Look at the error message for details, fix the indicated file.

- **Error**: "Port 3000 is already in use"
  - **Solution**: Either close the other application using port 3000, or use a different port: `pnpm dev -- -p 3001`

### Git Problems

#### Authentication Issues

- **Error**: "Authentication failed" when pushing/pulling
  - **Solution**: Make sure you're logged into GitHub and have the right permissions.

#### Merge Conflicts

- **Error**: "Automatic merge failed; fix conflicts and then commit the result"
  - **Solution**: Open the files with conflicts, resolve them manually, then commit.

#### Branch Issues

- **Error**: "Your branch is ahead of 'origin/main' by X commits"

  - **Solution**: You need to push your changes: `git push`

- **Error**: "Your branch is behind 'origin/main' by X commits"
  - **Solution**: You need to pull the latest changes: `git pull`

### Code Problems

#### React Issues

- **Error**: "React Hook X is called conditionally..."

  - **Solution**: Move the hook outside of any conditional logic.

- **Error**: "Cannot update a component while rendering a different component"
  - **Solution**: Don't update state during rendering; move state updates to event handlers or useEffect.

#### Styling Issues

- **Problem**: CSS styles not applying

  - **Solution**: Check for typos in class names, make sure the CSS file is imported.

- **Problem**: Layout doesn't look right on mobile
  - **Solution**: Use responsive Tailwind classes like `md:`, `lg:` to adjust layout for different screen sizes.

### Getting Help

1. Check the troubleshooting section above
2. Look for similar issues in the GitHub repository
3. Ask in the team Discord channel
4. Bring up the issue during team meetings

## Final Notes

This README is a living document and will be updated throughout the project. If you find anything missing or unclear, please suggest improvements by creating a pull request with your changes.

Welcome to the team, and happy coding! 🚀
