# ALX Project 0x06 - Redux Implementation

This project demonstrates the implementation of Redux with Redux Toolkit for global state management in a Next.js TypeScript application.

## 🚀 Features

- **Global Counter State**: A shared counter managed by Redux store
- **Redux Toolkit**: Modern Redux with simplified boilerplate
- **TypeScript**: Full type safety with Redux and custom interfaces
- **Real-time Updates**: Changes in one component instantly reflect in others
- **Time-travel Debugging**: Redux DevTools support for debugging

## 🏗️ Project Structure

```text
alx-project-0x06/
├── store/
│   └── store.ts              # Redux store configuration with counter slice
├── pages/
│   ├── _app.tsx              # App wrapper with Redux Provider
│   ├── index.tsx             # Home page with navigation
│   ├── counter-app.tsx       # Counter component using Redux
│   └── redux-demo.tsx        # Redux demonstration page
├── components/
│   ├── layouts/
│   │   └── Header.tsx        # Header with Redux counter display
│   └── common/
│       └── Button.tsx        # Reusable button component
```

## 🎯 Redux Implementation

### 1. Store Setup (`store/store.ts`)

- Configures Redux store using Redux Toolkit's `configureStore`
- Defines counter slice with `createSlice` directly in the store file
- Exports typed RootState and AppDispatch types
- Exports action creators and useAppDispatch hook
- Centralizes all application state in a single file
### 2. Provider Setup (`pages/_app.tsx`)

- Wraps entire application with Redux Provider
- Makes store accessible to all components

### 3. Component Integration

- **Counter App**: Uses `useSelector` to access state and `useAppDispatch` for actions
- **Header Component**: Displays counter value conditionally based on current route
- **Direct Redux Integration**: Components use Redux hooks directly without custom abstractions

## 🌟 Key Benefits Over Context API

1. **Predictable State Updates**: Actions and reducers ensure consistent state changes
2. **Time-travel Debugging**: Redux DevTools for debugging and inspecting state
3. **Scalability**: Better suited for large applications with complex state
4. **Middleware Support**: Easy integration with logging, persistence, etc.
5. **Performance**: Optimized re-renders with selector-based updates

## 🎮 How to Test Redux

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Navigate to different pages:
   - **Home** (`/`): Navigation hub
   - **Counter App** (`/counter-app`): Redux-powered counter interface
   - **Redux Demo** (`/redux-demo`): Comprehensive Redux demonstration

3. **Test Cross-Component State Sharing**:
   - Change the counter on any page
   - Notice how the header counter updates in real-time
   - Switch between pages - the counter value persists
   - Use Redux DevTools to inspect state changes

## 🔧 Technical Details

### Redux Store Structure

```typescript
interface RootState {
  counter: {
    value: number;
  }
}
```

### Counter Slice Actions

```typescript
// Basic actions available
dispatch(increment())        // value + 1
dispatch(decrement())        // value - 1 (minimum 0)
```

### Redux Usage in Components

```typescript
// How to use Redux in components
import { useSelector } from "react-redux";
import { RootState, useAppDispatch, increment, decrement } from "@/store/store";

const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useAppDispatch();
```

## 📱 Pages Overview

- **Home** (`/`): Clean landing page with navigation buttons
- **Counter App** (`/counter-app`): Simple counter with increment/decrement using Redux
- **Redux Demo** (`/redux-demo`): Comprehensive demonstration page (if available)
- **Header**: Shows counter value only when on `/counter-app` route

## 🛠️ Dependencies

```json
{
  "redux": "^5.0.1",
  "react-redux": "^9.1.0",
  "@reduxjs/toolkit": "^2.2.1",
  "@types/react-redux": "^7.1.33"
}
```

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-friendly layouts
- **Interactive Elements**: Hover effects and smooth transitions
- **Gradient Backgrounds**: Beautiful visual design

## 🚦 Getting Started

1. Clone or duplicate from `alx-project-0x05`
2. Install dependencies: `npm install`
3. Install Redux packages:
   ```bash
   npm install redux react-redux @reduxjs/toolkit
   npm install @types/react-redux
   ```
4. Start development server: `npm run dev`
5. Open browser to `http://localhost:3000`

## 🧰 Redux DevTools

Install Redux DevTools browser extension to:
- Inspect state changes in real-time
- Time-travel through state history
- Debug actions and their effects
- Monitor performance

## 🎯 Learning Objectives

This project demonstrates:
- Redux Toolkit implementation
- TypeScript integration with Redux
- Global state management for scalable applications
- Component communication using Redux
- Action creators and reducers
- Selector-based state access
- Next.js project structure with Redux

## 🔄 Migration from Context API

Key differences from the Context API version:
- Replace Context Provider with Redux Provider
- Replace custom hooks with Redux selectors
- Actions become dispatched Redux actions
- State updates through reducers instead of setState

---

**Created as part of ALX Project 0x06 - Redux Implementation**
