import { Contact } from "../components/Contact";
import { PageTransition } from "../components/PageTransition";

export function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <Contact />
      </div>
    </PageTransition>
  );
}