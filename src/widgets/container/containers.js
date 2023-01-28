import { Link } from 'react-router-dom';
import { Icons } from '../../config/images/icons';
import './containers.css';

export const ContainerLeftImage = ({color, image, props, imageAlt, widthSize, heightSize, header, flex}) => {
    const style = {
        backgroundColor: color ?? "#FAFAFA",
    }

    const firstStyle = {
        backgroundColor: color ?? "",
        padding: "4rem 2rem",
    }

    return(
        header != null ? <div style={firstStyle}>
            <h2>{header ?? null}</h2>
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
        padding: "2rem",
        backgroundColor: color ?? "#FFFFFF",
    }

    return <div style={latestContainer}>
        <h2 style={{color: textColor ?? "#030001"}}>{header}</h2>
        {
            subHeader ? <p>{subHeader}</p> : null
        }
        <>{props}</>
    </div>
}

export const ContainerForPost = ({section, link, sectionRoom, publishDate, publishTopic, publishDocument}) => {
    const bodyStyle = {
        padding: "2rem",
        backgroundColor: "#FFFFFF",
    }

    const headStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const linkStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: "#030001",
        borderBottom: "2px solid #030001",
    }

    return(
        <div style={bodyStyle} className="post-container">
            <div style={headStyle}>
                <h2>Serch || {section}</h2>
                <Link to={link} className="link-arrow" style={linkStyle}>
                    <img alt="" src={ Icons.arrowLeft } width={30} />
                    <h3 style={{marginLeft: "0.4rem",}}>Back to Serch {sectionRoom}</h3>
                </Link>
            </div>
            <p>Published {publishDate}</p>
            <h2> { publishTopic } </h2>
            <>{publishDocument}</>
        </div>
    )
}