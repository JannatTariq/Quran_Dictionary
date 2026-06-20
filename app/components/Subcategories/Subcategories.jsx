"use client";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { IoIosCloseCircle } from "react-icons/io";
import ListItem from "../ListItem/ListItem";

function Subcategories({ categoryId }) {
  const [subcategories, setSubcategories] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [modalTitle, setModalTitle] = useState("Modal title");
  const [files, setFiles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchSubcategories = async (newRequest = false, clearPrev = false) => {
    if (!categoryId) return;

    setLoading(true);

    try {
      const res = await fetch("/api/subcategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryId,
          pageNumber: newRequest ? 1 : pageNumber,
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const json = await res.json();

      if (Array.isArray(json.subcategories)) {
        setSubcategories((prev) =>
          clearPrev ? json.subcategories : [...prev, ...json.subcategories],
        );

        setHasMore(!!json.hasMore);
      } else {
        console.warn("Invalid response:", json);
        if (clearPrev) setSubcategories([]);
      }
    } catch (err) {
      console.error("Fetch subcategories failed:", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubcategories(true, true);
  }, [categoryId]);

  useEffect(() => {
    console.log(`Page number changed to ${pageNumber}`);
    fetchSubcategories();
  }, [pageNumber]);

  const handleSubcategoryClick = (subcategory) => (e) => {
    e.preventDefault();
    console.log(subcategory);
    const { _id, name } = subcategory;
    setModalTitle(name);
    setLoading(true);
    // fetch(`/api/file?subcategoryId=${_id}`).then(res=>res.json()).then(json=>{
    fetch(`/api/file`, {
      method: "POST",
      body: JSON.stringify({ subcategoryId: _id }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.files) {
          setFiles(json.files);
          setLoading(false);
        } else {
          alert("something went wrong");
          setLoading(false);
        }
      })
      .catch((err) => {
        alert("Something went wrong");
        setLoading(false);
      });
  };

  const handleFileClick = (file) => (e) => {
    e.preventDefault();
    window.open(file.webViewLink, "_blank");
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
      {/* <h3 className="font-semibold text-xl lg:text-2xl text-center mb-4">Compiled dictionary items</h3> */}
      {subcategories.length
        ? subcategories.map((subcategory) => (
            <ListItem
              onClick={handleSubcategoryClick(subcategory)}
              key={subcategory.id}
            >
              {subcategory.name}
            </ListItem>
          ))
        : null}
      <div className="text-end">Showing {subcategories.length} results</div>
      <div className="text-center">
        {hasMore ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setPageNumber(pageNumber + 1);
            }}
            className="px-4 py-2 rounded-full bg-secondary text-white text-xl hover:bg-secondary-400"
          >
            Load more
          </button>
        ) : (
          <div className="text-center">You have reached the end.</div>
        )}
      </div>
    </div>
  );
}

export default Subcategories;
