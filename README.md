# SalesPyper – Multi-Tenant Sales Dashboard

## Overview
SalesPyper is a frontend-only multi-tenant sales dashboard built as part of an internship assignment.
The application simulates a SaaS platform used by multiple organizations with role-based access.

Backend APIs are not used. All data and authentication are mocked on the frontend.

---

## Tech Stack
- React + TypeScript
- Vite
- Tailwind CSS
- React Context API

---

## Tenancy Handling
- The application supports multiple tenants (Organization A & Organization B).
- Each tenant sees only its own leads and call logs.
- Switching tenants dynamically updates the visible data.

---

## Role-Based Access
- **Admin**: Can view all data and sees edit actions.
- **Agent**: View-only access.
- Role permissions are applied within the selected tenant.

---

## Core Modules

### Leads Module
- Tenant-specific lead listing
- Status-based filtering
- Role-based UI actions

### Call Logs Module
- Tenant-specific call logs
- Scrollable table with sticky header

---

## Frontend Architecture
- Modular folder structure
- Reusable layout components (Sidebar, Header)
- Feature-based modules (Leads, Call Logs)
- Centralized state management using Context API

---

## Performance & Optimization
- Lazy loading of feature modules using React.lazy and Suspense
- Code splitting to reduce initial bundle size
- Scroll isolation for better UX in data-heavy views

---

## Notes
This assignment focuses on frontend structure, modularity, and application behavior.
Backend APIs are intentionally excluded as per the assignment instructions.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sales-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server
Start the development server with hot reload:
```bash
npm run dev
```

### Build for Production
Build the application for production:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── common/          # Shared components (Loader)
│   │   └── layout/          # Layout components (Header, Sidebar, PageWrapper)
│   ├── context/             # React contexts (AuthContext)
│   ├── hooks/               # Custom hooks
│   ├── modules/
│   │   ├── callLogs/        # Call logs related components and data
│   │   └── leads/           # Leads related components and data
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── App.tsx                  # Main app component
├── main.tsx                 # Application entry point
└── index.css                # Global styles
```

## Developer Information

- **Developer**: Love Kumar
- **Email**: lovekumar714283@gmail.com
- **Company**: SalesPyper
- **Assignment Source**: Internshala

## License

This project is developed as part of an internship assignment.
```
