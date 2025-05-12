"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email(),
  phoneNumber: z.string().min(9).max(15),
  address: z.string().min(10).max(50),
  city: z.string().min(2).max(50),
});
export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "johndoe",
      email: "john@example.com",
      phoneNumber: "0123456789",
      address: "123 Maple Street",
      city: "New York",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-3"
        >
          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  We'll never share your email with anyone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="0123456789" {...field} />
                </FormControl>
                <FormDescription>
                  Your phone number must be between 9 and 15 digits.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City Field */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="New York" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the city where you currently reside.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address Field */}

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Maple Street" {...field} />
                </FormControl>
                <FormDescription>
                  Please provide your full address (minimum 20 characters).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={!form.formState.isValid} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
