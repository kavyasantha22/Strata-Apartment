import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreateAnnouncementDialog } from "./create-announcement"

export function Announcements() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Announcements</h2>
          <p className="text-muted-foreground">Create and manage building-wide announcements.</p>
        </div>
        <CreateAnnouncementDialog />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Announcement Management</CardTitle>
          <CardDescription>Create, edit, and schedule announcements</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This page would allow committee members to create, edit, and schedule announcements for residents. It would
            include features for email notifications and announcement archiving.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

