import { ImageSlider } from "./ImageSlider";
import img1 from "../../img/01.jpg";
import img2 from "../../img/02.jpg";
import img3 from "../../img/03.jpg";
import img4 from "../../img/04.jpg";
import img5 from "../../img/05.jpg";

const IMAGES = [
  { url: img1, alt: "image one" },
  { url: img2, alt: "image two" },
  { url: img3, alt: "image three" },
  { url: img4, alt: "image four" },
  { url: img5, alt: "image five" }
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "9 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{fontSize: "2rem"}}>Link</a>
    </div>
  );
}
