import {useState} from "react"
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"
import "./image-slider.css"

type ImageSliderProps = {
  images: {
    url: string
    alt: string
  }[]
}


export function ImageSlider({images}:ImageSliderProps) {

    const [imageIndex, setImageIndex] = useState(0)

    function showNextImg() {
      setImageIndex(index => {
        if (index === images.length - 1 ) return 0
        return index + 1
      })
    }

    function showPrevImg() {
      setImageIndex(index => {
        if (index === 0) return images.length - 1
        return index - 1
      })
    }

  return (
    <section aria-label="Image Carousel" style={{width: "100%", height: "100%", position: "relative"}}>
      <a href="#after-image-slider-controls" className="skip-link">Skip Image Slider Controls</a>
      <div style={{width: "100%", height: "100%", display:"flex", overflow: "hidden"}}>
        {images.map(({url, alt}, index) => (
          <img key={url} src={url} aria-hidden={imageIndex !== index} alt={alt} className="img-slider-img" style={{translate: `${-100 * imageIndex}%`}}/>
        ))}
      </div>
      
      <button onClick={showPrevImg}>
        <ArrowBigLeft className="img-slider-btn" style={{ left: 0}} aria-label="view prev image"/>
      </button>
      <button onClick={showNextImg}>
        <ArrowBigRight className="img-slider-btn" style={{ right: 0}} aria-label="view next image"/>
      </button>
      <div style={{position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display: "flex", gap: ".25rem"}}>
        {images.map((_, index) => (
          <button key={index} className={index === imageIndex ? "img-slider-dot-btn  currentRec" : "img-slider-dot-btn"} aria-label={`view image ${index + 1}`} onClick={() => setImageIndex(index)}>{index + 1}</button>
        ))}
      </div>
      <div id="after-image-slider-controls"></div>
    </section>
  )
}
