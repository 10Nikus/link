import classes from "./page.module.css";
import Avatar from "@mui/material/Avatar";
import GithubBtn from "@/components/button/socialbuttons/github/GithubBtn";

export default function Preview({ params }) {
  const { id } = params;
  return (
    <div className={classes.mainDiv}>
      <div className={classes.phoneBg}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.newonce.me/uploads/images/40636/cover_sentino.jpg"
          sx={{ width: 104, height: 104 }}
        />
        <div>
          <h1>Your Name</h1>
          <p>you@mail.com</p>
        </div>
        <div className={classes.linkList}>
          <GithubBtn />
        </div>
      </div>
    </div>
  );
}
