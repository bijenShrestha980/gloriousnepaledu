"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search } from "lucide-react";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  {
    name: "OUR SERVICES",
    path: "/services",
    submenu: [
      { name: "Language Classes", path: "/services/language-classes" },
      {
        name: "Preparation Classes",
        path: "/services/preparation-classes",
        submenu: [
          { name: "IELTS", path: "/services/preparation-classes/ielts" },
          { name: "TOEFL", path: "/services/preparation-classes/toefl" },
        ],
      },
    ],
  },
  { name: "STUDY ABROAD", path: "/study-abroad" },
  { name: "GALLERY", path: "/gallery" },
  { name: "ENQUIRY", path: "/enquiry" },
  { name: "CONTACT", path: "/contact" },
];

// Mock search results for demonstration
const mockSearchResults = [
  { title: "IELTS Preparation", path: "/services/preparation-classes/ielts" },
  { title: "Study in Australia", path: "/study-abroad/australia" },
  { title: "Korean Language Classes", path: "/services/language-classes" },
  { title: "Contact Us", path: "/contact" },
  { title: "About EduConsult", path: "/about" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof mockSearchResults>(
    []
  );
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenu(mobileSubmenu === name ? null : name);
  };

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 1) {
      // Filter mock results based on query
      const filteredResults = mockSearchResults.filter((result) =>
        result.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      router.push(searchResults[0].path);
      setIsSearchOpen(false);
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const handleSearchResultClick = (path: string) => {
    router.push(path);
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
            <span className="text-xs sm:text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Lagankhel-12, Lalitpur
            </span>
            <span className="text-xs sm:text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              gloriousnepaledu@gmail.com
            </span>
            <span className="text-xs sm:text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              01-5425715 | 01-5455699
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-gray-300" aria-label="Facebook">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="Twitter">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="YouTube">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=40&width=40&text=GN"
            alt="Glorious Nepal Logo"
            width={40}
            height={40}
            className="text-primary"
          />
          <div>
            <span className="text-xl font-bold text-primary block leading-tight">
              Glorious Nepal
            </span>
            <span className="text-xs text-gray-600 block leading-tight">
              Educational Consultancy
            </span>
          </div>
        </Link>

        <div className="flex items-center">
          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <Link
                      href={item.path}
                      className={`flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.path) ? "text-primary" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </Link>
                    <div className="absolute left-0 top-full z-50 mt-0 min-w-[200px] rounded-b-md border-x border-b bg-white p-2 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                      {item.submenu.map((subitem) => (
                        <div key={subitem.name} className="relative group/sub">
                          {subitem.submenu ? (
                            <>
                              <Link
                                href={subitem.path}
                                className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm transition-colors hover:bg-gray-100 ${
                                  isActive(subitem.path)
                                    ? "text-primary"
                                    : "text-gray-700"
                                }`}
                              >
                                {subitem.name}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="ml-1 h-4 w-4"
                                >
                                  <polyline points="9 6 15 12 9 18"></polyline>
                                </svg>
                              </Link>
                              <div className="absolute left-full top-0 z-50 ml-0 min-w-[200px] rounded-md border bg-white p-2 shadow-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 ease-in-out">
                                {subitem.submenu.map((subsubitem) => (
                                  <Link
                                    key={subsubitem.name}
                                    href={subsubitem.path}
                                    className={`block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-gray-100 ${
                                      isActive(subsubitem.path)
                                        ? "text-primary"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    {subsubitem.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              href={subitem.path}
                              className={`block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-gray-100 ${
                                isActive(subitem.path)
                                  ? "text-primary"
                                  : "text-gray-700"
                              }`}
                            >
                              {subitem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.path)
                        ? "text-primary border-b-2 border-primary"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search button */}
          <button
            className="ml-4 p-2 text-gray-700 hover:text-primary transition-colors duration-200"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Mobile menu button */}
          <button
            className="ml-2 p-2 lg:hidden text-gray-700 hover:text-primary transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`lg:hidden border-t overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className={`flex w-full items-center justify-between py-2 text-sm font-medium ${
                        isActive(item.path) ? "text-primary" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-4 w-4 transition-transform duration-300 ${
                          mobileSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    <div
                      className={`ml-4 mt-1 border-l-2 border-gray-200 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileSubmenu === item.name
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu.map((subitem) => (
                        <div key={subitem.name}>
                          {subitem.submenu ? (
                            <div>
                              <button
                                onClick={() =>
                                  toggleMobileSubmenu(subitem.name)
                                }
                                className={`flex w-full items-center justify-between py-2 text-sm ${
                                  isActive(subitem.path)
                                    ? "text-primary"
                                    : "text-gray-700"
                                }`}
                              >
                                {subitem.name}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={`h-4 w-4 transition-transform duration-300 ${
                                    mobileSubmenu === subitem.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                >
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              </button>
                              <div
                                className={`ml-4 mt-1 border-l-2 border-gray-200 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                                  mobileSubmenu === subitem.name
                                    ? "max-h-screen opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                              >
                                {subitem.submenu.map((subsubitem) => (
                                  <Link
                                    key={subsubitem.name}
                                    href={subsubitem.path}
                                    className={`block py-2 text-sm ${
                                      isActive(subsubitem.path)
                                        ? "text-primary"
                                        : "text-gray-700"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subsubitem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={subitem.path}
                              className={`block py-2 text-sm ${
                                isActive(subitem.path)
                                  ? "text-primary"
                                  : "text-gray-700"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`block py-2 text-sm font-medium ${
                      isActive(item.path) ? "text-primary" : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-medium">Search</h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for courses, services, information..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
              </form>

              {searchResults.length > 0 && (
                <div className="mt-4 border rounded-md divide-y">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors"
                      onClick={() => handleSearchResultClick(result.path)}
                    >
                      <div className="font-medium">{result.title}</div>
                      <div className="text-sm text-gray-500">{result.path}</div>
                    </button>
                  ))}
                </div>
              )}

              {searchQuery.length > 1 && searchResults.length === 0 && (
                <div className="mt-4 text-center py-8 text-gray-500">
                  No results found for "{searchQuery}"
                </div>
              )}

              {searchQuery.length <= 1 && (
                <div className="mt-4 text-center py-4 text-gray-500">
                  Type at least 2 characters to search
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
