import React, { useState } from "react";
import "./Home.css";
import Info from "./Info";

function Home() {
  const [dropValue, setValue] = useState("");
  function handleClick(event) {
    setValue(event.target.name);
  }

  function renderInfo(dropValue) {
    switch (dropValue) {
      case "1":
        return (
          <Info
            heading="Link 1 Info"
            details="This is information about Link 1 .
            Describing the details about first link."
          />
        );
      case "2":
        return (
          <Info
            heading="Link 2 Info"
            details="This is information about Link 2.
            Describing the details about second link."
          />
        );
      case "3":
        return (
          <Info
            heading="Link 3 Info"
            details="This is information about Link 3.
            Describing the details about third link."
          />
        );
      default:
        return (
          <Info
            heading="Link 1 Info"
            details="This is information about Link 1"
          />
        );
    }
  }

  return (
    <div className="home">
      <div className="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a onClick={handleClick} name="1" value="1">
            Link 1
          </a>
          <a onClick={handleClick} name="2" value="2">
            Link 2
          </a>
          <a onClick={handleClick} name="3" value="3">
            Link 3
          </a>
        </div>
      </div>
      <div>{renderInfo(dropValue)}</div>
    </div>
  );
}

export default Home;
