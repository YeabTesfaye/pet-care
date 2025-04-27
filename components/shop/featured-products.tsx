import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, ArrowRight, ArrowLeft } from "lucide-react"

export function FeaturedProducts() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-muted-foreground">Handpicked favorites for your pet</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              id: "1",
              name: "Automatic Pet Feeder",
              category: "Tech & Gadgets",
              price: 89.99,
              originalPrice: 119.99,
              rating: 4.8,
              reviews: 324,
              image: "/placeholder.svg?height=300&width=300",
              badge: "Bestseller",
              badgeColor: "amber",
            },
            {
              id: "2",
              name: "Orthopedic Memory Foam Bed",
              category: "Beds & Furniture",
              price: 79.99,
              originalPrice: 99.99,
              rating: 4.9,
              reviews: 256,
              image: "/placeholder.svg?height=300&width=300",
              badge: "Sale",
              badgeColor: "red",
            },
            {
              id: "3",
              name: "Interactive Treat Dispenser",
              category: "Toys",
              price: 34.99,
              originalPrice: null,
              rating: 4.7,
              reviews: 189,
              image: "/placeholder.svg?height=300&width=300",
              badge: "New",
              badgeColor: "green",
            },
            {
              id: "4",
              name: "Premium Grain-Free Cat Food",
              category: "Food & Treats",
              price: 49.99,
              originalPrice: 59.99,
              rating: 4.8,
              reviews: 215,
              image: "/placeholder.svg?height=300&width=300",
              badge: "Organic",
              badgeColor: "emerald",
            },
          ].map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 left-2">
                  <Badge className={`bg-${product.badgeColor}-500 text-white`}>{product.badge}</Badge>
                </div>
              </div>
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-base">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="/shop">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
