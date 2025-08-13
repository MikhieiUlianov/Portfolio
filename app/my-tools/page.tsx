import Filters from "@/components/general-use/filters/filters";
import Tools from "./@tools/page";
import CatalogHeader from "@/components/tools-page/catalog-header/catalog-header";
import { toolsFiltersBlocks } from "@/components/SideData";

export const metadata = {
  title: "My tools page",
  message: "This is page with different tools which i use.",
};

export default function ToolsListPage() {
  return (
    <div className="blocks">
      <aside>
        <Filters filters={toolsFiltersBlocks} />
      </aside>
      <main style={{ marginBottom: 50 }}>
        <CatalogHeader />
        <Tools />
      </main>
    </div>
  );
}
