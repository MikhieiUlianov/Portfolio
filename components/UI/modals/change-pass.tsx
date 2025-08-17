"use client";

import Section from "@/components/general-use/section/section";
import Input from "@/components/UI/input/input";
import StyledButton from "@/components/UI/styled-button/styled-button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import changePassword from "@/actions/change-pass";
import { ChangePassFormValues } from "@/actions/change-pass";

export default function ChangePassModal() {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm<ChangePassFormValues>();

  async function onSubmit(formData: ChangePassFormValues) {
    setIsLoading(true);
    const result = await changePassword(formData);
    setIsError(result?.success === false);
    setIsSuccess(result?.success === true);
    if (result?.errors) {
      Object.entries(result.errors).forEach(([field, message]) => {
        setError(field as keyof ChangePassFormValues, {
          type: "server",
          message,
        });
      });
    } else if (result?.success) {
      reset();
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }
    setIsLoading(false);
  }
  return (
    <Section>
      <h2>Change password</h2>
      <h3>Chnage your password to for your account!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          label="Email"
          register={register}
          errors={errors}
        />
        <Input
          name="oldPassword"
          placeholder="Old Password"
          type="password"
          label="Old Password"
          register={register}
          errors={errors}
        />
        <Input
          name="newPassword"
          placeholder="New Password"
          type="password"
          label="New Password"
          register={register}
          errors={errors}
        />
        {isError && <p style={{ color: "red" }}>Ops! Something went wrong.</p>}
        {isSuccess && (
          <p style={{ color: "green", textAlign: "center" }}>
            Success! now you have access to all futures!
          </p>
        )}
        <StyledButton disabled={isLoading}>Update Password</StyledButton>
      </form>
    </Section>
  );
}
