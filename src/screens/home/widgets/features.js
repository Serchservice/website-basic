import '../css/features.css';
import '../css/time.css';
import "../css/services.css";
import '../css/plans.css';
import FeatureData from "./features.json";
import PlanLink from '../../../widgets/container/planLink';
import { useState } from "react";
import { HomeImages, PlanImages, HelpImages } from "../../../config/images/homeImages";
import { Electrician, Mechanic, PersonalShopper, Plumber } from './service';

export const Features = () => {
    return (
        <div className="features">
            <div className="featureheader">
                <h2>Our Platform Features</h2>
                <p>What to expect in our platforms</p>
            </div>
            <div className="featurecontents">
                {
                    FeatureData.map( data => {
                        return <div className='featurecontent' key={ data.id }>
                            <p>{ data.header }</p>
                            <strong>{ data.quote }</strong>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export const Time = () => {
    return (
        <div className="time">
            <div className="timetext">
                <h2>Get plumbers, electricians, mechanics and personal shoppers in minutes!</h2>
            </div>
            <div></div>
        </div>
    );
}

export const Services = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="">
            <div className="alltabs">
                <div className="tabbuttons">
                    <section className={toggleState === 1 ? "active-tab" : "tabbutton"}
                    onClick={() => toggleTab(1)}>
                        Electrician
                    </section>
                    <section className={toggleState === 2 ? "active-tab" : "tabbutton"}
                    onClick={() => toggleTab(2)}>
                        Plumber
                    </section>
                    <section className={toggleState === 3 ? "active-tab" : "tabbutton"}
                    onClick={() => toggleTab(3)}>
                        Mechanic
                    </section>
                    <section className={toggleState === 4 ? "active-tab" : "tabbutton"}
                    onClick={() => toggleTab(4)}>
                        Personal Shopper
                    </section>
                </div>
                <div className="tabcontents">
                    <div className={toggleState === 1 ? "active-tab-content" : "tabcontent"}>
                        <Electrician />
                    </div>
                    <div className={toggleState === 2 ? "active-tab-content" : "tabcontent"}>
                        <Plumber />
                    </div>
                    <div className={toggleState === 3 ? "active-tab-content" : "tabcontent"}>
                        <Mechanic />
                    </div>
                    <div className={toggleState === 4 ? "active-tab-content" : "tabcontent"}>
                        <PersonalShopper />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Plans = () => {
    return (
        <div className=''>
            <div className='productHeader'>
                <img alt='' src={ HomeImages.first } width={ 500 } />
                <div className="contentLeftBlack">
                    <h2>Reimagining and bringing more eventful experiences</h2>
                    <p>Serch is not just a place that brings the easy way to requesting services, it is a place for imaginations.
                        Soaring beyond the unthinkable and emerging into the world where possibilites are not limited nor endless.
                    </p>
                </div>
            </div>
            <div className="plans">
                <div className="planheader">
                    <h2>Subscription Plans</h2>
                    <p>What we offer to ease your services</p>
                </div>
                <div className="plancontents">
                    <PlanLink
                        planName={"Aries"}
                        classname="aries"
                        image={ PlanImages.aries }
                    />
                    <PlanLink
                        planName={"Libra"}
                        classname="libra"
                        image={ PlanImages.libra }
                    />
                    <PlanLink
                        planName={"Aqua"}
                        classname="aqua"
                        image={ PlanImages.aqua }
                    />
                    <PlanLink
                        planName={"Virgo"}
                        classname="virgo"
                        image={ PlanImages.virgo }
                    />
                </div>
            </div>
            <div className='productHeader'>
                <div className="contentRightBlack">
                    <h2>It's always about growth</h2>
                    <p>There is a place for everyone to contribute to the growth of Serch. We value much of that here.
                        Leveraging on our community, our feedbacks and our team, Serch continues to grow and brim more ideas.
                    </p>
                </div>
                <img alt='' src={ HomeImages.sgcIdea } width={ 500 } />
            </div>
            <div className='productHead'>
                <div className="productHeadText">
                    <h2>Promotions and Offers</h2>
                    <p>Learn about Serch promotions and offers. Like we always say, "Happy users, leads to service improvement."</p>
                    <button>Learn more</button>
                </div>
                <img alt='' src={HelpImages.promotion } width={ 300 } />
            </div>
            <div className='productHeading'>
                <img alt='' src={ HelpImages.fingerprint } width={ 300 } />
                <div className="contentLeftBlack">
                    <h2>Security is important</h2>
                    <p>In the world of Serch, the user and the provider are both important.
                        And as important they are to us, their security is our priority too.
                        The security of both data and livelihood are all important.
                        We strive to protect every experience in Serch.
                    </p>
                </div>
            </div>
            <div className='productHeader'>
                <div className="contentRightBlack">
                    <h2>Keys to the City</h2>
                    <p>Inasmuch as we protect our users and providers, we still leave everything to their own preference.
                        Therefore, they hold the keys to the city. We are just standing at the gate waiting for them to let us in.
                        By letting us in throught SWM and the connect toggle, we stay with them throughout the journey.
                    </p>
                </div>
                <img alt='' src={ HelpImages.keys } width={ 400 } />
            </div>
            <div className='productHeading'>
                <img alt='' src={ HelpImages.target } width={ 300 } />
                <div className="contentLeftBlack">
                    <h2>Target hitter</h2>
                    <p>There is nothing much more fun than seeing your shots go where you want them to go.
                        Serch is nothing but that wind which gets each target to its intended destination.
                    </p>
                </div>
            </div>
        </div>
    );
}