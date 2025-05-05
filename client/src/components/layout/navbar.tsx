import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onApplyClick: () => void;
  isModalOpen: boolean;
}

export default function Navbar({ onApplyClick, isModalOpen }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Close menu when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setIsMenuOpen(false);
    }
  }, [isModalOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="text-2xl font-bold text-gradient-primary cursor-pointer">
                  Uniportal India
                </div>
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/">
                <a className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/") 
                    ? "border-primary text-gray-900" 
                    : "border-transparent text-gray-500 hover:border-primary-light hover:text-gray-700"
                }`}>
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/about") 
                    ? "border-primary text-gray-900" 
                    : "border-transparent text-gray-500 hover:border-primary-light hover:text-gray-700"
                }`}>
                  About
                </a>
              </Link>
              <Link href="/top-courses">
                <a className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/top-courses") 
                    ? "border-primary text-gray-900" 
                    : "border-transparent text-gray-500 hover:border-primary-light hover:text-gray-700"
                }`}>
                  Top Courses
                </a>
              </Link>
              <Link href="/student-life">
                <a className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/student-life") 
                    ? "border-primary text-gray-900" 
                    : "border-transparent text-gray-500 hover:border-primary-light hover:text-gray-700"
                }`}>
                  Student Life
                </a>
              </Link>
              <Link href="/contact">
                <a className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/contact") 
                    ? "border-primary text-gray-900" 
                    : "border-transparent text-gray-500 hover:border-primary-light hover:text-gray-700"
                }`}>
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Button 
                onClick={onApplyClick}
                className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-gradient-primary shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Apply Now
              </Button>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t border-gray-200`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/">
            <a className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/") 
                ? "bg-primary-light bg-opacity-10 border-primary text-primary" 
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary-light hover:text-gray-700"
            }`}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/about") 
                ? "bg-primary-light bg-opacity-10 border-primary text-primary" 
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary-light hover:text-gray-700"
            }`}>
              About
            </a>
          </Link>
          <Link href="/top-courses">
            <a className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/top-courses") 
                ? "bg-primary-light bg-opacity-10 border-primary text-primary" 
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary-light hover:text-gray-700"
            }`}>
              Top Courses
            </a>
          </Link>
          <Link href="/student-life">
            <a className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/student-life") 
                ? "bg-primary-light bg-opacity-10 border-primary text-primary" 
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary-light hover:text-gray-700"
            }`}>
              Student Life
            </a>
          </Link>
          <Link href="/contact">
            <a className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/contact") 
                ? "bg-primary-light bg-opacity-10 border-primary text-primary" 
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary-light hover:text-gray-700"
            }`}>
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
