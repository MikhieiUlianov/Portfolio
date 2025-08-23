"use server";

import { verifyPassword } from "@/lib/hash";
import { getUserByEmail } from "@/lib/user";
import { createAuthSession } from "@/lib/auth";
import { RegistrationResult } from "@/utils/form-templ";

export type LogInFormValues = {
  email: string;
  password: string;
  checkbox: boolean;
};

export async function login(
  formData: LogInFormValues
): Promise<RegistrationResult> {
  const email = formData.email;
  const password = formData.password;

  const mongoUser = await getUserByEmail(email);

  if (!mongoUser) {
    return {
      success: false,
      errors: {
        email: "Invalid  email entered.",
      },
    };
  }

  const existingUser = {
    email: mongoUser.email,
    name: mongoUser.name,
    password: mongoUser.password,
    id: mongoUser._id.toString(),
  };

  const isValidPassword = await verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        password: "Invalid password entered.",
      },
      success: false,
    };
  }

  await createAuthSession(existingUser.id);
  return { success: true };
}
