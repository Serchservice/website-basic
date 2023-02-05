import { CompanyLinks, InformationLinks } from '../../../config/custom/links';
import { PaymentMethods, SerchPlans } from "./data";
import Images from '../../../config/images/images';
import { ContainerRightImage } from '../../../widgets/container/containers';
import { FAQBox, PaymentMethodBox, SerchPlanBox } from '../../../widgets/container/boxes';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const PayHeader = () => {
    const noteStyle = {
        backgroundColor: "#2c0f0c",
        color: "#FAFAFA",
        padding: "2rem",
        // borderRadius: "0.3rem",
        fontWeight: "normal",
    }

    return <>
        <ContainerRightImage
            image={Images.paymentHeader}
            widthSize={300}
            props={
                <>
                    <h2>Our offering plans and payment</h2>
                    <p>Access our services fast and easy without any limitation.</p>
                </>
            }
        />
        <p style={noteStyle}>
            We offer all our services to the users/clients free, which is why we have the "Serch Free" plan. So, we have categorized
            each plan according to the categories/tiers we have in the <Link to={CompanyLinks.marketplace} className="link" style={{
                color: "#FAFAFA", borderBottom: "2px solid #FAFAFA"
            }}>
                Serch MarketPlace
            </Link>. We uphold easy made service requesting and promise to make all experiences, one you won't forget.
        </p>
    </>
}

export const PayOptions = () => {
    return (
        <div className="pay-options" style={{backgroundColor: "#030001"}}>
            <div style={{textAlign: "center"}}>
                <h2 style={{color: "#FAFAFA"}}> Serch Payment Options</h2>
                <p style={{color: "#FAFAFA"}}>Get onboard through any of these payment options.</p>
            </div>
            <div style={{
                display: "flex",
                marginTop: "2rem",
                flexDirection: "row",
                flexWrap: "wrap",
            }} className="payment-boxes">{
                PaymentMethods.map((item, index) => {
                    return <PaymentMethodBox
                        title={item.title}
                        key={index}
                        data={item.payment}
                    />
                })
            }</div>
        </div>
    );
}

export const Pricing = () => {
    return(
        <div style={{
            display: "flex",
            margin: "2rem 0rem",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-around",
        }}>{
            SerchPlans.map((item, index) => {
                return <SerchPlanBox
                    key={index}
                    title={item.title}
                    image={item.image}
                    category={item.category}
                    imageAlt={item.imageAlt}
                    duration={item.duration}
                    subtitle={item.subtitle}
                    strikeThrough={item.strikeThrough}
                    data={item.data}
                />
            })
        }</div>
    );
}

export const PlanDemo = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const onEmailChange = event => setEmail(event.target.value)
    const onNameChange = event => setName(event.target.value)
    const submitForm = event => {
        event.preventDefault()
        // Do something with the input fields
    }

    return(
        <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", backgroundColor: "#FAFAFA",
            padding: "1rem", alignItems: "center"
        }}>
            <div style={{}}>
                <h3>Confused on which plan to select?</h3>
                <p>Don't be. We are here to guide you through it all.</p>
                <p>Click on the floating button to chat with a live representative, or receive an instruction email.</p>
            </div>
            <div style={{backgroundColor: "#030001", width: "400px"}}>
                <h3 style={{color: "#FAFAFA", marginLeft: "0.5rem"}}>Receive an instruction email</h3>
                <form onSubmit={submitForm} style={{display: "flex", flexDirection: "column"}}>
                    <input
                        type="text"
                        style={{margin: "0.5rem", padding: "0.5rem", width: "auto", display: "block", borderRadius: "0.1rem"}}
                        placeholder="Enter your name"
                        value={name}
                        onChange={onNameChange}
                    />
                    <input
                        type="email"
                        style={{margin: "0.5rem", padding: "0.5rem", width: "auto", display: "block", borderRadius: "0.1rem"}}
                        placeholder="Enter your email address"
                        value={email}
                        onChange={onEmailChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export const PaymentFAQ = () => {
    const faqs = [{
        question: "Are my card/wallet payments secured?",
        answer: `Be rest assured, please. All transactions are totally safe and protected every moment.
        Payment Security is one of our top priorities.`
    },{
        question: "Are there any refund policies?",
        answer: `We are deeply sorry, but we don't offer refunds for any matter.
        Before opting to any of our services, there are certain things to check out for.`,
        link: InformationLinks.countries,
        linkText: 'Like "Is Serch in my Country?."'
    },{
        question: "Finding it hard to make payments?",
        answer: `Like our drive is bent on easy services, we also make it a part of us to make sure that payments
        are made easily without any hitches.`,
        link: "/",
        linkText: "If incase you are in trouble, find a solution here."
    }]

    return <FAQBox
        header="Payment FAQs"
        subHeader="Find answers to payment frequently asked questions."
        data={faqs}
    />
}