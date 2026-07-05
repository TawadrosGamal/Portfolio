import { About } from "../components/About";
import { PageTransition } from "../components/PageTransition";

export function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <About />
      </div>
    </PageTransition>
  );
}