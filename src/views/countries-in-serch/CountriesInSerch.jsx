import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './countries-in-serch.css'
import Assets from '../../assets/Assets'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const CountriesInSerch = () => {
    const [ countries, setCountries ] = useState([
        {
            "country": "Nigeria",
            "states": [
                {
                    "1": "Abuja",
                    "2": "Lagos",
                },
                {
                    "1": "Benin",
                    "2": "Anambra",
                }
            ]
        }
    ])

    return (
        <div className="countries-in-serch-container">
            <Helmet>
                <title>Countries In Serch | Serch</title>
                <meta name="description" content="View all the countries and states we are launched in" />
                <meta property="og:title" content="Countries In Serch | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ Assets.logo } />
            </Helmet>
            <Header />
            <div className="countries-in-serch-heading">
                <h1 className="countries-in-serch-text">
                    <span>Countries in Serch</span>
                    <br></br>
                </h1>
                <span className="countries-in-serch-text3">
                    Request for services in your country, most especially, in your city.
                    See countries and cities where Serch is available.
                </span>
            </div>
            <div className="countries-in-serch-countries-and-cities">
                {
                    countries.map((value, key) => {
                        return (
                            <div className="countries-in-serch-container1" key={ key }>
                                <span className="countries-in-serch-text4">{ value.country }</span>
                                <div className="countries-in-serch-container2">
                                    {
                                        value.states.map((value, key) => {
                                            return (
                                                <div className="countries-in-serch-cities" key={ key }>
                                                    <span className="countries-in-serch-city">{ value[1] }</span>
                                                    <span className="countries-in-serch-city1">{ value[2] }</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default CountriesInSerch
