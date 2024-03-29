import type { Metadata } from "next";
import classes from "./layout.module.css";
import LargeLogo from "@/components/logo/LargeLogo/LargeLogo";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={classes.loginMain}>
      <div className={classes.loginDiv}>
        <LargeLogo />
        {children}
      </div>
    </main>
  );
}
