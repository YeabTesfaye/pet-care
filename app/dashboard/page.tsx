import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, PawPrint, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { PetList } from "@/components/dashboard/pet-list";
import { UpcomingAppointments } from "@/components/dashboard/upcoming-appointments";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { HealthReminders } from "@/components/dashboard/health-reminders";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your pets, appointments, and more.",
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Manage your pets, appointments, and more."
      >
        <Button asChild>
          <Link href="/dashboard/pets/register">Add Pet</Link>
        </Button>
      </DashboardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pets</CardTitle>
            <PawPrint className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 dogs, 1 cat</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Appointments
            </CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Next: Vet checkup on Friday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Health Reminders
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Vaccinations, medications
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              Pet food subscription
            </p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="pets" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pets">My Pets</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="reminders">Health Reminders</TabsTrigger>
          <TabsTrigger value="orders">Recent Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="pets" className="space-y-4">
          <PetList />
        </TabsContent>
        <TabsContent value="appointments" className="space-y-4">
          <UpcomingAppointments />
        </TabsContent>
        <TabsContent value="reminders" className="space-y-4">
          <HealthReminders />
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <RecentOrders />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  );
}
