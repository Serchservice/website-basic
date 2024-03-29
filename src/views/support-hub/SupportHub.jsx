import React from 'react'
import { Helmet } from 'react-helmet'
import './support-hub.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Assets from '../../assets/Assets'

const SupportHub = () => {
    return (
        <div className="support-hub-container">
            <Helmet>
                <title>Support Hub | Serch</title>
                <meta name="description" content="Details about our company" />
                <meta property="og:title" content="Support Hub | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ Assets.logo } />
            </Helmet>
            <Header />
            <div className="support-hub-heading">
                <h1 className="support-hub-text">
                    <span>Serch Support</span>
                    <br></br>
                </h1>
                <span className="support-hub-text3">
                    Feel like contacting us on any matter? Here in Serch support, you can
                    find the proper channel to direct your issue to. This ensures that you
                    get the assistance you need as soon as possible.
                </span>
            </div>
            <div className="support-hub-countries-and-cities">
                <div className="support-hub-account">
                    <a
                        href="mailto:account@serchservice.com?subject=Account Support - Your Subject Here"
                        className="support-hub-link"
                    >
                        account@serchservice.com
                    </a>
                    <div className="support-hub-container1">
                        <div className="support-hub-cities">
                            <span className="support-hub-city">Deletion of account</span>
                            <span className="support-hub-city01">Opening of account</span>
                        </div>
                        <div className="support-hub-cities1">
                            <span className="support-hub-city02">Report a user or guest</span>
                            <span className="support-hub-city03">Report a provider or business</span>
                        </div>
                        <div className="support-hub-cities2">
                            <span className="support-hub-city04">Transaction issues</span>
                            <span className="support-hub-city05">Any other account related issues</span>
                        </div>
                    </div>
                </div>
                <div className="support-hub-container2">
                    <a
                        href="mailto:career@serchservice.com?subject=Career Support - Your Subject Here"
                        className="support-hub-link1"
                    >
                        career@serchservice.com
                    </a>
                    <div className="support-hub-container3">
                        <div className="support-hub-cities3">
                            <span className="support-hub-city06">Application status check</span>
                            <span className="support-hub-city07">Open role check</span>
                        </div>
                        <span className="support-hub-city08">
                            * You can ask the team to put your information in the career pool,
                            incase opportunities that suits your profile comes out.
                        </span>
                    </div>
                </div>
                <div className="support-hub-sgc">
                    <a
                        href="mailto:sgc@serchservice.com?subject=SGC Support - Your Subject Here"
                        className="support-hub-link2"
                    >
                        sgc@serchservice.com
                    </a>
                    <div className="support-hub-container4">
                        <div className="support-hub-cities4">
                            <span className="support-hub-city09">Safety-Guard Community</span>
                            <span className="support-hub-city10">Join the safety discussions</span>
                        </div>
                        <div className="support-hub-cities5">
                            <span className="support-hub-city11">Submit a safety suggestion</span>
                            <span className="support-hub-city12">Update on safety information</span>
                        </div>
                    </div>
                </div>
                <div className="support-hub-container5">
                    <a
                        href="mailto:improve@serchservice.com?subject=Product Support - Your Subject Here"
                        className="support-hub-link3"
                    >
                        improve@serchservice.com
                    </a>
                    <div className="support-hub-container6">
                        <div className="support-hub-cities6">
                            <span className="support-hub-city13">Reporting a broken feature</span>
                            <span className="support-hub-city14">Suggesting a feature improvement</span>
                        </div>
                    </div>
                </div>
                <div className="support-hub-container7">
                    <a
                        href="mailto:ask@serchservice.com?subject=Serch Support - Your Subject Here"
                        className="support-hub-link4"
                    >
                        ask@serchservice.com
                    </a>
                    <span className="support-hub-city15">
                        For issues you don&apos;t find the proper channel for it.
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SupportHub
