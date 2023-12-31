import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import './Note.css'

export default function Note() {

  return (
    <div className="note">
      <div className="note__body"></div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="note__delete"
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  );
};