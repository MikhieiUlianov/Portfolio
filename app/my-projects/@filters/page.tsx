import Section from "@/components/general-use/section/section";
import Filters from "@/components/general-use/filters/filters";
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
