import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AlertSystem } from "@/components/ui/alert-system";
import { ThemeProvider } from "@/components/theme-provider";
import { MorphikSidebar } from "@/components/morphik-sidebar";
import { DynamicSiteHeader } from "@/components/dynamic-site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar-new";
import { MorphikProvider } from "@/contexts/morphik-context";
import { HeaderProvider } from "@/contexts/header-context";

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
  title: "Morphik Dashboard",
  description: "Morphik - Knowledge Graph and RAG Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MorphikProvider>
            {children}
          </MorphikProvider>
          <AlertSystem position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
