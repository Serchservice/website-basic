import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './style.css'
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './api/ScrollToTop';
import Home from './views/home/Home';
import AboutUs from './views/about-us/AboutUs';
import Business from './views/business/Business';
import Careers from './views/careers/Careers';
import Error from './views/error/Error';
import Guest from './views/guest/Guest';
import Leadership from './views/leadership/Leadership';
import MarketPlace from './views/marketplace/Marketplace';
import MediaAndAssets from './views/media-and-assets/MediaAndAssets';
import Provide from './views/provide/Provide';
import ProvideSharing from './views/provideSharing/ProvideSharing';
import Providing from './views/providing/Providing';
import Request from './views/request/Request';
import Requesting from './views/requesting/Requesting';
import RequestSharing from './views/requestSharing/RequestSharing';
import Reserve from './views/reserve/Reserve';
import SafetyGuidelines from './views/safety-guidelines/SafetyGuidelines';
import SupportHub from './views/support-hub/SupportHub';
import Tip2Fix from './views/tip2fix/Tip2Fix';
import Verification from './views/verification/Verification';
import Links from './config/Links'
import CountriesInSerch from './views/countries-in-serch/CountriesInSerch';

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route element={ <Home /> } exact path={ Links.home } />
                    <Route element={ <AboutUs /> } exact path={ Links.aboutUs } />
                    {/* <Route element={ <AboutUs /> } exact path={ Links.blogs } /> */}
                    {/* <Route element={ <Home /> } path={ Links.blog } /> */}
                    <Route element={ <Business /> } exact path={ Links.business } />
                    <Route element={ <Careers /> } exact path={ Links.careers } />
                    <Route element={ <CountriesInSerch /> } exact path={ Links.countries } />
                    <Route element={ <Error /> } path="/*" />
                    <Route element={ <Guest /> } exact path={ Links.guest } />
                    <Route element={ <Leadership /> } exact path={ Links.leadership } />
                    {/* <Route element={ <Home /> } path={ Links.legal } /> */}
                    {/* <Route element={ <Home /> } exact path={ Links.legalView } /> */}
                    <Route element={ <MarketPlace /> } exact path={ Links.marketplace } />
                    <Route element={ <MediaAndAssets /> } exact path={ Links.mediaAndAssets } />
                    {/* <Route element={ <Home /> } exact path={ Links.news } /> */}
                    {/* <Route element={ <Home /> } exact path={ Links.newsroom } /> */}
                    <Route element={ <Provide /> } exact path={ Links.provide } />
                    <Route element={ <ProvideSharing /> } exact path={ Links.provideSharing } />
                    <Route element={ <Providing /> } exact path={ Links.providing } />
                    <Route element={ <Request /> } exact path={ Links.request } />
                    <Route element={ <Requesting /> } exact path={ Links.requesting } />
                    <Route element={ <RequestSharing /> } exact path={ Links.requestSharing } />
                    <Route element={ <Reserve /> } exact path={ Links.schedule } />
                    <Route element={ <SafetyGuidelines /> } exact path={ Links.safety } />
                    <Route element={ <SupportHub /> } exact path={ Links.support } />
                    {/* <Route element={ <Tip2Fix /> } exact path={ Links.tip2fix } /> */}
                    <Route element={ <Verification /> } exact path={ Links.verification } />
                    {/* <Route element={ <Search /> } path={ Links.search } />
                    <Route path={ Links.category } element={ <CategoryPage /> }>
                        <Route index element={ <Category /> }/>
                        <Route path={ Links.section } element={ <SectionPage /> }>
                            <Route index element={ <Section /> }/>
                            <Route path={ Links.faq } element={ <Help /> } />
                        </Route>
                    </Route> */}
                </Routes>
            </ScrollToTop>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <App />
);
reportWebVitals();