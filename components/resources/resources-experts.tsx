import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";

export function ResourcesExperts() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">
              Meet Our Expert Contributors
            </h2>
            <p className="text-muted-foreground">
              The veterinarians, trainers, and specialists behind our trusted
              resources
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild variant="outline">
              <a href="/resources/experts">
                View All Experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Dr. Sarah Chen",
              title: "Veterinarian, DVM",
              specialty: "Small Animal Medicine",
              bio: "Board-certified veterinarian with 15 years of experience in small animal medicine and preventive care.",
              image: "/placeholder.svg?height=300&width=300",
              contributions: 42,
            },
            {
              name: "Mark Thompson",
              title: "Certified Dog Trainer",
              specialty: "Behavior Modification",
              bio: "Professional dog trainer specializing in positive reinforcement techniques and behavior problems.",
              image: "/placeholder.svg?height=300&width=300",
              contributions: 36,
            },
            {
              name: "Dr. Emily Rodriguez",
              title: "Feline Specialist, DVM",
              specialty: "Feline Medicine",
              bio: "Veterinarian with exclusive focus on feline health, behavior, and nutrition for over a decade.",
              image: "/placeholder.svg?height=300&width=300",
              contributions: 28,
            },
            {
              name: "James Wilson",
              title: "Animal Nutritionist, PhD",
              specialty: "Pet Nutrition",
              bio: "Nutritionist with a doctorate in animal nutrition, specializing in dietary management for pets.",
              image: "/placeholder.svg?height=300&width=300",
              contributions: 31,
            },
          ].map((expert, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={expert.image || "/placeholder.svg"}
                  alt={expert.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 border-4 border-background -mt-14 mb-2">
                    <AvatarImage
                      src={expert.image || "/placeholder.svg"}
                      alt={expert.name}
                    />
                    <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg">{expert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {expert.title}
                  </p>
                  <Badge variant="outline" className="mb-3">
                    {expert.specialty}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-4">
                    {expert.bio}
                  </p>
                  <div className="text-sm text-muted-foreground mb-4">
                    {expert.contributions} resource contributions
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={`/resources/experts/${expert.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      View Profile
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
