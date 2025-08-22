"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import SignUpModal from "./sign-up";
import LogInModal from "./log-in";
import ChangePassModal from "./change-pass";

import classes from "./modal-handler.module.scss";
import ModalBackdrop from "./modal-backdrop";
import CloseIcon from "../icons/close-icon";
import RegistrationRequired from "./registration-required";

export default function ModalHandler() {
  const searchParams = useSearchParams();
  const activeSigment = searchParams.get("modal");
  const router = useRouter();

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    if (activeSigment) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [activeSigment]);

  function renderedModal() {
    if (activeSigment === "signup") return <SignUpModal />;
    if (activeSigment === "login") return <LogInModal />;
    if (activeSigment === "change-password") return <ChangePassModal />;
    if (activeSigment === "registration-required")
      return <RegistrationRequired />;
    return null;
  }
  function handleClose() {
    modalRef.current?.close();
    router.push(window.location.pathname, { scroll: false });
  }
  return (
    <>
      {activeSigment && (
        <>
          <ModalBackdrop />
          <dialog className={classes.modal} ref={modalRef}>
            <span className={classes.close} onClick={handleClose}>
              <CloseIcon />
            </span>
            {renderedModal()}
          </dialog>
        </>
      )}
    </>
  );
}
