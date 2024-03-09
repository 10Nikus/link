import Link from "next/link";
import classes from "./SocialBtn.module.css";

export default function SocialBtn({
  link,

  children,
}: {
  link: string;

  children: React.ReactNode;
}) {
  return (
    <Link className={classes.btn} href={link}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="red"
        viewBox="0 0 16 16"
      >
        <path
          fill="#fff"
          d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"
        />
      </svg>
    </Link>
  );
}
