import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
}

interface UpcomingEventsProps {
  events: Event[]
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col space-y-2 border-b pb-4 last:border-0 last:pb-0">
              <h4 className="font-medium">{event.title}</h4>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
                <Clock className="h-4 w-4 ml-3 mr-1" />
                <span>{event.time}</span>
              </div>
              <div className="text-sm text-muted-foreground">Location: {event.location}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

