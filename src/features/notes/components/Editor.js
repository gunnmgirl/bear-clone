import React from "react";
import { useParams } from "react-router-dom";

function Editor() {
  const { noteId } = useParams();

  if (noteId) {
    return <div>Editor</div>;
  }
  return <div>Note not selected</div>;
}

export default Editor;
