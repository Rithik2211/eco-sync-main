import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./providers/provider"
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "./providers/ReduxProvider";
import { WagmiProvider } from "./providers/WagmiProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eco Sync",
  description: "Created by Eco Sync",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ReduxProvider>
        <WagmiProvider>
          <Provider>
            {children}
          </Provider>
          <Toaster /> 
        </WagmiProvider>
      </ReduxProvider>  
      </body>
    </html>
  );
}
