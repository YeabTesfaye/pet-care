import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function UpcomingAppointments() {
  // This would come from your database in a real app
  const appointments = [
    {
      id: "1",
      petName: "Max",
      type: "Veterinary",
      provider: "City Vet Clinic",
      date: "2023-05-15",
      time: "10:00 AM",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: "2",
      petName: "Bella",
      type: "Grooming",
      provider: "Paws & Claws Grooming",
      date: "2023-05-20",
      time: "2:30 PM",
      address: "456 Oak Ave, Anytown, USA",
    },
  ]

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <Card key={appointment.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>
                  {appointment.petName} - {appointment.type}
                </CardTitle>
                <CardDescription>{appointment.provider}</CardDescription>
              </div>
              <Badge variant={appointment.type === "Veterinary" ? "default" : "secondary"}>{appointment.type}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{appointment.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{appointment.address}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button asChild variant="outline">
              <Link href={`/dashboard/appointments/${appointment.id}`}>View Details</Link>
            </Button>
            <Button variant="destructive">Cancel</Button>
          </CardFooter>
        </Card>
      ))}
      <div className="flex justify-center">
        <Button asChild>
          <Link href="/dashboard/appointments/new">Book New Appointment</Link>
        </Button>
      </div>
    </div>
  )
}
