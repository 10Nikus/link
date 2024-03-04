"use client";

import { deleteLink } from "@/lib/action";
import { auth } from "@/lib/auth";
import { useState } from "react";

export default function LinkForm({
  link,
  type,
}: {
  link: string;
  type: string;
}) {
  const [state, setState] = useState({ link, type });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <select name="type" value={state.type} onChange={handleChange}>
          <option value="github">Github</option>
          <option value="frontend Mentor">Frontend Mentor</option>
          <option value="twitter">Twitter</option>
          <option value="linkedin">Linkedin</option>
          <option value="youtube">Youtube</option>
          <option value="facebook">Facebook</option>
          <option value="twitch">Twitch</option>
          <option value="dev.to">Dev.to</option>
          <option value="codewars">Codewars</option>
          <option value="codepen">Codepen</option>
          <option value="freeCodeCamp">freeCodeCamp</option>
          <option value="gitlab">Gitlab</option>
          <option value="hashnode">Hashnode</option>
          <option value="stackoverflow">Stackoverflow</option>
        </select>
        <input
          name="link"
          type="text"
          value={state.link}
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            deleteLink(type);
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
