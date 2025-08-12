import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import ThemeToggle from "../components/ThemeToggleButton";
import { useAuth } from "../contexts/AuthContext";
import {
  Menu,
  X,
  Home,
  User,
  Settings,
  ShoppingCart,
  Megaphone,
  Bell,
  LayoutDashboard,
  LogOut,
  FileText,
  Camera,
  Palette,
  Users,
} from "lucide-react";

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAdmin, isGraphiste } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getNavLinks = () => {
    if (!user) return [];

    if (isAdmin()) {
      return [
        {
          title: "Tableau de bord",
          label: "/admin",
          icon: LayoutDashboard,
        },
        {
          title: "Utilisateurs",
          url: "/admin/users",
          icon: Users,
        },
        {
          title: "Commandes",
          url: "/admin/orders",
          icon: ShoppingCart,
        },
        {
          title: "Graphistes",
          label: "/admin/graphistes",
          icon: Palette,
        },
        {
          title: "Publicités",
          label: "/admin/ads",
          icon: Megaphone,
        },
        {
          title: "Notifications",
          label: "/admin/notifications",
          icon: Bell,
        },
      ];
    }

    if (isGraphiste()) {
      return [
        { to: "/graphiste", label: "Tableau de bord", icon: Home },
        { to: "/graphiste/missions", label: "Missions", icon: FileText },
        { to: "/graphiste/profile", label: "Profil", icon: User },
      ];
    }

    return [
      { to: "/dashboard", label: "Tableau de bord", icon: Home },
      { to: "/order-design", label: "Design", icon: Palette },
      { to: "/order-print", label: "Impression", icon: Camera },
      { to: "/orders", label: "Mes Commandes", icon: FileText },
      { to: "/profile", label: "Profil", icon: User },
    ];
  };

  const navLinks = getNavLinks();

  return (
    <div className="min-h-screen dark:bg-black dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="bg-gray-50 fixed z-50 min-w-full shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between  h-16">
            <div className="flex items-center ml-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Graphika
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 mr-4">
              {!user ? (
                <>
                  <Link
                    to="/"
                    className={`text-gray-600 hover:text-purple-900 ${
                      location.pathname === "/"
                        ? "font-semibold border-b-2 text-purple-700"
                        : ""
                    }`}
                  >
                    Accueil
                  </Link>
                  <Link
                    to="/conception"
                    className={`text-gray-600 hover:text-purple-900 ${
                      location.pathname === "/conception"
                        ? "font-semibold border-b-2 text-purple-700"
                        : ""
                    }`}
                  >
                    Conception
                  </Link>
                  <Link
                    to="/impressions"
                    className={`text-gray-600 hover:text-purple-900 ${
                      location.pathname === "/impressions"
                        ? "font-semibold border-b-2 text-purple-700"
                        : ""
                    }`}
                  >
                    Impression
                  </Link>
                  <Link
                    to="/become-graphiste"
                    className={`text-gray-600 hover:text-purple-900 ${
                      location.pathname === "/become-graphiste"
                        ? "font-semibold border-b-2 text-purple-700"
                        : ""
                    }`}
                  >
                    Devenir Graphiste
                  </Link>
                  <Link
                    to="/contact"
                    className={`text-gray-600 hover:text-purple-900 ${
                      location.pathname === "/contact"
                        ? "font-semibold border-b-2 text-purple-700"
                        : ""
                    }`}
                  >
                    Contact
                  </Link>
                  <div className="connectBtn">
                    <Link to="/login">
                      <Button variant="outline" className="mr-2">
                        Se connecter
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button className="mr-2">S'inscrire</Button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium  ${
                        location.pathname === link.to
                          ? "bg-purple-100 text-purple-700 "
                          : "text-gray-600 hover:text-gray-900 "
                      }`}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </>
              )}
              
            <ThemeToggle />

            </nav>

            

            {/* Mobile menu button */}
            <div className="md:hidden my-auto">
              <Button
                variant="ghost"
                size="md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-24 h-24" />
                ) : (
                  <Menu className="w-24 h-24" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {!user ? (
                <>
                  <Link to="/" className="block px-3 py-2 text-gray-600">
                    Accueil
                  </Link>
                  <Link
                    to="/conception"
                    className="block px-3 py-2 text-gray-600"
                  >
                    Conception
                  </Link>
                  <Link
                    to="/impressions"
                    className="block px-3 py-2 text-gray-600"
                  >
                    Impression
                  </Link>
                  <Link
                    to="/become-graphiste"
                    className="block px-3 py-2 text-gray-600"
                  >
                    Devenir Graphiste
                  </Link>
                  <Link to="/contact" className="block px-3 py-2 text-gray-600">
                    Contact
                  </Link>
                  <div className="pt-4 space-y-2">
                    <Link to="/login" className="block">
                      <Button variant="outline" className="w-full">
                        Se connecter
                      </Button>
                    </Link>
                    <Link to="/register" className="block">
                      <Button className="w-full">S'inscrire</Button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                        location.pathname === link.to
                          ? "bg-purple-100 text-purple-700"
                          : "text-gray-600 focus"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="w-full mt-4"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Déconnexion
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-0 bg-gray-400 dark:bg-black">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Graphika</span>
              </div>
              <p className="text-gray-400">
                Votre plateforme de création graphique et d'impression
                professionnelle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/conception" className="hover:text-white">
                    Design Graphique
                  </Link>
                </li>
                <li>
                  <Link to="/impressions" className="hover:text-white">
                    Impression
                  </Link>
                </li>
                <li>
                  <Link to="/supports" className="hover:text-white">
                    Supports variés
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-white">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/become-graphiste" className="hover:text-white">
                    Devenir Graphiste
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/help" className="hover:text-white">
                    Aide
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white">
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white">
                    Confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Graphika. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
