import React from "react";

// Function that returns the date of listing to-do task.
export default function getDate() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="App">
      <p>{date}</p>
    </div>
  );
}
