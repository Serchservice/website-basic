const HowToStartProviding = () => {
    return (
        <div className="docContents">
            <p>
                To start providing your skill in Serch is quite easy. Once your account has been created, everything is setup in your account.
                All you need is to make sure that your preferences or settings are in order.
                <br/><br/>
                In Serch, there are two provider statuses. These statuses help the provider to decide whether he can appear on our radar or not.
                We have the <span className="yellow">BUSY</span> and the <span className="green">ONLINE</span> status.
                <br/><br/>
                With the <span className="yellow">BUSY</span> status, the provider will be shown as busy when a user requests for the list of
                providers within the user’s location. However, this is made possible if only the provider has the
                <span className="blue"> Show on map</span> toggler active. This status can help the user in deciding whether to request for the provider. It can also help the provider to be focused on
                the particular service been rendered at the moment. Serch refers to the providers who have their
                <span className="blue"> Show on map</span> toggler active as <span className="red">“busy-but-online”</span>.
                <br/><br/>
                With the <span className="green">ONLINE</span> status, the provider is shown active and ready to be of service. This status helps the provider in appearing
                on our radar even if the <span className="blue">Show on map</span> toggler is active or not. This makes it possible for the user to know if the provider is
                ready to work or not.
                <br/><br/>
                <span className="noteBold">
                    NOTE: Only one of these statuses can be set at a time. If none is set, the provider appears offline on our radar. The
                    provider’s status is always offline even when the provider logs in or signs up. It is left to the provider to toggle any of
                    these according based on choice.
                </span>
                <br/><br/>
                In the settings, the <span className="blue">Show on map</span> toggler controls how the provider appears on our radar per each request within the provider’s
                location. By making sure the toggler is active (which is always made active upon each account creation), the provider can always
                appear on our radar even when the provider is busy.
            </p>
        </div>
    );
}

export default HowToStartProviding;