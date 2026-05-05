import {
  ClerkProvider,
  Show,
  UserButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthButtons } from "@/components/auth-buttons";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flashy Cardy Course",
  description: "Interactive flashcard learning system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", "h-full", "antialiased", "font-sans", poppins.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <header className="flex items-center justify-between gap-4 border-b border-border bg-background px-6 py-4">
            <p className="text-lg font-semibold text-foreground">Flashy Cardy Course</p>
            <div className="flex items-center gap-3">
              <Show when="signed-out">
                <AuthButtons />
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
