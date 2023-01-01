import ProductImages from "../../../config/images/productImages";
import BoxNoLink from "../../../widgets/container/boxNoLink";

export const RequestBody = () => {
    return (
        <div className="serch">
            <div className="whyUs">
                <h2>Don't know whether to become a Sercher?</h2>
                <p>We are definitely lighting it all up with ease.</p>
                <div className="whyUsBody">
                    <img alt="" width={400} src={ ProductImages.productOne} />
                    <div className="whyUsContent">
                        <BoxNoLink
                            title={"Location-based"}
                            subtitle={"Connect with artisans within your location. Everytime and anywhere. Connect as you go!"}
                            image={ ProductImages.WhyUsOne }
                            width={ 70 }
                        />
                        <BoxNoLink
                            title={"Budget-friendly, low cost"}
                            subtitle={"Services made easy with such low budget for your subscription plans."}
                            image={ ProductImages.WhyUsTwo }
                            width={ 70 }
                        />
                        <BoxNoLink
                            title={"A whole lot"}
                            subtitle={"Tailored to bring you these at your doorstep, you get connected to a whole lot of handymen."}
                            image={ ProductImages.WhyUsThree }
                            width={ 70 }
                        />
                    </div>
                </div>
            </div>
            <div className="services">
                <h1>Choose from our range of artisan services</h1>
                <div className="allServices">
                    <div className="service">
                        <img alt="" width={400} src={ ProductImages.shopper } />
                        <h3>Personal Shopper</h3>
                        <p>Get connected to a large number of personal shoppers ready to ease your shopping problem. Everyday, anytime, anywhere.</p>
                    </div>
                    <div className="service">
                        <img alt="" width={400} src={ ProductImages.electrician } />
                        <h3>Electrician</h3>
                        <p>Get connected to a large number of electricians ready to ease your electrical problem. Everyday, anytime, anywhere.</p>
                    </div>
                    <div className="service">
                        <img alt="" width={400} src={ ProductImages.plumber } />
                        <h3>Plumber</h3>
                        <p>Get connected to a large number of plumbers ready to ease your plumbing problem. Everyday, anytime, anywhere.</p>
                    </div>
                    <div className="service">
                        <img alt="" width={400} src={ ProductImages.mechanic } />
                        <h3>Mechanic</h3>
                        <p>Get connected to a large number of mechanics ready to ease your mechanical problem. Everyday, anytime, anywhere.</p>
                    </div>
                    </div>
            </div>
        </div>
    );
}