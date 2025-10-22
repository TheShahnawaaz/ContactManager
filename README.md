# Contact Manager

A responsive React application for organizing personal and professional contacts. Users can create, edit, browse, and delete entries while keeping data persisted in the browser. The UI is built with Semantic UI components and tailored notifications that keep the workflow clear and fast.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Key Concepts](#key-concepts)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Full CRUD experience** – add new contacts, update existing records, and remove entries you no longer need. 【F:src/Components/App.js†L38-L118】【F:src/Components/ContactCards.js†L23-L59】
- **Contact detail view** – drill into a single record to see email and phone information alongside dynamically generated avatars. 【F:src/Components/ContactDetail.js†L17-L58】
- **Persistent storage** – contacts are stored in the browser's `localStorage`, so data survives page reloads without additional infrastructure. 【F:src/Components/App.js†L16-L31】
- **Inline alerts** – contextual success and error messages slide in and out to keep users informed of the outcome of their actions. 【F:src/Components/Alert.js†L7-L61】
- **Phone number assistance** – international dialing codes and formatting handled via `react-phone-input-2`. 【F:src/Components/AddContact.js†L2-L92】【F:src/Components/EditContact.js†L3-L78】
- **Responsive layout** – sidebar navigation adapts between vertical and horizontal orientations depending on viewport width. 【F:src/Components/Sidebar.js†L5-L84】

## Tech Stack
- **React 18** with functional components and hooks
- **React Router 6** for client-side routing
- **Semantic UI** (via CDN) for layout and styling primitives 【F:public/index.html†L22-L42】
- **react-phone-input-2** for international telephone number input and validation
- **localStorage** API for lightweight persistence

## Getting Started

### Prerequisites
- Node.js ≥ 14 and npm ≥ 6 (the project was bootstrapped with Create React App 5)
- A modern browser (latest Chrome, Firefox, or Safari) for development and testing

### Installation
1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open <http://localhost:3000> to view the app. The page reloads automatically as you save changes.

### Available Scripts
The project uses the standard Create React App scripts:

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode on <http://localhost:3000>. |
| `npm test` | Launches the interactive Jest test runner. |
| `npm run build` | Builds an optimized production bundle in the `build/` directory. |
| `npm run eject` | Copies configuration files for full control (irreversible). |

## Project Structure
```
src/
├── Components/
│   ├── AddContact.js         # Form for creating new contacts
│   ├── Alert.js              # Animated notification component
│   ├── App.js                # Application shell, routing, and state management
│   ├── App.css               # App-specific styling
│   ├── ContactCards.js       # Individual contact card with actions
│   ├── ContactDetail.js      # Detailed view for a single contact
│   ├── ContactList.js        # Listing of contacts with empty-state message
│   ├── EditContact.js        # Form for editing an existing contact
│   └── Sidebar.js            # Responsive navigation sidebar
├── Images/                   # Avatar assets for contact cards
└── index.js                  # React entry point
```

## Key Concepts
- **State management** – Contact data lives in the `App` component and is passed down via props to maintain a single source of truth. 【F:src/Components/App.js†L16-L119】
- **Routing** – `Routes` map URLs to pages for listing, adding, editing, and viewing contacts. 【F:src/Components/App.js†L120-L154】
- **Data validation** – basic validations ensure required fields are populated and phone numbers follow expected formats before persisting changes. 【F:src/Components/AddContact.js†L20-L77】【F:src/Components/EditContact.js†L21-L70】

## Contributing
1. Fork the repository and create your feature branch.
2. Install dependencies with `npm install` if you have not already.
3. Make your changes along with accompanying tests (if applicable).
4. Run the relevant scripts (`npm test`, `npm run build`) before submitting a pull request.

## License
This project is currently distributed without an explicit license. If you plan to use or contribute to the project, please coordinate with the maintainers to clarify licensing terms.
