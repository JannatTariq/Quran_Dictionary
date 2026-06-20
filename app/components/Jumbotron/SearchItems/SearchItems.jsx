"use client"
import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { IoIosCloseCircle } from "react-icons/io";
import ListItem from "../../ListItem/ListItem";

function SearchItems({ searchQuery, selectedCategory }) {
    const [searchitems, setSearchitems] = useState([]);
    const [modalTitle, setModalTitle] = useState("Modal title");
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchSearchResults = () =>{
        setLoading(true);
        fetch("/api/searchitem",{
            method:"POST",
            body:JSON.stringify({searchQuery, selectedCategory})
        }).then(res => res.json()).then(json => {
            console.log(json);
            setLoading(false);
            setSearchitems(json.searchItems);
        }).catch(err => {
            console.error(err);
            setLoading(false);
        })
    }
    useEffect(()=>{
        fetchSearchResults();
    },[searchQuery, selectedCategory])

    const handleSubcategoryClick = (subcategory) => (e) => {
        e.preventDefault();
        console.log(subcategory)
        const {_id, name} = subcategory;
        setModalTitle(name);
        setLoading(true);
        // fetch(`/api/file?subcategoryId=${_id}`).then(res => res.json()).then(json=>{
        fetch(`/api/file`,{
            method:"POST",
            body:JSON.stringify({subcategoryId: _id})
        }).then(res => res.json()).then(json=>{
          if(json.files){
            setFiles(json.files);
            setLoading(false);
          }
          else{
            alert("something went wrong");
            setLoading(false);
          }
        }).catch(err=>{
          alert("Something went wrong");
          setLoading(false);
        })
    }
    
      const handleFileClick = file => e => {
        e.preventDefault();
        window.open(file.webViewLink, '_blank');
    }
    return (
        <div className="p-4 container mx-auto">
            <Loader loading={loading}/>
            {files.length ? (
                <div className="fixed h-screen w-screen top-0 left-0 bg-overlay z-40 flex justify-center p-3 overflow-y-auto">
                <div className="relative bg-white p-2 rounded-lg w-full max-w-[1200px] my-auto">
                    <div className="text-center">
                    <h3 className="font-semibold text-base lg:text-xl mb-3">{modalTitle}</h3>
                    </div>
                    <button className="absolute right-[-10px] top-[-10px]" onClick={()=>setFiles([])}>
                    <IoIosCloseCircle className="text-gray bg-white rounded-full" size={30}/>
                    </button>
                    {
                    files.map(file=>(<ListItem key={file.id} onClick={(handleFileClick(file))}>{file.name}</ListItem>))
                    }
                </div>
                </div>
            ):null}
            {
                searchitems.length ? searchitems.map(searchitem => (
                <ListItem onClick={handleSubcategoryClick(searchitem)} key={searchitem.id}>{searchitem.name}</ListItem>
            )) : null
            }
        </div>
    )
}

export default SearchItems