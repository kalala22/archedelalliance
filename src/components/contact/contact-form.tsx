"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Le nom complet doit contenir au moins 3 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  phone: z
    .string()
    .min(8, { message: "Veuillez entrer un numéro de téléphone valide." }),
  subject: z
    .string()
    .min(3, { message: "Veuillez préciser le sujet de votre message." }),
  message: z
    .string()
    .min(15, { message: "Votre message doit contenir au moins 15 caractères." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate frontend form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Form submitted (simulated):", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center md:p-12">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-emerald-900">
          Message Envoyé avec Succès !
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-emerald-700">
          Nous avons bien reçu votre message. Notre équipe pastorale ou le secrétariat de l&apos;église vous contactera dans les plus brefs délais.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-emerald-700"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]"
          >
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Jean-Pierre Kalala"
            {...register("fullName")}
            className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm transition-colors focus:outline-none ${
              errors.fullName
                ? "border-red-400 focus:border-red-500"
                : "border-[var(--color-gray-200)] focus:border-[var(--color-gold)]"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]"
          >
            Adresse Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="exemple@email.com"
            {...register("email")}
            className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm transition-colors focus:outline-none ${
              errors.email
                ? "border-red-400 focus:border-red-500"
                : "border-[var(--color-gray-200)] focus:border-[var(--color-gold)]"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]"
          >
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+243 81 234 5678"
            {...register("phone")}
            className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm transition-colors focus:outline-none ${
              errors.phone
                ? "border-red-400 focus:border-red-500"
                : "border-[var(--color-gray-200)] focus:border-[var(--color-gold)]"
            }`}
          />
          {errors.phone && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]"
          >
            Sujet <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Demande de prière, visite, renseignement..."
            {...register("subject")}
            className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm transition-colors focus:outline-none ${
              errors.subject
                ? "border-red-400 focus:border-red-500"
                : "border-[var(--color-gray-200)] focus:border-[var(--color-gold)]"
            }`}
          />
          {errors.subject && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]"
        >
          Votre message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Écrivez votre message ici..."
          {...register("message")}
          className={`mt-2 w-full rounded-xl border bg-white p-4 text-sm transition-colors focus:outline-none ${
            errors.message
              ? "border-red-400 focus:border-red-500"
              : "border-[var(--color-gray-200)] focus:border-[var(--color-gold)]"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[var(--color-navy-light)] disabled:opacity-50 sm:w-auto"
      >
        {isSubmitting ? (
          "Envoi en cours..."
        ) : (
          <>
            Envoyer le message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
