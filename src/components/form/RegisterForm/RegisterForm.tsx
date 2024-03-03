"use client";

import SwapParagraph from "@/components/SwapParagraph/SwapParagraph";
import SubmitButton from "@/components/button/SubmitButton/SubmitButton";
import FormInput from "@/components/form/FormInput/FormInput";
import classes from "./RegisterForm.module.css";
import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={classes.formsDiv} action={formAction}>
      <FormInput id="email" placeholder="e.g. alex@email.com">
        Email address
      </FormInput>
      {state?.error.type === "email" && (
        <span className={classes.error}>{state.error.text}</span>
      )}

      <FormInput id="password" placeholder="At least 8 characters">
        Create password
      </FormInput>

      <FormInput id="password2" placeholder="At least 8 characters">
        Confirm password
      </FormInput>
      {state?.error.type === "password" && (
        <span className={classes.error}>{state.error.text}</span>
      )}
      <SubmitButton>Create account</SubmitButton>
      <SwapParagraph link="/register" />
    </form>
  );
}
