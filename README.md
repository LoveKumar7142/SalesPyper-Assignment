# Sales Dashboard

A modern sales management dashboard built with React, TypeScript, and Vite. This application allows users to manage leads, view call logs, and switch between different tenants and roles for a multi-tenant sales environment.

## Features

- **Lead Management**: View and manage sales leads with status tracking (new, contacted, closed)
- **Call Logs**: Display and track customer call interactions
- **Authentication**: Multi-tenant support with role-based access (Admin/Agent)
- **Responsive Design**: Built with Tailwind CSS for a clean, modern UI
- **Type-Safe**: Fully typed with TypeScript for better development experience

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Linting**: ESLint with TypeScript support
- **State Management**: React Context API

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
- **Email**: lovekumar714283
- **Company**: SalesPyper
- **Assignment Source**: Internshala

## License

This project is developed as part of an internship assignment.
```
