import Section from "@/components/general-use/section";
import Filters from "@/components/general-use/filters";
import { projectsFiltersBlocks } from "@/components/SideData";
export default function MyProjectsFilters() {
  return (
    <Section>
      <Filters
        activeFiltersBlock="projectsAccordion"
        filtersArrName="projectsFilters"
        filters={projectsFiltersBlocks}
      />
    </Section>
  );
}
