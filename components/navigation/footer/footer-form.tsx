"use client";
import classes from "./footer.module.scss";
import FormTempl from "@/utils/form-templ";
import Input from "@/components/UI/input/input";
import { subscribe } from "@/actions/newsletter";

export default function FooterForm() {
  return (
    <FormTempl<{ email: string }>
      registrationFunc={subscribe}
      extraFormClass={classes.form}
      removeErrorMsg
    >
      {({ register, formState: { errors } }) => (
        <Input
          extraInputClass={classes.input}
          name="email"
          placeholder="Email"
          type="email"
          label="Email"
          register={register}
          errors={errors}
        />
      )}
    </FormTempl>
  );
}
