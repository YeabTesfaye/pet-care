import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Check } from "lucide-react"

export function HealthReminders() {
  // This would come from your database in a real app
  const reminders = [
    {
      id: "1",
      petName: "Max",
      type: "Vaccination",
      name: "Rabies Booster",
      dueDate: "2023-05-30",
      status: "upcoming",
    },
    {
      id: "2",
      petName: "Max",
      type: "Medication",
      name: "Heartworm Prevention",
      dueDate: "2023-05-15",
      status: "overdue",
    },
    {
      id: "3",
      petName: "Bella",
      type: "Vaccination",
      name: "DHPP Booster",
      dueDate: "2023-06-10",
      status: "upcoming",
    },
    {
      id: "4",
      petName: "Whiskers",
      type: "Medication",
      name: "Flea Treatment",
      dueDate: "2023-05-20",
      status: "upcoming",
    },
  ]

  return (
    <div className="space-y-4">
      {reminders.map((reminder) => (
        <Card key={reminder.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>
                  {reminder.petName} - {reminder.name}
                </CardTitle>
                <CardDescription>{reminder.type}</CardDescription>
              </div>
              <Badge variant={reminder.status === "overdue" ? "destructive" : "outline"}>
                {reminder.status === "overdue" ? "Overdue" : "Upcoming"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              {reminder.status === "overdue" ? (
                <AlertCircle className="mr-2 h-4 w-4 text-destructive" />
              ) : (
                <AlertCircle className="mr-2 h-4 w-4 text-muted-foreground" />
              )}
              <span>Due: {reminder.dueDate}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" />
              Mark as Complete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
