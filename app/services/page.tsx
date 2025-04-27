import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCategory } from "@/components/services/service-category";
import { ServiceHero } from "@/components/services/servic-hero";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceTestimonials } from "@/components/services/service-testimonials";
import { ServiceCTA } from "@/components/services/service-cta";

export const metadata: Metadata = {
  title: "Services | PetCare",
  description:
    "Comprehensive pet care services including veterinary care, grooming, training, and more.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServiceHero />

      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive range of services to keep your pets
                healthy, happy, and well-cared for.
              </p>
            </div>
          </div>

          <Tabs defaultValue="veterinary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
              <TabsTrigger value="veterinary" className="py-3">
                Veterinary
              </TabsTrigger>
              <TabsTrigger value="grooming" className="py-3">
                Grooming
              </TabsTrigger>
              <TabsTrigger value="training" className="py-3">
                Training
              </TabsTrigger>
              <TabsTrigger value="boarding" className="py-3">
                Boarding
              </TabsTrigger>
              <TabsTrigger value="specialty" className="py-3">
                Specialty
              </TabsTrigger>
            </TabsList>

            <TabsContent value="veterinary" className="mt-6">
              <ServiceCategory
                title="Veterinary Care"
                description="Comprehensive healthcare services for all your pets' medical needs."
                services={[
                  {
                    id: "wellness-exams",
                    title: "Wellness Examinations",
                    description:
                      "Regular check-ups to monitor your pet's overall health and catch potential issues early.",
                    details: [
                      "Comprehensive physical examination",
                      "Vaccination assessment and updates",
                      "Parasite screening and prevention",
                      "Nutritional counseling",
                      "Behavioral assessment",
                    ],
                    pricing: "From $65",
                    duration: "30-45 minutes",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "vaccinations",
                    title: "Vaccinations & Preventive Care",
                    description:
                      "Essential vaccines and preventive treatments to protect your pet from common diseases.",
                    details: [
                      "Core and non-core vaccines based on lifestyle",
                      "Rabies, distemper, parvovirus for dogs",
                      "Rabies, FVRCP for cats",
                      "Heartworm, flea and tick prevention",
                      "Personalized vaccination schedules",
                    ],
                    pricing: "From $45 per vaccine",
                    duration: "15-20 minutes",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "dental-care",
                    title: "Dental Care",
                    description:
                      "Comprehensive dental services to maintain your pet's oral health and prevent disease.",
                    details: [
                      "Dental examinations and cleanings",
                      "Digital dental X-rays",
                      "Tooth extractions and oral surgery",
                      "Treatment for periodontal disease",
                      "Home care recommendations",
                    ],
                    pricing: "From $350 for cleaning",
                    duration: "1-3 hours (under anesthesia)",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "surgery",
                    title: "Surgical Services",
                    description:
                      "Advanced surgical procedures performed by experienced veterinary surgeons.",
                    details: [
                      "Spay and neuter procedures",
                      "Soft tissue surgeries",
                      "Orthopedic procedures",
                      "Mass removals and biopsies",
                      "Pre-surgical assessment and post-operative care",
                    ],
                    pricing: "Starting at $200 (varies by procedure)",
                    duration: "Varies by procedure",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "diagnostics",
                    title: "Diagnostic Services",
                    description:
                      "Advanced diagnostic tools to accurately identify and treat health issues.",
                    details: [
                      "In-house laboratory testing",
                      "Digital radiography (X-rays)",
                      "Ultrasound imaging",
                      "Electrocardiography (ECG)",
                      "Specialized blood work and urinalysis",
                    ],
                    pricing: "From $75 for basic tests",
                    duration: "Varies by test",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "emergency",
                    title: "Emergency & Critical Care",
                    description:
                      "Immediate medical attention for urgent and life-threatening conditions.",
                    details: [
                      "24/7 emergency services",
                      "Trauma and critical care",
                      "Emergency surgery",
                      "Oxygen therapy and fluid treatment",
                      "Intensive monitoring and support",
                    ],
                    pricing: "From $150 for emergency consultation",
                    duration: "As needed",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="grooming" className="mt-6">
              <ServiceCategory
                title="Grooming Services"
                description="Professional grooming services to keep your pet looking and feeling their best."
                services={[
                  {
                    id: "full-grooming",
                    title: "Full Grooming Package",
                    description:
                      "Comprehensive grooming service for a complete refresh of your pet's appearance.",
                    details: [
                      "Bath with premium shampoo and conditioner",
                      "Breed-specific haircut and styling",
                      "Nail trimming and paw pad maintenance",
                      "Ear cleaning and plucking if needed",
                      "Teeth brushing and breath freshener",
                      "Finishing spritz and bandana or bow",
                    ],
                    pricing:
                      "Small dogs: $55-75, Medium: $65-85, Large: $85-120",
                    duration: "2-3 hours",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "bath-brush",
                    title: "Bath & Brush",
                    description:
                      "Essential bathing service with thorough brushing to remove loose fur and tangles.",
                    details: [
                      "Hydrating bath with premium products",
                      "Blow dry and brush out",
                      "Ear cleaning",
                      "Nail trim",
                      "Anal gland expression (upon request)",
                      "Cologne and bandana",
                    ],
                    pricing:
                      "Small dogs: $35-45, Medium: $45-55, Large: $55-75",
                    duration: "1-2 hours",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "breed-specific",
                    title: "Breed-Specific Styling",
                    description:
                      "Specialized grooming tailored to your pet's breed standards or custom preferences.",
                    details: [
                      "Breed-standard cuts or custom styling",
                      "Hand scissoring for precision finish",
                      "Pattern setting for show dogs",
                      "Specialized techniques for different coat types",
                      "Consultation on maintenance between appointments",
                    ],
                    pricing: "From $75 (varies by breed and coat condition)",
                    duration: "2-4 hours",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "cat-grooming",
                    title: "Feline Grooming",
                    description:
                      "Gentle grooming services specifically designed for cats of all breeds and coat types.",
                    details: [
                      "Cat-specific shampoo and conditioning",
                      "Lion cuts or sanitary trims",
                      "Dematting and deshedding treatments",
                      "Nail trimming with cat-friendly techniques",
                      "Ear cleaning and eye area maintenance",
                    ],
                    pricing: "Short-hair: $65, Long-hair: $85, Lion cut: $120",
                    duration: "1-2 hours",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "spa-treatments",
                    title: "Spa Treatments",
                    description:
                      "Luxury spa treatments to pamper your pet and address specific skin and coat needs.",
                    details: [
                      "Moisturizing and medicated treatments",
                      "De-shedding treatments (reduces shedding up to 80%)",
                      "Blueberry facial for tear stain removal",
                      "Mud baths for skin conditions",
                      "Aromatherapy and massage",
                      "Paw balm and nose butter application",
                    ],
                    pricing: "Add-ons from $15-45",
                    duration: "30-60 minutes (added to other services)",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "express-services",
                    title: "Express Services",
                    description:
                      "Quick maintenance services between full grooming appointments.",
                    details: [
                      "Nail trimming and filing",
                      "Ear cleaning",
                      "Face, feet, and sanitary trim",
                      "Teeth brushing",
                      "Brush out and coat maintenance",
                    ],
                    pricing: "Individual services from $15, Packages from $45",
                    duration: "15-30 minutes",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="training" className="mt-6">
              <ServiceCategory
                title="Training Programs"
                description="Effective training programs to help your pet develop good behavior and essential skills."
                services={[
                  {
                    id: "puppy-basics",
                    title: "Puppy Basics",
                    description:
                      "Early training for puppies to establish good behaviors and socialization skills.",
                    details: [
                      "Basic commands (sit, stay, come, down)",
                      "Leash training and walking etiquette",
                      "Potty training guidance",
                      "Bite inhibition and appropriate play",
                      "Socialization with people and other dogs",
                      "Problem prevention strategies",
                    ],
                    pricing: "6-week course: $275, Private sessions: $85/hour",
                    duration: "Group classes: 1 hour/week for 6 weeks",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "obedience-training",
                    title: "Basic & Advanced Obedience",
                    description:
                      "Comprehensive training for dogs of all ages to master essential commands and behaviors.",
                    details: [
                      "Basic commands and reinforcement",
                      "Advanced commands (heel, place, leave it)",
                      "Off-leash reliability training",
                      "Distraction training in various environments",
                      "Problem behavior correction",
                    ],
                    pricing:
                      "Basic: $250 for 6 weeks, Advanced: $300 for 6 weeks",
                    duration: "1 hour/week for 6 weeks",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "behavior-modification",
                    title: "Behavior Modification",
                    description:
                      "Specialized training to address specific behavioral issues and challenges.",
                    details: [
                      "Assessment of problem behaviors",
                      "Customized training plan",
                      "Anxiety and fear reduction techniques",
                      "Aggression management",
                      "Separation anxiety treatment",
                      "Ongoing support and follow-up",
                    ],
                    pricing: "Initial consultation: $125, Sessions: $95/hour",
                    duration: "Varies based on behavior issues",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "specialty-training",
                    title: "Specialty Training",
                    description:
                      "Specialized training for specific activities and skills beyond basic obedience.",
                    details: [
                      "Agility training",
                      "Scent work and tracking",
                      "Therapy dog preparation",
                      "Service dog training",
                      "Trick training",
                      "Canine Good Citizen preparation",
                    ],
                    pricing: "From $300 for 8-week programs",
                    duration: "1-2 hours/week for 8 weeks",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "private-training",
                    title: "Private Training",
                    description:
                      "One-on-one training sessions customized to your pet's specific needs and your goals.",
                    details: [
                      "Personalized training plan",
                      "Flexible scheduling",
                      "In-home or facility-based sessions",
                      "Focus on specific challenges or goals",
                      "Owner education and involvement",
                    ],
                    pricing: "Single session: $95, Package of 5: $425",
                    duration: "1 hour per session",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "board-and-train",
                    title: "Board & Train Programs",
                    description:
                      "Intensive training while your pet stays with our professional trainers.",
                    details: [
                      "2-4 week residential training programs",
                      "Daily training sessions and practice",
                      "Structured environment and consistent routine",
                      "Regular progress updates and videos",
                      "Owner transition sessions before pickup",
                      "Follow-up support after program completion",
                    ],
                    pricing: "2 weeks: $1,500, 4 weeks: $2,800",
                    duration: "2-4 weeks",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="boarding" className="mt-6">
              <ServiceCategory
                title="Boarding & Pet Sitting"
                description="Safe and comfortable accommodations for your pet while you're away."
                services={[
                  {
                    id: "standard-boarding",
                    title: "Standard Boarding",
                    description:
                      "Comfortable overnight accommodations with attentive care for your pet.",
                    details: [
                      "Climate-controlled private kennels",
                      "Comfortable bedding and toys",
                      "Regular feeding schedule with your pet's food",
                      "3-4 potty breaks and walks daily",
                      "Basic medication administration if needed",
                      "Daily health monitoring",
                    ],
                    pricing:
                      "Dogs: $45-65/night based on size, Cats: $35/night",
                    duration: "Overnight or extended stays",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "luxury-suites",
                    title: "Luxury Suite Boarding",
                    description:
                      "Premium accommodations with extra space and amenities for maximum comfort.",
                    details: [
                      "Spacious private suites (4x standard kennel size)",
                      "Raised beds and premium bedding",
                      "Webcam access to check on your pet",
                      "Television or music in suite",
                      "Extra playtime and attention",
                      "Daily text updates with photos",
                      "Complimentary bath before pickup for stays over 5 days",
                    ],
                    pricing:
                      "Small pets: $65/night, Medium: $75/night, Large: $85/night",
                    duration: "Overnight or extended stays",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "cat-boarding",
                    title: "Feline-Only Boarding",
                    description:
                      "Specialized boarding area designed specifically for cats' comfort and security.",
                    details: [
                      "Quiet, dog-free environment",
                      "Multi-level cat condos with perches",
                      "Individual or connected units for multi-cat families",
                      "Climbing structures and enrichment activities",
                      "Daily playtime in cat playroom",
                      "Litter box maintenance and monitoring",
                    ],
                    pricing:
                      "Standard condo: $35/night, Deluxe condo: $45/night",
                    duration: "Overnight or extended stays",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "daycare",
                    title: "Doggy Daycare",
                    description:
                      "Supervised play and socialization for dogs during daytime hours.",
                    details: [
                      "Indoor and outdoor play areas",
                      "Supervised group play with compatible dogs",
                      "Rest periods and quiet time",
                      "Structured activities and games",
                      "Basic training reinforcement",
                      "Regular potty breaks and water access",
                    ],
                    pricing:
                      "Full day: $35, Half day: $20, 10-day package: $300",
                    duration: "Full day (7am-7pm) or half day (up to 5 hours)",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "in-home-sitting",
                    title: "In-Home Pet Sitting",
                    description:
                      "Professional care for your pet in the comfort of your own home.",
                    details: [
                      "30-60 minute visits to your home",
                      "Feeding and fresh water",
                      "Medication administration",
                      "Walks or playtime",
                      "Litter box or habitat cleaning",
                      "Home security checks (mail collection, light rotation)",
                      "Daily updates and photos",
                    ],
                    pricing:
                      "30-min visit: $25, 60-min visit: $40, Overnight stay: $85",
                    duration:
                      "As scheduled, from single visits to multiple daily visits",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "exotic-boarding",
                    title: "Exotic Pet Boarding",
                    description:
                      "Specialized care for birds, reptiles, small mammals, and other exotic pets.",
                    details: [
                      "Species-appropriate housing",
                      "Specialized temperature and humidity control",
                      "Diet preparation according to owner instructions",
                      "Habitat cleaning and maintenance",
                      "Health monitoring by exotic pet specialists",
                      "Handling and enrichment as appropriate for species",
                    ],
                    pricing:
                      "Small animals: $25-35/night, Birds: $30-45/night, Reptiles: $25-40/night",
                    duration: "Overnight or extended stays",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="specialty" className="mt-6">
              <ServiceCategory
                title="Specialty Services"
                description="Specialized care options for unique pet needs and situations."
                services={[
                  {
                    id: "rehabilitation",
                    title: "Physical Rehabilitation",
                    description:
                      "Therapeutic services to help pets recover from injuries, surgeries, or manage chronic conditions.",
                    details: [
                      "Initial assessment and treatment plan",
                      "Hydrotherapy with underwater treadmill",
                      "Therapeutic exercises and stretching",
                      "Laser therapy for pain management",
                      "Massage therapy and manual techniques",
                      "Electrostimulation therapy",
                      "Home exercise program development",
                    ],
                    pricing: "Initial assessment: $125, Sessions: $75-95",
                    duration: "45-60 minutes per session",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "nutrition",
                    title: "Nutritional Counseling",
                    description:
                      "Expert guidance on pet nutrition for optimal health and management of specific conditions.",
                    details: [
                      "Comprehensive nutritional assessment",
                      "Diet planning for different life stages",
                      "Weight management programs",
                      "Prescription diet recommendations",
                      "Supplement recommendations",
                      "Feeding schedules and portion control",
                      "Follow-up monitoring and adjustments",
                    ],
                    pricing: "Initial consultation: $85, Follow-up: $45",
                    duration: "60 minutes initial, 30 minutes follow-up",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "senior-care",
                    title: "Senior Pet Care",
                    description:
                      "Specialized care programs for aging pets with unique health and comfort needs.",
                    details: [
                      "Comprehensive geriatric health assessment",
                      "Pain management strategies",
                      "Mobility assistance and adaptive equipment",
                      "Cognitive support for senior pets",
                      "Comfort care and quality of life enhancements",
                      "End-of-life planning and counseling",
                    ],
                    pricing:
                      "Senior wellness exam: $95, Care packages from $250",
                    duration: "Varies based on services needed",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "behavioral",
                    title: "Behavioral Consultation",
                    description:
                      "Professional assessment and treatment plans for behavioral issues by certified animal behaviorists.",
                    details: [
                      "Comprehensive behavior evaluation",
                      "Root cause analysis of problem behaviors",
                      "Customized behavior modification plans",
                      "Environmental modification recommendations",
                      "Medication consultation when appropriate",
                      "Follow-up support and plan adjustments",
                    ],
                    pricing: "Initial consultation: $175, Follow-up: $95",
                    duration: "90 minutes initial, 45 minutes follow-up",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "acupuncture",
                    title: "Acupuncture & Holistic Care",
                    description:
                      "Alternative and complementary therapies to support your pet's overall wellness.",
                    details: [
                      "Traditional Chinese veterinary medicine assessment",
                      "Acupuncture treatments",
                      "Herbal medicine recommendations",
                      "Food therapy and nutritional support",
                      "Tui-na massage therapy",
                      "Integration with conventional treatments",
                    ],
                    pricing: "Initial session: $125, Follow-up sessions: $85",
                    duration: "60 minutes initial, 45 minutes follow-up",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    id: "hospice",
                    title: "Hospice & End-of-Life Care",
                    description:
                      "Compassionate care for pets in their final stage of life and support for their families.",
                    details: [
                      "Quality of life assessment and monitoring",
                      "Pain management and comfort care",
                      "In-home euthanasia services when needed",
                      "Grief counseling and support",
                      "Memorialization options",
                      "Aftercare arrangements",
                    ],
                    pricing: "Consultation: $125, In-home services from $250",
                    duration: "As needed based on pet's condition",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ServiceFAQ />
      <ServiceTestimonials />
      <ServiceCTA />
    </div>
  );
}
