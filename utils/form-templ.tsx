"use client";

import StyledButton from "@/components/UI/styled-button/styled-button";
import { useForm, FieldValues, Path } from "react-hook-form";
import { ReactNode, useState } from "react";
import { useRedirectCancel } from "./redirect-cance";

export type RegistrationResult = {
  success: boolean;
  errors?: Record<string, string>;
};

export default function formTempl<TFormData extends FieldValues>({
  children,
  registrationFunc,
  redirectPath,
  footer,
  extraFormClass,
  removeErrorMsg,
}: {
  children: (methods: ReturnType<typeof useForm<TFormData>>) => ReactNode;
  registrationFunc: (data: TFormData) => Promise<RegistrationResult>;
  redirectPath?: string;
  footer?: ReactNode;
  extraFormClass?: string;
  removeErrorMsg?: boolean;
}) {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { redirectWithDelay } = useRedirectCancel();

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
      redirectWithDelay(redirectPath, 5000);
    }

    setIsLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={extraFormClass}>
        {children(methods)}

        {!removeErrorMsg && isError && (
          <p style={{ color: "red" }}>Ops! Something went wrong.</p>
        )}

        {footer}
        <StyledButton disabled={isLoading}>Submit</StyledButton>
      </form>
      {isSuccess && (
        <p className="success">Success! Thanks for your attenton.</p>
      )}
    </>
  );
}
