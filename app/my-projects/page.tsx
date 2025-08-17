import MyProjectsFilters from "./@filters/page";
import MyProjectsList from "./@projects/page";

export const metadata = {
  title: "My projects",
  description: "My projects page which i worked with during my career.",
};

export default function MyProjects() {
  return (
    <div className="blocks">
      <aside>
        <MyProjectsFilters />
      </aside>
      <main>
        <MyProjectsList />
      </main>
    </div>
  );
}
