import type { Metadata } from "next";
import "./globals.scss";
import { ReactNode } from "react";
import Header from "@/components/navigation/header";
import Menu from "@/components/navigation/menu";
import SidePanel from "../components/navigation/sidepanel";
import ReduxProvider from "@/store/redux-provider";
import ModalHandler from "@/components/UI/modals/modal-handler";
import Footer from "../components/navigation/footer";
import { Suspense } from "react";
import Loading from "./my-tools/loading";

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
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          <Menu />
          <SidePanel />
          <Suspense fallback={<Loading />}>
            <ModalHandler />
          </Suspense>
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
