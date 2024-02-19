import Link from "next/link";
import classes from "./SwapParagraph.module.css";

export default function SwapParagraph({ link }: { link: string }) {
  return (
    <p className={`bodyMedium ` + classes.center}>
      {link === "/register"
        ? "Already have ab account? "
        : "Don't have an account? "}
      <Link
        href={link === "/register" ? "/login" : "/register"}
        className={classes.spanDiv}
      >
        {link === "/register" ? "login" : "Create account"}
      </Link>
    </p>
  );
}
