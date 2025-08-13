import Filters from "@/components/general-use/filters/filters";
import Section from "@/components/general-use/section/section";
import { projectsFiltersBlocks } from "@/components/SideData";

export default function MyProjectsList() {
  return (
    <Section>
      <Filters filters={projectsFiltersBlocks} />
    </Section>
  );
}
