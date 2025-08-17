"use server";

import { destroySession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function logout() {
  await destroySession();
  redirect("/");
}
