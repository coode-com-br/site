import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "CØØDE",
  description: "TI as code",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get("active_theme")?.value;
  const isScaled = activeThemeValue?.endsWith("-scaled");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background overscroll-none font-sans antialiased",
          activeThemeValue ? `theme-${activeThemeValue}` : "",
          isScaled ? "theme-scaled" : ""
        )}
      >
        {children}
      </body>
    </html>
  );
}
