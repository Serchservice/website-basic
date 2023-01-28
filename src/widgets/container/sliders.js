import { useEffect, useState } from "react"
import { Icons } from "../../config/images/icons";
import "./slider.css"

export const SlideContainer = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            next();
            setPlaying(true);
        }, 3000);
        return () => clearInterval(interval);
    })

    const previous = () => {
        setPlaying(false)
        if(currentIndex === 0){
            setCurrentIndex(data.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const next = () => {
        setPlaying(false)
        if(currentIndex === data.length - 1){
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    // const pageClick = (index) => {
    //     setCurrentIndex(index)
    // }

    const slideContainer = {
        width: "auto",
        margin: "0 auto",
        position: "relative",
        textAlign: "center",
    }

    const slideContent = {
        width: "100%",
        zIndex: "999"
    }

    const prev = {
        position: "absolute",
        marginLeft: "1rem",
        top: "50%",
        left: "0",
        zIndex: "999999",
        transform: "translateY(-50%) rotate(180deg)",
        cursor: "pointer"
    }

    const nxt = {
        position: "absolute",
        marginRight: "1rem",
        top: "50%",
        right: "0",
        zIndex: "999999",
        transform: "translateY(-50%)",
        cursor: "pointer"
    }

    const indicator = {
        borderRadius: "0.5rem",
        margin: "0.2rem",
        width: "2rem",
        height: "0.3rem",
    }
    // &bull;

    return(
        <div style={slideContainer}>
            <img className="prev" onClick={previous} style={prev} alt="" src={Icons.next} />
            <div className={`${playing ? 'slide-active' : 'slide'}`} style={slideContent}>{data[currentIndex]}</div>
            <img className="next" onClick={next} style={nxt} alt="" src={Icons.next} />
            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", margin: "0rem 1rem 1rem 0rem"}}>{
                data.map((item, index) => (
                    <div key={index} className={`${currentIndex === index ? "slide-indicator-active" : 'slide-indicator'}`}
                    style={indicator}></div>
                ))
            }</div>
        </div>
    )
}