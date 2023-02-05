import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompanyLinks, InformationLinks, MainLinks, ProductLinks, SupportLinks } from "../../config/custom/links";
import { CountriesInSerch, PricingAndPayment, SafetyGuideline } from "../pages/information";
import { Home, NoPage, Support, YetToLaunch } from "../pages/main";
import { LegalHub, SupportHub } from "../pages/support";
import { Business, Provide, Request } from "../pages/product";
import { About, Blog, Career, MarketPlace, Newsroom } from "../pages/company";
import { LegalBodyDocument, LegalBodyIndex } from "../../screens/support/legalHub/widgets";
import { BlogCategory, BlogPost, BlogPostIndex } from "../../screens/company/blog/blogScreen";
import { NewsScreenPost } from "../../screens/company/newsroom/newsScreen";
import { AssetDownloadPage, AssetsPage } from "../../screens/assets/assets";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NoPage />} />

          <Route path={ MainLinks.yetToLaunch } element={<YetToLaunch />} />

          <Route path={ CompanyLinks.news } element={<NewsScreenPost />} />

          <Route path={ MainLinks.home } element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/' element={<Home />} />

          <Route path="/company/about" element={<About />} />
          <Route path={ CompanyLinks.about } element={<About />} />
          <Route path={"/company/blogs"} element={<Blog />} />
          <Route path={ CompanyLinks.blog } element={<Blog />} />
          <Route path={ CompanyLinks.blogs } element={<BlogPost />}>
            <Route index path={ CompanyLinks.blogPost } element={<BlogPostIndex />} />
            <Route path={ CompanyLinks.blogCategory } element={<BlogCategory />} />
          </Route>
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path={ CompanyLinks.newsroom } element={<Newsroom />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path={ CompanyLinks.marketplace } element={<MarketPlace />} />
          <Route path={"/company/careers"} element={<Career />} />
          <Route path={ CompanyLinks.careers } element={<Career />} />
          <Route path={ CompanyLinks.assets } element={<AssetsPage />} />
          <Route path={ CompanyLinks.assetsDownload } element={<AssetDownloadPage />} />

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
    </>
  );
}

export default App;
