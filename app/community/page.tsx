import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, MapPin, Users, MessageCircle, Search, ArrowRight, PawPrint } from "lucide-react"
import { CommunityHero } from "@/components/community/community-hero"
import { CommunitySpotlight } from "@/components/community/community-spotlight"
import { CommunityNewsletter } from "@/components/community/community-newsletter"

export const metadata: Metadata = {
  title: "Community | PetCare",
  description: "Connect with fellow pet owners, find local events, and access valuable resources for pet care.",
}

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CommunityHero />

      {/* Community Navigation */}
      <section className="py-8 border-b bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="discussions" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto">
              <TabsTrigger value="discussions" className="py-3">
                Discussions
              </TabsTrigger>
              <TabsTrigger value="events" className="py-3">
                Events
              </TabsTrigger>
              <TabsTrigger value="resources" className="py-3">
                Resources
              </TabsTrigger>
              <TabsTrigger value="experts" className="py-3">
                Expert Advice
              </TabsTrigger>
              <TabsTrigger value="lost-found" className="py-3">
                Lost & Found
              </TabsTrigger>
              <TabsTrigger value="stories" className="py-3">
                Success Stories
              </TabsTrigger>
            </TabsList>

            {/* Discussions Tab */}
            <TabsContent value="discussions" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Popular Discussions</h2>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                      <Button size="sm">New Post</Button>
                    </div>
                  </div>

                  {/* Discussion Cards */}
                  {[
                    {
                      title: "Best food options for a dog with allergies?",
                      category: "Nutrition",
                      author: "Sarah Johnson",
                      avatar: "/placeholder.svg?height=40&width=40",
                      replies: 28,
                      views: 342,
                      timeAgo: "2 hours ago",
                      hot: true,
                    },
                    {
                      title: "Training tips for leash reactive dogs",
                      category: "Training",
                      author: "Michael Chen",
                      avatar: "/placeholder.svg?height=40&width=40",
                      replies: 45,
                      views: 512,
                      timeAgo: "1 day ago",
                      hot: true,
                    },
                    {
                      title: "Cat suddenly hiding - should I be concerned?",
                      category: "Behavior",
                      author: "Emily Rodriguez",
                      avatar: "/placeholder.svg?height=40&width=40",
                      replies: 19,
                      views: 203,
                      timeAgo: "5 hours ago",
                      hot: false,
                    },
                    {
                      title: "Introducing a new kitten to resident cat",
                      category: "Multi-pet Households",
                      author: "David Wilson",
                      avatar: "/placeholder.svg?height=40&width=40",
                      replies: 32,
                      views: 287,
                      timeAgo: "3 days ago",
                      hot: false,
                    },
                    {
                      title: "Recommendations for pet-friendly apartments",
                      category: "Lifestyle",
                      author: "Jessica Taylor",
                      avatar: "/placeholder.svg?height=40&width=40",
                      replies: 24,
                      views: 198,
                      timeAgo: "2 days ago",
                      hot: false,
                    },
                  ].map((discussion, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline">{discussion.category}</Badge>
                            {discussion.hot && (
                              <Badge
                                variant="secondary"
                                className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                              >
                                Hot
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg">
                            <Link href="#" className="hover:text-primary transition-colors">
                              {discussion.title}
                            </Link>
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={discussion.avatar || "/placeholder.svg"} alt={discussion.author} />
                              <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="text-sm">
                              <p className="font-medium">{discussion.author}</p>
                              <p className="text-xs text-muted-foreground">{discussion.timeAgo}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              <span>{discussion.replies}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{discussion.views}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="flex justify-center mt-6">
                    <Button variant="outline">
                      View All Discussions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Community Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <PawPrint className="h-4 w-4 mr-2 text-primary mt-0.5" />
                          <span>Be respectful and supportive of all members</span>
                        </li>
                        <li className="flex items-start">
                          <PawPrint className="h-4 w-4 mr-2 text-primary mt-0.5" />
                          <span>Share knowledge and experiences to help others</span>
                        </li>
                        <li className="flex items-start">
                          <PawPrint className="h-4 w-4 mr-2 text-primary mt-0.5" />
                          <span>No promotional content without permission</span>
                        </li>
                        <li className="flex items-start">
                          <PawPrint className="h-4 w-4 mr-2 text-primary mt-0.5" />
                          <span>Respect privacy and confidentiality</span>
                        </li>
                      </ul>
                      <Button variant="link" className="px-0 mt-2">
                        Read Full Guidelines
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Top Contributors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "Dr. Lisa Chen",
                            role: "Veterinarian",
                            avatar: "/placeholder.svg?height=40&width=40",
                            posts: 156,
                          },
                          {
                            name: "Mark Wilson",
                            role: "Dog Trainer",
                            avatar: "/placeholder.svg?height=40&width=40",
                            posts: 124,
                          },
                          {
                            name: "Sophia Garcia",
                            role: "Pet Nutritionist",
                            avatar: "/placeholder.svg?height=40&width=40",
                            posts: 98,
                          },
                        ].map((contributor, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                                <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="text-sm">
                                <p className="font-medium">{contributor.name}</p>
                                <p className="text-xs text-muted-foreground">{contributor.role}</p>
                              </div>
                            </div>
                            <Badge variant="outline">{contributor.posts} posts</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Popular Tags</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Training",
                          "Nutrition",
                          "Health",
                          "Behavior",
                          "Adoption",
                          "Grooming",
                          "Puppies",
                          "Kittens",
                          "Senior Pets",
                          "Toys",
                          "Travel",
                          "Multi-pet",
                        ].map((tag, index) => (
                          <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Upcoming Events</h2>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                      <Button size="sm">Submit Event</Button>
                    </div>
                  </div>

                  {/* Event Cards */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      {
                        title: "Paws in the Park",
                        type: "Meetup",
                        date: "May 15, 2023",
                        time: "10:00 AM - 2:00 PM",
                        location: "Central Park, Anytown",
                        description:
                          "Join fellow dog owners for a fun day at the park. Activities include agility courses, training demos, and a pet photo booth.",
                        attendees: 45,
                        image: "/placeholder.svg?height=200&width=400",
                      },
                      {
                        title: "Pet First Aid Workshop",
                        type: "Workshop",
                        date: "May 22, 2023",
                        time: "6:00 PM - 8:00 PM",
                        location: "Community Center, Anytown",
                        description:
                          "Learn essential first aid skills for pets. Taught by certified veterinary professionals. Certificate provided upon completion.",
                        attendees: 28,
                        image: "/placeholder.svg?height=200&width=400",
                      },
                      {
                        title: "Adoption Day",
                        type: "Charity",
                        date: "June 5, 2023",
                        time: "11:00 AM - 4:00 PM",
                        location: "City Animal Shelter, Anytown",
                        description:
                          "Find your perfect companion! Meet adoptable pets and learn about the adoption process. Adoption fees waived for the event.",
                        attendees: 120,
                        image: "/placeholder.svg?height=200&width=400",
                      },
                      {
                        title: "Cat Café Social",
                        type: "Social",
                        date: "June 12, 2023",
                        time: "5:00 PM - 7:00 PM",
                        location: "Whiskers Cat Café, Anytown",
                        description:
                          "Enjoy coffee and pastries while socializing with fellow cat lovers and adorable cats. Special menu items available.",
                        attendees: 32,
                        image: "/placeholder.svg?height=200&width=400",
                      },
                    ].map((event, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-primary text-primary-foreground">{event.type}</Badge>
                          </div>
                        </div>
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                          <CardDescription>
                            <div className="flex items-center text-sm">
                              <CalendarDays className="h-4 w-4 mr-1" />
                              <span>
                                {event.date} • {event.time}
                              </span>
                            </div>
                            <div className="flex items-center text-sm mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{event.location}</span>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                          <div className="mt-2 flex items-center text-sm">
                            <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-muted-foreground">{event.attendees} attending</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm">RSVP</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button variant="outline">
                      View All Events
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Event Calendar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground">Calendar widget placeholder</p>
                      </div>
                      <div className="mt-4 space-y-2">
                        <h4 className="font-medium text-sm">Upcoming This Week</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Paws in the Park</span>
                            <span className="text-muted-foreground">May 15</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Pet First Aid Workshop</span>
                            <span className="text-muted-foreground">May 22</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Featured Event</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="relative h-40 rounded-lg overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=160&width=300"
                            alt="Annual Pet Festival"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <h3 className="text-white font-bold p-3">Annual Pet Festival</h3>
                          </div>
                        </div>
                        <div className="flex items-center text-sm">
                          <CalendarDays className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>July 8-10, 2023</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>City Fairgrounds, Anytown</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          The biggest pet event of the year! Three days of activities, competitions, vendors, and more.
                        </p>
                        <Button className="w-full">Get Tickets</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Host Your Own Event</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Have an idea for a pet-related event? We can help you organize and promote it to our community!
                      </p>
                      <Button className="w-full">Learn More</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Educational Resources</h2>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                    </div>
                  </div>

                  {/* Resource Categories */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        title: "New Pet Guides",
                        icon: "🐾",
                        description: "Essential information for new pet owners",
                        count: 24,
                      },
                      {
                        title: "Health & Wellness",
                        icon: "💊",
                        description: "Keep your pet healthy and happy",
                        count: 42,
                      },
                      {
                        title: "Training Resources",
                        icon: "🎓",
                        description: "Techniques and tips for pet training",
                        count: 36,
                      },
                      {
                        title: "Nutrition & Diet",
                        icon: "🍖",
                        description: "Feeding guides and nutritional information",
                        count: 29,
                      },
                      {
                        title: "Behavior & Psychology",
                        icon: "🧠",
                        description: "Understanding your pet's behavior",
                        count: 31,
                      },
                      {
                        title: "Breed Information",
                        icon: "🔍",
                        description: "Detailed guides for specific breeds",
                        count: 58,
                      },
                    ].map((category, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader className="p-4 pb-2">
                          <div className="text-3xl mb-2">{category.icon}</div>
                          <CardTitle>{category.title}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground">{category.count} resources</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="outline" className="w-full">
                            Explore
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  {/* Featured Resources */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Featured Resources</h3>
                    <div className="grid gap-4">
                      {[
                        {
                          title: "Complete Guide to Puppy Care",
                          type: "Guide",
                          author: "Dr. James Wilson",
                          description:
                            "Everything you need to know about caring for a new puppy, from vaccinations to training.",
                          image: "/placeholder.svg?height=80&width=120",
                          featured: true,
                        },
                        {
                          title: "Understanding Cat Body Language",
                          type: "Article",
                          author: "Feline Behavior Institute",
                          description:
                            "Learn to interpret your cat's subtle communication signals and strengthen your bond.",
                          image: "/placeholder.svg?height=80&width=120",
                          featured: false,
                        },
                        {
                          title: "Senior Pet Care: Special Considerations",
                          type: "Guide",
                          author: "Dr. Sarah Chen",
                          description:
                            "How to adapt care routines for aging pets and ensure their comfort in their golden years.",
                          image: "/placeholder.svg?height=80&width=120",
                          featured: false,
                        },
                      ].map((resource, index) => (
                        <Card
                          key={index}
                          className={`overflow-hidden hover:shadow-md transition-shadow ${resource.featured ? "border-primary" : ""}`}
                        >
                          <div className="flex p-4">
                            <div className="relative h-20 w-32 flex-shrink-0">
                              <Image
                                src={resource.image || "/placeholder.svg"}
                                alt={resource.title}
                                fill
                                className="object-cover rounded-md"
                              />
                            </div>
                            <div className="ml-4 flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="outline">{resource.type}</Badge>
                                {resource.featured && (
                                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                                    Featured
                                  </Badge>
                                )}
                              </div>
                              <h4 className="font-semibold">{resource.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">By {resource.author}</p>
                              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{resource.description}</p>
                            </div>
                          </div>
                          <div className="px-4 pb-4 flex justify-end">
                            <Button variant="link" className="h-auto p-0">
                              Read More
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button variant="outline">
                      View All Resources
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Resource Library</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="relative">
                          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Search resources..."
                            className="w-full rounded-md border border-input pl-8 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Resource Types</h4>
                          <div className="space-y-1">
                            {["Articles", "Guides", "Videos", "Infographics", "Podcasts", "Webinars"].map(
                              (type, index) => (
                                <div key={index} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    id={`type-${index}`}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                  />
                                  <label htmlFor={`type-${index}`} className="ml-2 text-sm">
                                    {type}
                                  </label>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Pet Types</h4>
                          <div className="space-y-1">
                            {["Dogs", "Cats", "Birds", "Small Pets", "Reptiles", "Fish"].map((pet, index) => (
                              <div key={index} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={`pet-${index}`}
                                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <label htmlFor={`pet-${index}`} className="ml-2 text-sm">
                                  {pet}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Button className="w-full">Apply Filters</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Download Our App</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="relative h-40 rounded-lg overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=160&width=300"
                            alt="PetCare Mobile App"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Access all our resources offline, get personalized recommendations, and track your pet's
                          progress with our mobile app.
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1">
                            App Store
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Google Play
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Submit a Resource</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Have valuable pet care knowledge to share? Submit your article, guide, or video to our resource
                        library.
                      </p>
                      <Button className="w-full">Submit Resource</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Expert Advice Tab */}
            <TabsContent value="experts" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Expert Advice</h2>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                      <Button size="sm">Ask a Question</Button>
                    </div>
                  </div>

                  {/* Expert Profiles */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      {
                        name: "Dr. Emily Chen, DVM",
                        specialty: "Veterinary Medicine",
                        image: "/placeholder.svg?height=150&width=150",
                        bio: "Board-certified veterinarian with 15 years of experience in small animal medicine and surgery.",
                        expertise: ["Preventive Care", "Surgery", "Geriatric Medicine"],
                      },
                      {
                        name: "Mark Wilson",
                        specialty: "Dog Training & Behavior",
                        image: "/placeholder.svg?height=150&width=150",
                        bio: "Certified professional dog trainer with expertise in positive reinforcement techniques and behavior modification.",
                        expertise: ["Obedience Training", "Behavior Problems", "Puppy Development"],
                      },
                      {
                        name: "Dr. Sarah Johnson, PhD",
                        specialty: "Animal Nutrition",
                        image: "/placeholder.svg?height=150&width=150",
                        bio: "Animal nutritionist with a doctorate in veterinary nutrition. Specializes in dietary management for pets with health conditions.",
                        expertise: ["Prescription Diets", "Weight Management", "Allergies & Sensitivities"],
                      },
                      {
                        name: "Carlos Rodriguez",
                        specialty: "Cat Behavior Consultant",
                        image: "/placeholder.svg?height=150&width=150",
                        bio: "Certified feline behavior consultant helping cat owners understand and address behavioral issues.",
                        expertise: ["Litter Box Problems", "Multi-cat Households", "Enrichment"],
                      },
                    ].map((expert, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader className="p-4 pb-2 flex flex-row items-start gap-4">
                          <div className="relative h-16 w-16 rounded-full overflow-hidden">
                            <Image
                              src={expert.image || "/placeholder.svg"}
                              alt={expert.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{expert.name}</CardTitle>
                            <CardDescription>{expert.specialty}</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground mb-3">{expert.bio}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {expert.expertise.map((item, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between">
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                          <Button size="sm">Ask a Question</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  {/* Recent Q&A */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Recent Q&A</h3>
                    <div className="space-y-4">
                      {[
                        {
                          question: "How can I help my dog overcome separation anxiety?",
                          askedBy: "Michael T.",
                          answeredBy: "Mark Wilson",
                          date: "2 days ago",
                          preview:
                            "Separation anxiety is common in dogs, especially after changes in routine. Start with short departures and gradually increase time away...",
                        },
                        {
                          question: "What's the best diet for a cat with urinary issues?",
                          askedBy: "Jennifer L.",
                          answeredBy: "Dr. Sarah Johnson, PhD",
                          date: "5 days ago",
                          preview:
                            "Cats with urinary issues benefit from diets that promote hydration and maintain proper urinary pH. Look for foods specifically formulated for urinary health...",
                        },
                        {
                          question: "How often should I bathe my short-haired dog?",
                          askedBy: "David R.",
                          answeredBy: "Dr. Emily Chen, DVM",
                          date: "1 week ago",
                          preview:
                            "For most short-haired dogs, bathing once every 1-3 months is sufficient unless they get particularly dirty or have skin conditions...",
                        },
                      ].map((qa, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                          <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-lg">{qa.question}</CardTitle>
                            <CardDescription>
                              Asked by {qa.askedBy} • {qa.date}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">Answered by {qa.answeredBy}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{qa.preview}</p>
                          </CardContent>
                          <CardFooter className="p-4 pt-0">
                            <Button variant="link" className="h-auto p-0">
                              Read Full Answer
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button variant="outline">
                      View All Q&A
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Ask Our Experts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Have a question about your pet's health, behavior, or care? Our experts are here to help!
                      </p>
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="topic" className="block text-sm font-medium mb-1">
                            Topic
                          </label>
                          <select id="topic" className="w-full rounded-md border border-input p-2 text-sm">
                            <option>Health & Medical</option>
                            <option>Behavior & Training</option>
                            <option>Nutrition & Diet</option>
                            <option>Grooming & Care</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="question" className="block text-sm font-medium mb-1">
                            Your Question
                          </label>
                          <textarea
                            id="question"
                            rows={4}
                            className="w-full rounded-md border border-input p-2 text-sm"
                            placeholder="Type your question here..."
                          ></textarea>
                        </div>
                        <Button className="w-full">Submit Question</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Expert Articles</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Understanding Canine Body Language",
                            author: "Mark Wilson",
                            date: "April 15, 2023",
                          },
                          {
                            title: "Nutrition Myths Debunked",
                            author: "Dr. Sarah Johnson, PhD",
                            date: "April 8, 2023",
                          },
                          {
                            title: "Preventive Care for Senior Pets",
                            author: "Dr. Emily Chen, DVM",
                            date: "March 30, 2023",
                          },
                        ].map((article, index) => (
                          <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                            <h4 className="font-medium text-sm">{article.title}</h4>
                            <p className="text-xs text-muted-foreground">
                              By {article.author} • {article.date}
                            </p>
                            <Button variant="link" className="h-auto p-0 text-xs">
                              Read Article
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Become an Expert</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Are you a veterinarian, trainer, or other pet care professional? Join our expert network to
                        share your knowledge and grow your practice.
                      </p>
                      <Button className="w-full">Apply Now</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Lost & Found Tab */}
            <TabsContent value="lost-found" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Lost & Found Pets</h2>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                      <Button size="sm">Report Pet</Button>
                    </div>
                  </div>

                  {/* Lost & Found Tabs */}
                  <Tabs defaultValue="lost" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="lost">Lost Pets</TabsTrigger>
                      <TabsTrigger value="found">Found Pets</TabsTrigger>
                    </TabsList>
                    <TabsContent value="lost" className="mt-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {[
                          {
                            name: "Max",
                            type: "Dog",
                            breed: "Golden Retriever",
                            gender: "Male",
                            age: "3 years",
                            location: "Central Park, Anytown",
                            date: "May 10, 2023",
                            description: "Friendly, wearing a blue collar with tags. Responds to his name.",
                            contact: "John D. - 555-123-4567",
                            image: "/placeholder.svg?height=200&width=300",
                            reward: true,
                          },
                          {
                            name: "Luna",
                            type: "Cat",
                            breed: "Siamese",
                            gender: "Female",
                            age: "2 years",
                            location: "Oak Street, Anytown",
                            date: "May 12, 2023",
                            description: "Shy, cream colored with blue eyes. Microchipped.",
                            contact: "Sarah L. - 555-987-6543",
                            image: "/placeholder.svg?height=200&width=300",
                            reward: true,
                          },
                          {
                            name: "Buddy",
                            type: "Dog",
                            breed: "Beagle",
                            gender: "Male",
                            age: "5 years",
                            location: "Riverside Park, Anytown",
                            date: "May 8, 2023",
                            description: "Tri-colored, wearing a red harness. Very friendly and food motivated.",
                            contact: "Michael T. - 555-456-7890",
                            image: "/placeholder.svg?height=200&width=300",
                            reward: false,
                          },
                          {
                            name: "Mittens",
                            type: "Cat",
                            breed: "Domestic Shorthair",
                            gender: "Female",
                            age: "1 year",
                            location: "Maple Avenue, Anytown",
                            date: "May 11, 2023",
                            description: "Black and white, with white paws. Very skittish around strangers.",
                            contact: "Emily R. - 555-234-5678",
                            image: "/placeholder.svg?height=200&width=300",
                            reward: true,
                          },
                        ].map((pet, index) => (
                          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                            <div className="relative">
                              <Image
                                src={pet.image || "/placeholder.svg"}
                                alt={pet.name}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                              />
                              {pet.reward && (
                                <div className="absolute top-2 right-2">
                                  <Badge className="bg-amber-500 text-white">Reward Offered</Badge>
                                </div>
                              )}
                            </div>
                            <CardHeader className="p-4 pb-2">
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle className="text-lg">{pet.name}</CardTitle>
                                  <CardDescription>
                                    {pet.breed} • {pet.gender} • {pet.age}
                                  </CardDescription>
                                </div>
                                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                                  Lost
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-0 space-y-2">
                              <div className="flex items-start text-sm">
                                <MapPin className="h-4 w-4 mr-1 mt-0.5 text-muted-foreground" />
                                <span>{pet.location}</span>
                              </div>
                              <div className="flex items-start text-sm">
                                <CalendarDays className="h-4 w-4 mr-1 mt-0.5 text-muted-foreground" />
                                <span>Missing since {pet.date}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{pet.description}</p>
                              <div className="pt-2 border-t">
                                <p className="text-sm font-medium">Contact: {pet.contact}</p>
                              </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                              <Button className="w-full">I've Seen This Pet</Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="found" className="mt-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {[
                          {
                            type: "Dog",
                            breed: "Labrador Mix",
                            gender: "Male",
                            age: "Adult",
                            location: "Elm Street, Anytown",
                            date: "May 13, 2023",
                            description: "Yellow Lab mix, no collar but appears well-cared for. Very friendly.",
                            contact: "David W. - 555-345-6789",
                            image: "/placeholder.svg?height=200&width=300",
                          },
                          {
                            type: "Cat",
                            breed: "Tabby",
                            gender: "Unknown",
                            age: "Young",
                            location: "Pine Street, Anytown",
                            date: "May 11, 2023",
                            description: "Gray tabby, no collar. Friendly but cautious.",
                            contact: "Jessica T. - 555-876-5432",
                            image: "/placeholder.svg?height=200&width=300",
                          },
                        ].map((pet, index) => (
                          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                            <div className="relative">
                              <Image
                                src={pet.image || "/placeholder.svg"}
                                alt={`Found ${pet.type}`}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                              />
                            </div>
                            <CardHeader className="p-4 pb-2">
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle className="text-lg">Found {pet.type}</CardTitle>
                                  <CardDescription>
                                    {pet.breed} • {pet.gender} • {pet.age}
                                  </CardDescription>
                                </div>
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  Found
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-0 space-y-2">
                              <div className="flex items-start text-sm">
                                <MapPin className="h-4 w-4 mr-1 mt-0.5 text-muted-foreground" />
                                <span>{pet.location}</span>
                              </div>
                              <div className="flex items-start text-sm">
                                <CalendarDays className="h-4 w-4 mr-1 mt-0.5 text-muted-foreground" />
                                <span>Found on {pet.date}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{pet.description}</p>
                              <div className="pt-2 border-t">
                                <p className="text-sm font-medium">Contact: {pet.contact}</p>
                              </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                              <Button className="w-full">This Might Be My Pet</Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="flex justify-center mt-6">
                    <Button variant="outline">
                      View All Listings
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Report a Pet</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Button className="w-full">Lost Pet</Button>
                          <Button variant="outline" className="w-full">
                            Found Pet
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Report a lost or found pet to alert the community and increase chances of a reunion.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Lost Pet Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <PawPrint className="h-4 w-4 mr-2 text-primary mt-0.5" />
                          <span>Search your home thoroughly, including small spaces</span>
                        </li>
                        <li className="flex items-start">
                          <PawPrint className="h-4 w-4 mr-2 text-primary mt-0.5" />
                          <span>Contact local animal shelters and veterinarians</span>
                        </li>
                        <li className="flex items-start">
                          <PawPrint className="h-4 w-4 mr-2 text-primary mt-0.5" />
                          <span>Post flyers in your neighborhood with clear photos</span>
                        </li>
                        <li className="flex items-start">
                          <PawPrint className="h-4 w-4 mr-2 text-primary mt-0.5" />
                          <span>Leave familiar items outside (bedding, toys) to help them find home</span>
                        </li>
                        <li className="flex items-start">
                          <PawPrint className="h-4 w-4 mr-2 text-primary mt-0.5" />
                          <span>Check with neighbors and local social media groups</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Success Stories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            pet: "Charlie",
                            type: "Dog",
                            days: 5,
                            story:
                              "Found 3 miles from home thanks to a community member who recognized him from our listing.",
                            image: "/placeholder.svg?height=60&width=60",
                          },
                          {
                            pet: "Whiskers",
                            type: "Cat",
                            days: 12,
                            story:
                              "Returned home after a neighbor spotted her in their garage and checked our lost pets section.",
                            image: "/placeholder.svg?height=60&width=60",
                          },
                        ].map((story, index) => (
                          <div key={index} className="flex gap-3 pb-3 border-b last:border-0 last:pb-0">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={story.image || "/placeholder.svg"}
                                alt={story.pet}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">
                                {story.pet} reunited after {story.days} days!
                              </h4>
                              <p className="text-xs text-muted-foreground">{story.story}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Success Stories Tab */}
            <TabsContent value="stories" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Success Stories</h2>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                      <Button size="sm">Share Your Story</Button>
                    </div>
                  </div>

                  {/* Featured Story */}
                  <Card className="overflow-hidden hover:shadow-md transition-shadow border-primary">
                    <div className="relative h-64 md:h-80">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Max's Journey"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                        <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Featured Story</Badge>
                        <h3 className="text-2xl font-bold text-white">Max's Journey: From Shelter to Service Dog</h3>
                        <p className="text-white/90 mt-2">
                          How a rescued pit bull found his purpose helping a veteran with PTSD
                        </p>
                        <div className="flex items-center mt-4">
                          <Avatar className="h-8 w-8 border-2 border-white">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="James Wilson" />
                            <AvatarFallback>JW</AvatarFallback>
                          </Avatar>
                          <div className="ml-2 text-white/90 text-sm">
                            <p>James Wilson</p>
                            <p>May 5, 2023</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">
                        When I first met Max at the city shelter, he was cowering in the corner of his kennel. The staff
                        told me he had been found abandoned and tied to a fence. Despite his rough start, there was
                        something special about him...
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button>Read Full Story</Button>
                    </CardFooter>
                  </Card>

                  {/* More Stories */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      {
                        title: "Luna's Second Chance",
                        subtitle: "A story of recovery and resilience",
                        author: "Sarah Johnson",
                        date: "April 28, 2023",
                        excerpt:
                          "After being diagnosed with a rare condition, Luna's prognosis was uncertain. Thanks to specialized veterinary care and a dedicated owner, she made a remarkable recovery...",
                        image: "/placeholder.svg?height=200&width=400",
                        category: "Health & Recovery",
                      },
                      {
                        title: "From Feral to Family",
                        subtitle: "How patience transformed a scared stray",
                        author: "Michael Chen",
                        date: "April 20, 2023",
                        excerpt:
                          "It took six months of daily visits before Whiskers would even let me touch her. The journey from feral cat to affectionate companion taught me so much about trust...",
                        image: "/placeholder.svg?height=200&width=400",
                        category: "Rescue",
                      },
                      {
                        title: "Buddy's Weight Loss Journey",
                        subtitle: "How we helped our dog lose 30 pounds",
                        author: "Emily Rodriguez",
                        date: "April 15, 2023",
                        excerpt:
                          "When we adopted Buddy, he was severely overweight and could barely walk. With a carefully planned diet and exercise regimen, he transformed into an energetic, healthy dog...",
                        image: "/placeholder.svg?height=200&width=400",
                        category: "Health & Wellness",
                      },
                      {
                        title: "Training Breakthrough",
                        subtitle: "How we overcame severe anxiety in our rescue dog",
                        author: "David Wilson",
                        date: "April 10, 2023",
                        excerpt:
                          "Rex would panic at the slightest noise, making everyday life challenging. Through positive reinforcement training and patience, we helped him gain confidence...",
                        image: "/placeholder.svg?height=200&width=400",
                        category: "Behavior & Training",
                      },
                    ].map((story, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt={story.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge variant="secondary">{story.category}</Badge>
                          </div>
                        </div>
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-lg">{story.title}</CardTitle>
                          <CardDescription>{story.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground line-clamp-3">{story.excerpt}</p>
                          <div className="flex items-center mt-3 text-sm">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage src="/placeholder.svg?height=24&width=24" alt={story.author} />
                              <AvatarFallback>{story.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-muted-foreground">
                              {story.author} • {story.date}
                            </span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="link" className="h-auto p-0">
                            Read More
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button variant="outline">
                      View All Stories
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Share Your Story</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Have an inspiring story about your pet? Share it with our community to encourage and support
                        other pet owners.
                      </p>
                      <Button className="w-full">Submit Your Story</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Story Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {[
                          { name: "Rescue Stories", count: 48 },
                          { name: "Health & Recovery", count: 36 },
                          { name: "Behavior & Training", count: 29 },
                          { name: "Adoption", count: 42 },
                          { name: "Senior Pets", count: 18 },
                          { name: "Special Needs Pets", count: 23 },
                        ].map((category, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-1 hover:bg-muted/50 px-2 rounded-md cursor-pointer"
                          >
                            <span className="text-sm">{category.name}</span>
                            <Badge variant="outline">{category.count}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Editor's Picks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "The Healing Power of Pets",
                            excerpt: "How my cat helped me through cancer treatment",
                            image: "/placeholder.svg?height=60&width=60",
                          },
                          {
                            title: "A Tale of Two Rescues",
                            excerpt: "How adopting two bonded senior dogs changed my life",
                            image: "/placeholder.svg?height=60&width=60",
                          },
                          {
                            title: "From Show Dog to Therapy Dog",
                            excerpt: "Our champion's second career bringing joy to hospital patients",
                            image: "/placeholder.svg?height=60&width=60",
                          },
                        ].map((story, index) => (
                          <div key={index} className="flex gap-3 pb-3 border-b last:border-0 last:pb-0">
                            <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={story.image || "/placeholder.svg"}
                                alt={story.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">{story.title}</h4>
                              <p className="text-xs text-muted-foreground">{story.excerpt}</p>
                              <Button variant="link" className="h-auto p-0 text-xs">
                                Read More
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CommunitySpotlight />
      <CommunityNewsletter />
    </div>
  )
}
