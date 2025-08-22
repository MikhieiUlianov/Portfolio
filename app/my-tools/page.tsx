import Tools from "./@tools/page";
import CatalogHeader from "@/components/tools-page/catalog-header";
import FiltersPage from "./@filters/page";

export const metadata = {
  title: "My tools page",
  message: "This is page with different tools which i use.",
};

export default function ToolsListPage() {
  return (
    <div className="blocks">
      <aside>
        <FiltersPage />
      </aside>
      <main style={{ marginBottom: 50 }}>
        <CatalogHeader />
        <Tools />
      </main>
    </div>
  );
}
