import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BellRing, Plus } from "lucide-react"

export function RecentAnnouncements() {
  // Mock data - would come from an API in a real app
  const announcements = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "2023-07-15",
      content: "The Annual General Meeting will be held in the common area on July 15th at 6:00 PM.",
      priority: "high",
    },
    {
      id: 2,
      title: "Water Shutdown Notice",
      date: "2023-07-10",
      content: "Water will be shut off for maintenance on July 10th from 9:00 AM to 1:00 PM.",
      priority: "medium",
    },
    {
      id: 3,
      title: "New Garden Installation",
      date: "2023-07-05",
      content: "We are pleased to announce the new garden installation in the north courtyard is complete.",
      priority: "low",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Recent Announcements</CardTitle>
        <Button size="sm" variant="outline">
          <Plus className="h-4 w-4 mr-1" />
          New
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="flex flex-col space-y-2 border-b pb-4 last:border-0 last:pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BellRing
                    className={`h-4 w-4 mr-2 ${
                      announcement.priority === "high"
                        ? "text-rose-500"
                        : announcement.priority === "medium"
                          ? "text-amber-500"
                          : "text-emerald-500"
                    }`}
                  />
                  <h4 className="font-medium">{announcement.title}</h4>
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(announcement.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{announcement.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

