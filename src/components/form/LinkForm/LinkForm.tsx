"use client";

import { deleteLink } from "@/lib/action";
import { useState } from "react";
import classes from "./LinkForm.module.css";

export default function LinkForm({
  link,
  type,
  num,
}: {
  link: string;
  type: string;
  num: number;
}) {
  const [state, setState] = useState({ link, type });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.link}>
      <form>
        <div className={classes.numAndDel}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="6"
              fill="none"
              viewBox="0 0 12 6"
            >
              <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
            </svg>
            <h1 className="headingSmall">link #{num + 1}</h1>
          </div>
          <button
            className="bodySmall"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              deleteLink(type);
            }}
          >
            Delete
          </button>
        </div>
        <div>
          <div className={classes.editLink}>
            <div>
              <label htmlFor="type" className="bodySmall">
                Type
              </label>
              <select name="type" value={state.type} onChange={handleChange}>
                <option value="github">Github</option>
                <option value="frontend Mentor">Frontend Mentor</option>
                <option value="twitter">Twitter</option>
                <option value="linkedin">Linkedin</option>
                <option value="youtube">Youtube</option>
                <option value="facebook">Facebook</option>
                <option value="twitch">Twitch</option>
                <option value="devto">Dev.to</option>
                <option value="codewars">Codewars</option>
                <option value="codepen">Codepen</option>
                <option value="freeCodeCamp">freeCodeCamp</option>
                <option value="gitlab">Gitlab</option>
                <option value="hashnode">Hashnode</option>
                <option value="stackoverflow">Stackoverflow</option>
              </select>
            </div>

            <div>
              <label htmlFor="link" className="bodySmall">
                Link
              </label>
              <input
                name="link"
                type="text"
                value={state.link}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
