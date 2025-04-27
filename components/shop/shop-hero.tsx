import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ShopHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="w-fit bg-primary/20 text-primary border-primary/30 mb-2">Summer Sale</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Premium Products for Your Beloved Pets
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Discover top-quality food, toys, accessories, and more. Carefully selected for your furry, feathered,
                and scaly friends.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#shop-now">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#subscriptions">View Subscriptions</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="flex -space-x-1 mr-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-6 w-6 rounded-full border-2 border-background overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=24&width=24&text=${i}`}
                        alt={`Customer ${i}`}
                        width={24}
                        height={24}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-muted-foreground">Trusted by 10,000+ pet owners</span>
              </div>
              <div className="flex items-center">
                <div className="flex mr-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-muted-foreground">4.9/5 from 2,540+ reviews</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Featured pet products"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 dark:bg-black/90 rounded-lg p-4 backdrop-blur-sm">
                <Badge className="bg-red-500 text-white mb-2">Limited Time</Badge>
                <h3 className="font-bold text-lg">Summer Sale: Up to 40% Off</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Stock up on summer essentials for your pets. Sale ends soon!
                </p>
                <Button size="sm">Shop Sale</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
