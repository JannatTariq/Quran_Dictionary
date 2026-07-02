import React from "react";
import SearchItems from "../components/Jumbotron/SearchItems/SearchItems";
import Jumbotron from "../components/Jumbotron/Jumbotron";

function Search({ searchParams }) {
  return (
    <div>
      <Jumbotron
        title={`Search results for "${searchParams.searchQuery}"`}
        isSearch
        total={0} // search total unknown at page level
      />

      <SearchItems
        searchQuery={searchParams.searchQuery}
        selectedCategory={searchParams.selectedCategory}
      />
    </div>
  );
}

export default Search;
