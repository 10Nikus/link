import FormHeader from "@/components/form/FormHeader/FormHeader";
import classes from "./page.module.css";
import LoginForm from "@/components/form/LoginForm/LoginForm";
import { auth } from "@/lib/auth";

export default async function Login() {
  return (
    <div className={classes.formDiv}>
      <FormHeader
        bigText="Login"
        smallText="Add your details below to get back into app"
      />
      <LoginForm />
    </div>
  );
}
