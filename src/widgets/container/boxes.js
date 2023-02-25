import './boxes.css';
import { Link } from "react-router-dom"
import { Icons } from '../../config/images/icons';
import { useState } from 'react';
import { InformationLinks } from '../../config/custom/links';
import Price from '../../assets/plans/dollar.png';

export const CategoryBox = ({category, onClick, cursor}) => {
    return(
        <p style={{
            color: "#030001", padding: "0.5rem", borderRadius: "0.2rem", backgroundColor: "#F2F2F2",
            alignSelf: "center", margin: "0rem 0.5rem 0rem 0rem", cursor: cursor
        }} onClick={onClick} className="category-box">{category}</p>
    )
}

export const SerchShortPlanBox = ({image, planCategory, planName, imageAlt}) => {
    return (
        <div className="plan" style={{
            border:" 2px solid var(--serch-purple-deep)",
            borderRadius: "0.5rem",
            margin: "0.5rem 0.5rem",
            padding: ".5rem",
            width: "15rem"
            // backgroundColor: "#090909"
        }}>
            <div className="planHeader" style={{padding: "1rem 0rem 0rem 0rem", display: "flex", alignItems: "center"}}>
                <img alt={imageAlt} src={ image } width={ 40 } />
                <h2 style={{marginLeft: "0.5rem", fontSize: "1.3rem"}}>{ planName }</h2>
            </div>
            <p style={{marginLeft: "0.5rem", color: "#030001"}}>{ planCategory }</p>
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

export const BoxImage = ({
    header, content, textColor, color, quote, quoteColor, textAlign, fontSize, contentFontSize, maxWidth, secondContent,
    className
}) => {
    const style = {
        maxWidth: maxWidth ?? "20rem",
        // maxHeight: "20rem",
        position: "relative",
        display: "block",
        margin: "1rem 1rem",
        padding: "1rem",
        textAlign: textAlign ?? "left",
        backgroundColor: color ?? "#030001",
        borderRadius: "0.3rem",
        zIndex: "1",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
    }

    return(
        <div className={`${className} background`} style={{
            display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", position: "relative"
        }}>
            <div style={style}>
                <h2 style={{color: textColor ?? "#3B043B", fontSize: fontSize ?? "20px"}}>{header}</h2>
                <p style={{color: textColor ?? "#030001", textAlign: "justify", fontSize: contentFontSize}}>{content}</p>
                <p style={{color: textColor ?? "#030001", textAlign: "justify", fontSize: contentFontSize}}>{secondContent}</p>
                <strong style={{color: quoteColor ?? "#030001", fontStyle: "italic"}}>{quote ?? ""}</strong>
            </div>
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

export const LatestInformationBox = ({imgAlt, image, topic, section, date, link, position }) => {
    const latestInfoBox = {
        minHeight: "5rem",
        position: position ?? "relative",
        // flexWrap: "wrap",
        padding: "0.5rem",
        margin: "1rem 0rem",
        backgroundColor: "#FFFFFF",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
    }

    const latestInfoContent = {
        display: "block",
    }

    return(
        <Link style={latestInfoBox} to={link} className="latest-info-box">
            <img alt={imgAlt} src={ image } />
            <div style={latestInfoContent}>
                <p> {section} </p>
                <h3> {topic} </h3>
                <p> {date} </p>
            </div>
        </Link>
    );
}

export const InformationBox = ({ link, imgAlt, img, dept, topic, date, zIndex, height}) => {
    const infoBox = {
        width: "20rem",
        height: height ?? "23rem",
        position: "relative",
        display: "block",
        margin: "0.5rem",
        backgroundColor: "#FFFFFF",
        borderRadius: "0.3rem",
        zIndex: zIndex ?? "1",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
    }

    const infoBoxImage = {
        width: "100%",
        height: "12rem",
        borderRadius: "0.3rem 0.3rem 0rem 0rem",
    }

    const infoBoxHeader = {
        padding: "0.2rem 1rem",
        alignItems: "flex-start",
    }

    return(
        <Link style={infoBox} to={link} className="infoBox">
            <img alt={ imgAlt } src={ img } style={infoBoxImage}/>
            <div style={infoBoxHeader}>
                <p> { dept } </p>
                <h2 style={{fontSize: "1rem", textOverflow: "ellipsis"}}> { topic } </h2>
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
        margin: "1rem 0rem 0rem 0rem",
        padding: "1rem",
        borderRadius: "0.2rem",
        color: "#030001",
        height: "auto",
        transition: "all 300ms ease-in",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
    }

    const activeFAQ = {
        margin: "1rem 0rem 0rem 0rem",
        padding: "1rem",
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
                                <img alt='' src={ Icons.openFolder } width={20} />
                            </div>
                            <p style={{fontSize: "1rem"}}> { item.answer } </p>
                            {
                                item.link ? <Link to={ item.link } className="link">{
                                    item.linkText
                                } </Link> : null
                            }
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
                                <img alt='' src={ Icons.closeFolder } width={20} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const SerchBox = ({imgAlt, img, header, content, zIndex, link}) => {
    return(
        <Link style={{
            backgroundColor: "#FAFAFA",
            zIndex: zIndex ?? "1",
            borderRadius: "0.1rem",
            padding: "1rem",
            margin: "0.5rem",
        }} className="serch-box" to={link}>
            <img alt={imgAlt} src={img} />
            <div className="serch-box-content">
                <h3 style={{fontSize: "1.2rem"}}>{header}</h3>
                <p>{content}</p>
            </div>
        </Link>
    )
}

export const PaymentMethodBox = ({ data, title }) => {
    return (
        <div style={{
            padding: "0.8rem", alignItems: "flex-start", border: "1px solid #3B043B"
        }}>
            <h3 style={{color: "#FAFAFA"}}> { title } </h3>
            <div style={{display: "flex", justifyContent: "flex-start", flexWrap: "wrap"}}>{
                data.map((item, index) => {
                    return <div style={{margin: "0rem 0.5rem 0rem 0rem"}}>
                        <div key={index} style={{width: "5rem", height: "5rem"}}>
                            <img alt="serch" src={ item.type } width={ item.width } style={{
                                width: "100%", height: "100%", objectFit: "contain"
                            }}/>
                        </div>
                        <h4 style={{
                            color: "#dfdfdf9e", marginBlockStart: "0rem", marginBlockEnd: "0rem",
                            textAlign: "center"
                        }}> { item.name } </h4>
                    </div>
                })
            }</div>
        </div>
    );
}

export const SerchPlanBox = ({ data, imageAlt, image, title, category, strikeThrough, subtitle, duration }) => {
    return(
        <div style={{
            padding: "1rem", borderRadius: "0.4rem", backgroundColor: "#090909", maxWidth: "17rem",
            display: "flex", flexDirection: "column", justifyContent: "center", margin: "1rem"
        }}>
            <h4 style={{color: "#BDBDBD", textAlign: "left"}}>{category}</h4>
            <img alt={imageAlt} src={image} style={{margin: "0 auto", width: "50%"}}/>
            <h3 style={{color: "#BDBDBD", marginBlockEnd: "0em", textAlign: "center"}}>{title}</h3>
            <div style={{
                display: "flex", flexDirection: "row", flexWrap: strikeThrough ? "wrap" : "", alignItems: "center",
                justifyContent: "center"
            }}>
                <img alt="" src={ Price } width={30} height={35} />{
                    strikeThrough ? <p style={{
                        color: "#BDBDBD", marginLeft: "0.2rem"
                    }}>&#x20A6;{subtitle} <s style={{textDecoration: "line-through"}}>&#x20A6;{strikeThrough}</s></p>
                    : <p style={{color: "#BDBDBD", marginLeft: "0.2rem"}}>{subtitle}</p>
                }
            </div>
            <div style={{
                backgroundColor: "#FAFAFA", padding: "0.8rem", borderRadius: "0.3rem",
            }}>{
                data.map((value, index) => {
                    return <div key={index} style={{
                        display: "flex", alignItems: "flex-start", justifyContent: "flex-start", marginBottom: "0.2rem"
                    }}>
                        <img alt="" src={Icons.checked} width={15} height={15} style={{marginRight: "0.5rem", marginTop: "0.25rem"}}/>
                        <p style={{color: "#030001", marginBlockStart: "0em", marginBlockEnd: "0em",}}>{value}</p>
                    </div>
                })
            }{
                duration ? <p style={{
                    color: "#030001", marginBlockStart: "0.5em", marginBlockEnd: "0.2em", fontSize: "0.9rem", fontWeight: "500"
                }}>{duration}</p> : null
            }<Link to={"/legal/document/terms-and-conditions"} className="link" style={{
                fontSize: "0.8rem"
            }}>Terms and conditions apply</Link></div>
        </div>
    )
}