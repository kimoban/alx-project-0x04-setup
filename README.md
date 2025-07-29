# ALX Project 0x04-0x06 Setup

This repository contains three related Next.js TypeScript projects demonstrating different state management approaches and React development patterns.

## 📁 Repository Structure

```
alx-project-0x04-setup/
├── alx-project-0x04/          # Base Next.js project with local state
├── alx-project-0x05/          # Context API implementation
├── alx-project-0x06/          # Redux implementation
└── README.md                  # This file
```

## 🚀 Projects Overview

### 📂 ALX Project 0x04 - Base Implementation

**Directory:** `alx-project-0x04/`

A foundational Next.js TypeScript application featuring:

- Component-based architecture
- Local state management with React hooks
- Responsive design with Tailwind CSS
- Counter app with increment/decrement functionality
- Clean UI components and layouts

**Key Features:**

- 🎨 Modern UI with Tailwind CSS
- 🧩 Reusable component structure
- 📱 Responsive design
- ⚡ Fast development with Next.js

### 📂 ALX Project 0x05 - Context API Implementation

**Directory:** `alx-project-0x05/`

Builds upon Project 0x04 by implementing React Context API for global state management:

- Shared counter state across components
- No prop drilling required
- TypeScript-safe context implementation
- Demonstrates cross-component communication

**Key Features:**

- 🌐 Global state with Context API
- 🔄 Real-time state synchronization
- 📋 Custom hooks for context consumption
- 🎯 No prop drilling

### 📂 ALX Project 0x06 - Redux Implementation

**Directory:** `alx-project-0x06/`

Advanced state management using Redux and Redux Toolkit:

- Centralized store for application state
- Predictable state updates with actions and reducers
- Redux DevTools support for debugging
- Scalable architecture for large applications

**Key Features:**

- 🏪 Redux store with Redux Toolkit
- 🔍 Time-travel debugging
- ⚙️ Immutable state updates
- 📈 Scalable state management

## 🎯 Learning Progression

This repository demonstrates a progressive learning path:

1. **Project 0x04** → Local state basics
2. **Project 0x05** → Global state with Context API
3. **Project 0x06** → Professional state management with Redux

## 🛠️ Technologies Used

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Context API** - Built-in state management (Project 0x05)
- **Redux Toolkit** - Modern Redux implementation (Project 0x06)
- **React Icons** - Icon library

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Running Individual Projects

Each project can be run independently:

```bash
# Navigate to any project directory
cd alx-project-0x04  # or alx-project-0x05 or alx-project-0x06

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Project-Specific Features

#### Project 0x04 Features:

- Simple counter with local state
- Component-based architecture
- Responsive header and footer

#### Project 0x05 Features:

- Context API implementation
- Global counter state
- Header shows count on counter page
- Cross-component state sharing

#### Project 0x06 Features:

- Redux store implementation
- Action-based state updates
- Redux DevTools integration
- Scalable state architecture

## 📚 State Management Comparison

| Feature | Project 0x04 | Project 0x05 | Project 0x06 |
|---------|--------------|--------------|--------------|
| State Scope | Local | Global (Context) | Global (Redux) |
| Prop Drilling | Required | Not needed | Not needed |
| DevTools | React DevTools | React DevTools | Redux DevTools |
| Complexity | Low | Medium | Medium-High |
| Scalability | Limited | Good | Excellent |
| Learning Curve | Easy | Moderate | Steeper |

## 🎨 UI Components

All projects share common UI patterns:

- **Header:** Navigation and branding
- **Counter App:** Interactive counting interface
- **Button:** Reusable button component
- **Layout:** Consistent page structure

## 🧪 Testing the Implementations

1. **Local State (0x04):** Counter resets when navigating between pages
2. **Context API (0x05):** Counter persists across page navigation
3. **Redux (0x06):** Counter persists with Redux DevTools support

## 📖 Learning Objectives

By exploring these projects, you'll learn:

- React component architecture
- State management patterns
- TypeScript integration
- Context API usage
- Redux fundamentals
- Modern development practices

## 🤝 Contributing

Feel free to explore, modify, and learn from these implementations. Each project builds upon the previous one, demonstrating different approaches to React state management.

## 📄 License

This project is part of the ALX Software Engineering Program and is intended for educational purposes.

**Happy Learning!** 🎓✨

## Created as part of ALX Projects 0x04-0x06 - Progressive React State Management
