"use client";
import Section from "@/components/section/section";
import classes from "./certificates.module.scss";
import { useState } from "react";
import { certificatesItems } from "@/components/SideData";
import Link from "next/link";
import Image from "next/image";

export default function CertificatesPage() {
  const [finished, setFinished] = useState(false);
  const certificates = certificatesItems;

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
    </Section>
  );
}
