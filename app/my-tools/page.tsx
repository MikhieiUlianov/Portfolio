import Filters from "@/components/tools-page/filters/filters";
import Tools from "./@tools/page";
import CatalogHeader from "@/components/tools-page/catalog-header/catalog-header";
import classes from "./layout.module.scss";

export const metadata = {
  title: "My tools page",
  message: "This is page with different tools which i use.",
};

export default function ToolsListPage() {
  return (
    <div className={classes.blocks}>
      <aside>
        <Filters />
      </aside>
      <main style={{ marginBottom: 50 }}>
        <CatalogHeader />
        <Tools />
      </main>
    </div>
  );
}
