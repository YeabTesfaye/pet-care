import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, DollarSign, CalendarDays } from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  details: string[];
  pricing: string;
  duration: string;
  image: string;
}

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: ServiceDetail[];
}

export function ServiceCategory({
  title,
  description,
  services,
}: ServiceCategoryProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.id}
            className="flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details">
                    <AccordionTrigger className="text-sm font-medium">
                      What's Included
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="ml-6 list-disc text-sm space-y-1 text-muted-foreground">
                        {service.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-sm">
                    <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Pricing:</span>
                    <span className="ml-1 text-muted-foreground">
                      {service.pricing}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Duration:</span>
                    <span className="ml-1 text-muted-foreground">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button asChild className="w-full">
                <Link href={`/services/book?service=${service.id}`}>
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Book Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
