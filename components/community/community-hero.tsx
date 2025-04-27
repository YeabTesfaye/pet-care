import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarDays, BookOpen, Heart } from "lucide-react";

export function CommunityHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Join Our Thriving Pet Community
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Connect with fellow pet lovers, share experiences, find local
                events, and access expert advice to enhance your pet parenting
                journey.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/register">Join Community</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#explore">Explore Features</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-4">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-semibold">Discussion Forums</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Exchange ideas and advice with pet owners worldwide
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CalendarDays className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-semibold">Local Events</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Discover pet-friendly events and meetups in your area
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-semibold">Expert Resources</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Access articles, guides, and advice from pet professionals
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-semibold">Success Stories</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Share and be inspired by heartwarming pet stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
