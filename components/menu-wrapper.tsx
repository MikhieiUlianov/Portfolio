import Menu from "./navigation/menu/index";
import { verifyAuth } from "@/lib/auth";

export default async function MenuWrapper() {
  const isLogged = await verifyAuth();

  return <Menu isLogged={isLogged.user} />;
}
