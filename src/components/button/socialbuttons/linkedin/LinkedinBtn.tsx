import SocialBtn from "../socialBtn/SocialBtn";
import classes from "./LinkedinBtn.module.css";

export default function LinkedinBtn({ link }: { link: string }) {
  return (
    <div className={classes.btn}>
      <SocialBtn link={link}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#737373"
              d="M14.973 4a5.711 5.711 0 0 1-1.64.46 2.866 2.866 0 0 0 1.253-1.587 5.761 5.761 0 0 1-1.813.7 2.816 2.816 0 0 0-2.107-.906 2.857 2.857 0 0 0-2.846 2.86c0 .226.026.446.073.653A8.13 8.13 0 0 1 2 3.193a2.83 2.83 0 0 0-.387 1.433c0 .994.5 1.874 1.273 2.374-.473 0-.913-.133-1.3-.333v.02c0 1.386.987 2.546 2.294 2.806-.42.115-.86.131-1.287.047a2.854 2.854 0 0 0 2.667 1.987 5.68 5.68 0 0 1-3.554 1.226 5.83 5.83 0 0 1-.68-.04A8.096 8.096 0 0 0 5.413 14c5.253 0 8.14-4.36 8.14-8.14 0-.127 0-.247-.007-.373.56-.4 1.04-.907 1.427-1.487Z"
            />
          </svg>

          <p className={classes.name}>LinkedIn</p>
        </div>
      </SocialBtn>
    </div>
  );
}
