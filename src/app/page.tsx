import { handleLogout } from "@/lib/action";

export default function Home() {
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
