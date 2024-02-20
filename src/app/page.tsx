import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Link href="../">Back to editor</Link>
          <Link href="./share">Share Link</Link>
        </div>
      </div>
      <h1 className="headingMedium">Your Link will be here</h1>
    </>
  );
}
