import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function ServiceRequests() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Service Requests</h2>
          <p className="text-muted-foreground">Manage resident repair and service requests.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Request
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service Request Management</CardTitle>
          <CardDescription>Process and track resident requests</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This page would allow committee members to log and process service requests from residents. It would include
            features for request approval, ticket generation, and status tracking.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

