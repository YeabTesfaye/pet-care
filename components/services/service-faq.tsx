import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ServiceFAQ() {
  const faqs = [
    {
      question: "How do I schedule an appointment for my pet?",
      answer:
        "You can schedule an appointment through our online booking system, by calling our customer service line, or using the PetCare mobile app. We offer flexible scheduling options including same-day appointments for urgent care needs.",
    },
    {
      question: "What vaccinations does my pet need?",
      answer:
        "Required vaccinations vary by pet type, age, and lifestyle. For dogs, core vaccines typically include rabies, distemper, parvovirus, and adenovirus. For cats, core vaccines include rabies, feline viral rhinotracheitis, calicivirus, and panleukopenia. Our veterinarians will create a personalized vaccination schedule during your pet's wellness exam.",
    },
    {
      question: "How often should I bring my pet in for check-ups?",
      answer:
        "We recommend annual wellness exams for adult pets in good health. Senior pets (generally 7+ years for dogs, 10+ for cats) should have semi-annual check-ups. Puppies and kittens need more frequent visits for initial vaccinations and development monitoring. Your veterinarian may recommend a different schedule based on your pet's specific health needs.",
    },
    {
      question: "Do you offer payment plans or pet insurance?",
      answer:
        "Yes, we offer several payment options. We accept most major pet insurance plans and can help with claim submissions. We also offer CareCredit financing and our own PetCare Wellness Plans that provide discounted preventive care services for a monthly fee. Please contact our customer service team for details on all available payment options.",
    },
    {
      question: "How long will my pet need to stay for boarding?",
      answer:
        "We accept pets for boarding stays as short as one night or as long as several weeks. Drop-off and pick-up times are between 7am-7pm daily, with late pick-ups available by arrangement. We recommend booking in advance, especially during holidays and peak travel seasons.",
    },
    {
      question: "What should I bring for my pet's boarding stay?",
      answer:
        "Please bring your pet's regular food, any medications, and a familiar item that smells like home (such as a blanket or toy). We provide bedding, bowls, and other necessities, but personal items can help your pet feel more comfortable. All items should be clearly labeled with your name and pet's name.",
    },
    {
      question: "How do grooming appointments work?",
      answer:
        "Grooming appointments typically last 1-3 hours depending on your pet's size, coat condition, and services requested. We recommend booking 1-2 weeks in advance. Please arrive 5-10 minutes early to discuss specific grooming instructions with our staff. Pets must be current on required vaccinations for grooming services.",
    },
    {
      question: "Do you offer services for exotic pets?",
      answer:
        "Yes, we provide care for a variety of exotic pets including birds, reptiles, small mammals, and more. Our exotic pet specialists are trained in the unique needs of these animals. Services include wellness exams, specialized boarding, nutritional counseling, and treatment for illnesses or injuries.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Find answers to common questions about our pet care services.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
