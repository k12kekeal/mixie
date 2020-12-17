import React, { useState } from "react";

const MixInfo = () => {
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState(
    "Give your mix a description..."
  );
  return (
    <div>
      <div>
        <input type="text" className="title" placeholder={title} />
      </div>
      <div>
        <input type="text" className="description" placeholder={description} />
      </div>
    </div>
  );
};

export default MixInfo;
