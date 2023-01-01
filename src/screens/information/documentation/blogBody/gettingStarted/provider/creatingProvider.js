const CreatingProviderAccount = () => {
    return (
        <div className="docContents">
            <p>
                <span className='noteBold'>
                    NOTE: Provider is a name Serch give to artisans, that is, people with either electrical,
                    mechanical, plumbing or barbing skill.
                </span>
                <br/><br/>
                It is quite simple to create an account as a provider in Serch. A provider account is an account which notifies
                Serch that you have a skill in the service we are connecting people to. By creating a provider account,
                you verify yourself as a skilled person in the service you will choose. There are fundamental requirements
                needed when creating a provider account in Serch.
            </p>
            <h4>BASIC REQUIREMENTS FOR A PROVIDER ACCOUNT</h4>
            <div className="subDocContents">
                <p><span className="bold">A.</span>	You must have an email, phone number, firstName, lastName and you must create a password.</p>
                <p><span className="bold">B.</span>	You can only provide <span className='bold'>ONE</span> service in Serch. We have only but
                    four services we connect to people in Serch:
                </p>
                <ol>
                    <li><span className="bold">1.</span>  Mechanical Service</li>
                    <li><span className="bold">2.</span>  Plumbing Service</li>
                    <li><span className="bold">3.</span>  Electrical Service</li>
                    <li><span className="bold">4.</span>  Barbing Service</li>
                </ol>
                <p><span className="bold">C.</span>	You must possess the skill you are selecting. Bad rating can get you suspended if it is
                    persistent.
                </p>
                <p><span className="bold">D.</span>	You must have a next-of-kin information. </p>
                <p><span className="bold">E.</span>	You must provide us with your address and your contact details.</p>
                <p><span className="bold">F.</span>	There are basic documents needed for your account creation to be complete:</p>
                    <ol>
                        <li><span className="bold">1.</span>	Two pictures of yourself. One from your gallery and another from your camera.</li>
                        <li><span className="bold">2.</span>	A valid national identification card. This may vary according to countries.</li>
                    </ol>
            </div>
            <p>
                With all these, your account creation will be verified in a matter of seconds and you are good to start providing.
                This information helps us in making sure that you are who you say you are.
                They also help us in knowing more about you, your background, etcetera.
                <br/><br/>
                <span className='noteBold'>
                    NOTE: It is always important to verify your email in Serch.
                    We send you monthly summary of your ratings via your email.
                    And we also send you other newsletters you may be very much interested in getting.
                    Though we do not see it as a necessity for you to verify your email, we however, do recommend that.
                </span>
                <br/><br/>
                Are you having issues creating an account? Contact
                <a href='mailto:account@serchservice.com' className='email'> account@serchservice.com</a>
                <br/><br/>
                Before contacting us, make sure your email has not been used in creating an account.
                We use emails to know anyone who has created an account in Serch.
                If perchance, you might have started an account creating session but couldn’t finish it up due to any reason,
                returning back to Serch another time, you will be presented the point of your last contact when creating an
                account with that email address. So, if perchance you might have forgotten the details when you started creating
                the account with that email, contact
                <a href='mailto:help@serchservice.com' className='email'> help@serchservice.com</a> for more information on what to do.
            </p>
        </div>
    );
}

export default CreatingProviderAccount;