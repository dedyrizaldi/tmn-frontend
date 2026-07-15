import type { ReactNode } from "react";

import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

interface Props {
  children: ReactNode;
}

export default function AppShell({ children }: Props) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">{children}</main>

      <Footer />
    </>
  );
}
