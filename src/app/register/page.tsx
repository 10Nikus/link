import FormHeader from "@/components/form/FormHeader/FormHeader";
import classes from "./page.module.css";
import RegisterForm from "@/components/form/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <div className={classes.formDiv}>
      <FormHeader
        bigText="Create an account"
        smallText="Let's get you sharing your links!"
      />
      <RegisterForm />
    </div>
  );
}
