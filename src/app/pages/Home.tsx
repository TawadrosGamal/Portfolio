import { Hero } from "../components/Hero";
import { PageTransition } from "../components/PageTransition";

export function Home() {
  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  );
}