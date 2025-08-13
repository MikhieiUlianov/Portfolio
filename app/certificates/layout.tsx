import Section from "@/components/section/section";

export default function MyToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section>
      <h2
        className="title title_fz16 title__section-title"
        style={{ marginTop: 50 }}
      >
        Certificates
      </h2>
      <div className="title title_fz36 title__section-subtitle">
        My Certificates
      </div>
      <div className="divider"></div>
      {children}
    </Section>
  );
}
