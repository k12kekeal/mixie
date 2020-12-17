import placeholder from "./placeholder.png";
import React, {useState} from 'react';

const Cover = () => {

  const [image, setImage] = useState(placeholder);

  return (
      <div className="image-upload">
        <label htmlFor="file-input">
        <img src={image} className="cover-art" alt="playlist cover art" />
        </label>
        <input
        id="file-input"
        type="file"
        onChange={e => {
          e.preventDefault();
          console.log('the file in question: ', e.target.files[0]);
          setImage(e.target.files[0])}}/>
      </div>
  );
};

export default Cover;
