const SubscriptionPlans = () => {
    return (
        <div className="docContents" id="subscription_plan">
            <p>
                We have a curated list of four subscription plans for our users. These plans make sure that the user can decide on what they
                want and how they want it. Our prices are also user-friendly. By subscribing to a particular plan, the user operates on chosen
                plan for the period of 30days. On the 30th day, the user is given the opportunity to migrate to a new plan. If user doesn’t
                migrate to a new plan, on the 1st day, the users’ running plan is automatically renewed.
                <br/><br/>
                <span className="noteBold">NOTE: Subscription period is for 30days.</span>
                <br/><br/>
                Our subscription plans include:
            </p>
            <dl>
                <dt>a.	Aries Plan</dt>
                <dd>
                    Our Aries plan gives the user the ability to pay a lesser amount of money to access only one service of choice.
                    The user is allowed to choose only one service that pertains to the users’ need. The service the user selects, will
                    only to offered to the user throughout the course subscription period.
                    <br/><br/>
                    <span className="noteBold">NOTE: Aries allow user’s access to only one select service.</span>
                    <br/><br/>
                </dd>
                <dt>b.	Libra Plan</dt>
                <dd>
                    Our Libra plan gives the user the ability to pay less amount of money to access only two service of choice.
                    The user is allowed to choose only two service that pertains to the users’ need. The service the user selects,
                    will only to offered to the user throughout the course subscription period.
                    <br/><br/>
                    <span className="noteBold">NOTE: Libra allow user’s access to only two select services.</span>
                    <br/><br/>
                </dd>
                <dt>c.	Aqua Plan</dt>
                <dd>
                    Our Aqua plan gives the user the ability to pay a little amount of money to access three services of choice.
                    The user is allowed to choose three services that pertain to the users’ need. The service the user selects, will
                    only to offered to the user throughout the course subscription period.
                    <br/><br/>
                    <span className="noteBold">NOTE: Aqua allow user’s access to three select services.</span>
                    <br/><br/>
                </dd>
                <dt>d.	Virgo Plan</dt>
                <dd>
                    Our Virgo plan gives the user the ability to pay an amount of money to access all services that Serch offer.
                    The user doesn’t have to choose any service based on choice, Serch automatically grants access to all services to the
                    user.
                    <br/><br/>
                    <span className="noteBold">NOTE: Virgo grants access to enjoy all the fun that Serch offer.</span>
                    <br/><br/>
                </dd>
            </dl>
        </div>
    );
}

export default SubscriptionPlans;