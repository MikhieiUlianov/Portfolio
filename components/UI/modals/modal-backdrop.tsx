"use client";
import { redirect } from "next/navigation";

export default function ModalBackdrop() {
  return <div className="modal-backdrop" onClick={() => redirect("../")} />;
}
