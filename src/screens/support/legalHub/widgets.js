import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { MainLinks, LegalLinks, SupportLinks } from "../../../config/custom/links";
import { Icons } from "../../../config/images/icons";
import { LegalShimmer } from "../../../widgets/container/shimmer";
import Markdown from 'markdown-to-jsx';
import accessibility from "./documents/accessibility.md";
import community from "./documents/community.md";
import cookie from "./documents/cookie.md";
import discrimination from "./documents/discrimination.md";
import feedback from "./documents/feedback.md";
import globalAdvert from "./documents/globalAdvert.md";
import privacy from "./documents/privacy.md";
import referral from "./documents/referral.md";
import termsAndCondition from "./documents/termsAndCondition.md";
import userGenerated from "./documents/userGenerated.md";
import zeroTolerance from "./documents/zeroTolerance.md";

export const LegalDocs = [{
    id: LegalLinks.communityGuidelines,
    linkText: "Serch Community Guidelines",
    doc: community
},{
    id: LegalLinks.cookiePolicy,
    linkText: "Sech Cookie Policy",
    doc: cookie
},{
    id: LegalLinks.feedbackPolicy,
    linkText: "Serch Feedback Policy",
    doc: feedback
},{
    id: LegalLinks.advertPolicy,
    linkText: "Serch Global Advertising Policy",
    doc: globalAdvert
},{
    id: LegalLinks.discriminationPolicy,
    linkText: "Serch Non-Discrimination Policy",
    doc: discrimination
},{
    id: LegalLinks.privacyPolicy,
    linkText: "Serch Privacy Policy",
    doc: privacy
},{
    id: LegalLinks.referralProgramme,
    linkText: "Serch Referral Programme",
    doc: referral
},{
    id: LegalLinks.termsAndConditions,
    linkText: "Serch Terms and Conditions",
    doc: termsAndCondition
},{
    id: LegalLinks.userContent,
    linkText: "Serch User Generated Content",
    doc: userGenerated
},{
    id: LegalLinks.zeroPolicy,
    linkText: "Serch Zero Tolerance Policy",
    doc: zeroTolerance
},{
    id: LegalLinks.accessibility,
    linkText: "Serch Accessibility Policy",
    doc: accessibility
}]

export const LegalBody = () => {
    return <div className="cover">
        <Outlet />
    </div>
}

export const LegalBodyIndex = () => {
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
    }

    const bg = {
        backgroundColor: "#2c0f0c",
        color: "#FAFAFA",
        borderRadius: "0.3rem",
        fontWeight: "normal",
    }

    return(
        <>
            <div className="cover-header" style={headStyle}>
                <h2>Serch Legal Hub</h2>
                <Link to={ MainLinks.helpAndSupport } className="link-arrow" style={linkStyle}>
                    <img alt="" src={ Icons.arrowLeft } width={30} />
                    <h3>Back to Help and Support</h3>
                </Link>
            </div>
            <h3 className="note" style={bg}>
                We advise everyone to read our legal documents before getting into business with us. We reseve the rights to update
                our legal documents. When such is done, we notify all our users on such updates.
            </h3>
            <div className="support_content">{
                LegalDocs.map((item, index) => {
                    return <Link to={`document/${item.id}`} className="animLink" key={index}>
                    <h3>{item.linkText}</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                })
            }</div>
        </>
    )
}

export const LegalBodyDocument = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [legal, setLegal] = useState(null)
    const [content, setContent] = useState("")

    useEffect(() => {
        setLoading(true)
        let legal = LegalDocs.find(legal => legal.id === id);
        fetch(legal.doc).then(res => res.text()).then(document => {
            setLoading(false)
            setError(false)
            setContent(document)
            setLegal(legal);
        }).catch(error => {
            setContent(error)
            setLoading(false)
            setError(true)
        })
    }, [id]);

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
    }

    if(loading){
        return <LegalShimmer />
    }else if(legal != null && loading === false && error === false){
        return <>
            <div className="cover-header" style={headStyle}>
                <h2>{legal.linkText}</h2>
                <Link to={ SupportLinks.legal } className="link-arrow" style={linkStyle}>
                    <img alt="" src={ Icons.arrowLeft } width={30} />
                    <h3>Back to Legal</h3>
                </Link>
            </div>
            <Markdown
                options={{}}
                children={content}
            />
        </>
    } else {
        return <div style={{padding: "2rem 2rem 4rem 2rem", width: "100%"}}>
            <h3 style={{fontSize: "2rem", color: "#030001"}}>Sorry, we couldn't find that legal document</h3>
            <p style={{fontSize: "1.5rem", color: "#030001"}} >
                We might have removed, edited or shifted the document to another section. We are so sorry that you have to
                experience this. We will rectify the situation soon.
                Meanwhile, feel free to explore other legal documents.
            </p>
            <Markdown children={content} />
        </div>
    }
}