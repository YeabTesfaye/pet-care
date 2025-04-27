import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, CheckCircle2, Mail } from "lucide-react"

export function ShopNewsletter() {
  return (
    <section id="subscriptions" className="py-12 md:py-16 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold bg-primary/10 text-primary border-primary/30 w-fit">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              <span>Save 15% with Subscriptions</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Never Run Out of Pet Essentials</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Subscribe to regular deliveries of your pet's favorite products and enjoy exclusive benefits.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Save 15% on Every Order</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic discount applied to all subscription products
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Flexible Delivery Schedule</h3>
                  <p className="text-sm text-muted-foreground">Choose delivery frequency from weekly to monthly</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Free Shipping on All Subscriptions</h3>
                  <p className="text-sm text-muted-foreground">No minimum order value required</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Easy to Modify or Cancel</h3>
                  <p className="text-sm text-muted-foreground">
                    Change products, quantities, or delivery dates anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 bg-card p-6 rounded-xl border shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Get Exclusive Offers</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for special deals, pet care tips, and early access to new products.
            </p>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="pet-type"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="pet-type" className="text-sm">
                  I'm interested in products for:
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
                <Sparkles className="mr-2 h-4 w-4" />
                Get Exclusive Offers
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
