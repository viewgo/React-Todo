import React from "react";

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <form className="search">
        <input
          type="text"
          onChange={props.searchInputChange}
          value={props.search}
          name="name"
          tabIndex="0"
          placeholder="Search By Name"
          autoComplete="off"
        />
      </form>
    </section>
  );
}