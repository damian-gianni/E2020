import { useState } from "react";
import { PictureBox, ImageFlip, TextFlip } from "./picture.styled";

export default ({ image, alt, flipped, id }) => {
  const [Flip, setFlip] = useState(flipped);
  return (
    <PictureBox flipped={Flip} onClick={() => setFlip(!Flip)}>
      <ImageFlip src={image} alt={alt} id={id} />
      <TextFlip>{alt}</TextFlip>
    </PictureBox>
  );
};
