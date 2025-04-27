import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

export function ServiceTestimonials() {
  const testimonials = [
    {
      name: "Jennifer K.",
      service: "Veterinary Care",
      content:
        "The veterinary team is exceptional. They diagnosed my dog's rare condition when two other vets couldn't figure it out. Their thorough approach and genuine care made all the difference in my pet's recovery.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Michael T.",
      service: "Grooming Services",
      content:
        "My anxious rescue dog has never tolerated grooming well, but the team here was patient and gentle. They took the time to make her comfortable, and now she actually enjoys her grooming sessions!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Sarah L.",
      service: "Training Programs",
      content:
        "The training program transformed our energetic puppy into a well-behaved companion. The trainers provided clear instructions and helped us understand the 'why' behind each technique. Highly recommended!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "David R.",
      service: "Boarding & Pet Sitting",
      content:
        "We were nervous about boarding our senior cat with health issues, but the staff provided exceptional care. They followed her medication schedule perfectly and sent daily updates with photos. We'll definitely use their services again.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Read testimonials from pet owners who have experienced our
              services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.service}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
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
                  </div>
                </div>
                <div className="mt-4 relative">
                  <QuoteIcon className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                  <p className="pl-4 text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
