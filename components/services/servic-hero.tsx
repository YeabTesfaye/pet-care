import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServiceHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Exceptional Care for Your Beloved Pets
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover our comprehensive range of professional pet care services
              designed to keep your furry, feathered, and scaly friends healthy,
              happy, and thriving.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="#book-service">Book a Service</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#service-plans">View Service Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
