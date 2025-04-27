import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Mail } from "lucide-react";

export function ResourcesNewsletter() {
  return (
    <section className="py-12 md:py-16 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Stay Informed
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Subscribe to our newsletter to receive the latest pet care
                resources, expert advice, and exclusive content delivered
                directly to your inbox.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Weekly Resource Roundup</h3>
                  <p className="text-sm text-muted-foreground">
                    A curated selection of our newest and most popular resources
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Seasonal Pet Care Tips</h3>
                  <p className="text-sm text-muted-foreground">
                    Timely advice for keeping your pets healthy throughout the
                    year
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Expert Q&A Sessions</h3>
                  <p className="text-sm text-muted-foreground">
                    Answers to common pet care questions from veterinarians and
                    specialists
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Early Access to New Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Be the first to try our newest interactive tools and
                    calculators
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 bg-card p-6 rounded-xl border shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Join 15,000+ pet owners receiving valuable resources and updates.
            </p>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="pet-interests"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="pet-interests" className="text-sm">
                  I'm interested in resources about:
                </label>
              </div>
              <div className="grid grid-cols-2 gap-2 pl-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="dogs"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="dogs" className="text-sm">
                    Dogs
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="cats"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="cats" className="text-sm">
                    Cats
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="small-pets"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="small-pets" className="text-sm">
                    Small Pets
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="other-pets"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="other-pets" className="text-sm">
                    Other Pets
                  </label>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to receive email communications from PetCare
                </label>
              </div>
              <Button className="w-full">Subscribe Now</Button>
              <p className="text-xs text-muted-foreground text-center">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
