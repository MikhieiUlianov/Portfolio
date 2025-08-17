import Section from "@/components/general-use/section/section";
import classes from "./certificates.module.scss";
import { certificatesItems } from "@/components/SideData";
import Link from "next/link";
import Image from "next/image";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Certificates",
  description: "My certificates page where i tell where and how i got them.",
};

export default async function CertificatesPage() {
  const certificates = certificatesItems;

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
    </Section>
  );
}
