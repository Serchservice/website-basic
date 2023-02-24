import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../config/images/icons';
import './containers.css';

export const ContainerLeftImage = ({color, image, props, imageAlt, widthSize, heightSize, header, flex, padding, subHeader}) => {
    const style = {
        backgroundColor: color ?? "#FAFAFA",
    }

    const firstStyle = {
        backgroundColor: color ?? "",
        padding: padding ?? "2rem",
    }

    return(
        header != null ? <div style={firstStyle}>
            <h2 style={{color: "#0300001"}}>{header}</h2>
            {
                subHeader ? <p style={{color: "#0300001"}}>{subHeader}</p> : null
            }
            <div className="container" style={{backgroundColor: color ?? "#FAFAFA", padding: "0rem", flexWrap: flex ?? ""}}>
                <img alt={imageAlt ?? "serch"} src={image} width={widthSize ?? 500} height={heightSize} />
                <div className="containerChild">{props}</div>
            </div>
        </div> : <div className="container" style={style}>
            <img alt={imageAlt ?? "serch"} src={image} width={widthSize ?? 500} height={heightSize} />
            <div className="containerChild">{props}</div>
        </div>
    );
}

export const ContainerRightImage = ({color, image, props, imageAlt, widthSize, heightSize, header}) => {
    const style = {
        backgroundColor: color ?? "#FAFAFA",
    }

    const firstStyle = {
        backgroundColor: color ?? "#FAFAFA",
        padding: "4rem 2rem",
    }

    return(
        header != null ? <div style={firstStyle}>
            <h2>{header ?? null}</h2>
            <div className="container" style={{backgroundColor: color ?? "#FAFAFA", padding: "0rem"}}>
                <div className="containerChild">{props}</div>
                <img alt={imageAlt ?? "serch"} src={image} width={widthSize ?? 500} height={heightSize} />
            </div>
        </div> : <div className="container" style={style}>
            <div className="containerChild">{props}</div>
            <img alt={imageAlt ?? "serch"} src={image} width={widthSize ?? 500} height={heightSize} />
        </div>
    );
}

export const ContainerStaticImage = ({color, image, props, imageAlt, widthSize, heightSize}) => {
    const style = {
        backgroundColor: color ?? "#FAFAFA",
    }

    return(
        <div className="contains" style={style}>
            <img alt={imageAlt ?? "serch"} src={image} width={widthSize ?? 500} height={heightSize} />
            <div className="containerChild">{props}</div>
        </div>
    );
}

export const RightContainerDismissibleImage = ({color, image, props, imageAlt, widthSize, heightSize}) => {
    const style = {
        backgroundColor: color ?? "#FAFAFA",
    }

    return(
        <div className="contain" style={style}>
            <div className="containerChild">{props}</div>
            <img alt={imageAlt ?? "serch"} src={image} width={widthSize ?? 500} height={heightSize} />
        </div>
    );
}

export const ContainerBackgroundImage = ({props, className, heightSize, bgSize}) => {
    return(
        <div style={{
            backgroundSize: bgSize ?? "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            height: heightSize ?? "300px",
            display: "flex",
            alignItems: "center",
        }} className={`${className} background`}>
            <div>{props}</div>
            <div></div>
        </div>
    );
}

export const ContainerBackgroundColor = ({props, color}) => {
    const style = {
        backgroundColor: color,
    }

    return(
        <div style={style}>

        </div>
    );
}

export const ContainerWithUnderlinedHeader = ({props, header, subHeader, justifyContent}) => {
    const style = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        justifyContent: justifyContent ?? "space-between",
    }

    return(
        <div className="contained">
            <div className='containerHeader'>
                <h2>{header ?? ""}</h2>
                <p>{subHeader ?? ""}</p>
            </div>
            <div className='containerContent' style={style}>{props}</div>
        </div>
    );
}

export const ContainerWithFlexedContents = ({props, header, subHeader}) => {
    return <div style={{padding: "4rem 2rem"}}>
        <h1>{header}</h1>
        {
            subHeader ? <p>{subHeader}</p> : null
        }
        <div style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            display: "flex",
        }}>{props}</div>
    </div>
}

export const ContainerForLatestInformation = ({header, color, subHeader, props, textColor}) => {
    const latestContainer = {
        backgroundColor: color ?? "#FFFFFF",
    }

    return <div style={latestContainer} className="container-for-latest-information">
        <h2 style={{color: textColor ?? "#030001"}}>{header}</h2>
        {
            subHeader ? <p>{subHeader}</p> : null
        }
        <>{props}</>
    </div>
}

export const ContainerForPost = ({section, link, sectionRoom, publishDocument, publishedBy}) => {
    const headStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const linkStyle = {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: "#030001",
        borderBottom: "2px solid #030001",
    }

    return(
        <div style={{backgroundColor: "#FFFFFF",}} className="container-for-post">
            <div style={headStyle} className="blog-header">
                <h2>Serch || {section}</h2>
                <Link to={link} className="link-arrow" style={linkStyle}>
                    <img alt="" src={ Icons.arrowLeft } width={30} />
                    <h3 style={{marginLeft: "0.4rem",}}>Back to Serch {sectionRoom}</h3>
                </Link>
            </div>
            <>{publishDocument}</>
            {
                publishedBy ? <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div></div>
                    <div style={{
                        padding: "0rem 0rem 0rem 1rem", borderTop: "1px solid #030001", borderBottom: "1px solid #030001",
                        alignItems: "end", textAlign: "end"
                    }} className="published-by">
                        <p>{publishedBy}</p>
                        <p style={{fontStyle: "italic"}}>Serch Team</p>
                    </div>
                </div> : null
            }
        </div>
    )
}

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
        margin: "1rem auto",
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
        top: "80%",
        left: "0",
        zIndex: "999999",
        transform: "translateY(-50%) rotate(180deg)",
        cursor: "pointer"
    }

    const nxt = {
        position: "absolute",
        marginRight: "1rem",
        top: "80%",
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