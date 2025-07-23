// Page Route Props Interface
export interface PageRouteProps {
  pageRoute: string;
}

// Button Component Props Interface
export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
  action?: () => void;
}

// Layout Component Props Interface
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}