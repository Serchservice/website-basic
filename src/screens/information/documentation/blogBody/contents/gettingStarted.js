import '../../css/doc.css';
import AuthenticationIssues from '../gettingStarted/provider/authIssues';
import CreatingProviderAccount from '../gettingStarted/provider/creatingProvider';
import LoggingInProvider from '../gettingStarted/provider/loggingProvider';
import HowToStartProviding from '../gettingStarted/provider/startProviding';
import CreatingUserAccount from '../gettingStarted/user/creatingUser';
import LoggingInUser from '../gettingStarted/user/loggingUser';
import StartRequestingProviders from '../gettingStarted/user/requestProvider';
import SubscriptionPlans from '../gettingStarted/user/subscription';

const GettingStartedDoc = () => {
    return (
        <div className="doc">
            <div id="getting_started_in_serch">
                <h2>Getting Started In Serch</h2>
                <div className='subHeading' id="getting_started_as_a_provider">
                    <h3>1.	Getting started as a Provider</h3>
                    <div className="subHeaders">
                        <h4>a.	Creating a provider account</h4>
                        <CreatingProviderAccount />
                        <h4>b.	Logging in as a provider</h4>
                        <LoggingInProvider />
                        <h4>c.	How to start providing services in Serch</h4>
                        <HowToStartProviding />
                        <h4>d.	Authentication Issues</h4>
                        <AuthenticationIssues />
                    </div>
                </div>
                <div className='subHeading' id="getting_started_as_a_user">
                    <h3>2.	Getting started as a User</h3>
                    <div className="subHeaders">
                        <h4>a.	Creating a user account</h4>
                        <CreatingUserAccount />
                        <h4>b.	Switching Subscription plan</h4>
                        <SubscriptionPlans />
                        <h4>c.	Logging in as a user</h4>
                        <LoggingInUser />
                        <h4>d.	How to request for service providers</h4>
                        <StartRequestingProviders />
                        <h4>e.	Authentication Issues</h4>
                        <AuthenticationIssues />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GettingStartedDoc;