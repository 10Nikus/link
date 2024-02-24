"use client";

import SwapParagraph from "@/components/SwapParagraph/SwapParagraph";
import SubmitButton from "@/components/button/SubmitButton/SubmitButton";
import FormHeader from "@/components/form/FormHeader/FormHeader";
import FormInput from "@/components/form/FormInput/FormInput";
import classes from "./page.module.css";
import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <div className={classes.formDiv}>
      <FormHeader
        bigText="Create an account"
        smallText="Let's get you sharing your links!"
      />
      <form className={classes.formsDiv} action={formAction}>
        <FormInput id="email" placeholder="e.g. alex@email.com">
          Email address
        </FormInput>
        <FormInput id="password" placeholder="At least 8 characters">
          Create password
        </FormInput>
        <FormInput id="password2" placeholder="At least 8 characters">
          Confirm password
        </FormInput>
        <SubmitButton>Create account</SubmitButton>
        {state?.error && <span>{state.error}</span>}
        <SwapParagraph link="/register" />
      </form>
    </div>
  );
}
