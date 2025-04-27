"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, Loader2, PlusCircle, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

// Define the form schema with Zod
const petFormSchema = z.object({
  name: z.string().min(1, "Pet name is required"),
  species: z.string().min(1, "Species is required"),
  breed: z.string().optional(),
  birthDate: z.date().optional(),
  approximateAge: z.string().optional(),
  gender: z.enum(["male", "female", "unknown"], {
    required_error: "Please select a gender",
  }),
  weight: z.string().optional(),
  weightUnit: z.enum(["kg", "lbs"]).default("kg"),
  microchipped: z.boolean().default(false),
  microchipNumber: z.string().optional(),
  spayedNeutered: z.boolean().default(false),
  allergies: z.string().optional(),
  existingConditions: z.string().optional(),
  medications: z.string().optional(),
  dietaryNeeds: z.string().optional(),
  veterinarianName: z.string().optional(),
  veterinarianContact: z.string().optional(),
  additionalNotes: z.string().optional(),
})

// Define the form's TypeScript type
type PetFormValues = z.infer<typeof petFormSchema>

// Default values for the form
const defaultValues: Partial<PetFormValues> = {
  species: "",
  gender: "unknown",
  weightUnit: "kg",
  microchipped: false,
  spayedNeutered: false,
}

export function PetRegistrationForm() {
  const router = useRouter()
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize the form
  const form = useForm<PetFormValues>({
    resolver: zodResolver(petFormSchema),
    defaultValues,
  })

  // Handle photo upload
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      setPhotoFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Remove uploaded photo
  const removePhoto = () => {
    setPhotoFile(null)
    setPhotoPreview(null)
  }

  // Handle form submission
  const onSubmit = async (data: PetFormValues) => {
    setIsSubmitting(true)

    try {
      // In a real implementation, you would:
      // 1. Upload the photo to storage if photoFile exists
      // 2. Send the form data to your API
      // 3. Handle the response

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form data:", data)
      console.log("Photo file:", photoFile)

      // Show success message
      toast({
        title: "Pet registered successfully!",
        description: `${data.name} has been added to your pet profile.`,
      })

      // Redirect to pet dashboard
      router.push("/dashboard/pets")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Something went wrong",
        description: "There was an error registering your pet. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-8">
              {/* Pet Photo Upload */}
              <div className="space-y-2">
                <Label htmlFor="pet-photo">Pet Photo</Label>
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-lg border bg-muted">
                    {photoPreview ? (
                      <>
                        <Image
                          src={photoPreview || "/placeholder.svg"}
                          alt="Pet preview"
                          fill
                          className="object-cover"
                        />
                        <button
                          type="button"
                          onClick={removePhoto}
                          className="absolute right-1 top-1 rounded-full bg-background p-1 shadow-sm"
                          aria-label="Remove photo"
                        >
                          <XCircle className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <PlusCircle className="h-8 w-8 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <Input
                      id="pet-photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("pet-photo")?.click()}
                      className="mr-2"
                    >
                      Upload Photo
                    </Button>
                    <FormDescription>Upload a clear photo of your pet. Max size: 5MB.</FormDescription>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Pet Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pet Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your pet's name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Species */}
                <FormField
                  control={form.control}
                  name="species"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Species*</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select species" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="dog">Dog</SelectItem>
                          <SelectItem value="cat">Cat</SelectItem>
                          <SelectItem value="bird">Bird</SelectItem>
                          <SelectItem value="rabbit">Rabbit</SelectItem>
                          <SelectItem value="hamster">Hamster</SelectItem>
                          <SelectItem value="guinea_pig">Guinea Pig</SelectItem>
                          <SelectItem value="fish">Fish</SelectItem>
                          <SelectItem value="reptile">Reptile</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Breed */}
                <FormField
                  control={form.control}
                  name="breed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Breed</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter breed (if known)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Gender */}
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal">Male</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="female" />
                            </FormControl>
                            <FormLabel className="font-normal">Female</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="unknown" />
                            </FormControl>
                            <FormLabel className="font-normal">Unknown</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Birth Date */}
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Birth Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        If you don't know the exact date, leave this blank and use the approximate age field.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Approximate Age */}
                <FormField
                  control={form.control}
                  name="approximateAge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Approximate Age</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 2 years, 6 months" {...field} />
                      </FormControl>
                      <FormDescription>If birth date is unknown, provide an estimate.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Weight */}
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter weight" type="number" step="0.1" min="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="weightUnit"
                    render={({ field }) => (
                      <FormItem className="self-end">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="kg">kg</SelectItem>
                            <SelectItem value="lbs">lbs</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Microchipped */}
                <FormField
                  control={form.control}
                  name="microchipped"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Microchipped</FormLabel>
                        <FormDescription>Is your pet microchipped?</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Microchip Number - Only show if microchipped is true */}
                {form.watch("microchipped") && (
                  <FormField
                    control={form.control}
                    name="microchipNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Microchip Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter microchip number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Spayed/Neutered */}
                <FormField
                  control={form.control}
                  name="spayedNeutered"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Spayed/Neutered</FormLabel>
                        <FormDescription>Has your pet been spayed or neutered?</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Medical Information</h3>
            <div className="space-y-4">
              {/* Allergies */}
              <FormField
                control={form.control}
                name="allergies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Allergies</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List any known allergies your pet has"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Existing Conditions */}
              <FormField
                control={form.control}
                name="existingConditions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Existing Medical Conditions</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe any existing medical conditions"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Current Medications */}
              <FormField
                control={form.control}
                name="medications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Medications</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List any medications your pet is currently taking"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Dietary Needs */}
              <FormField
                control={form.control}
                name="dietaryNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Dietary Needs</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe any special dietary requirements"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Veterinarian Information */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Veterinarian Information</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Veterinarian Name */}
              <FormField
                control={form.control}
                name="veterinarianName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Veterinarian Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter veterinarian's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Veterinarian Contact */}
              <FormField
                control={form.control}
                name="veterinarianContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Veterinarian Contact</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone number or email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Additional Notes */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Additional Information</h3>
            <FormField
              control={form.control}
              name="additionalNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any other information you'd like to share about your pet"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registering Pet...
              </>
            ) : (
              "Register Pet"
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
