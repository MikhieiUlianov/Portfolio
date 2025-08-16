"use server";

export type SignUpFormValues = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
};

export async function signup(formData: SignUpFormValues) {
  const { email, name, password, confirmPassword, checkbox } = formData;

  const errors: Record<string, string> = {};

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

  if (!password) {
    errors.password = "The field is required.";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  } else if (
    !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password)
  ) {
    errors.password =
      "Password must contain at least one uppercase letter, one number, and one special character.";
  }

  if (confirmPassword !== password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!checkbox) {
    errors.checkbox = "You must agree with the privacy policy.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return { success: true };
}
