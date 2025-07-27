'use client'

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <body>
      <SessionProvider>
        <Header />
        <div className="layout">{children}</div>
      </SessionProvider>
    </body>
  </div>
);

export default Layout;
