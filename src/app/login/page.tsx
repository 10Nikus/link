import SubmitButton from "@/components/button/SubmitButton/SubmitButton";
import SwapParagraph from "@/components/SwapParagraph/SwapParagraph";
import FormInput from "@/components/form/FormInput/FormInput";
import FormHeader from "@/components/form/FormHeader/FormHeader";
import classes from "./page.module.css";

export default function Login() {
  return (
    <div className={classes.formDiv}>
      <FormHeader
        bigText="Login"
        smallText="Add your details below to get back into app"
      />
      <form className={classes.formsDiv}>
        <FormInput id="email" placeholder="e.g. alex@email.com">
          Email address
        </FormInput>
        <FormInput id="password" placeholder="Enter your password">
          Password
        </FormInput>
        <SubmitButton>Login</SubmitButton>
        <SwapParagraph link="/login" />
      </form>
    </div>
  );
}
