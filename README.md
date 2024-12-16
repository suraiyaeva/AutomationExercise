# Automated Testing for AutomationExercise

## Prerequisites

- Node.js installed
- Cypress installed globally or locally in the project

## Setup

1. Clone the repository: `git clone <repo-url>`
2. Navigate to the project directory: `cd <project-dir>`
3. Install dependencies: `npm install`

## Running the Tests

- Run all tests: `npx cypress open`
- Execute UI tests only: `npx cypress run --spec e2e/tests/uitests.cy.js`
- Execute API tests only: `npx cypress run --spec e2e/tests/apitests.cy.js`

## Folder Structure

e2e/ ├── pages/ │ ├── LoginPage.js │ ├── ProductPage.js │ ├── CartPage.js │ ├── ContactPage.js ├── tests/ │ ├── apitests.cy.js │ ├── uitests.cy.js └── README.md
