import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Heart, MessageCircle } from "lucide-react";

export function CommunitySpotlight() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Community Spotlight
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Celebrating outstanding members and their contributions to our pet
              community.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Member of the Month */}
          <Card className="overflow-hidden border-primary">
            <div className="relative h-40 bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
              <Award className="h-20 w-20 text-primary/40" />
              <div className="absolute -bottom-12 w-full flex justify-center">
                <Avatar className="h-24 w-24 border-4 border-background">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Sarah Johnson"
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardContent className="pt-16 p-6 text-center">
              <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                Member of the Month
              </Badge>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Dog Trainer & Community Volunteer
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Sarah has contributed over 200 helpful responses in our training
                forums and organized 3 community meetups this month. Her
                dedication to helping new pet owners is truly inspiring.
              </p>
              <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  <span>243 posts</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  <span>512 likes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pet of the Month */}
          <Card className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Rocky - Therapy Dog"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <Badge className="w-fit mb-2 bg-amber-500 text-white border-amber-600">
                  Pet of the Month
                </Badge>
                <h3 className="text-xl font-bold text-white">Rocky</h3>
                <p className="text-white/90">Therapy Dog Extraordinaire</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Michael Chen"
                  />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Owner: Michael Chen</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Rocky visits local hospitals weekly, bringing comfort to
                patients. This golden retriever has logged over 500 hours as a
                certified therapy dog and has a special talent for sensing when
                someone needs extra attention.
              </p>
              <Button variant="outline" className="w-full">
                View Rocky's Story
              </Button>
            </CardContent>
          </Card>

          {/* Community Initiative */}
          <Card className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Paws for Seniors"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <Badge className="w-fit mb-2 bg-green-500 text-white border-green-600">
                  Community Initiative
                </Badge>
                <h3 className="text-xl font-bold text-white">
                  Paws for Seniors
                </h3>
                <p className="text-white/90">
                  Connecting elderly with pet companions
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Emily Rodriguez"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">
                    Organizer: Emily Rodriguez
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                This community-led initiative pairs senior citizens with
                companion animals, providing both with love and companionship.
                The program has successfully matched 24 seniors with pets this
                month alone.
              </p>
              <Button variant="outline" className="w-full">
                Learn More & Volunteer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
