"use client";

import { ContactsFormValues, saveContacts } from "@/actions/contact";
import classes from "./contacts.module.scss";

import FormTempl from "@/utils/form-templ";
import Input from "@/components/UI/input/input";
import Link from "next/link";

export default function ContactsForm() {
  return (
    <FormTempl<ContactsFormValues>
      registrationFunc={saveContacts}
      extraFormClass={classes.form}
    >
      {({ register, formState: { errors } }) => {
        return (
          <>
            <Input
              name="name"
              placeholder="Name"
              type="text"
              label="Name"
              register={register}
              errors={errors}
            />
            <Input
              name="email"
              placeholder="Email"
              type="email"
              label="Email"
              register={register}
              errors={errors}
            />
            <div className={classes.textarea}>
              <Input
                extraInputClass={classes.textarea}
                name="message"
                placeholder="Your Message"
                type="textarea"
                label="Your Message"
                register={register}
                errors={errors}
              />
            </div>
            <div className={classes.triggers}>
              <Input
                name="checkbox"
                type="checkbox"
                register={register}
                errors={errors}
              >
                I agree with
                <Link href="/policy">the privacy policy</Link>
              </Input>
            </div>
          </>
        );
      }}
    </FormTempl>
  );
}
