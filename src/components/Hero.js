import React from "react";
import "./Hero.css";

export default function Hero({
  title,
  titleColor,
  description,
  descriptionColor,
  image,
  altImage,
  buttonText,
  buttonColor,
  buttonIcon,
}) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={altImage} />
    </div>
  );
}
