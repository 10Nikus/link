import SwapParagraph from "@/components/SwapParagraph/SwapParagraph";
import SubmitButton from "@/components/button/SubmitButton/SubmitButton";
import FormHeader from "@/components/form/FormHeader/FormHeader";
import FormInput from "@/components/form/FormInput/FormInput";
import classes from "./page.module.css";

export default function RegisterPage() {
  return (
    <div className={classes.formDiv}>
      <FormHeader
        bigText="Create an account"
        smallText="Let's get you sharing your links!"
      />
      <form className={classes.formsDiv}>
        <FormInput id="email" placeholder="e.g. alex@email.com">
          Email address
        </FormInput>
        <FormInput id="password" placeholder="At least 8 characters">
          Create password
        </FormInput>
        <FormInput id="password" placeholder="At least 8 characters">
          Confirm password
        </FormInput>
        <SubmitButton>Login</SubmitButton>
        <SwapParagraph link="/register" />
      </form>
    </div>
  );
}
