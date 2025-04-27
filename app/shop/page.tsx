import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  ShoppingCart,
  Heart,
  Star,
  Filter,
  Search,
  ArrowRight,
  Tag,
  Truck,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { ShopHero } from "@/components/shop/shop-hero";
import { FeaturedProducts } from "@/components/shop/featured-products";
import { ProductReviews } from "@/components/shop/product-reviews";
import { ShopNewsletter } from "@/components/shop/shop-newsletter";

export const metadata: Metadata = {
  title: "Shop | PetCare",
  description:
    "Shop premium pet food, toys, accessories, and more for your beloved pets.",
};

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ShopHero />

      {/* Featured Products Carousel */}
      <FeaturedProducts />

      {/* Main Shop Section */}
      <section className="py-12 bg-gray">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="flex items-center justify-between md:hidden">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="hidden md:block space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Food & Treats", count: 128 },
                      { name: "Toys", count: 87 },
                      { name: "Beds & Furniture", count: 43 },
                      { name: "Collars & Leashes", count: 56 },
                      { name: "Grooming", count: 32 },
                      { name: "Health & Wellness", count: 64 },
                      { name: "Travel & Outdoors", count: 29 },
                      { name: "Clothing & Accessories", count: 38 },
                    ].map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`category-${index}`}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor={`category-${index}`}
                            className="ml-2 text-sm"
                          >
                            {category.name}
                          </label>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Pet Type</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Dogs", count: 245 },
                      { name: "Cats", count: 189 },
                      { name: "Small Pets", count: 56 },
                      { name: "Birds", count: 32 },
                      { name: "Fish", count: 28 },
                      { name: "Reptiles", count: 19 },
                    ].map((pet, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`pet-${index}`}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor={`pet-${index}`}
                            className="ml-2 text-sm"
                          >
                            {pet.name}
                          </label>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {pet.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <Slider
                    defaultValue={[0, 100]}
                    max={200}
                    step={1}
                    className="mb-6"
                  />
                  <div className="flex items-center justify-between">
                    <div className="w-20">
                      <Input type="number" placeholder="Min" className="h-8" />
                    </div>
                    <span className="text-muted-foreground">-</span>
                    <div className="w-20">
                      <Input type="number" placeholder="Max" className="h-8" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Brand</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Royal Canin", count: 42 },
                      { name: "Purina", count: 38 },
                      { name: "Hill's Science Diet", count: 29 },
                      { name: "Blue Buffalo", count: 26 },
                      { name: "KONG", count: 24 },
                      { name: "Wellness", count: 21 },
                    ].map((brand, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`brand-${index}`}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor={`brand-${index}`}
                            className="ml-2 text-sm"
                          >
                            {brand.name}
                          </label>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {brand.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`rating-${rating}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="ml-2 flex items-center"
                        >
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          {[...Array(5 - rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-muted-foreground/30"
                            />
                          ))}
                          <span className="ml-1 text-sm">& Up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
                <Button variant="outline" className="w-full">
                  Reset
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Shop All Products</h2>
                  <p className="text-muted-foreground">
                    Showing 1-12 of 487 products
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <div className="relative flex-1 md:w-60">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-8" />
                  </div>
                  <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Best Selling</option>
                    <option>Top Rated</option>
                  </select>
                </div>
              </div>

              <Tabs defaultValue="all" className="w-full mb-6">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto">
                  <TabsTrigger value="all" className="py-2">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="dogs" className="py-2">
                    Dogs
                  </TabsTrigger>
                  <TabsTrigger value="cats" className="py-2">
                    Cats
                  </TabsTrigger>
                  <TabsTrigger value="small-pets" className="py-2">
                    Small Pets
                  </TabsTrigger>
                  <TabsTrigger value="birds" className="py-2">
                    Birds
                  </TabsTrigger>
                  <TabsTrigger value="fish" className="py-2">
                    Fish
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  {
                    id: "1",
                    name: "Premium Dry Dog Food",
                    category: "Food & Treats",
                    price: 54.99,
                    originalPrice: 64.99,
                    rating: 4.8,
                    reviews: 256,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: true,
                    new: false,
                    bestseller: true,
                  },
                  {
                    id: "2",
                    name: "Interactive Puzzle Toy",
                    category: "Toys",
                    price: 24.99,
                    originalPrice: null,
                    rating: 4.6,
                    reviews: 189,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: false,
                    new: true,
                    bestseller: false,
                  },
                  {
                    id: "3",
                    name: "Orthopedic Pet Bed",
                    category: "Beds & Furniture",
                    price: 79.99,
                    originalPrice: 99.99,
                    rating: 4.9,
                    reviews: 312,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: true,
                    new: false,
                    bestseller: true,
                  },
                  {
                    id: "4",
                    name: "Adjustable Leather Collar",
                    category: "Collars & Leashes",
                    price: 32.99,
                    originalPrice: null,
                    rating: 4.7,
                    reviews: 156,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: false,
                    new: false,
                    bestseller: false,
                  },
                  {
                    id: "5",
                    name: "Natural Cat Litter",
                    category: "Supplies",
                    price: 18.99,
                    originalPrice: 22.99,
                    rating: 4.5,
                    reviews: 203,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: true,
                    new: false,
                    bestseller: false,
                  },
                  {
                    id: "6",
                    name: "Automatic Pet Feeder",
                    category: "Supplies",
                    price: 89.99,
                    originalPrice: null,
                    rating: 4.8,
                    reviews: 178,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: false,
                    new: true,
                    bestseller: false,
                  },
                  {
                    id: "7",
                    name: "Calming Anxiety Jacket",
                    category: "Health & Wellness",
                    price: 44.99,
                    originalPrice: 54.99,
                    rating: 4.7,
                    reviews: 231,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: true,
                    new: false,
                    bestseller: false,
                  },
                  {
                    id: "8",
                    name: "Dental Care Chew Toys",
                    category: "Health & Wellness",
                    price: 14.99,
                    originalPrice: null,
                    rating: 4.6,
                    reviews: 167,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: false,
                    new: false,
                    bestseller: true,
                  },
                  {
                    id: "9",
                    name: "Premium Cat Tree",
                    category: "Beds & Furniture",
                    price: 129.99,
                    originalPrice: 159.99,
                    rating: 4.9,
                    reviews: 284,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: true,
                    new: false,
                    bestseller: true,
                  },
                  {
                    id: "10",
                    name: "Grooming Brush Set",
                    category: "Grooming",
                    price: 29.99,
                    originalPrice: null,
                    rating: 4.7,
                    reviews: 142,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: false,
                    new: true,
                    bestseller: false,
                  },
                  {
                    id: "11",
                    name: "Catnip Toys Bundle",
                    category: "Toys",
                    price: 16.99,
                    originalPrice: 19.99,
                    rating: 4.5,
                    reviews: 198,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: true,
                    new: false,
                    bestseller: false,
                  },
                  {
                    id: "12",
                    name: "Pet GPS Tracker",
                    category: "Tech & Gadgets",
                    price: 69.99,
                    originalPrice: null,
                    rating: 4.8,
                    reviews: 215,
                    image: "/placeholder.svg?height=300&width=300",
                    sale: false,
                    new: true,
                    bestseller: false,
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
                      <div className="absolute top-2 right-2 flex flex-col gap-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-white shadow-sm"
                        >
                          <Heart className="h-4 w-4" />
                          <span className="sr-only">Add to wishlist</span>
                        </Button>
                      </div>
                      {product.sale && (
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-red-500 text-white">Sale</Badge>
                        </div>
                      )}
                      {product.new && (
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-green-500 text-white">New</Badge>
                        </div>
                      )}
                      {product.bestseller && (
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-amber-500 text-white">
                            Bestseller
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <CardTitle className="text-base">
                        {product.name}
                      </CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <span className="font-bold">${product.price}</span>
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
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
                <Button variant="outline">
                  Load More Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Benefits */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  On orders over $50
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Satisfaction Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  30-day money back
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Tag className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Special Discounts</h3>
                <p className="text-sm text-muted-foreground">
                  Save with subscriptions
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Expert assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductReviews />
      <ShopNewsletter />
    </div>
  );
}
