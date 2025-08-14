import Filters from "@/components/general-use/filters/filters";
import { toolsFiltersBlocks } from "@/components/SideData";

export default function FiltersPage() {
  return (
    <aside>
      <Filters
        activeFiltersBlock="toolsAccordion"
        filtersArrName="toolsFilters"
        filters={toolsFiltersBlocks}
      />
    </aside>
  );
}
