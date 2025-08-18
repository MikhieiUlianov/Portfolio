"use server";

import { storeData } from "@/lib/contact-me";
import { RegistrationResult } from "@/utils/form-templ";

export type ContactsFormValues = {
  email: string;
  name: string;
  message: string;
};

export async function saveContacts({
  name,
  email,
  message,
}: ContactsFormValues): Promise<RegistrationResult> {
  let errors: Record<string, string> = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Name must have at least 2 characters.";
  } else if (name.length > 30) {
    errors.name = "Name cannot have more than 30 characters.";
  }

  if (!email) {
    errors.email = "The field is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!message) {
    errors.message = "The field is required.";
  } else if (message.length > 300) {
    errors.message = "300 characters limit is exceeded.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }
  try {
    storeData(email, name, message);
  } catch {
    throw new Error("Something went wrong.");
  }

  return {
    success: true,
  };
}
