"use client";
import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { IoIosCloseCircle } from "react-icons/io";
import ListItem from "../../ListItem/ListItem";

function SearchItems({ searchQuery, selectedCategory }) {
  const [searchitems, setSearchitems] = useState([]);
  const [modalTitle, setModalTitle] = useState("Modal title");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;

    const fetchSearchResults = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/searchitem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            searchQuery,
            selectedCategory,
          }),
        });

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        const json = await res.json();

        if (!isMounted) return;

        if (Array.isArray(json.searchItems)) {
          setSearchitems(json.searchItems);
        } else {
          setSearchitems([]);
          console.warn("Invalid search response:", json);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Search failed:", err);
          setSearchitems([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (searchQuery || selectedCategory) {
      fetchSearchResults();
    }

    return () => {
      isMounted = false;
    };
  }, [searchQuery, selectedCategory]);

  const handleSubcategoryClick = (item) => (e) => {
    e.preventDefault();

    // If it's NOT a folder, it's a file → open it directly
    if (item.mimeType !== "application/vnd.google-apps.folder") {
      const url = item.webViewLink.includes("/edit")
        ? item.webViewLink.replace("/edit", "/preview")
        : item.webViewLink;

      window.open(url, "_blank");
      return;
    }

    // It's a folder → fetch files and show popup
    setFiles([]);
    setModalTitle(item.name);
    setLoading(true);

    fetch("/api/file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subcategoryId: item._id }),
    })
      .then((res) => res.json())
      .then((json) => {
        setFiles(json.files || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  // const handleFileClick = (file) => (e) => {
  //   e.preventDefault();
  //   window.open(file.webViewLink, "_blank");
  // };
  const handleFileClick = (file) => (e) => {
    e.preventDefault();
    console.log("searchitem", file.webViewLink);
    const previewUrl = file.webViewLink.replace("/edit", "/preview");

    window.open(previewUrl, "_blank");
  };
  return (
    <div className="p-4 container mx-auto">
      <Loader loading={loading} />
      {files.length ? (
        <div className="fixed h-screen w-screen top-0 left-0 bg-overlay z-40 flex justify-center p-3 overflow-y-auto">
          <div className="relative bg-white p-2 rounded-lg w-full max-w-[1200px] my-auto">
            <div className="text-center">
              <h3 className="font-semibold text-base lg:text-xl mb-3">
                {modalTitle}
              </h3>
            </div>
            <button
              className="absolute right-[-10px] top-[-10px]"
              onClick={() => setFiles([])}
            >
              <IoIosCloseCircle
                className="text-gray bg-white rounded-full"
                size={30}
              />
            </button>
            {files.map((file) => (
              <ListItem key={file.id} onClick={handleFileClick(file)}>
                {file.name}
              </ListItem>
            ))}
          </div>
        </div>
      ) : null}
      {searchitems.length
        ? searchitems.map((searchitem) => (
            <ListItem
              onClick={handleSubcategoryClick(searchitem)}
              key={searchitem.id}
            >
              {searchitem.name}
            </ListItem>
          ))
        : null}
    </div>
  );
}

export default SearchItems;
