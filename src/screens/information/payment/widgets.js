import { InformationLinks } from '../../../config/custom/links';
import { PlanDescriptionBox } from "../../../widgets/container/planDescBox";
import { Aqua, Aries, Libra, Virgo } from "./planDesc";
import Images from '../../../config/images/images';
import { PaymentMethodBox } from '../../../widgets/container/planDescBox';
import FAQ from '../../../widgets/faq/faq';
import { Cards, Wallets } from './cards';
import './css.css';

export const PayHeader = () => {
    return (
        <div className="productHeader">
            <div className="productHeaderText">
                <h2>Our offering plans and payment</h2>
                <p>Access our services fast and easy without any limitation.</p>
            </div>
            <img alt='' src={ Images.paymentHeader } width={300} />
        </div>
    );
}

export const PayOptions = () => {
    return (
        <div className="payOptions">
            <div className="payOptionCenter">
                <h2> Serch Payment Options</h2>
                <p>Get onboard through any of these payment options.</p>
            </div>
            <div className="payBody">
                <PaymentMethodBox data={ Cards } title="Cards"/>
                <PaymentMethodBox data={ Wallets } title="Wallets" />
            </div>
        </div>
    );
}

export const PlanHeader = () => {
    return(
        <div className="lighter">
            <h4>Note: Our offering is divided into our different categories:- Serch for Business and Serch for Individual.</h4>
        </div>
    );
}

export const Pricing = () => {
    return(
        <div className='serchBody'>
            <PlanDescriptionBox data={ Aries } />
            <PlanDescriptionBox data={ Libra } />
            <PlanDescriptionBox data={ Aqua } />
            <PlanDescriptionBox data={ Virgo } />
        </div>
    );
}

export const PlanDemo = () => {
    return (
        <div className="light">
            <h3>Confused on which plan to select?</h3>
            <p>Don't be. We are here to guide you through it all.</p>
            <div className="planDemoCenter">
                <button>Start a live chat with a rep</button>
                <h4>or</h4>
                <button>Receive an instruction email</button>
            </div>
        </div>
    );
}

export const PaymentFAQ = () => {
    return (
        <FAQ
            header="Payment FAQs"
            subHeader="Find answers to payment frequently asked questions."
            faqOneQuestion="Are my card/wallet payments secured?"
            faqOneAnswer="Be rest assured, please. All transactions are totally safe and protected every moment.
                Payment Security is one of our top priorities."
            faqTwoQuestion="Are there any refund policies?"
            faqTwoAnswer="We are deeply sorry, but we don't offer refunds for any matter.
                Before opting to any of our services, there are certain things to check out for."
            linkTwoText='Like "Is Serch in my Country?."'
            linkTwo={InformationLinks.countries}
            faqThreeQuestion="Finding it hard to make payments?"
            faqThreeAnswer="Like our drive is bent on easy services, we also make it a part of us to make sure that payments
                are made easily without any hitches."
            linkThree={"/"}
            linkThreeText="If incase you are in trouble, find a solution here."
        />
    );
}