const StartRequestingProviders = () => {
    return (
        <div className="docContents">
            <p>
                Requesting for a service in Serch is always easy as our philosophy states, “Service made easy.” Even if the user is
                operating on Aries, Libra, Virgo, Aqua plan, it is always the same method.
                <br/><br/>
                <span className="noteBold">
                    NOTE: Before requesting for a service provider, it is important to know that Serch can automatically ping any online
                    provider (only online providers, not even the <span className="red">“busy-but-online”</span> providers) if the user sets the
                    <span className="blue"> Ping for me</span> toggler active in the user’s settings or preferences. If the
                    <span className="blue"> Ping for me</span> toggler is not active, Serch is only obligated to provide the user
                    a list of both online providers and <span className="red">“busy-but-online”</span> providers.
                </span>
                <br/><br/>
                Requesting for a service provider can be done in these steps:
            </p>
            <p><span className="bold">A.</span>	Slide up the slide menu in the home section of the app (Where the map is located).</p>
            <p><span className="bold">B.</span>	Click on the <span className="red">“I need a provider”</span> button.</p>
            <p><span className="bold">C.</span>	By clicking, a popup appears on the screen for the user to enter some details like:</p>
            <ol>
                <li><span className="bold">a.</span>	User location <span className="red">(required)</span></li>
                <li><span className="bold">b.</span>	Service needed at the moment <span className="red">(required)</span></li>
                <li><span className="bold">c.</span>	State the problem using either text format or a voice-to-text format or just a
                    voice format. <span className="red">(required)</span>
                </li>
                <li><span className="bold">d.</span>	Or optionally, select a tag for the problem encountered.
                    <span className="red"> (required)</span>
                </li>
                <li><span className="bold">e.</span>	Then, click on the “Serch” button and you are good to go.</li>
            </ol>
            <p>
                <span className="noteBold">NOTE: Either use option C or option D. One of these options must be selected.</span>
                <br/><br/>
                If the user sets the <span className="blue">Ping for me</span> toggler active, then Serch ping an online provider once the
                above steps are completed. The provider cannot be more than 10kms far from the user’s location. Once the provider accepts
                the request, the user is communicated also with a popup showing the provider’s details, a chat button and a call button also.
                The user can decide whether to call the provider or the chat the provider.
                <br/><br/>
                However, if the user does not set the <span className="blue">Ping for me</span> toggler active, Serch provides a list of online
                providers and even the <span className="red">“busy-but-online”</span> providers. All these will be shown to the user through
                the provider’s details. And also, a chat and call button.
                <br/><br/>
                If the user connects to the provider, we advise the user to enable the CTG before inviting the provider over. There are two
                methods in which the user and the provider connect in Serch platforms:
            </p>
            <dl>
                <dt>a.	Chat Method</dt>
                <dd>
                    The user does not have access to the provider’s phone number but can always chat with the provider on our platform.
                    On the chat method, we give the ability for the user to rate the provider and the provider to rate the user too,
                    while providing a reason for any rate.
                    <br/><br/>
                    There is also the video call button for the user to show the provider a visual of the problem.
                    <span className="noteBold"> NOTE: We do not condone any sexual content, or any discriminatory content. Once seen,
                    we reserve the right to suspend the user or provider involved in sharing such content in our platform.</span>
                    <br/><br/>
                    There is also the <span className="blue">CTG</span> button which we encourage users to enable before inviting the provider over. If enabled and
                    the provider does not respond to it, we advise the user to report the provider to the Serch team using the report
                    button on the chat screen and as well, find another provider to invite over.
                    <br/><br/>
                </dd>
                <dt>b.	Call Method</dt>
                <dd>
                    The user does not have access to the provider’s phone number but can always call with the provider on our platform.
                    On the call method, we give the ability for the user to rate the provider and the provider to rate the user too,
                    while providing a reason for any rate. Rating here can be carried out by going to call history and on clicking the
                    provider/user called, the user or provider can rate each other.
                    <br/><br/>
                    There is also the video call button for the user to show the provider a visual of the problem.
                    <span className="noteBold"> NOTE: We do not condone any sexual content, or any discriminatory content. Once seen,
                    we reserve the right to suspend the user or provider involved in sharing such content in our platform.</span>
                    <br/><br/>
                    There is also the <span className="blue">CTG</span> button which we encourage users to enable before inviting the provider over. If enabled and
                    the provider does not respond to it, we advise the user to report the provider to the Serch team using the report
                    button on the chat screen and as well, find another provider to invite over.
                    <br/><br/>
                </dd>
            </dl>
            <p>
                On both the call and chat method, there is a bookmark button visible to only users. By bookmarking a provider, the user can
                always reconnect with the provider anytime. If a provider is not bookmarked, Serch reserves the right to remove the provider
                from the user’s history after the duration of 30days. Bookmarking a provider is important for the
                <a href="#requestSharing"> requestShare</a> feature.
            </p>
        </div>
    );
}

export default StartRequestingProviders;