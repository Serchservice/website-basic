import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icons } from '../../config/images/icons';
import Images from '../../config/images/images';
import { Title } from '../../widgets/pageWidget';
import { LogoAsset } from './assetLogo';
import './assets.css';

export const AssetBoxes = [{
    image: Images.serchBlack,
    imageAlt: "Serch Logo & Tagline",
    title: "Serch Logo",
    link: "logo",
    images: LogoAsset
},
// {
//     image: Images.serchBlack,
//     imageAlt: "Serch Logo, Name, Tagline",
//     title: "Tag & Others",
//     link: "others",
//     images: LogoAsset
// },{
//     image: Images.serchBlack,
//     imageAlt: "Serch GIF",
//     title: "Serch Media",
//     link: "gif",
//     images: LogoAsset
// }
]

export const AssetsPage = () => {
    const [clicked, setClicked] = useState(false)
    const downloadImage = (src) => {
        const link = document.createElement('a');
        link.download = src;
        link.href = src;
        link.click()
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 1000)
    }

    Title("Assets || Serch Media Room")
    return(
        <div style={{width: "100%", backgroundColor: "#FFF", position: clicked ? "relative" : "",}}>
            <div style={{
                backgroundColor: "#030001",
            }} className="assets-page">
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between",}}>
                    <img alt="Serch Logo" src={ Images.serchLogo } width={40} height={40} />
                    <Link to={'/'} style={{color: "#FAFAFA", cursor: "pointer", fontSize: "1rem"}}>Let's go home</Link>
                </div>
                <h1 style={{color: "#FAFAFA", textAlign: "center", margin: "3rem 0rem"}}>Welcome</h1>
                <article style={{
                    marginTop: "3rem", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                    <p style={{color: "#FAFAFA"}}>Download Serch Official Assets here</p>
                    <img alt="arrow-down" src={Icons.next} width={20} style={{
                        marginLeft: "0.5rem", transform: "rotate(90deg)", backgroundColor: "#FAFAFA"
                    }}/>
                </article>
            </div>
            { clicked ? <Notification success={true} clicked={true} /> : null }
            <div style={{
                backgroundColor: "#FFF", display: "flex", width: "auto", margin: "auto", padding: "1rem", flexWrap: "wrap"
            }}>
            {/* {
                AssetBoxes.map((item, index) => {
                    return <AssetBox
                        image={item.image}
                        key={index}
                        imageAlt={item.imageAlt}
                        title={item.title}
                        link={item.link}
                    />
                })
            } */}
                <div style={{padding: "1rem", width: "100%"}}>{
                    LogoAsset.map((item, index) => {
                        return(
                            <div key={index}>
                                <h3 style={{
                                    padding: "0.4rem 1rem 0.4rem 0.2rem", backgroundColor: "#030001", color: "#FAFAFA", width: "100%", borderRadius: "0.2rem"
                                }} className="asset-header">{item.title}</h3>
                                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>{
                                    item.images.map((item, index) => {
                                        return(
                                            <div style={{
                                                display: "block", width: '8rem', margin: "0.5rem 0.5rem 0.5rem 0rem"
                                            }} key={index}>
                                                <div className="asset-box" style={{
                                                    padding: "0.8rem", position: "relative",
                                                    backgroundColor: item.imageAlt.includes("White") ? "#030001" : "#FAFAFA",
                                                    width: '8rem', height: "8rem", cursor: "pointer"
                                                }} key={index} onClick={() => downloadImage(item.image)}>
                                                    <img src={item.image} alt={item.imageAlt ?? "Serch Logo"} style={{
                                                        width: "100%", height: "100%", objectFit: "contain"
                                                    }}/>
                                                    <img src={Icons.download} alt="download" width={30} height={30} style={{
                                                        backgroundColor: "#FAFAFA", borderRadius: "50%", padding: "0.5rem",
                                                        position: "absolute", right: "0", bottom: "0", margin: "0.3rem",
                                                    }}/>
                                                </div>
                                                <p style={{color: "#030001", textAlign: "center"}}>{item.description}</p>
                                            </div>
                                        )
                                    })
                                }</div>
                            </div>
                        )
                    })
                }</div>
            </div>
        </div>
    )
}

export const AssetBox = ({imageAlt, image, title, link}) => {
    return(
        <Link to={`/assets/download/${link ?? ``}`} style={{
            backgroundColor: "#030001", padding: "1rem 0rem 1rem 1rem", borderRadius: "0.2rem", margin: "0.4rem", width: "12rem"
        }} className="asset-link">
            <div style={{
                backgroundColor: "#FAFAFA", padding: "1rem", borderRadius: "0.2rem 0rem 0rem 0.2rem", width: "auto"
            }}>
                <img alt={imageAlt} src={image} width={40} height={40} />
            </div>
            <h2 style={{color: "#FAFAFA"}}>{title}</h2>
        </Link>
    )
}

export const AssetDownloadPage = () => {
    const { link } = useParams()
    const [assets, setAssets] = useState([])
    const [imageSection, setImageSection] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        let asset = AssetBoxes.find(asset => asset.link === link)
        if(asset){
            setAssets(asset)
            setImageSection(asset.images)
            // console.log(asset.imageAlt.includes("hide"))
        }
    }, [link])

    const downloadImage = (src) => {
        const link = document.createElement('a');
        link.download = src;
        link.href = src;
        link.click()
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 1000)
    }

    if(assets != null){
        Title(`Download ${assets.title} || Serch Media Room`)

        return(
            <div style={{width: "100%", position: clicked ? "relative" : "", height: "100vh", overflow: "auto"}}>
                <div style={{
                    backgroundColor: "#030001",
                }} className="assets-page">
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between",}}>
                        <img alt="Serch Logo" src={ Images.serchLogo } width={40} height={40} />
                        <div style={{color: "#FAFAFA", cursor: "pointer"}}>Download all Serch Logos</div>
                    </div>
                </div>
                {
                    clicked ? <Notification success={true} clicked={true} /> : null
                }
                <div style={{padding: "1rem"}}>{
                    imageSection.map((item, index) => {
                        return(
                            <div key={index}>
                                <h3 style={{
                                    padding: "0.4rem 1rem 0.4rem 0.2rem", backgroundColor: "#030001", color: "#FAFAFA"
                                }} className="asset-header">{item.title}</h3>
                                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start"}}>{
                                    item.images.map((item, index) => {
                                        return(
                                            <div style={{
                                                display: "block", width: '8rem', margin: "0.5rem 0.5rem 0.5rem 0rem"
                                            }} key={index}>
                                                <div className="asset-box" style={{
                                                    padding: "0.8rem", position: "relative",
                                                    backgroundColor: item.imageAlt.includes("White") ? "#030001" : "#FAFAFA",
                                                    width: '8rem', height: "8rem", cursor: "pointer"
                                                }} key={index} onClick={() => downloadImage(item.image)}>
                                                    <img src={item.image} alt={item.imageAlt ?? "Serch Logo"} style={{
                                                        width: "100%", height: "100%", objectFit: "contain"
                                                    }}/>
                                                    <img src={Icons.download} alt="download" width={30} height={30} style={{
                                                        backgroundColor: "#FAFAFA", borderRadius: "50%", padding: "0.5rem",
                                                        position: "absolute", right: "0", bottom: "0", margin: "0.3rem",
                                                    }}/>
                                                </div>
                                                <p style={{color: "#030001", textAlign: "center"}}>{item.description}</p>
                                            </div>
                                        )
                                    })
                                }</div>
                            </div>
                        )
                    })
                }</div>
            </div>
        )
    }
}

export const Notification = ({success, error, clicked}) => {
    return(
        <div style={{
            padding: "0.5rem", bottom: "0", left: clicked ? "0" : "-1000",
            backgroundColor: success ? "#489f05" : error ? "#ed1010" : "#520245",
            position: clicked ? "absolute" : "",
            display: clicked ? "block" : "none", borderRadius: "0.2rem", zIndex: clicked ? "99999" : "",
        }}>
            <p style={{
                color: "#FFFFFF", fontSize: "1.1rem", marginBlockStart: "0em", marginBlockEnd: "0em",
                transition: "all 10s ease", transitionProperty: "left"
            }}>{
                success ? "Your download will start soon" : error ? "Your download didn't start" : "Your browser might have issues"
            }</p>
        </div>
    )
}