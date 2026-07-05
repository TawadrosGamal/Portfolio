import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: "var(--portfolio-bg)" }} />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative w-10 h-10 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
      style={{
        backgroundColor: "var(--portfolio-bg)",
        color: "var(--portfolio-primary)",
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="transition-transform group-hover:rotate-12" />
      ) : (
        <Moon size={20} className="transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
}
