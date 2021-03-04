import React, { useState } from "react";
export default function City() {
  let [City, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showCity(event) {
    event.preventDefault();
    if (City.length > 0) {
      alert(`${City} 😎`);
    } else {
      alert("Type a city🥱");
    }
  }
  return (
    <div>
      <form>
        <input type="text" placeholder="Type a query" onChange={updateCity} />
        <input type="submit" value="Search" onClick={showCity} />
      </form>
    </div>
  );
}
