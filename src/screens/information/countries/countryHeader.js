import './css.css';
import Images from '../../../config/images/images';
//Find out the countries and states Serch has launched it's services.

const CountryHeader = () => {
    return (
        <div className="countryHeader">
            <div className='countryHeaderText'>
                <h2>Serch and Countries</h2>
                <p>For the moment, Serch is only launched in Nigeria. Find out states where Serch is active.</p>
            </div>
            <img alt='' src={ Images.countryHeader } width={400} />
        </div>
    );
}

export default CountryHeader;