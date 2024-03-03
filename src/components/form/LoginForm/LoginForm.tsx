"use client";

import { login } from "@/lib/action";
import SubmitButton from "@/components/button/SubmitButton/SubmitButton";
import SwapParagraph from "@/components/SwapParagraph/SwapParagraph";
import FormInput from "@/components/form/FormInput/FormInput";
import classes from "./LoginForm.module.css";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={classes.formsDiv} action={formAction}>
      <FormInput id="email" placeholder="e.g. alex@email.com">
        Email address
      </FormInput>
      <FormInput id="password" placeholder="Enter your password">
        Password
      </FormInput>
      <SubmitButton>Login</SubmitButton>
      {state?.error && <span className={classes.error}>{state.error}</span>}
      <SwapParagraph link="/login" />
    </form>
  );
}
