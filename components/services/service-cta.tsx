import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function ServiceCTA() {
  const plans = [
    {
      name: "Basic Care",
      price: "$29",
      period: "per month",
      description: "Essential care for your pet's health and wellbeing",
      features: [
        "Annual wellness exam",
        "Core vaccinations",
        "Parasite screening",
        "10% discount on additional services",
        "Online appointment booking",
      ],
      popular: false,
      buttonText: "Choose Basic",
    },
    {
      name: "Premium Care",
      price: "$59",
      period: "per month",
      description: "Comprehensive care with added benefits",
      features: [
        "Bi-annual wellness exams",
        "All vaccinations included",
        "Dental cleaning (annual)",
        "Unlimited office visits",
        "20% discount on additional services",
        "Priority appointment scheduling",
        "24/7 virtual vet consultations",
      ],
      popular: true,
      buttonText: "Choose Premium",
    },
    {
      name: "Family Plan",
      price: "$99",
      period: "per month",
      description: "Complete care for multiple pets in your household",
      features: [
        "Coverage for up to 3 pets",
        "All Premium Care benefits",
        "Free monthly grooming session",
        "Quarterly behavioral consultations",
        "30% discount on boarding services",
        "Emergency care coverage",
        "Annual in-home check-up",
      ],
      popular: false,
      buttonText: "Choose Family",
    },
  ];

  return (
    <section
      id="service-plans"
      className="py-12 md:py-24 bg-gradient-to-b from-white to-primary/5"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Pet Care Plans
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Choose a care plan that fits your pet's needs and your budget.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col overflow-hidden ${
                plan.popular
                  ? "border-primary shadow-lg relative"
                  : "border shadow"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="mb-5">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-2 mb-6 flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className={`w-full ${plan.popular ? "" : "variant-outline"}`}
                >
                  <Link href="/services/plans">{plan.buttonText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="max-w-[600px] mx-auto mb-6 text-muted-foreground">
            We understand that every pet is unique. Contact us to create a
            customized care plan tailored to your pet's specific needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
