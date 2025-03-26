import { NextResponse } from "next/server"
import prisma from "@/lib/db"

export async function GET() {
  try {
    // Fetch data from database
    const [administrationFund, capitalWorksFund, announcements, events, tickets] = await Promise.all([
      prisma.fund.findFirst({ where: { type: "administration" } }),
      prisma.fund.findFirst({ where: { type: "capitalWorks" } }),
      prisma.announcement.findMany({
        orderBy: { date: "desc" },
        take: 3,
      }),
      prisma.event.findMany({
        where: { date: { gte: new Date() } },
        orderBy: { date: "asc" },
        take: 3,
      }),
      prisma.ticket.findMany({
        where: { status: { not: "closed" } },
        orderBy: { createdAt: "desc" },
        take: 3,
      }),
    ])

    // Calculate outstanding levies (this would be more complex in a real app)
    const outstandingLevies = {
      amount: 1890,
      change: -10,
      trend: "down",
      owners: 2,
    }

    // Calculate active tickets
    const activeTicketsCount = await prisma.ticket.count({
      where: { status: { not: "closed" } },
    })

    return NextResponse.json({
      funds: {
        administration: {
          balance: administrationFund?.balance || 0,
          change: 2.5, // This would be calculated in a real app
          trend: "up",
        },
        capitalWorks: {
          balance: capitalWorksFund?.balance || 0,
          change: 0.3, // This would be calculated in a real app
          trend: "up",
        },
      },
      outstandingLevies,
      activeTickets: {
        count: activeTicketsCount,
        change: 3, // This would be calculated in a real app
        trend: "up",
      },
      announcements,
      events,
      tickets,
    })
  } catch (error) {
    console.error("Error fetching dashboard data:", error)
    return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 })
  }
}

