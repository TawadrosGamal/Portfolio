import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/cv", label: "CV" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/blog", label: "Blog" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <Link
            to="/"
            className="text-xl font-bold tracking-tight transition-colors flex items-center gap-3"
            style={{ color: "var(--portfolio-primary)" }}
          >
            <img src="/logo.svg" alt="TN Logo" className="w-10 h-10" />
            <span className="hidden sm:inline">Tawadros Nemer</span>
            <span className="sm:hidden">TN</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative py-2 transition-colors"
                style={{
                  color:
                    isActive(item.path)
                      ? "var(--portfolio-primary)"
                      : "var(--portfolio-text-secondary)",
                }}
              >
                {item.label}
                {isActive(item.path) && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: "var(--portfolio-secondary)" }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              style={{ color: "var(--portfolio-primary)" }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden py-4 border-t bg-white dark:bg-gray-900" 
            style={{ borderColor: "rgba(10, 47, 108, 0.1)" }}
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left py-2 px-4 rounded-lg transition-colors"
                  style={{
                    color:
                      isActive(item.path)
                        ? "var(--portfolio-primary)"
                        : "var(--portfolio-text-secondary)",
                    backgroundColor:
                      isActive(item.path) ? "var(--portfolio-bg)" : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}