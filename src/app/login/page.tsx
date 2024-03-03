import FormHeader from "@/components/form/FormHeader/FormHeader";
import classes from "./page.module.css";
import LoginForm from "@/components/form/LoginForm/LoginForm";
import { auth } from "@/lib/auth";

export default async function Login() {
  const session = await auth();
  return (
    <div className={classes.formDiv}>
      {session ? <h1>Already logged in</h1> : null}
      <FormHeader
        bigText="Login"
        smallText="Add your details below to get back into app"
      />
      <LoginForm />
    </div>
  );
}
