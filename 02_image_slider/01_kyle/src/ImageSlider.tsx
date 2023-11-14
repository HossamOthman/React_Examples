import {useState} from "react"
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"
import "./image-slider.css"

type ImageSliderProps = {
    imageUrls: string[]
}


export function ImageSlider({imageUrls}:ImageSliderProps) {

    const [imageIndex, setImageIndex] = useState(0)

    function showNextImg() {
      setImageIndex(index => {
        if (index === imageUrls.length - 1 ) return 0
        return index + 1
      })
    }

    function showPrevImg() {
      setImageIndex(index => {
        if (index === 0) return imageUrls.length - 1
        return index - 1
      })
    }

  return (
    <div style={{width: "100%", height: "100%", position: "relative"}}>
      <div style={{width: "100%", height: "100%", display:"flex", overflow: "hidden"}}>
        {imageUrls.map(url => (
          <img key={url} src={url} className="img-slider-img" style={{translate: `${-100 * imageIndex}%`}}/>
        ))}
      </div>
      
      <button onClick={showPrevImg}>
        <ArrowBigLeft className="img-slider-btn" style={{ left: 0}}/>
      </button>
      <button onClick={showNextImg}>
        <ArrowBigRight className="img-slider-btn" style={{ right: 0}}/>
      </button>
      <div style={{position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display: "flex", gap: ".25rem"}}>
        {imageUrls.map((_, index) => (
          <button key={index} className={index === imageIndex ? "img-slider-dot-btn  currentRec" : "img-slider-dot-btn"} onClick={() => setImageIndex(index)}>{index + 1}</button>
        ))}
      </div>
    </div>
  )
}
