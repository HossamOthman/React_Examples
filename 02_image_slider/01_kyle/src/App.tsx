import { ImageSlider } from "./ImageSlider";
import img1 from "../../img/01.jpg";
import img2 from "../../img/02.jpg";
import img3 from "../../img/03.jpg";
import img4 from "../../img/04.jpg";
import img5 from "../../img/05.jpg";

const IMAGES = [img1, img2, img3, img4, img5];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "9 / 5",
        margin: "0 auto",
      }}
    >
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}
