import ProfileNavbar from "@/components/navbar/ProfileNavbar/ProfileNavbar";
import { Metadata } from "next";
import classes from "./layout.module.css";
import { auth } from "@/lib/auth";
import LogoutBtn from "@/components/button/logoutBtn/LogoutBtn";
import { getUserData } from "@/lib/action";
import PhoneDiv from "@/components/phone/PhoneDiv";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const { id } = session?.user;
  const user = await getUserData({ id });

  return (
    <>
      <ProfileNavbar id={id} />
      <div className={classes.mainDiv}>
        <PhoneDiv user={user} />
        {children}
      </div>
      <LogoutBtn />
    </>
  );
}
