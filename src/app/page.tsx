import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <>
      {session && (
        <form action={handleLogout}>
          <button>Logout</button>
        </form>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
        }}
      >
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/details">Details</Link>
        <Link href="/links">links</Link>
      </div>
    </>
  );
}
