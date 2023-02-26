export const MainLinks = {
    home: '/',
    company: '/company/',
    product: '/product/',
    information: '/information/',
    helpAndSupport: '/support/',
    yetToLaunch: '/yet-to-launch/',
    waitlist: '/waitlist-programme/'
}

export const AppLinks = {
    playStore: MainLinks.yetToLaunch,
    appleStore: MainLinks.yetToLaunch,
    providerPlayStore: MainLinks.yetToLaunch,
    providerAppleStore: MainLinks.yetToLaunch,
    signupProvider: MainLinks.yetToLaunch,
    loginProvider: MainLinks.yetToLaunch,
    signupUser: MainLinks.yetToLaunch,
    loginUser: MainLinks.yetToLaunch
}

export const ProviderAppLinkJson = [
    {
        name: "Download the provider app for android",
        link: AppLinks.providerPlayStore
    },
    {
        name: "Download the provider app for iOS",
        link: AppLinks.providerAppleStore
    },
]

export const UserAppLinkJson = [
    {
        name: "Download the user app for android",
        link: AppLinks.playStore
    },
    {
        name: "Download the user app for iOS",
        link: AppLinks.appleStore
    },
]

export const CompanyLinks = {
    about: '/company/about/',
    blog: '/company/blogs/',
    blogs: '/company/blogs/blog/',
    blogPost: ':id',
    blogCategory: 'category/:category',
    newsroom: '/newsroom/',
    news: '/company/newsroom/news/:id/',
    assets: '/assets/',
    assetsDownload: '/assets/download/:link',
    leadership: "/company/newsroom/news/serch-leadership-board-with-its-best-in-team",
    marketplace: '/marketplace/',
    careers: '/company/careers/'
}

export const ProductLinks = {
    business: '/business/',
    request: '/product/request/',
    provide: '/product/provide/'
}

export const InformationLinks = {
    // docs: '/information/docs/',
    safety: '/information/safety-guidelines/',
    payment: '/information/pricing-and-payment-methods/',
    countries: '/information/serch-and-countries/'
}

export const SupportLinks = {
    legal: '/legal',
    legalSub: 'document/:id',
    support: '/support/hub/',
    help: 'https://help.serchservice.com',
}

export const LegalLinks = {
    communityGuidelines: 'community-guidelines',
    cookiePolicy: 'cookie-policy',
    feedbackPolicy: 'feedback-policy',
    advertPolicy: 'global-advertising-content-policy',
    discriminationPolicy: 'non-discrimination-policy',
    privacyPolicy: 'privacy-policy',
    referralProgramme: 'referral-programme',
    termsAndConditions: 'terms-and-conditions',
    userContent: 'user-generated-content',
    zeroPolicy: 'zero-tolerance-policy',
    accessibility: 'accessibility-policy'
}

export const HelpLinks = {}

export const ExternalLinks = {}

export const SocialLinks = {
    twitter: 'https://www.twitter.com/serchservice',
    facebook: 'https://www.facebook.com/serchservice',
    instagram: 'https://www.instagram.com/serchservice',
    linkedIn: 'https://www.linkedin.com/company/serchservice'
}