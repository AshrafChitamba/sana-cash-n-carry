"use client";

import { ContactFormData, contactSchema } from "@/lib/contactSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextInputField } from "../TextInputField";
import { sendContactMessage } from "@/app/actions";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      country: "",
      city: "",
      message: undefined,
    },
  });

  const submitContactForm = async (data: ContactFormData) => {
    setIsLoading(true);
    await sendContactMessage(data);
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="rounded-[10px] p-2 md:p-4 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TextInputField
          id="first-name"
          placeholder="Enter first name"
          label="First Name"
          registerProps={register("firstName")}
          error={errors.firstName}
          disabled={isLoading}
        />
        <TextInputField
          id="last-name"
          placeholder="Enter last name"
          label="Last Name"
          registerProps={register("lastName")}
          error={errors.lastName}
          disabled={isLoading}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TextInputField
          id="email"
          placeholder="Enter email address"
          label="Email Address"
          registerProps={register("email")}
          error={errors.email}
          disabled={isLoading}
        />
        <TextInputField
          id="phone-number"
          placeholder="(+265) 994 351 384"
          label="Phone Number"
          registerProps={register("phoneNumber")}
          error={errors.phoneNumber}
          disabled={isLoading}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TextInputField
          id="country"
          placeholder="Enter country"
          label="Country"
          registerProps={register("country")}
          error={errors.country}
          disabled={isLoading}
        />
        <TextInputField
          id="city"
          placeholder="Enter city"
          label="City"
          registerProps={register("city")}
          error={errors.city}
          disabled={isLoading}
        />
      </div>
      <div className="col-span-full">
        <TextInputField
          type="textarea"
          id="message"
          placeholder="Enter your message..."
          label="Message"
          registerProps={register("message")}
          error={errors.message}
          disabled={isLoading}
        />
      </div>

      <button className="w-full bg-primary capitalize text-white py-3 px-4 rounded-[10px] font-medium">
        send message
      </button>
    </form>
  );
};
