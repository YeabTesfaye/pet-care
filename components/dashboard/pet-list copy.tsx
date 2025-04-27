import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Edit, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function PetList() {
  // This would come from your database in a real app
  const pets = [
    {
      id: "1",
      name: "Max",
      species: "Dog",
      breed: "Golden Retriever",
      age: 3,
      weight: "65 lbs",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "2",
      name: "Bella",
      species: "Dog",
      breed: "Labrador",
      age: 2,
      weight: "55 lbs",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "3",
      name: "Whiskers",
      species: "Cat",
      breed: "Siamese",
      age: 4,
      weight: "10 lbs",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pets.map((pet) => (
        <Card key={pet.id}>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle>{pet.name}</CardTitle>
              <CardDescription>
                {pet.breed} • {pet.age} years old
              </CardDescription>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/pets/${pet.id}`}>
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Image
                src={pet.image || "/placeholder.svg"}
                alt={pet.name}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div>
                <Badge>{pet.species}</Badge>
                <p className="mt-2 text-sm">Weight: {pet.weight}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href={`/dashboard/pets/${pet.id}/health`}>View Health Records</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
