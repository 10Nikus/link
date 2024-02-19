import classes from "./page.module.css";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";

export default function Login() {
  return (
    <main className={classes.loginMain}>
      <div className={classes.loginDiv}>
        <div className={classes.title}>
          <h1 className="headingSmall">devlinks</h1>
        </div>
        <div className={classes.formDiv}>
          <div className={classes.header}>
            <h1 className="headingMedium">Login</h1>
            <p className="bodyMedium">
              Add your details below to get back into app
            </p>
          </div>
          <form className={classes.formsDiv}>
            <label htmlFor="email" className={classes.bodySmall}>
              <h1 className="bodySmall">Email adress</h1>
              <input
                className={classes.formInput}
                type="email"
                id="email"
                name="email"
                placeholder="e.g.alex@email.com"
              />
            </label>
            <label htmlFor="password" className={classes.bodySmall}>
              <h1 className="bodySmall">Password</h1>
              <input
                className={classes.formInput}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </label>
            <button type="submit" className={classes.formButton}>
              Login
            </button>
            <p className={`bodyMedium ` + classes.center}>
              Don't have an account? &nbsp;
              <Link href="/register" className={classes.spanDiv}>
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
