import { Experience } from "../components/Experience";
import { Download } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export function ExperiencePage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Download CV Button */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex justify-end">
            <a
              href="/Tawadros_Nemer_CV.pdf"
              download
              className="group px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #0A2F6C, #2D9CDB)",
                color: "white",
              }}
            >
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </div>
        </div>
        <Experience />
      </div>
    </PageTransition>
  );
}