"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";

function HeaderNav() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  useEffect(() => {
    let isMounted = true;

    const fetchCategories = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/category");

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        const json = await res.json();

        if (!isMounted) return;

        if (Array.isArray(json.categories)) {
          setCategories(json.categories);
        } else {
          setCategories([]);
          console.warn("Invalid API response:", json);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Category fetch failed:", err);
          setCategories([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
    };
  }, []);
  function toggleSearch() {
    setSearchbar((prev) => !prev);
  }
  function handleSearchSubmit(e) {
    e.preventDefault();
    try {
      if (selectedCategory === "") {
        alert("Please select a folder to perform a more explicit search");
        return false;
      }
      if (searchInput === "") {
        alert("Please enter something to search for");
        return false;
      }
      if (searchInput.length < 5) {
        alert("Please enter at least 5 characters to perform a search");
        return false;
      }
      router.push(
        `/search?searchQuery=${searchInput}&selectedCategory=${selectedCategory}`,
      );
      toggleSearch();
      setIsSidebarActive(false);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <Loader loading={loading} />
      {(isSidebarActive || searchbar) && (
        <div
          className="fixed bg-overlay z-10 h-screen w-screen inset-0"
          onClick={() => setIsSidebarActive(false)}
        ></div>
      )}
      {searchbar ? (
        <div className="fixed z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-[600px] w-full p-4">
            <button
              className="block mx-auto bg-secondary-200 hover:bg-secondary-300 mb-2 p-2 rounded-full"
              onClick={toggleSearch}
            >
              <IoMdClose size={26} />
            </button>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block mb-2 w-full p-3 leading-4 border border-primary"
            >
              <option value="">Select folder</option>
              {categories.map((category, i) => (
                <option key={i} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <form onSubmit={handleSearchSubmit} className="flex shadow-lg">
              <input
                autoFocus
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                placeholder="Search here"
                className="p-3 leading-4 border border-primary w-full"
              />
              <button
                type="submit"
                className="p-3 bg-primary hover:bg-primary-600 text-white flex gap-2 items-center flex-shrink-0"
              >
                <FaSearch />
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      ) : null}
      <ul
        className={`${isSidebarActive ? "" : "hidden"} lg:flex flex-col lg:flex-row gap-3 text-primary-700 fixed z-20 lg:static top-0 left-0 w-[280px] lg:w-auto h-screen lg:h-auto bg-white lg:bg-transparent`}
      >
        <button
          className="w-full flex justify-end lg:hidden p-3"
          onClick={() => setIsSidebarActive(false)}
        >
          <IoMdClose size={26} />
        </button>
        <li className="relative flex gap-2 items-center p-2 group">
          <span>Explore dictionary</span>
          <FaChevronDown className="group-hover:rotate-180 transition-transform" />
          <ul className="hidden group-hover:block absolute z-50 top-full left-0 bg-white shadow-lg p-2 whitespace-nowrap">
            {categories.length
              ? categories.map((category, i) => (
                  <li key={category.id}>
                    <Link
                      onClick={() => setIsSidebarActive(false)}
                      className="block hover:text-primary-900 hover:underline mb-2"
                      href={`/subcategory?categoryId=${category._id}&categoryName=${category.name}&index=${i}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </li>
        <li className="p-2">
          <Link
            onClick={() => setIsSidebarActive(false)}
            href="/contact-us"
            className="block hover:text-primary-900 hover:underline"
          >
            Contact Us
          </Link>
        </li>

        <li className="p-2">
          <Link
            onClick={() => setIsSidebarActive(false)}
            href="/about"
            className="block hover:text-primary-900 hover:underline"
          >
            About Us
          </Link>
        </li>
        <li className="p-2">
          <Link
            onClick={() => setIsSidebarActive(false)}
            href="/usermanual"
            className="block hover:text-primary-900 hover:underline"
          >
            User manual
          </Link>
        </li>
        <li className="p-2">
          <button onClick={toggleSearch}>
            <FaSearch />
          </button>
        </li>
      </ul>
      <button
        className="flex lg:hidden"
        onClick={() => setIsSidebarActive(true)}
      >
        <FaBars size={20} />
      </button>
    </>
  );
}

export default HeaderNav;
