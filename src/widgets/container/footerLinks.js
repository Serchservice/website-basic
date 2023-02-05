import { Emails } from "../../config/custom/emails";
import { AppLinks, CompanyLinks, InformationLinks, ProductLinks, SocialLinks, SupportLinks } from "../../config/custom/links";
import Images from "../../config/images/images";

export const CompanyLink = [{
    link: CompanyLinks.about,
    title: "About Us"
},{
    link: CompanyLinks.blog,
    title: "Blog"
},{
    link: CompanyLinks.newsroom,
    title: "Newsroom"
},{
    link: CompanyLinks.marketplace,
    title: "Marketplace"
},{
    link: CompanyLinks.careers,
    title: "Careers"
}]

export const ProductLink = [{
    title: "Serch for Business",
    link: ProductLinks.business
},{
    title: "Request",
    link: ProductLinks.request
},{
    title: "Provide",
    link: ProductLinks.provide
}]

export const InformationLink = [{
    title: "Safety guidelines",
    link: InformationLinks.safety
},{
    title: "Pricing & Payment Methods",
    link: InformationLinks.payment,
},{
    title: "Countries in Serch",
    link: InformationLinks.countries
}]

export const HelpAndSupportLink = [{
    title: "Legal Hub",
    link: SupportLinks.legal
},{
    title: "Help Hub",
    link: SupportLinks.help
},{
    title: "Support Hub",
    link: SupportLinks.support
},{
    title: "Improve our services",
    link: Emails.improve
},{
    title: "Report a broken feature",
    link: Emails.report
}]

export const FooterLinks = [{
    section: "Company",
    link: CompanyLink
},{
    section: "Product",
    link: ProductLink
},{
    section: "Information",
    link: InformationLink
},{
    section: "Help and Support",
    link: HelpAndSupportLink
}]

export const SerchAppDownloadLinks = [{
    image: Images.playStore,
    imageAlt: 'Serch Mobile App Playstore Android',
    link: AppLinks.playStore,
    height: "65px"
},{
    image: Images.appleStore,
    imageAlt: 'Serch Mobile App AppleStore iOS',
    link: AppLinks.appleStore,
    height: "65px"
}]

export const SocialMediaLinks = [{
    image: Images.twitter,
    imageAlt: 'Serch Twitter Link',
    link: SocialLinks.twitter,
},{
    image: Images.facebook,
    imageAlt: 'Serch Facebook Link',
    link: SocialLinks.facebook,
},{
    image: Images.gmail,
    imageAlt: 'Serch Email Link',
    link: Emails.help,
},{
    image: Images.instagram,
    imageAlt: 'Serch Instagram Link',
    link: SocialLinks.instagram,
},{
    image: Images.linkedIn,
    imageAlt: 'Serch LinkedIn Link',
    link: SocialLinks.linkedIn,
}]

export const FooterDocumentLinks = [{
    link: "/legal/document/privacy-policy",
    name: "Privacy"
},{
    link: "/legal/document/terms-and-conditions",
    name: "Terms"
},{
    link: "/legal/document/accessibility-policy",
    name: "Accessibility"
}]