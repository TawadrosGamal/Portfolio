import { Outlet } from "react-router";
import { Helmet } from "react-helmet-async";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <>
      <Helmet>
        <title>Tawadros Nemer | Data Scientist | Generative & Agentic AI</title>
        <meta name="description" content="Applied Scientist at Microsoft leading LLM-powered automation. Course Author for Udacity's Azure Agentic AI Nanodegree. Specializing in multi-agent systems and production AI." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>
      <div className="size-full">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}