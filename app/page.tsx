import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  PawPrint,
  Calendar,
  Users,
  BookOpen,
  ShoppingBag,
  AlertTriangle,
} from 'lucide-react';
import { HeroSection } from '@/components/hero-section';
import { FeaturedServices } from '@/components/featured-services';
import { TestimonialsSection } from '@/components/testimonials-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Everything Your Pet Needs
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides comprehensive tools to manage your pet's
                health, connect with services, and join a community of pet
                lovers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <PawPrint className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Pet Health Tracking</h3>
                <p className="text-muted-foreground">
                  Track vaccinations, vet visits, and daily care routines for
                  your pets.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Service Booking</h3>
                <p className="text-muted-foreground">
                  Book appointments with vets, groomers, and other pet services.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Pet Community</h3>
                <p className="text-muted-foreground">
                  Connect with other pet owners, share tips, and organize
                  events.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Educational Resources</h3>
                <p className="text-muted-foreground">
                  Access articles and videos on pet care, nutrition, and
                  training.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Pet Shop</h3>
                <p className="text-muted-foreground">
                  Shop for pet food, toys, and accessories with personalized
                  recommendations.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Emergency Services</h3>
                <p className="text-muted-foreground">
                  Access emergency contacts and report lost pets quickly.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <FeaturedServices />
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Pet Care Community Today
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create an account to start managing your pet's health, book
                services, and connect with other pet owners.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
