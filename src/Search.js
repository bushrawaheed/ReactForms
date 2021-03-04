import React from "react";
export default function Search() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Searching...");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a query" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
