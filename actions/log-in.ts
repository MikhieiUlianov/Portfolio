"use server";

import { verifyPassword } from "@/lib/hash";
import { getUserByEmail } from "@/lib/user";
import { createAuthSession } from "@/lib/auth";
import { RegistrationResult } from "@/utils/form-templ";

export type LogInFormValues = {
  email: string;
  password: string;
};

export async function login(
  formData: LogInFormValues
): Promise<RegistrationResult> {
  const email = formData.email;
  const password = formData.password;

  const existingUser = getUserByEmail(email) as {
    email: string;
    name: string;
    password: string;
    id: string;
  };

  if (!existingUser) {
    return {
      success: false,
      errors: {
        email: "Invalid  email entered.",
      },
    };
  }

  const isValidPassword = await verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        password: "Invalid password entered.",
      },
      success: false,
    };
  }

  await createAuthSession(existingUser.id.toString());
  return { success: true };
}
