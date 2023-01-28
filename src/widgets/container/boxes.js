import './boxes.css';
import { Link } from "react-router-dom"
import { Icons } from '../../config/images/icons';
import { useState } from 'react';
import { InformationLinks } from '../../config/custom/links';

export const SerchShortPlanBox = ({image, classname, planName, imageAlt}) => {
    return (
        <div className="plan" style={{
            border:" 2px solid var(--serch-purple-deep)",
            borderRadius: "0.5rem",
            margin: "0.5rem 0.5rem",
            padding: ".5rem"
        }}>
            <div className="planHeader" style={{
                padding: "1rem 0rem",
                display: "flex",
                alignItems: "center"
            }}>
                <img alt={imageAlt} src={ image } width={ 40 } />
                <h2 style={{
                    marginLeft: "0.5rem",
                    fontSize: "1.3rem",
                }}>Plan <strong className={classname } style={{fontSize: "1.3rem"}}>{ planName }</strong></h2>
            </div>
            <Link to={ InformationLinks.payment } className="planDetail" style={{
                border: "2px solid var(--serch-purple-deep)",
                textAlign: "center",
                display: "block",
                margin: "1rem",
                padding: "0.5rem",
                borderRadius: "0.3rem",
                transition: "all .5s",
            }}>Learn More</Link>
        </div>
    );
}

export const Box = ({
    header, content, color, textColor, quote, quoteColor, textAlign, fontSize, contentFontSize, maxWidth, secondContent
}) => {
    const style = {
        maxWidth: maxWidth ?? "20rem",
        // maxHeight: "20rem",
        position: "relative",
        display: "block",
        margin: "1rem 1rem",
        padding: "1rem",
        textAlign: textAlign ?? "left",
        backgroundColor: color ?? "#FFFFFF",
        borderRadius: "0.3rem",
        zIndex: "1",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
    }

    return(
        <div style={style}>
            <h2 style={{color: textColor ?? "#3B043B", fontSize: fontSize ?? "20px"}}>{header}</h2>
            <p style={{color: textColor ?? "#030001", textAlign: "justify", fontSize: contentFontSize}}>{content}</p>
            <p style={{color: textColor ?? "#030001", textAlign: "justify", fontSize: contentFontSize}}>{secondContent}</p>
            <strong style={{color: quoteColor ?? "#030001", fontStyle: "italic"}}>{quote ?? ""}</strong>
        </div>
    )
}

export const LinkBox = ({
    image, width, title, subtitle, props, imageAlt, boxShadow, borderRadius, padding, height, link, linkText
}) => {
    const style = {
        maxWidth: "20rem",
        maxHeight: "20rem",
        margin: "0.8rem 0.5rem",
        justifyContent: "space-between",
        alignItems: "flex-start",
        boxShadow: boxShadow,
        borderRadius: borderRadius,
        padding: padding,
    }

    return <div style={style}>
        <div style={{margin: "1rem 0rem"}}>
            <img alt={imageAlt ?? ""} src={ image } style={{width: width, height: height}} />
            <h3>{ title }</h3>
        </div>
        <div style={{textAlign: "justify"}}>
            <p style={{color: "#3c3c3c"}}>{ subtitle }</p>
        </div>
        {
            link ? <div className="linkBox">
                <Link to={link}>{linkText}</Link>
            </div> : null
        }
        <div className="linkBox">{props}</div>
    </div>
}

export const LatestInformationBox = ({imgAlt, image, topic, section, date, link }) => {
    const latestInfoBox = {
        minHeight: "5rem",
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        padding: "0.5rem",
        margin: "1rem 0rem",
        backgroundColor: "#FFFFFF",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
    }

    const latestInfoImg = {
        marginRight: "1rem",
        width: "10rem",
        height: "auto",
    }

    const latestInfoContent = {
        display: "block",
    }

    return(
        <Link style={latestInfoBox} to={link}>
            <img alt={imgAlt} src={ image } style={latestInfoImg}/>
            <div style={latestInfoContent}>
                <p> {section} </p>
                <h3> {topic} </h3>
                <p> {date} </p>
            </div>
        </Link>
    );
}

export const InformationBox = ({ link, imgAlt, img, dept, topic, date }) => {
    const infoBox = {
        maxWidth: "20rem",
        maxHeight: "25rem",
        position: "relative",
        display: "block",
        margin: "1rem 1rem",
        backgroundColor: "#FFFFFF",
        borderRadius: "0.3rem",
        zIndex: "1",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
    }

    const infoBoxImage = {
        width: "100%",
        height: "10rem",
        borderRadius: "0.3rem 0.3rem 0rem 0rem",
    }

    const infoBoxHeader = {
        padding: "1rem",
        alignItems: "flex-start",
    }

    return(
        <Link style={infoBox} to={link} className="infoBox">
            <img alt={ imgAlt } src={ img } style={infoBoxImage}/>
            <div style={infoBoxHeader}>
                <p> { dept } </p>
                <h2 style={{fontSize: "1rem",}}> { topic } </h2>
                <p> { date } </p>
            </div>
        </Link>
    );
}

export const SerchAppBox = ({header, links, color}) => {
    const style = {
        margin: "1rem 1rem",
        maxWidth: "25rem",
        padding: "1rem",
        borderRadius:" 0.3rem",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
        backgroundColor: color ?? "#FAFAFA",
    }

    return <div style={style}>
        <p style={{color: "#FAFAFA", fontSize: "1.2rem"}}>{header}</p>
        <div className="linkBox">{links}</div>
    </div>
}

export const FAQBox = ({data, header, subHeader, boxSizing}) => {
    const [open, setOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(-1)

    const openFAQ = (index) => {
        setCurrentIndex(index);
        if(currentIndex === index){
            setOpen(!open)
        }
    }

    const faq = {
        margin: "4rem 0rem 0rem 0rem",
        padding: "1rem 2rem",
        borderRadius: "0.2rem",
        color: "#030001",
        height: "auto",
        transition: "all 300ms ease-in",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
    }

    const activeFAQ = {
        margin: "4rem 0rem 0rem 0rem",
        padding: "2rem",
        color: "#030001",
        height: "auto",
        transition: "all 300ms ease-in",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
    }

    const faqHeader = {
        marginBottom: "2rem",
        display: "flex",
        color: "#030001",
        alignItems: "center",
        cursor: "pointer",
        justifyContent: "space-between",
    }

    return(
        <div className="faqBox">
            <div style={{textAlign: "center", justifyContent: "space-between", gap: "20px"}}>
                <h2>{ header ?? "Frequently Asked Questions" }</h2>
                {
                    subHeader ? <p>{ subHeader }</p> : null
                }
                <p>{  }</p>
            </div>
            {
                data.map((item, index) => {
                    return(
                        open && currentIndex === index ? <div style={activeFAQ} onClick={() => openFAQ(index) } key={index}>
                            <div style={faqHeader}>
                                <h3 style={{fontSize: "1rem", display: "flex", flexDirection: "row"}}> { item.question } </h3>
                                <img alt='' src={ Icons.closeFolder } width={20} />
                            </div>
                            <p style={{fontSize: "1rem"}}> { item.answer } </p>
                            <Link to={ item.link ?? "" } style={{color: "#006da4", fontSize: "1rem"}}> { item.linkText ?? "" } </Link>
                        </div> : <div style={faq} onClick={() => openFAQ(index) } key={index}>
                            <div style={{
                                display: "flex",
                                color: "#030001",
                                alignItems: "center",
                                cursor: "pointer",
                                justifyContent: "space-between",
                                boxSizing: boxSizing,
                            }}>
                                <h3 style={{fontSize: "1rem", display: "flex", flexDirection: "row"}}> { item.question } </h3>
                                <img alt='' src={ Icons.openFolder } width={20} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

// export const SerchPlans = ({data}) => {
//     const AquaLineStyle = {
//         color: "#FFFFFF",
//     }

//     const LibraLineStyle = {
//         color: "#FFFFFF",
//     }

//     const AriesLineStyle = {
//         color: "#FFFFFF",
//     }

//     const VirgoLineStyle = {
//         color: "#FFFFFF",
//     }

//     return(
//         <Link className="planContainer">
//             <div className='planContainerCard'>
//                 <div className="lines"></div>
//                 <div className="planContainerImage">
//                     {
//                         data.map((elements, index) => {
//                             return <img src={elements.image} key={index} alt={elements.alt}/>
//                         })
//                     }
//                 </div>
//                 <div className="planContainerContent"></div>
//             </div>
//         </Link>
//     );
// }