"use client";
import { redirect, useRouter } from "next/navigation";

export default function ModalBackdrop() {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={() => redirect("../")} />;
}
