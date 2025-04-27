import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, CheckCircle2, Mail } from "lucide-react";

export function CommunityNewsletter() {
  return (
    <section className="py-12 md:py-16 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Stay Connected
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Subscribe to our newsletter to receive community updates, event
                notifications, and exclusive pet care tips.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Weekly Digest</h3>
                  <p className="text-sm text-muted-foreground">
                    A curated summary of the most helpful discussions and
                    resources
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Event Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Notifications about upcoming pet-friendly events in your
                    area
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Expert Content</h3>
                  <p className="text-sm text-muted-foreground">
                    Exclusive articles and advice from veterinarians and pet
                    specialists
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
              Join 10,000+ pet owners receiving valuable insights and updates.
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
                  id="pet-updates"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="pet-updates" className="text-sm">
                  I'm interested in updates about:
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
              <Button className="w-full">
                <Bell className="mr-2 h-4 w-4" />
                Subscribe Now
              </Button>
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
