"use server"

import { revalidatePath } from "next/cache"
import prisma from "@/lib/db"

export async function createAnnouncement(formData: FormData) {
  // Extract form data
  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const priority = formData.get("priority") as string

  // Validate data
  if (!title || !content || !priority) {
    return {
      success: false,
      message: "All fields are required",
    }
  }

  try {
    // Save to database
    await prisma.announcement.create({
      data: {
        title,
        content,
        priority,
        date: new Date(),
      },
    })

    // Revalidate the dashboard page to show the new announcement
    revalidatePath("/")

    return {
      success: true,
      message: "Announcement created successfully",
    }
  } catch (error) {
    console.error("Error creating announcement:", error)
    return {
      success: false,
      message: "Failed to create announcement",
    }
  }
}

