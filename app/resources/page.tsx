import type { Metadata } from "next";
import Link from "next/link";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  BookOpen,
  Video,
  FileText,
  Download,
  Calculator,
  Calendar,
  ArrowRight,
  Clock,
  Eye,
  BookmarkPlus,
  Share2,
  ChevronRight,
} from "lucide-react";
import { ResourcesHero } from "@/components/resources/resources-hero";
import { ResourcesNewsletter } from "@/components/resources/resources-newsletter";
import { ResourcesExperts } from "@/components/resources/resources-experts";

export const metadata: Metadata = {
  title: "Resources | PetCare",
  description:
    "Access comprehensive pet care resources, guides, tools, and expert advice for all your pet needs.",
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ResourcesHero />

      {/* Resource Categories */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Explore Resources by Category
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Find the information you need, organized by topic for easy
                access.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Health & Wellness",
                icon: "🏥",
                description:
                  "Preventive care, common conditions, first aid, and more",
                count: 86,
                color: "bg-red-50 dark:bg-red-950/30",
                textColor: "text-red-600 dark:text-red-400",
                borderColor: "border-red-200 dark:border-red-800",
              },
              {
                title: "Training & Behavior",
                icon: "🎓",
                description:
                  "Training guides, behavior solutions, and enrichment ideas",
                count: 74,
                color: "bg-blue-50 dark:bg-blue-950/30",
                textColor: "text-blue-600 dark:text-blue-400",
                borderColor: "border-blue-200 dark:border-blue-800",
              },
              {
                title: "Nutrition & Diet",
                icon: "🍖",
                description:
                  "Feeding guides, dietary needs, and nutrition information",
                count: 62,
                color: "bg-green-50 dark:bg-green-950/30",
                textColor: "text-green-600 dark:text-green-400",
                borderColor: "border-green-200 dark:border-green-800",
              },
              {
                title: "Grooming & Care",
                icon: "✂️",
                description:
                  "Grooming tips, hygiene practices, and coat maintenance",
                count: 48,
                color: "bg-purple-50 dark:bg-purple-950/30",
                textColor: "text-purple-600 dark:text-purple-400",
                borderColor: "border-purple-200 dark:border-purple-800",
              },
              {
                title: "Breeds & Species",
                icon: "🐾",
                description:
                  "Detailed information on different breeds and species",
                count: 120,
                color: "bg-amber-50 dark:bg-amber-950/30",
                textColor: "text-amber-600 dark:text-amber-400",
                borderColor: "border-amber-200 dark:border-amber-800",
              },
              {
                title: "New Pet Guides",
                icon: "🏠",
                description: "Essential information for new pet owners",
                count: 35,
                color: "bg-teal-50 dark:bg-teal-950/30",
                textColor: "text-teal-600 dark:text-teal-400",
                borderColor: "border-teal-200 dark:border-teal-800",
              },
              {
                title: "Senior Pet Care",
                icon: "👵",
                description: "Caring for aging pets and age-related conditions",
                count: 42,
                color: "bg-indigo-50 dark:bg-indigo-950/30",
                textColor: "text-indigo-600 dark:text-indigo-400",
                borderColor: "border-indigo-200 dark:border-indigo-800",
              },
              {
                title: "Emergency & Safety",
                icon: "🚨",
                description:
                  "Emergency preparedness, first aid, and safety tips",
                count: 28,
                color: "bg-orange-50 dark:bg-orange-950/30",
                textColor: "text-orange-600 dark:text-orange-400",
                borderColor: "border-orange-200 dark:border-orange-800",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-md transition-shadow border ${category.borderColor}`}
              >
                <CardHeader className={`p-6 ${category.color}`}>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className={category.textColor}>
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-4">
                  <p className="text-sm text-muted-foreground">
                    {category.count} resources available
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={`/resources/categories/${category.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      Explore
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Featured Resources
              </h2>
              <p className="text-muted-foreground">
                Handpicked content to help you care for your pets
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild variant="outline">
                <Link href="/resources/featured">
                  View All Featured
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Main Featured Resource */}
            <Card className="md:col-span-3 overflow-hidden border-primary">
              <div className="md:flex">
                <div className="relative h-64 md:h-auto md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Complete Guide to Pet First Aid"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured Guide
                    </Badge>
                  </div>
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Complete Guide to Pet First Aid
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Learn essential first aid skills to handle pet emergencies
                      with confidence. This comprehensive guide covers common
                      emergencies, basic procedures, and when to seek veterinary
                      care.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Emergency</Badge>
                      <Badge variant="outline">First Aid</Badge>
                      <Badge variant="outline">Safety</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <BookOpen className="mr-1 h-4 w-4" />
                      <span className="mr-4">Comprehensive Guide</span>
                      <Clock className="mr-1 h-4 w-4" />
                      <span>15 min read</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                      <Link href="/resources/guides/pet-first-aid">
                        Read Guide
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/resources/guides/pet-first-aid/download">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Other Featured Resources */}
            {[
              {
                title: "Understanding Your Dog's Body Language",
                type: "Video Series",
                description:
                  "Learn to interpret your dog's subtle communication signals to better understand their needs and emotions.",
                image: "/placeholder.svg?height=200&width=300",
                category: "Behavior",
                duration: "5 videos, 45 min total",
                icon: <Video className="h-4 w-4" />,
              },
              {
                title: "Nutrition Calculator for Adult Cats",
                type: "Interactive Tool",
                description:
                  "Calculate the optimal daily caloric intake and portion sizes based on your cat's weight, age, and activity level.",
                image: "/placeholder.svg?height=200&width=300",
                category: "Nutrition",
                duration: "Interactive Tool",
                icon: <Calculator className="h-4 w-4" />,
              },
              {
                title: "Puppy Vaccination Schedule",
                type: "Printable Guide",
                description:
                  "A comprehensive timeline of essential vaccinations for puppies from 6 weeks to 16 months of age.",
                image: "/placeholder.svg?height=200&width=300",
                category: "Health",
                duration: "Printable PDF",
                icon: <Calendar className="h-4 w-4" />,
              },
            ].map((resource, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {resource.category}
                      </Badge>
                      <CardTitle className="text-lg">
                        {resource.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground mb-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    {resource.icon}
                    <span className="ml-1">{resource.duration}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm">
                    <BookmarkPlus className="mr-1 h-4 w-4" />
                    Save
                  </Button>
                  <Button size="sm">View Resource</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Resource Library
              </h2>
              <p className="text-muted-foreground">
                Browse our collection of guides, articles, videos, and tools
              </p>
            </div>
            <div className="relative w-full md:w-64 mt-4 md:mt-0">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search resources..." className="pl-8" />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
              <TabsTrigger value="all" className="py-2">
                All Resources
              </TabsTrigger>
              <TabsTrigger value="articles" className="py-2">
                Articles
              </TabsTrigger>
              <TabsTrigger value="guides" className="py-2">
                Guides
              </TabsTrigger>
              <TabsTrigger value="videos" className="py-2">
                Videos
              </TabsTrigger>
              <TabsTrigger value="tools" className="py-2">
                Tools
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "How to Introduce a New Cat to Your Home",
                    type: "Article",
                    category: "New Pet",
                    description:
                      "Step-by-step guidance for a smooth transition when bringing a new feline friend into your household.",
                    author: "Dr. Sarah Chen",
                    date: "May 10, 2023",
                    readTime: "8 min read",
                    views: 3245,
                    image: "/placeholder.svg?height=200&width=300",
                    icon: <FileText className="h-4 w-4" />,
                  },
                  {
                    title: "Dental Care Basics for Dogs",
                    type: "Guide",
                    category: "Health",
                    description:
                      "Learn how to maintain your dog's dental health with proper brushing techniques and preventive care.",
                    author: "Dr. James Wilson",
                    date: "April 28, 2023",
                    readTime: "12 min read",
                    views: 2876,
                    image: "/placeholder.svg?height=200&width=300",
                    icon: <BookOpen className="h-4 w-4" />,
                  },
                  {
                    title: "Basic Obedience Training for Puppies",
                    type: "Video",
                    category: "Training",
                    description:
                      "Watch our certified trainer demonstrate essential commands and techniques for training your puppy.",
                    author: "Mark Thompson",
                    date: "May 5, 2023",
                    readTime: "18 min video",
                    views: 5432,
                    image: "/placeholder.svg?height=200&width=300",
                    icon: <Video className="h-4 w-4" />,
                  },
                  {
                    title: "Pet Food Label Decoder",
                    type: "Tool",
                    category: "Nutrition",
                    description:
                      "An interactive tool to help you understand pet food labels and make informed choices for your pet's diet.",
                    author: "Nutrition Team",
                    date: "April 15, 2023",
                    readTime: "Interactive Tool",
                    views: 1987,
                    image: "/placeholder.svg?height=200&width=300",
                    icon: <Calculator className="h-4 w-4" />,
                  },
                  {
                    title: "Recognizing Signs of Illness in Cats",
                    type: "Article",
                    category: "Health",
                    description:
                      "Learn to identify subtle changes in behavior and appearance that may indicate your cat is unwell.",
                    author: "Dr. Emily Rodriguez",
                    date: "May 8, 2023",
                    readTime: "10 min read",
                    views: 4123,
                    image: "/placeholder.svg?height=200&width=300",
                    icon: <FileText className="h-4 w-4" />,
                  },
                  {
                    title: "Complete Guide to Small Pet Housing",
                    type: "Guide",
                    category: "Care",
                    description:
                      "Everything you need to know about creating the perfect habitat for rabbits, guinea pigs, and other small pets.",
                    author: "Small Pet Specialists",
                    date: "April 20, 2023",
                    readTime: "15 min read",
                    views: 2345,
                    image: "/placeholder.svg?height=200&width=300",
                    icon: <BookOpen className="h-4 w-4" />,
                  },
                ].map((resource, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge
                          className={
                            resource.type === "Article"
                              ? "bg-blue-500 text-white"
                              : resource.type === "Guide"
                              ? "bg-purple-500 text-white"
                              : resource.type === "Video"
                              ? "bg-red-500 text-white"
                              : "bg-green-500 text-white"
                          }
                        >
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline">{resource.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Eye className="mr-1 h-4 w-4" />
                          <span>{resource.views}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg mt-2">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">
                          By {resource.author}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          {resource.icon}
                          <span className="ml-1">{resource.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <BookmarkPlus className="h-4 w-4" />
                          <span className="sr-only">Save</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <Share2 className="h-4 w-4" />
                          <span className="sr-only">Share</span>
                        </Button>
                      </div>
                      <Button size="sm">View Resource</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline">
                  Load More Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="articles" className="mt-6">
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Select the Articles tab to view article resources
                </p>
              </div>
            </TabsContent>

            <TabsContent value="guides" className="mt-6">
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Select the Guides tab to view guide resources
                </p>
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Select the Videos tab to view video resources
                </p>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Select the Tools tab to view interactive tools
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Interactive Tools
              </h2>
              <p className="text-muted-foreground">
                Useful calculators and tools to help you care for your pets
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild variant="outline">
                <Link href="/resources/tools">
                  View All Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pet Food Calculator",
                description:
                  "Calculate the optimal amount of food for your pet based on weight, age, activity level, and food type.",
                icon: "🍽️",
                color: "bg-amber-50 dark:bg-amber-950/30",
                textColor: "text-amber-600 dark:text-amber-400",
                borderColor: "border-amber-200 dark:border-amber-800",
              },
              {
                title: "Breed Matcher Quiz",
                description:
                  "Find the perfect dog or cat breed that matches your lifestyle, living situation, and preferences.",
                icon: "🔍",
                color: "bg-blue-50 dark:bg-blue-950/30",
                textColor: "text-blue-600 dark:text-blue-400",
                borderColor: "border-blue-200 dark:border-blue-800",
              },
              {
                title: "Pet Age Calculator",
                description:
                  "Convert your pet's age to human years using species-specific calculations for more accuracy.",
                icon: "⏱️",
                color: "bg-green-50 dark:bg-green-950/30",
                textColor: "text-green-600 dark:text-green-400",
                borderColor: "border-green-200 dark:border-green-800",
              },
              {
                title: "Vaccination Reminder Tool",
                description:
                  "Create a customized vaccination schedule with automatic reminders for your pet's important shots.",
                icon: "💉",
                color: "bg-red-50 dark:bg-red-950/30",
                textColor: "text-red-600 dark:text-red-400",
                borderColor: "border-red-200 dark:border-red-800",
              },
              {
                title: "Pet Budget Calculator",
                description:
                  "Estimate the monthly and annual costs of pet ownership, including food, healthcare, and supplies.",
                icon: "💰",
                color: "bg-purple-50 dark:bg-purple-950/30",
                textColor: "text-purple-600 dark:text-purple-400",
                borderColor: "border-purple-200 dark:border-purple-800",
              },
              {
                title: "Training Progress Tracker",
                description:
                  "Track and monitor your pet's training progress with customizable goals and achievement badges.",
                icon: "📊",
                color: "bg-teal-50 dark:bg-teal-950/30",
                textColor: "text-teal-600 dark:text-teal-400",
                borderColor: "border-teal-200 dark:border-teal-800",
              },
            ].map((tool, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-md transition-shadow border ${tool.borderColor}`}
              >
                <CardHeader className={`p-6 ${tool.color}`}>
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <CardTitle className={tool.textColor}>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link
                      href={`/resources/tools/${tool.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      Use Tool
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Downloadable Resources
              </h2>
              <p className="text-muted-foreground">
                Printable guides, checklists, and templates for pet owners
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild variant="outline">
                <Link href="/resources/downloads">
                  View All Downloads
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Pet First Aid Checklist",
                type: "PDF",
                category: "Emergency",
                description:
                  "A printable checklist of essential items for your pet's first aid kit.",
                downloads: 4582,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Puppy Training Schedule",
                type: "PDF",
                category: "Training",
                description:
                  "Week-by-week training plan for puppies from 8 weeks to 6 months.",
                downloads: 3876,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Pet Sitter Information Sheet",
                type: "DOCX",
                category: "Care",
                description:
                  "Editable template to provide essential information to your pet sitter.",
                downloads: 2945,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Pet Medication Tracker",
                type: "PDF",
                category: "Health",
                description:
                  "Printable log to track your pet's medications, dosages, and schedules.",
                downloads: 3254,
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((resource, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-40">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="outline"
                      className="bg-white/90 dark:bg-black/90 backdrop-blur-sm font-mono text-xs"
                    >
                      {resource.type}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <Badge variant="outline" className="w-fit mb-2">
                    {resource.category}
                  </Badge>
                  <CardTitle className="text-base">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground mb-2">
                    {resource.description}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <Download className="inline h-3 w-3 mr-1" />
                    {resource.downloads.toLocaleString()} downloads
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={`/resources/downloads/${resource.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Contributors */}
      <ResourcesExperts />

      {/* Newsletter */}
      <ResourcesNewsletter />
    </div>
  );
}
