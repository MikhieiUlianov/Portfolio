import type { Metadata } from "next";
import "./globals.scss";
import { ReactNode } from "react";
import Header from "@/components/navigation/header/header";
import Footer from "@/components/navigation/footer/Footer";
import Menu from "@/components/navigation/menu/Menu";
import ReduxProvider from "@/store/redux-provider";
import ModalHandler from "@/components/UI/modals/modal-handler";
import SidePanel from "@/components/navigation/sidepanel/Sidepanel";
import { verifyAuth } from "@/lib/auth";
import { User, Session } from "lucia";

export const metadata: Metadata = {
  title: "My portfolio",
  description: "The portfolio about me and my career.",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const isLogged:
    | { user: User; session: Session }
    | { user: null; session: null } = await verifyAuth();
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          <Menu isLogged={isLogged} />
          <SidePanel />
          <ModalHandler />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
