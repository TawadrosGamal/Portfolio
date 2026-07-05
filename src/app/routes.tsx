import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";
import { BlogPage } from "./pages/BlogPage";
import { NewsPage } from "./pages/NewsPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutPage },
      { path: "cv", Component: ExperiencePage },
      { path: "projects", Component: ProjectsPage },
      { path: "skills", Component: SkillsPage },
      { path: "blog", Component: BlogPage },
      { path: "news", Component: NewsPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFound },
    ],
  },
]);