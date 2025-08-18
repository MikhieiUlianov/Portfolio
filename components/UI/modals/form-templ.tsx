"use client";

import StyledButton from "@/components/UI/styled-button/styled-button";
import { useForm, FieldValues, Path } from "react-hook-form";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

export type RegistrationResult = {
  success: boolean;
  errors?: Record<string, string>;
};

export default function ModalTempl<TFormData extends FieldValues>({
  children,
  registrationFunc,
  redirectPath,
  footer,
}: {
  children: (methods: ReturnType<typeof useForm<TFormData>>) => ReactNode;
  registrationFunc: (data: TFormData) => Promise<RegistrationResult>;
  redirectPath: string;
  footer?: ReactNode;
}) {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<TFormData>();
  const { handleSubmit, reset, setError } = methods;

  async function onSubmit(formData: TFormData) {
    setIsLoading(true);

    const result = await registrationFunc(formData);

    setIsError(result.success === false);
    setIsSuccess(result.success === true);

    if (result.errors) {
      Object.entries(result.errors).forEach(([field, value]) => {
        setError(field as Path<TFormData>, {
          type: "server",
          message: value,
        });
      });
    } else if (result.success) {
      reset();
      setTimeout(() => router.push(redirectPath), 5000);
    }

    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children(methods)}

      {isError && <p style={{ color: "red" }}>Ops! Something went wrong.</p>}
      {isSuccess && (
        <p style={{ color: "green", textAlign: "center" }}>
          Success! now you have access to all features!
        </p>
      )}
      {footer}
      <StyledButton disabled={isLoading}>Submit</StyledButton>
    </form>
  );
}
