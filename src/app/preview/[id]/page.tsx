"use client";

import classes from "./page.module.css";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { getUserData } from "@/lib/action";
import Link from "next/link";

export default function Preview({ params }: { params: { id: string } }) {
  const { id } = params;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const setUserData = async () => {
      const user = await getUserData({ id });
      setUser(user);
    };
    setUserData();
  }, [id, getUserData]);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.phoneBg}>
        <Avatar
          alt="Remy Sharp"
          src={user?.image}
          sx={{ width: 104, height: 104 }}
        />
        <div>
          <h1>
            {user?.firstName} {user?.lastName}
          </h1>
          <p>{user?.email}</p>
        </div>
        <div className={classes.linkList}>
          {user?.links.map((link: any, index: number) => (
            <Link key={index} href={link.link}>
              {link.type}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
