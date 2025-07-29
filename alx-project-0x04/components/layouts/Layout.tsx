import { LayoutProps } from "@/interface";
import Header from "./Header";

import { useEffect } from "react";

const Layout: React.FC<LayoutProps> = ({ children, title = "Splash App" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <Header />
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default Layout;