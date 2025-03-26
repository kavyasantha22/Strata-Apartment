import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  try {
    // Create funds
    const administrationFund = await prisma.fund.upsert({
      where: { id: "admin-fund" },
      update: {},
      create: {
        id: "admin-fund",
        name: "Administration Fund",
        balance: 24560,
        type: "administration",
      },
    })

    const capitalWorksFund = await prisma.fund.upsert({
      where: { id: "capital-fund" },
      update: {},
      create: {
        id: "capital-fund",
        name: "Capital Works Fund",
        balance: 156200,
        type: "capitalWorks",
      },
    })

    // Create sample transactions
    await prisma.transaction.createMany({
      skipDuplicates: true,
      data: [
        {
          id: "trans-1",
          amount: 5200,
          description: "Monthly levy income",
          date: new Date("2023-06-01"),
          type: "income",
          fundId: administrationFund.id,
        },
        {
          id: "trans-2",
          amount: 4200,
          description: "Building maintenance",
          date: new Date("2023-06-15"),
          type: "expense",
          fundId: administrationFund.id,
        },
        {
          id: "trans-3",
          amount: 3100,
          description: "Capital works levy income",
          date: new Date("2023-06-01"),
          type: "income",
          fundId: capitalWorksFund.id,
        },
      ],
    })

    // Create sample announcements
    await prisma.announcement.createMany({
      skipDuplicates: true,
      data: [
        {
          id: "ann-1",
          title: "Annual General Meeting",
          content: "The Annual General Meeting will be held in the common area on July 15th at 6:00 PM.",
          priority: "high",
          date: new Date("2023-07-01"),
        },
        {
          id: "ann-2",
          title: "Water Shutdown Notice",
          content: "Water will be shut off for maintenance on July 10th from 9:00 AM to 1:00 PM.",
          priority: "medium",
          date: new Date("2023-07-02"),
        },
        {
          id: "ann-3",
          title: "New Garden Installation",
          content: "We are pleased to announce the new garden installation in the north courtyard is complete.",
          priority: "low",
          date: new Date("2023-07-03"),
        },
      ],
    })

    // Create sample events
    await prisma.event.createMany({
      skipDuplicates: true,
      data: [
        {
          id: "event-1",
          title: "Annual General Meeting",
          date: new Date("2023-07-15"),
          time: "18:00",
          location: "Common Area",
        },
        {
          id: "event-2",
          title: "Maintenance Committee Meeting",
          date: new Date("2023-07-08"),
          time: "19:00",
          location: "Online (Zoom)",
        },
        {
          id: "event-3",
          title: "Building Inspection",
          date: new Date("2023-07-20"),
          time: "10:00",
          location: "Entire Building",
        },
      ],
    })

    // Create sample tickets
    await prisma.ticket.createMany({
      skipDuplicates: true,
      data: [
        {
          id: "ticket-1",
          title: "Leaking roof in Building A",
          description: "There is a water leak coming from the ceiling in the hallway of Building A.",
          status: "in-progress",
          priority: "high",
          assignedTo: "John Smith",
        },
        {
          id: "ticket-2",
          title: "Elevator maintenance required",
          description: "The elevator in Building B is making strange noises and needs maintenance.",
          status: "open",
          priority: "medium",
          assignedTo: null,
        },
        {
          id: "ticket-3",
          title: "Repaint hallway walls",
          description: "The hallway walls in Building C need repainting due to scuff marks.",
          status: "pending",
          priority: "low",
          assignedTo: "Sarah Johnson",
        },
      ],
    })

    // Create a sample user
    await prisma.user.upsert({
      where: { email: "admin@strata.com" },
      update: {},
      create: {
        id: "user-1",
        name: "Committee Member",
        email: "admin@strata.com",
        // In a real app, you would hash this password
        password: "password123",
        role: "treasurer",
      },
    })

    console.log("Database seeded successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()

