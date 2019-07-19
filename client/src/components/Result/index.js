import React from "react";
import "./style.css";

// This file exports each result from the Saved items in the DB. This is what gets rendered every time we map a result. So... should actually make that happen, huh?
// There's actually 2 kinds of results we care about-- saved ones, and searched ones. So we'll need a ternary for the button in the corner that looks something like (saved ? <DeleteBtn>Delete</DeleteBtn> : <SavedButton>Save</SavedButton> ) 

export function Result({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
