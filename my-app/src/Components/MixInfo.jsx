import React, { useState } from "react";

const MixInfo = () => {
  // const [title, setTitle] = useState("Title");
  // const [description, setDescription] = useState("Description here");
  return (
    <div>
      <h1 className="title" contentEditable="true">
        Title
      </h1>
      <div>
        <p className="description" role="textbox" contentEditable="true">
          Add your description here...
        </p>
      </div>
    </div>
  );
};

export default MixInfo;
