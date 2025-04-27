import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FeaturedServices() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the range of services available for your pets
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Veterinary Care</h3>
            </div>
            <div className="p-6 pt-0">
              <Image
                src="/placeholder.svg?height=200&width=400"
                width={400}
                height={200}
                alt="Veterinary care"
                className="rounded-md object-cover w-full h-48"
              />
              <div className="mt-4 space-y-2">
                <p className="text-muted-foreground">
                  Find and book appointments with trusted veterinarians in your area.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services/veterinary">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Grooming</h3>
            </div>
            <div className="p-6 pt-0">
              <Image
                src="/placeholder.svg?height=200&width=400"
                width={400}
                height={200}
                alt="Pet grooming"
                className="rounded-md object-cover w-full h-48"
              />
              <div className="mt-4 space-y-2">
                <p className="text-muted-foreground">
                  Schedule grooming sessions to keep your pet looking and feeling their best.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services/grooming">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Pet Sitting</h3>
            </div>
            <div className="p-6 pt-0">
              <Image
                src="/placeholder.svg?height=200&width=400"
                width={400}
                height={200}
                alt="Pet sitting"
                className="rounded-md object-cover w-full h-48"
              />
              <div className="mt-4 space-y-2">
                <p className="text-muted-foreground">Find reliable pet sitters for when you're away from home.</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services/pet-sitting">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
