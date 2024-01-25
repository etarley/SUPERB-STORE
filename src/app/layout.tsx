import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/navbar";
// import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import NextAuthProvider from "@/lib/auth/Provider";
import TrpcProvider from "@/lib/trpc/Provider";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from "next/head";
import { cookies } from "next/headers";
import React from "react";
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Superb-Store',
  description: 'Generated by create next app',
  icons:{icon:'./favicon.ico'}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
<NextAuthProvider>
<TrpcProvider cookies={cookies().toString()}>
{/* <Sidebar /> */}
<header>
  <Navbar />
</header>
<main className="flex-1 md:px-8 px-8">
{children}
</main></TrpcProvider>
</NextAuthProvider>

<Toaster />
</ThemeProvider>
</body>
    </html>
  )
}
