import { AppLinks, InformationLinks } from '../../../config/custom/links';
import Images from '../../../config/images/images';
import ProductImages from '../../../config/images/productImages';
import { FAQBox, LinkBox } from '../../../widgets/container/boxes';
import { ContainerForLatestInformation, ContainerLeftImage, ContainerRightImage } from '../../../widgets/container/containers';

export const RequestHeader = () => {
    return <ContainerRightImage
        image={ProductImages.productTwo}
        imageAlt={""}
        props={
            <>
                <h2>We enjoy lighting up your homes or offices.</h2>
                <p>Never go out in the dark, never stop repairing and fixing.</p>
                <button>Signup today</button>
            </>
        }
    />
}

export const RequestFAQ = () => {
    const faqs = [
        {
            question: "Can I request for other people?",
            answer: `Definitely. Our services are targeted to enable both the user and the provider sort everything together.
            We do not interfere in such matters. But we still look after your ease in getting things done.`
        },
        {
            question: "How can I request for a service provider?",
            answer: `Simply select the service you want (if you are not subscribed to Plan Aries) input your location and
            search for providers in your location. After our search, a list of available online providers will be shown to you.
            We might also display online-but-busy providers too (this depends on the settings of the provider). You can decide
            on whether to call or chat any of them up.`,
            link: InformationLinks.countries,
            linkText: `Check if we have launched in your country or city.`
        },
        {
            question: "How do I get started?",
            answer: `Getting started is not an issue. You can download the app in any stores and get signed up within seconds.`,
            link: "/getting-started-as-a-user",
            linkText: "Learn more about getting started"
        }
    ]

    return <FAQBox
        subHeader={"Requesting for services can be tricky for first-timers. Check out these and don't be lost."}
        data={faqs}
    />
}

export const RequestApp = () => {
    return <ContainerLeftImage
        image={ProductImages.serchLogIn}
        widthSize={300}
        props={
            <>
                <h1>Get the Serch app today and relax</h1>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                    <a href={ AppLinks.playStore }><img alt='' src={ Images.playStore } width={200}/> </a>
                    <a href={ AppLinks.appleStore }><img alt='' src={ Images.appleStore } width={180}/> </a>
                </div>
            </>
        }
    />
}

export const ProductSafety = () => {
    const content = [
        {
            title: "Serch community",
            subtitle: `We operate on guidelines which makes our community of artisans,
            people who value their skills and want to be appreciated for it. A community of Serchers.`,
            image: ProductImages.community,
            imageAlt: "serch community"
        },
        {
            title: "Track your money",
            subtitle: `Get real-time location of the artisan you sent on an errand.
            With the help of technology, we have made it easier to be safe with your money.`,
            image: ProductImages.Tracking,
            imageAlt: "serch money"
        },
        {
            title: "Always with you",
            subtitle: `Should you encounter any problem on your experience, we are always with you.
            Ensuring your safety, quick services, and quick response. We stay on our toes.`,
            image: ProductImages.support,
            imageAlt: "serch support"
        },
    ]

    return <ContainerForLatestInformation
        header={"Curious about your safety?"}
        subHeader={"We make sure that you are safe in any experience."}
        props={
            <div style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                display: "flex",
            }}>{
                content.map((item, index) => {
                    return <LinkBox
                        title={item.title}
                        width={60}
                        key={index}
                        subtitle={item.subtitle}
                        image={item.image}
                        imageAlt={item.imageAlt}
                    />
                })
            }</div>
        }
    />
}
