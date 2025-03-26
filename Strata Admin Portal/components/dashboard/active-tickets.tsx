import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ActiveTickets() {
  // Mock data - would come from an API in a real app
  const tickets = [
    {
      id: "TKT-001",
      title: "Leaking roof in Building A",
      status: "in-progress",
      priority: "high",
      assignedTo: "John Smith",
      createdDate: "2023-07-01",
    },
    {
      id: "TKT-002",
      title: "Elevator maintenance required",
      status: "open",
      priority: "medium",
      assignedTo: "Unassigned",
      createdDate: "2023-07-03",
    },
    {
      id: "TKT-003",
      title: "Repaint hallway walls",
      status: "pending",
      priority: "low",
      assignedTo: "Sarah Johnson",
      createdDate: "2023-07-05",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
            Open
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
            In Progress
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
            Pending
          </Badge>
        )
      case "closed":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
            Closed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="outline" className="bg-rose-100 text-rose-800 border-rose-200">
            High
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
            Medium
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-200">
            Low
          </Badge>
        )
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Active Tickets</CardTitle>
        <Button size="sm" variant="outline">
          <Plus className="h-4 w-4 mr-1" />
          New Ticket
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex flex-col space-y-2 border-b pb-4 last:border-0 last:pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">{ticket.id}</span>
                  <h4 className="font-medium">{ticket.title}</h4>
                </div>
                <Button size="icon" variant="ghost" className="h-6 w-6">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {getStatusBadge(ticket.status)}
                {getPriorityBadge(ticket.priority)}
                <span className="text-xs text-muted-foreground">Assigned: {ticket.assignedTo}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

