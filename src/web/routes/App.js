import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../../screens/css/keyframes.css';
import { CompanyLinks, InformationLinks, MainLinks, ProductLinks, SupportLinks } from "../../config/custom/links";
import { CountriesInSerch, PricingAndPayment, SafetyGuideline } from "../pages/information";
import { Home, NoPage, Support } from "../pages/main";
import { LegalHub, SupportHub } from "../pages/support";
import { Business, Provide, Request } from "../pages/product";
import { About, Blog, Career, MarketPlace, Newsroom } from "../pages/company";
import { BlogPost, NewsPost } from "../pages/posts";
import { LegalBodyDocument, LegalBodyIndex } from "../../screens/support/legalHub/widgets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NoPage />} />

        <Route path={ CompanyLinks.blogs } element={<BlogPost />} />
        <Route path={ CompanyLinks.news } element={<NewsPost />} />

        <Route path={ MainLinks.home } element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/' element={<Home />} />

        <Route path="/company/about" element={<About />} />
        <Route path={ CompanyLinks.about } element={<About />} />
        <Route path={"/company/blogs"} element={<Blog />} />
        <Route path={ CompanyLinks.blog } element={<Blog />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path={ CompanyLinks.newsroom } element={<Newsroom />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path={ CompanyLinks.marketplace } element={<MarketPlace />} />
        <Route path={"/company/careers"} element={<Career />} />
        <Route path={ CompanyLinks.careers } element={<Career />} />

        <Route path="/business" element={<Business />} />
        <Route path={ ProductLinks.business } element={<Business />} />
        <Route path="/product/request" element={<Request />} />
        <Route path={ ProductLinks.request } element={<Request />} />
        <Route path={"/product/providers"} element={<Provide />} />
        <Route path={ ProductLinks.provide } element={<Provide />} />

        <Route path='/information/pricing-and-payment' element={<PricingAndPayment />} />
        <Route path={ InformationLinks.payment } element={<PricingAndPayment />} />
        <Route path='/information/serch-and-countries' element={<CountriesInSerch />} />
        <Route path={ InformationLinks.countries } element={<CountriesInSerch />} />
        <Route path={"/information/safety-guidelines"} element={<SafetyGuideline />} />
        <Route path={ InformationLinks.safety } element={<SafetyGuideline />} />

        <Route path='/support' element={<Support />} />
        <Route path={ MainLinks.helpAndSupport } element={<Support />} />
        <Route path="/legal" element={<LegalHub />}>
          <Route index element={<LegalBodyIndex />} />
          <Route path={ SupportLinks.legalSub } element={<LegalBodyDocument />} />
        </Route>
        <Route path={ SupportLinks.legal } element={<LegalHub />}>
          <Route index element={<LegalBodyIndex />} />
          <Route path={ SupportLinks.legalSub } element={<LegalBodyDocument />} />
        </Route>
        <Route path='/support/hub' element={<SupportHub />} />
        <Route path={ SupportLinks.support } element={<SupportHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
