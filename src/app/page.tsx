import { handleLogout } from "@/lib/action";

export default function Home() {
  return (
    <form action={handleLogout}>
      <button>Logout</button>
    </form>
  );
}
