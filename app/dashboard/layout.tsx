import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/layout/dashboard/site-header";
import { AppSidebar } from "@/components/layout/dashboard/app-sidebar";
import { ActiveThemeProvider } from "@/components/layout/active-theme";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get("active_theme")?.value;

  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <ActiveThemeProvider initialTheme={activeThemeValue}>
          <SidebarProvider className="flex flex-col">
            <SiteHeader />
            <div className="flex flex-1">
              <AppSidebar />
              <SidebarInset>{children}</SidebarInset>
            </div>
          </SidebarProvider>
        </ActiveThemeProvider>
      </ThemeProvider>
    </div>
  );
}
