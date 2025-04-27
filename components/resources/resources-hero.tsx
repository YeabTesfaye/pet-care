import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Video, Calculator, Download, Search } from "lucide-react";

export function ResourcesHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Knowledge Center for Pet Owners
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Access expert-created guides, articles, videos, and tools to help
              you provide the best care for your pets.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search resources..." className="pl-8" />
            </div>
            <p className="text-xs text-muted-foreground">
              Popular searches: puppy training, cat nutrition, fish tank setup
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="#resource-library">Browse Resources</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#interactive-tools">Interactive Tools</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-center font-medium">Guides & Articles</h3>
            <p className="text-center text-sm text-muted-foreground">
              In-depth information on all aspects of pet care
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-center font-medium">Video Tutorials</h3>
            <p className="text-center text-sm text-muted-foreground">
              Visual demonstrations of training and care techniques
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-center font-medium">Interactive Tools</h3>
            <p className="text-center text-sm text-muted-foreground">
              Calculators and tools to help with pet care decisions
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-center font-medium">Downloadable Resources</h3>
            <p className="text-center text-sm text-muted-foreground">
              Printable guides, checklists, and templates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
