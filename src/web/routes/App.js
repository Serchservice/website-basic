import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import '../../screens/css/keyframes.css';
import { CompanyLinks, InformationLinks, LegalLinks, MainLinks, ProductLinks, ProfileLinks, SupportLinks } from "../../config/custom/links";
import { CountriesInSerch, Documentation, PricingAndPayment, SafetyGuideline } from "../pages/information";
import { Home, Login, NoPage, ProfileHome, SignUp, Support } from "../pages/main";
import { LegalHub, SupportHub } from "../pages/support";
import { Business, Provide, Request } from "../pages/product";
import { About, Blog, Career, MarketPlace, Newsroom } from "../pages/company";
import { BlogPost, NewsPost } from "../pages/posts";
import { FeedBackPolicy, NonDiscriminationPolicy, ZeroTolerancePolicy } from "../../screens/support/legalHub/docs/feedDiscriZero";
import { CommunityGuidelines } from "../../screens/support/legalHub/docs/community";
import { CookiePolicy, GlobalAdvertisingPolicy, UserGeneratedContentPolicy } from "../../screens/support/legalHub/docs/cookieGlobalUser";
import { PrivacyPolicy } from "../../screens/support/legalHub/docs/privacyPolicy";
import { ReferralProgramme } from "../../screens/support/legalHub/docs/referral";
import { TermsAndConditions } from "../../screens/support/legalHub/docs/termsConditions";
import { LoginUser } from "../pages/login";
import { BasicInformation, EmailVerify, PersonalInformation, ServiceOption, Subscribe } from "../pages/signup/loginSignup";
import Profile from "../pages/profilepage/Profile";
import { ProfileCall, ProfileChat, ProfileDashboard, ProfileSetting, ProfileProfile } from "../pages/profilepage/ProflePage";
// import { EmailVerify, PersonalInformation, ServiceOption } from "../pages/signup/loginSignup";
// import SignUpProvider from "../pages/signup/SignUpProvider";




// const router = createBrowserRouter(
//   createRoutesFromElements(
  
//   )
// )

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

        <Route path='/loginProvider' element={<Login />} />
        <Route path='/SignUpProvider' element={<SignUp/>} >
            <Route path="/SignUpProvider" element={<PersonalInformation/>}/>
           <Route path="/SignUpProvider/emailverify" element={<EmailVerify/>}/>
           <Route path="/SignUpProvider/serviceoption" element={<ServiceOption/>}/>
           <Route path="/SignUpProvider/basicinformation" element={<BasicInformation/>}/>
           <Route path="/SignUpProvider/subscribe" element={<Subscribe/>}/>
        
       </Route>    


       <Route path="/profile" element={<ProfileHome/>}>
           <Route path="/profile" element={<ProfileDashboard/>}/>
           <Route path={ProfileLinks.profilechat} element={<ProfileChat/>}/>
           <Route path={ProfileLinks.profilecall} element={<ProfileCall/>}/>
           <Route path={ProfileLinks.profilesetting} element={<ProfileSetting/>}/>
           <Route path={ProfileLinks.profilehome} element={<ProfileProfile/>}/>
       </Route>  
        
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

        <Route path={"/information/docs"} element={<Documentation />} />
        <Route path={ InformationLinks.docs } element={<Documentation />} />
        <Route path='/information/pricing-and-payment' element={<PricingAndPayment />} />
        <Route path={ InformationLinks.payment } element={<PricingAndPayment />} />
        <Route path='/information/serch-and-countries' element={<CountriesInSerch />} />
        <Route path={ InformationLinks.countries } element={<CountriesInSerch />} />
        <Route path={"/information/safety-guidelines"} element={<SafetyGuideline />} />
        <Route path={ InformationLinks.safety } element={<SafetyGuideline />} />

        <Route path='/support' element={<Support />} />
        <Route path={ MainLinks.helpAndSupport } element={<Support />} />
        <Route path="/legal" element={<LegalHub />} />
        <Route path={ SupportLinks.legal } element={<LegalHub />} />
        <Route path={ LegalLinks.feedbackPolicy } element={<FeedBackPolicy />} />
        <Route path={ LegalLinks.discriminationPolicy } element={<NonDiscriminationPolicy />} />
        <Route path={ LegalLinks.zeroPolicy } element={<ZeroTolerancePolicy />} />
        <Route path={ LegalLinks.communityGuidelines } element={<CommunityGuidelines />} />
        <Route path={ LegalLinks.cookiePolicy } element={<CookiePolicy />} />
        <Route path={ LegalLinks.userContent } element={<UserGeneratedContentPolicy />} />
        <Route path={ LegalLinks.advertPolicy } element={<GlobalAdvertisingPolicy />} />
        <Route path={ LegalLinks.privacyPolicy } element={<PrivacyPolicy />} />
        <Route path={ LegalLinks.referralProgramme } element={<ReferralProgramme />} />
        <Route path={ LegalLinks.termsAndConditions } element={<TermsAndConditions />} />
        <Route path='/support/hub' element={<SupportHub />} />
        <Route path={ SupportLinks.support } element={<SupportHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
