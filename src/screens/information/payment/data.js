export const PaymentImages = {
    mastercard: require('../../../assets/pay/mastercard.png'),
    visa: require('../../../assets/pay/visa.png'),
    applePay: require('../../../assets/pay/apple-pay.png'),
    googlePay: require('../../../assets/pay/google-pay.png'),
    paypal: require('../../../assets/pay/paypal.png'),

    payu: require('../../../assets/plans/serchPAYU.png'),
    free: require('../../../assets/plans/serchFree.png'),
    allDay: require('../../../assets/plans/serchAllDay.png'),
    premium: require('../../../assets/plans/serchPremium.png'),
    users: require('../../../assets/plans/serchUsers.png'),
}

export const Cards = [{
    // type: "/assets/pay/mastercard.png",
    type: PaymentImages.mastercard,
    name: "MasterCard",
    width: '50'
},{
    type: PaymentImages.visa,
    name: "Visa",
    width: '80'
}]

export const Wallets = [{
    type: PaymentImages.applePay,
    name: "Apple Pay",
    width: '70'
},{
    type: PaymentImages.googlePay,
    name: "Google Pay",
    width: '70'
},{
    type: PaymentImages.paypal,
    name: "PayPal",
    width: '80'
}]

export const PaymentMethods = [{
    title: "Cards",
    payment: Cards
},{
    title: "Wallets",
    payment: Wallets
}]

export const FreePlan = [
    "Profile check",
    "Tip2fix",
    "RequestShare",
    "SWM security",
    "Service scheduling",
    "Rating summary"
]

export const AllDayPlan = [
    "Everything in the free plan",
    "Account report download",
]

export const PremiumPlan = [
    "Everything in all day plan",
    "See who bookmarked you",
    "See who rated you and rate comment",
    "Certificate Generation/Download"
]

export const UsersPlan = [
    "Request for providers",
    "ProvideShare",
    "CTG security",
    "Service scheduling",
    "Provider profile check",
    "Tip2Fix",
    "Bookmark providers",
    "Voice call, video call or chat providers",
    "Location based or enter a location"
]

export const PAYUPlan = []

export const SerchPlans = [{
    image: PaymentImages.users,
    imageAlt: "Serch User Plan",
    title: "Serch Free",
    subtitle: "No Fees, No Charges",
    category: "For Users/Clients",
    data: UsersPlan
},{
    image: PaymentImages.free,
    imageAlt: "Serch Free Plan",
    title: "Free Trial",
    subtitle: "No Fees, No Charges",
    category: "For Providers/Artisans",
    duration: "A period of 14 days",
    data: FreePlan
},{
    image: PaymentImages.allDay,
    imageAlt: "Serch AllDay Plan",
    title: "All Day",
    subtitle: "8,000",
    category: "For Providers/Artisans",
    strikeThrough: "3,000",
    duration: "Every month, recurring billing.",
    data: AllDayPlan
// },{
//     image: PaymentImages.payu,
//     imageAlt: "Serch Pay-As-You-Use Plan",
//     title: "Pay-As-You-Use (PAYU)",
//     subtitle: `₦15,000`,
//     data: PAYUPlan
},{
    image: PaymentImages.premium,
    imageAlt: "Serch Premium Plan",
    title: "Premium",
    subtitle: "5,000",
    strikeThrough: "3,000",
    duration: "Every month, recurring billing.",
    category: "For Providers/Artisans",
    data: PremiumPlan
},]