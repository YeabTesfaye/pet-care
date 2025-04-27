import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

export function ProductReviews() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Read reviews from pet owners who have purchased our products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              pet: "Max (Golden Retriever)",
              product: "Orthopedic Pet Bed",
              rating: 5,
              review:
                "This bed has been a game-changer for my senior dog with arthritis. He sleeps soundly through the night now, and I've noticed a significant improvement in his mobility in the mornings. Worth every penny!",
              avatar: "/placeholder.svg?height=40&width=40",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "Michael Chen",
              pet: "Luna (Siamese Cat)",
              product: "Interactive Treat Dispenser",
              rating: 5,
              review:
                "My cat is extremely picky with toys, but she absolutely loves this treat dispenser! It keeps her mentally stimulated and has helped with her weight management since she has to work for her treats now.",
              avatar: "/placeholder.svg?height=40&width=40",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "Emily Rodriguez",
              pet: "Buddy (Labrador Mix)",
              product: "Premium Grain-Free Dog Food",
              rating: 5,
              review:
                "After switching to this food, my dog's coat is shinier, his energy levels have improved, and his digestive issues have completely resolved. The auto-delivery subscription is super convenient too!",
              avatar: "/placeholder.svg?height=40&width=40",
              image: "/placeholder.svg?height=100&width=100",
            },
          ].map((review, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.pet}</p>
                    <div className="flex mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.product}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Purchased: {review.product}</h4>
                    <p className="text-xs text-muted-foreground">Verified Purchase</p>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                  <p className="pl-4 text-muted-foreground">{review.review}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
