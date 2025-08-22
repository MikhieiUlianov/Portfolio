import Section from "@/components/general-use/section";

export default function MyToolsLayout({
  children,
}: {
  children: React.ReactNode;
  filters: never;
  tools: never;
}) {
  return (
    <Section>
      <h2
        className="title title_fz16 title__section-title"
        style={{ marginTop: 50 }}
      >
        Skills
      </h2>

      <div className="title title_fz36 title__section-subtitle">
        What I use in my work
      </div>

      <div className="divider"></div>

      {children}
    </Section>
  );
}
