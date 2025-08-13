import MyProjectsFilters from "./@filters/page";
import MyProjectsList from "./@projects/page";

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
