import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "var(--portfolio-bg)" }}
    >
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-9xl mb-4"
            style={{
              color: "var(--portfolio-primary)",
              fontWeight: 700,
            }}
          >
            404
          </h1>
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{
              color: "var(--portfolio-text-primary)",
              fontWeight: 600,
            }}
          >
            Page Not Found
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "var(--portfolio-text-secondary)" }}
          >
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/">
              <button
                className="group px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #0A2F6C, #2D9CDB)",
                  color: "white",
                }}
              >
                <Home size={20} />
                Go Home
              </button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2"
              style={{
                border: "2px solid var(--portfolio-primary)",
                color: "var(--portfolio-primary)",
                backgroundColor: "transparent",
              }}
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
