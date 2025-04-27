import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PetRegistrationForm } from "@/components/dashboard/pet-registration-form";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export const metadata: Metadata = {
  title: "Register Pet | PetCare",
  description:
    "Register your pet to track health records, appointments, and more.",
};

export default function RegisterPetPage() {
  // In a real implementation, you would check if the user is authenticated
  // If not authenticated, redirect to login page
  const isAuthenticated = true; // This would be replaced with actual auth check

  if (!isAuthenticated) {
    redirect("/login?callbackUrl=/dashboard/pets/register");
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Register Your Pet"
        text="Add your pet's information to get personalized care recommendations and track their health records."
      />
      <div className="grid gap-8">
        <PetRegistrationForm />
      </div>
    </DashboardShell>
  );
}
