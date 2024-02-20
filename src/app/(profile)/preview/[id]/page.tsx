import Link from "next/link";

export default function Preview() {
  return (
    <>
      <div>
        <div>
          <Link href="../">Back to editor</Link>
          <Link href="./share">Share Link</Link>
        </div>
      </div>
      <h1>Your Link will be here</h1>
    </>
  );
}
