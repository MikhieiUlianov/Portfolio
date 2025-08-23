"use server";

import { subscribeNewsletters } from "@/lib/newsletter";
import { RegistrationResult } from "@/utils/form-templ";

export async function subscribe({
  email,
}: {
  email: string;
}): Promise<RegistrationResult> {
  let errors: Record<string, string> = {};

  if (!email) {
    errors.email = "The field is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    await subscribeNewsletters(email);
  } catch (err: any) {
    if (err.message.includes("UNIQUE constraint failed")) {
      return {
        success: false,
        errors: { email: "This email is already subscribed." },
      };
    } else {
      return {
        success: false,
        errors: { email: "Something went wrong. Try again later." },
      };
    }
  }

  return { success: true };
}
