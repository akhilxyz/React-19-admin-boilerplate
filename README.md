# React 19 TypeScript Admin Boilerplate

A modern React application built with TypeScript, Vite, and Tailwind CSS. This project includes a comprehensive layout system, state management, custom hooks, and modular routing.

## Features

- 🚀 **Built with Vite** - Lightning fast build tools
- 💻 **TypeScript Support** - Full type safety across the application
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Layout** - Complete with header, menu, and tab system
- 🔐 **Authentication** - Login system with protected routes
- 🎣 **Custom Hooks** - Including useFullscreen and useThrottle
- 📁 **File Upload** - Built-in file upload component
- 🔄 **State Management** - Organized store structure

## Demo

[view demo](https://react-vite-19-admin.netlify.app)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 22 or higher)
- pnpm (recommended) or npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/akhilxyz/React-19-admin-boilerplate.git
cd React-19-admin-boilerplate
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

## Project Structure

```
src/
├── api/          # API integration
├── components/   # Reusable components
├── enums/        # TypeScript enums
├── hooks/        # Custom React hooks
├── layout/       # Application layout components
├── router/       # Route configurations
├── store/        # State management
├── utils/        # Utility functions
└── views/        # Page components
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run linting
- `pnpm test` - Run tests

## Component Structure

### Layout

- `AppHeader` - Main application header
- `AppMenu` - Navigation menu
- `AppMain` - Main content area
- `AppTabs` - Tab management system

### Custom Hooks

- `useFullscreen` - Handle fullscreen functionality
- `useThrottle` - Throttle function calls

### Utilities

- `http.ts` - HTTP request handling
- `notify.ts` - Notification system
- `validate.ts` - Form validation utilities
- `file.ts` - File handling utilities

## Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the repository or contact the development team.
