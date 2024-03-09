"use client";

import classes from "./page.module.css";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { getUserData } from "@/lib/action";
import GithubBtn from "@/components/button/socialbuttons/github/GithubBtn";
import FrontendMentorBtn from "@/components/button/socialbuttons/frontentMentorBtn/FrontendMentorBtn";
import TwitterBtn from "@/components/button/socialbuttons/twitterBtn/TwitterBtn";
import LinkedinBtn from "@/components/button/socialbuttons/linkedin/LinkedinBtn";
import FacebookBtn from "@/components/button/socialbuttons/facebookBtn/FacebookBtn";
import YoutubeBtn from "@/components/button/socialbuttons/youtubeBtn/youtubeBtn";
import TwitchBtn from "@/components/button/socialbuttons/twitchBtn/TwitchBtn";

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
                return <FrontendMentorBtn key={index} link={link.link} />;
              case "github":
                return <GithubBtn key={index} link={link.link} />;
              case "twitter":
                return <TwitterBtn key={index} link={link.link} />;
              case "linkedin":
                return <LinkedinBtn key={index} link={link.link} />;
              case "youtube":
                return <YoutubeBtn key={index} link={link.link} />;
              case "facebook":
                return <FacebookBtn key={index} link={link.link} />;
              case "twitch":
                return <TwitchBtn key={index} link={link.link} />;
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
