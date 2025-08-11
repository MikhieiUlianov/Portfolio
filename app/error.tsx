"use client";

export default function Error({ error }: { error: string }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>{error || "Something went wrong."}</p>
    </main>
  );
}
