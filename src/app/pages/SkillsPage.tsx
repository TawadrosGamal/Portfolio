import { Skills } from "../components/Skills";
import { Certifications } from "../components/Certifications";
import { PageTransition } from "../components/PageTransition";

export function SkillsPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <Skills />
        <Certifications />
      </div>
    </PageTransition>
  );
}