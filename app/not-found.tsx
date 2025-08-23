import Link from "next/link";

export const metadata = {
  title: "Not Found",
};
export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not Found!</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
      <Link className="margin margin-bottom" href="../">
        Go Back
      </Link>
    </main>
  );
}
