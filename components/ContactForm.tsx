"use client";

import { ContactFormData, contactSchema } from "@/lib/contactSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextInputField } from "./TextInputField";
import { sendContactMessage } from "@/app/actions"

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
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitContactForm = (data: ContactFormData) => {
    sendContactMessage(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="bg-whte rounded-[10px] p-4 space-y-4"
    >
      <div className="grid grid-cols-2 gap-3">
        <TextInputField
          id="first-name"
          placeholder="Enter first name"
          label="First Name"
          registerProps={register("name")}
          error={errors.name}
          disabled={isLoading}
        />
        <TextInputField
          id="last-name"
          placeholder="Enter last name"
          label="Last Name"
          registerProps={register("name")}
          error={errors.name}
          disabled={isLoading}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <TextInputField
          id="phone-number"
          placeholder="(+265) 994 351 384"
          label="Phone Number"
          registerProps={register("name")}
          error={errors.name}
          disabled={isLoading}
        />
        <TextInputField
          id="email"
          placeholder="Enter email address"
          label="Email Address"
          registerProps={register("name")}
          error={errors.name}
          disabled={isLoading}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <TextInputField
          id="country"
          placeholder="Enter country"
          label="Country"
          registerProps={register("name")}
          error={errors.name}
          disabled={isLoading}
        />
        <TextInputField
          id="city"
          placeholder="Enter city"
          label="City"
          registerProps={register("name")}
          error={errors.name}
          disabled={isLoading}
        />
      </div>
      <div className="col-span-ful">
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

      <button className="w-full bg-primary text-white py-3 px-4 rounded-[10px] font-medium">
        send message
      </button>
    </form>
  );
};
