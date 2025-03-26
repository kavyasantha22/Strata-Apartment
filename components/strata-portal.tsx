"use client"

import { usePathname } from "next/navigation"
import { useAuth } from "./auth/auth-context"
import { AppSidebar } from "./app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Dashboard } from "./dashboard/dashboard"
import { FundManagement } from "./fund-management/fund-management"
import { ExpensesAndBudget } from "./expenses/expenses-and-budget"
import { Announcements } from "./announcements/announcements"
import { CalendarView } from "./calendar/calendar-view"
import { TicketTracking } from "./tickets/ticket-tracking"
import { ServiceRequests } from "./service-requests/service-requests"
import { Settings } from "./settings/settings"
import { Profile } from "./profile/profile"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"

export function StrataPortal() {
  const pathname = usePathname()
  const { user, logout, isLoading } = useAuth()

  // If loading or on login page, don't render the portal
  if (isLoading || pathname === "/login") {
    return null
  }

  // If not authenticated, don't render the portal (auth context will redirect)
  if (!user) {
    return null
  }

  // Function to get the page title based on the current path
  const getPageTitle = () => {
    switch (pathname) {
      case "/":
        return "Dashboard"
      case "/funds":
        return "Fund Management"
      case "/expenses":
        return "Expenses & Budget"
      case "/announcements":
        return "Announcements"
      case "/calendar":
        return "Calendar"
      case "/tickets":
        return "Ticket Tracking"
      case "/service-requests":
        return "Service Requests"
      case "/settings":
        return "Settings"
      case "/profile":
        return "My Profile"
      default:
        return "Strata Committee Admin Portal"
    }
  }

  // Function to render the correct component based on the current path
  const renderContent = () => {
    switch (pathname) {
      case "/":
        return <Dashboard />
      case "/funds":
        return <FundManagement />
      case "/expenses":
        return <ExpensesAndBudget />
      case "/announcements":
        return <Announcements />
      case "/calendar":
        return <CalendarView />
      case "/tickets":
        return <TicketTracking />
      case "/service-requests":
        return <ServiceRequests />
      case "/settings":
        return <Settings />
      case "/profile":
        return <Profile />
      default:
        return <Dashboard />
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-4 ml-2">
            <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, {user.name}</span>
            <Button variant="ghost" size="icon" onClick={logout}>
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Log out</span>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col p-4 md:p-6">{renderContent()}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

