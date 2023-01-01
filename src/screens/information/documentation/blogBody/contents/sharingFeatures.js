const SharingFeatureDoc = () => {
    return (
        <div className="doc">
            <div id="serch_sharing_features">
                <h2>Serch Sharing Features</h2>
                <div className="subHeading" id="provideSharing">
                    <h3>1.  ProvideShare</h3>
                    <div className="docContents">
                        <p>
                            With the introduction of this feature, we make it easier for users to get the services they need with the brain
                            capable of handling it. ProvideShare was introduced because most times, a user might state a problem but when a
                            provider arrives, it might really be needing another skill instead of what the user initially requested for.
                            <br/><br/>
                            By provideSharing, the provider can invite another provider to solve the problem which the user wants to get solved.
                            The initial provider invited will be subject to transport fare as a pay for coming over and a little incentive from
                            the user. The initial provider will have to state the problem in the provider app and get the required provider to
                            come over and solve the problem.
                        </p>
                    </div>
                </div>
                <div className="subHeading" id="requestSharing">
                    <h3>2.  RequestShare</h3>
                    <div className="docContents">
                        <p>
                            The introduction of this feature springs from the ideology behind rating. However, due to individual differences,
                            some persons might find one provider amazing and skilled and some other might not. Therefore, we introduced
                            requestSharing to enable a user to recommend a provider to another user. However, for this to work, the user must:
                        </p>
                        <ol>
                            <li><span className="bold">a.</span>	Have bookmarked the provider before the expiration of 30days after connecting.</li>
                            <li><span className="bold">b.</span>	Make sure the provider is within the location of the user which the provider is to be shared to.</li>
                        </ol>
                        <p>
                            The sharing button on the provider’s profile is solely for this feature which is an in-app feature just like
                            provideSharing. With the requestSharing feature, the provider’s rating is overridden for the user. We see this
                            feature as “A friend recommending the ‘best’ person for the job to another friend.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SharingFeatureDoc;