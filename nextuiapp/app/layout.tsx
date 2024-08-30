import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import {Image} from "@nextui-org/image";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import logo from './media/img/logo_transparent.svg';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};
//max-w-7xl
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          
          <div className="relative flex flex-col h-screen">
          <div className="w-full flex flex-row items-center py-5 px-5">
            <Image
              width={50}
              alt="Home"
              src={logo.src}
            />
            <h2 className="text-2xl leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white pl-1" style={{ fontWeight: '500' }}>Herakles</h2>
          </div>
          
            <main className="container mx-auto pt-2 px-6 flex-grow">
              
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
