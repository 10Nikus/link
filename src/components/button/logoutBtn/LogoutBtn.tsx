"use client";

import { handleLogout } from "@/lib/action";
import { useFormState } from "react-dom";

export default function LogoutBtn() {
  const [logoutState, logoutAction] = useFormState(handleLogout, undefined);

  return (
    <form action={logoutAction}>
      <button type="submit">Logout</button>
    </form>
  );
}
