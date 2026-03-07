
"use client";

import React from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data); // Ici tu pourras intégrer ton API ou email service
    alert("Message envoyé ! Merci pour votre contact.");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <input
        {...register("name", { required: true })}
        placeholder="Votre nom"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        {...register("phone")}
        placeholder="Téléphone"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        {...register("message", { required: true })}
        placeholder="Votre message"
        rows={5}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition font-semibold"
      >
        Envoyer
      </button>
    </form>
  );
}