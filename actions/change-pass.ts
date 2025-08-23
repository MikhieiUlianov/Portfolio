"use server";

import { hashPassword, verifyPassword } from "@/lib/hash";
import { getUserByEmail, updatePassword } from "@/lib/user";
import { RegistrationResult } from "@/utils/form-templ";

export type ChangePassFormValues = {
  email: string;
  oldPassword: string;
  newPassword: string;
};
export default async function changePassword(
  formData: ChangePassFormValues
): Promise<RegistrationResult> {
  const { email, oldPassword, newPassword } = formData;

  const mongoUser = await getUserByEmail(email);

  if (!mongoUser) {
    return {
      success: false,
      errors: {
        email: "Invalid email.",
      },
    };
  }

  const user = {
    email: mongoUser.email,
    password: mongoUser.password,
    id: mongoUser._id.toString(),
  };
  const isOldPassword = await verifyPassword(user.password, oldPassword);

  if (!isOldPassword) {
    return {
      success: false,
      errors: {
        oldPassword: "Old password is incorrect.",
      },
    };
  }
  const isPasswordEqual = oldPassword === newPassword;

  if (isPasswordEqual) {
    return {
      success: false,
      errors: {
        newPassword: "New password can not be the same as old password.",
      },
    };
  }

  const newHashedPassword = await hashPassword(newPassword);
  try {
    updatePassword(newHashedPassword, user.email);
    return {
      success: true,
    };
  } catch {
    throw new Error("Something went wrong.");
  }
}
