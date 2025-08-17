import Section from "@/components/general-use/section/section";
import classes from "./certificates.module.scss";
/* import { useState } from "react"; */
import { certificatesItems } from "@/components/SideData";
import Link from "next/link";
import Image from "next/image";
import StyledButton from "@/components/UI/styled-button/styled-button";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function CertificatesPage() {
  const certificates = certificatesItems.slice(0, 3);
  /* 
  function handleLoadMore() {
    const newAmount = amount + 3;
    setAmount(newAmount);
    if (newAmount >= certificatesItems.length) {
      setFinished(true);
    }
  } */
  const result = await verifyAuth();
  if (!result.user) redirect("/");
  return (
    <Section sectionClass={classes.certificates}>
      <ul>
        {certificates.map((cer) => (
          <li key={cer.slug}>
            <Link href={`/certificates/${cer.slug}`} className={classes.card}>
              <div className={classes.content}>
                <div className={classes.text}>
                  <h2>{cer.title}</h2>
                  <p>{cer.description}</p>
                </div>

                <div className={classes.thumb}>
                  <Image
                    alt={cer.title}
                    src={cer.image}
                    width={320}
                    height={200}
                  />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/*  {!finished && (
        <StyledButton onClick={handleLoadMore} className="margin">
          Load More
        </StyledButton>
      )} */}
    </Section>
  );
}
