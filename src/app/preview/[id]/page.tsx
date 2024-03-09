"use client";

import classes from "./page.module.css";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { getUserData } from "@/lib/action";
import Link from "next/link";
import GithubBtn from "@/components/button/socialbuttons/github/GithubBtn";
import FrontendMentorBtn from "@/components/button/socialbuttons/frontentMentorBtn/FrontendMentorBtn";

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
          {user?.links.map((link: any, index: number) => {
            switch (link.type) {
              case "frontend Mentor":
                return <FrontendMentorBtn link={link.link} />;
              case "github":
                return <GithubBtn link={link.link} />;
              case "twitter":
                return "twitter";
              case "linkedin":
                return "linkedin";
              case "youtube":
                return "youtube";
              case "facebook":
                return "facebook";
              case "twitch":
                return "twitch";
              case "devto":
                return "devto";
              case "codewars":
                return "codewars";
              case "freeCodeCamp":
                return "freeCodeCamp";
              case "codepen":
                return "codepen";
              case "gitLab":
                return "gitLab";
              case "hashnode":
                return "hashnode";
              case "stackoverflow":
                return "stackoverflow";
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
