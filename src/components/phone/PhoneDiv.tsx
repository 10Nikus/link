import dynamic from "next/dynamic";
import classes from "./phoneDiv.module.css";
import { Avatar } from "@mui/material";
import GithubBtn from "@/components/button/socialbuttons/github/GithubBtn";
import FrontendMentorBtn from "@/components/button/socialbuttons/frontentMentorBtn/FrontendMentorBtn";
import TwitterBtn from "@/components/button/socialbuttons/twitterBtn/TwitterBtn";
import LinkedinBtn from "@/components/button/socialbuttons/linkedin/LinkedinBtn";
import FacebookBtn from "@/components/button/socialbuttons/facebookBtn/FacebookBtn";
import TwitchBtn from "@/components/button/socialbuttons/twitchBtn/TwitchBtn";
import YoutubeBtn from "@/components/button/socialbuttons/youtubeBtn/YoutubeBtn";
import DevtoBtn from "@/components/button/socialbuttons/devtoBtn/DevtoBtn";
import CodewarsBtn from "@/components/button/socialbuttons/codewarsBtn/CodewarsBtn";
import FreeCodeCampBtn from "@/components/button/socialbuttons/freeCodeCampBtn/FreeCodeCampBtn";
import CodePenBtn from "@/components/button/socialbuttons/codepenBtn/CodePenBtn";
import GitLabBtn from "@/components/button/socialbuttons/gitlabBtn/GitLabBtn";
import HashNodeBtn from "@/components/button/socialbuttons/hashnodeBtn/HashNodeBtn";
import StackBtn from "@/components/button/socialbuttons/stackBtn/StackBtn";

function PhoneDiv({ user }: { user: any }) {
  return (
    <div className={classes.linksDiv}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="307"
        height="631"
        fill="none"
        viewBox="0 0 308 632"
      >
        <path
          stroke="#737373"
          d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
        />
        <path
          fill="#fff"
          stroke="#737373"
          d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
        />
        <circle cx="153.5" cy="112" r="48" fill="#EEE" />
        <rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8" />
        <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />
        <rect width="237" height="44" x="35" y="278" fill="#EEE" rx="8" />
        <rect width="237" height="44" x="35" y="342" fill="#EEE" rx="8" />
        <rect width="237" height="44" x="35" y="406" fill="#EEE" rx="8" />
        <rect width="237" height="44" x="35" y="470" fill="#EEE" rx="8" />
        <rect width="237" height="44" x="35" y="534" fill="#EEE" rx="8" />
      </svg>
      <div className={classes.x}>
        <Avatar src={user?.image} alt={user?.name} />
        <h1>
          {user?.firstName} {user?.lastName}
        </h1>
        <p>{user.email}</p>
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
                return <DevtoBtn key={index} link={link.link} />;
              case "codewars":
                return <CodewarsBtn key={index} link={link.link} />;
              case "freeCodeCamp":
                return <FreeCodeCampBtn key={index} link={link.link} />;
              case "codepen":
                return <CodePenBtn key={index} link={link.link} />;
              case "gitLab":
                return <GitLabBtn key={index} link={link.link} />;
              case "hashnode":
                return <HashNodeBtn key={index} link={link.link} />;
              case "stackoverflow":
                return <StackBtn key={index} link={link.link} />;
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(PhoneDiv), { ssr: false });
