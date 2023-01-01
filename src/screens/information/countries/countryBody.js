import { Link } from 'react-router-dom';
import CountryData from './json/country.json';

const CountryBody = () => {
    return (
        <div className="countryBody">
            <div className='countryList'>
                {
                    CountryData.map((country) =>{
                        return <div className="country" key={ country.id }>
                            <img alt="" width={40} src={ country.flag } />
                            <h3> { country.name } </h3>
                            <Link to={'/'}>Click to see active states</Link>
                        </div>
                    })
                }
            </div>
            <div className='end'>
                <h2>Want to stay ahead of others and know when we launch in other countries?</h2>
                <div className="emailUs">
                    <h3>Subscribe to our newsletter and get notified.</h3>
                    <form className="emailBox">
                        <input type="Text" placeholder="Name" className="emailInput"/>
                        <input type="mail" placeholder="Email" className="emailInput"/>
                        <button> Submit </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CountryBody;