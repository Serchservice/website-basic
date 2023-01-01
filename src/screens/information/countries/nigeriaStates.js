import { KeyImages } from '../../../config/images/key';
import NigeriaData from '../../information/countries/json/nigeriaStates.json';

const NigeriaStates = () => {
    return (
        <div className="countryBody">
            <div className='countryList'>
                {
                    NigeriaData.map((country) =>{
                        return <div className="country" key={ country.id }>
                            <h3> { country.name } </h3>
                        </div>
                    })
                }
            </div>
            <div className='end'>
                <h2>Want to stay ahead of others and know when we launch in other states?</h2>
                <div className="endSection">
                    <img alt='' src={ KeyImages.serch } width={400} />
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
        </div>
    );
}

export default NigeriaStates;