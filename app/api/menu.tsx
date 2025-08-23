import { verifyAuth } from "@/lib/auth";

export async function GET() {
  try {
    const auth = await verifyAuth();
    return new Response(JSON.stringify(auth), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ user: null, session: null }), {
      status: 200,
    });
  }
}
