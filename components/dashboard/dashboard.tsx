"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentAnnouncements } from "./recent-announcements"
import { FundOverview } from "./fund-overview"
import { StatCard } from "./stat-card"
import { UpcomingEvents } from "./upcoming-events"
import { ActiveTickets } from "./active-tickets"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const response = await fetch("/api/dashboard")
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data")
        }
        const data = await response.json()
        setDashboardData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return <div>Loading dashboard data...</div>
  }

  if (error) {
    return <div>Error loading dashboard: {error}</div>
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <p className="text-muted-foreground">
        Welcome to your Strata Committee Admin Dashboard. Here's what's happening today.
      </p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="finances">Finances</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Action Required</AlertTitle>
            <AlertDescription>
              There are {dashboardData.tickets.filter((t) => t.status === "open").length} service requests awaiting
              approval and {dashboardData.outstandingLevies.owners} levy payments are overdue.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Administration Fund"
              value={`$${dashboardData.funds.administration.balance.toLocaleString()}`}
              change={`${dashboardData.funds.administration.change > 0 ? "+" : ""}${dashboardData.funds.administration.change}%`}
              trend={dashboardData.funds.administration.trend}
              description="Current balance"
            />
            <StatCard
              title="Capital Works Fund"
              value={`$${dashboardData.funds.capitalWorks.balance.toLocaleString()}`}
              change={`${dashboardData.funds.capitalWorks.change > 0 ? "+" : ""}${dashboardData.funds.capitalWorks.change}%`}
              trend={dashboardData.funds.capitalWorks.trend}
              description="Current balance"
            />
            <StatCard
              title="Outstanding Levies"
              value={`$${dashboardData.outstandingLevies.amount.toLocaleString()}`}
              change={`${dashboardData.outstandingLevies.change > 0 ? "+" : ""}${dashboardData.outstandingLevies.change}%`}
              trend={dashboardData.outstandingLevies.trend}
              description={`${dashboardData.outstandingLevies.owners} owners`}
            />
            <StatCard
              title="Active Tickets"
              value={dashboardData.activeTickets.count.toString()}
              change={`${dashboardData.activeTickets.change > 0 ? "+" : ""}${dashboardData.activeTickets.change}`}
              trend={dashboardData.activeTickets.trend}
              description="This week"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FundOverview className="lg:col-span-2" />
            <UpcomingEvents events={dashboardData.events} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <RecentAnnouncements announcements={dashboardData.announcements} />
            <ActiveTickets tickets={dashboardData.tickets} />
          </div>
        </TabsContent>

        {/* Other tabs remain the same */}
      </Tabs>
    </div>
  )
}

