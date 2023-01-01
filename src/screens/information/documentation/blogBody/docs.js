import GettingStartedDoc from "./contents/gettingStarted";
import SerchOtherInfoDoc from "./contents/otherInfo";
import SecurityFeaturesDoc from "./contents/securityFeatures";
import SharingFeatureDoc from "./contents/sharingFeatures";

const Docs = () => {
    return (
        <div className="allDocs">
            <GettingStartedDoc />
            <SharingFeatureDoc />
            <SecurityFeaturesDoc />
            <SerchOtherInfoDoc />
        </div>
    );
}

export default Docs;