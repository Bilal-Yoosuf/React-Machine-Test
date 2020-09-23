import React from "react";

export default function Info(props) {
  return (
    <div style={{marginTop:"100px"}} className="info">
      <h1>{props.heading}</h1>
      <p>{props.details}</p>
    </div>
  );
}
