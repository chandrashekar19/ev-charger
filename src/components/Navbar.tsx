import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const productLinks = [
    { name: "PowerUp 32", path: "/products/powerup-32" },
    { name: "PowerUp 60", path: "/products/powerup-60" },
    { name: "PowerUp Mobile", path: "/products/powerup-mobile" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white/95"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="font-bold text-2xl tracking-tight flex items-center"
            aria-label="SCHÖN - Home"
          >
            <img src="/vector-1.svg" alt="SCHÖN Logo" className="h-6 w-auto" />
            <span className="ml-2 text-evgray-800">SCHON</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-200 hover:text-evblue-600 ${
                isActive("/") ? "text-evblue-600" : "text-evgray-800"
              }`}
            >
              Home
            </Link>
            <Link
              to="/energy-maestro"
              className={`text-sm font-medium transition-all duration-200 hover:text-evblue-600 ${
                isActive("/energy-maestro")
                  ? "text-evblue-600"
                  : "text-evgray-800"
              }`}
            >
              EnergyMÆSTRO
            </Link>

            {/* Products Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-sm font-medium transition-all duration-200 hover:text-evblue-600 ${
                      location.pathname.includes("/products")
                        ? "text-evblue-600"
                        : "text-evgray-800"
                    } bg-transparent`}
                  >
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {productLinks.map((product) => (
                        <li key={product.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={product.path}
                              className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-evblue-50 hover:text-evblue-600 ${
                                isActive(product.path)
                                  ? "bg-evblue-50 text-evblue-600"
                                  : "text-evgray-800"
                              }`}
                            >
                              <div className="text-sm font-medium leading-none">
                                {product.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/company"
              className={`text-sm font-medium transition-all duration-200 hover:text-evblue-600 ${
                isActive("/company") ? "text-evblue-600" : "text-evgray-800"
              }`}
            >
              Company
            </Link>
            <Button className="bg-evblue-500 hover:bg-evblue-600 rounded-full text-white">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-evgray-800 hover:text-evblue-500 transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[100vh] shadow-lg" : "max-h-0"
        }`}
      >
        <div className="container-custom py-6 space-y-6">
          <Link
            to="/"
            className={`block py-2 text-base font-medium transition-colors ${
              isActive("/")
                ? "text-evblue-600"
                : "text-evgray-800 hover:text-evblue-500"
            }`}
          >
            Home
          </Link>
          <Link
            to="/energy-maestro"
            className={`block py-2 text-base font-medium transition-colors ${
              isActive("/energy-maestro")
                ? "text-evblue-600"
                : "text-evgray-800 hover:text-evblue-500"
            }`}
          >
            EnergyMÆSTRO
          </Link>

          {/* Mobile Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex items-center justify-between py-2 text-base font-medium text-evgray-800 hover:text-evblue-500">
              <span>Products</span>
              <ChevronDown size={16} className="ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {productLinks.map((product) => (
                <DropdownMenuItem key={product.path} asChild>
                  <Link
                    to={product.path}
                    className={`w-full py-2 ${
                      isActive(product.path)
                        ? "text-evblue-600"
                        : "text-evgray-800"
                    }`}
                  >
                    {product.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/company"
            className={`block py-2 text-base font-medium transition-colors ${
              isActive("/company")
                ? "text-evblue-600"
                : "text-evgray-800 hover:text-evblue-500"
            }`}
          >
            Company
          </Link>
          <Button className="w-full bg-evblue-500 hover:bg-evblue-600 rounded-full text-white">
            Let's Talk
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
