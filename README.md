# Next.js 15 Client-Side Navigation Issue

This repository demonstrates a bug encountered in a Next.js 15 application where client-side navigation results in a blank page.  The application functions correctly on the initial load but fails upon navigating between routes.

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.

## Steps to Reproduce

1. Open the application in your browser.  The initial page should load correctly.
2. Attempt to navigate to another page within the application (if there were other pages implemented).
3. You will notice a blank page, or possibly a runtime error in the browser console. 

## Solution
The provided solution file addresses the issue by ensuring proper data fetching and component rendering during client-side navigation. Refer to the `bugSolution.js` file for the corrected code and explanation.