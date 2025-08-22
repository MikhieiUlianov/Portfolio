import Section from "@/components/general-use/section";
import Input from "@/components/UI/input/input";
import changePassword from "@/actions/change-pass";
import { ChangePassFormValues } from "@/actions/change-pass";
import FormTempl from "../../../utils/form-templ";

export default function ChangePassModal() {
  return (
    <Section>
      <h2>Change password</h2>
      <h3>Chnage your password to for your account!</h3>

      <FormTempl<ChangePassFormValues>
        redirectPath="/"
        registrationFunc={changePassword}
      >
        {({ register, formState: { errors } }) => {
          return (
            <>
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
            </>
          );
        }}
      </FormTempl>
    </Section>
  );
}
