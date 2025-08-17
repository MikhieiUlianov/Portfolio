import type { Metadata } from "next";
import "./globals.scss";
import { ReactNode } from "react";
import Header from "@/components/navigation/header/header";
import Footer from "@/components/navigation/footer/Footer";
import Menu from "@/components/navigation/menu/Menu";
import ReduxProvider from "@/store/redux-provider";
import ModalHandler from "@/components/UI/modals/modal-handler";
import SidePanel from "@/components/navigation/sidepanel/Sidepanel";

export const metadata: Metadata = {
  title: "My portfolio",
  description: "The portfolio about me and my career.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
  menu,
}: Readonly<{
  children: ReactNode;
  menu: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {menu}
        <ReduxProvider>
          <Header />
          <Menu />
          <SidePanel />
          <ModalHandler />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
