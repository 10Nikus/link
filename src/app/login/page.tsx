import FormHeader from "@/components/form/FormHeader/FormHeader";
import classes from "./page.module.css";
import LoginForm from "@/components/form/LoginForm/LoginForm";
import { auth } from "@/lib/auth";
import { handleLogout } from "@/lib/action";

export default async function Login() {
  const session = await auth();

  return (
    <div className={classes.formDiv}>
      {session ? <button onClick={handleLogout}>Logout</button> : null}
      <FormHeader
        bigText="Login"
        smallText="Add your details below to get back into app"
      />
      <LoginForm />
    </div>
  );
}
