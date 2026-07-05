import { ProjectsWithFilter } from "../components/ProjectsWithFilter";
import { PageTransition } from "../components/PageTransition";

export function ProjectsPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <ProjectsWithFilter />
      </div>
    </PageTransition>
  );
}