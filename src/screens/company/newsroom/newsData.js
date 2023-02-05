import { NewsImage } from "../../../config/images/blogImages";
import platformWork from './documents/platformWork.md';
import peekIntoRating from './documents/peekIntoRating.md';
import relaxAnytime from './documents/relaxAnytime.md';
import operatingSystem from './documents/operatingSystem.md';
import twoWayRating from './documents/twoWayRating.md';
import privacySetting from './documents/privacySetting.md';
import whenWeSaySerch from './documents/whenWeSaySerch.md';
import profileCheck from './documents/profileCheck.md';
import safetyBehaviour from './documents/safetyBehaviour.md';

export const News = [{
    id: "a-peek-into-your-serch-rating",
    topic: "A Peek Into Your Serch Rating",
    date: "December 24, 2022 || Serch",
    img: NewsImage.peek_into_rating,
    imgAlt: "Look into Serch rating",
    news: peekIntoRating
},{
    id: "when-service-providing-becomes-a-platform-work",
    topic: "When Service Providing Becomes A Platform Work",
    date: "December 20, 2022 || Serch",
    img: NewsImage.service_providing_platform,
    imgAlt: "Service Providing || Artisans' platform",
    news: platformWork
},{
    id: "relax-anytime-service-everywhere",
    topic: "Relax anytime, service everywhere",
    date: "November 18, 2022 || Serch",
    img: NewsImage.relax,
    imgAlt: "Relax while artisans work for you",
    news: relaxAnytime
},{
    id: "an-operating-system-for-everyday-life",
    topic: "An Operating System For Everyday Life",
    date: "December 24, 2022 || Serch",
    img: NewsImage.operating_system,
    imgAlt: "Android, iOS platforms for Serch",
    news: operatingSystem
},{
    id: "safe-behaviour-no-matter-what-you-are-servicing",
    topic: "Safety Behaviour at all times: With Serch",
    date: "December 24, 2022 || Serch",
    img: NewsImage.safety_behaviour,
    imgAlt: "Being Safe in Serch",
    news: safetyBehaviour
},{
    id: "availability-of-the-provider",
    topic: "Service Provider Profile Check. Every time, Everywhere",
    date: "December 24, 2022 || Serch",
    img: NewsImage.check_availability,
    imgAlt: "Provider Profile Check",
    news: profileCheck
},{
    id: "what-do-we-mean-when-we-say-serch",
    topic: "When We Say Serch, What Do We Mean?",
    date: "December 24, 2022 || Serch",
    img: NewsImage.when_we_say_serch,
    imgAlt: "Service made easy",
    news: whenWeSaySerch
},{
    id: "all-in-one-place-privacy-settings",
    topic: "Your All-In-One Place Privacy Setting to Use: Easier and Better",
    date: "December 24, 2022 || Serch",
    img: NewsImage.privacy_setting,
    imgAlt: "Serch privacy setting",
    news: privacySetting
},{
    id: "two-way-rating-answered",
    topic: "Two-Way Rating - Your FAQs Answered",
    date: "December 24, 2022 || Serch",
    img: NewsImage.two_way_rating,
    imgAlt: "Two way rating",
    news: twoWayRating
}
]