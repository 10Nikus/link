"use client";

import { useState } from "react";

export default function LinkForm({
  link,
  type,
}: {
  link: string;
  type: string;
}) {
  const [state, setState] = useState({ link, type });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          name="type"
          type="select"
          value={state.type}
          onChange={handleChange}
        />
        <input
          name="link"
          type="text"
          value={state.link}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
