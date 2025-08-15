"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import SignUpModal from "../sign-up/sign-up";
import LogInModal from "../log-in/log-in";
import ChangePassModal from "../change-pass/change-pass";

import classes from "../modal-handler.module.scss";
import ModalBackdrop from "../modal-backdrop";
import CloseIcon from "../../icons/close-icon";

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
    return null;
  }
  function handleClose() {
    modalRef.current?.close();
    router.push(window.location.pathname, { scroll: false }); // Removes ?modal=...
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
      {/*    {activeSigment && (
        <>
          <ModalBackdrop />
          <dialog className={classes.modal} ref={modalRef}>
            {renderedModal()}
          </dialog>
        </>
      )}  */}
    </>
  );
}
