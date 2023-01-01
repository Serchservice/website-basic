import { CareerImages } from "../../../config/images/companyImages";
import { useState, useEffect } from 'react';
import { CareerData } from "./slide";
import '../css/company.css';
import './slide.css';

export const CareerHeader = () => {
    return (
        <div className="productHeader">
            <div className='productHeaderText'>
                <h2>Roles in Serch</h2>
                <p>Here we lay out open roles in Serch for people to get into.</p>
                <p>Looking out for "Service made easy" type of people.</p>
            </div>
            <img alt='' src={ CareerImages.toDo } width={600} />
        </div>
    );
}

export const CareerRoles = () => {
    return (
        <div className="productHeader">
            <h2>We don't have any open roles at the moment. We will update this page once any opens up.</h2>
        </div>
    );
}

export const CareerFooter = () => {
    return (
        <div className="productHeader">
            <div className='productHeaderText'>
                <h2>Still starting to achieve our dreams</h2>
                <p>We haven't started anything yet. We still have a long way to go.</p>
                <p>We are surely going all the way up. The right team matters.</p>
            </div>
            <img alt="" src={ CareerImages.workHeader } width={500} />
        </div>
    );
}

export const CareerLife = () => {
    return (
        <div className="career">
            <h1>Life @Serch </h1>
            <div className='careerOne'>
                <img alt='' src={ CareerImages.careerOne } width={ 500 } />
                <div className="careerOneContent">
                    <h2>Team Happiness</h2>
                    <p>We value the happiness of every team player in Serch.
                        With every happy player, there is bound to be more great ideas and more development.
                        Thus increasing our goals-getting quicker and faster.
                    </p>
                </div>
            </div>
            <div className='careerOne'>
                <div className="careerTwoContent">
                    <h2>Passion is what we have</h2>
                    <p>Nothing stops us. Serch is soaring higher than it dreamed of.
                        Though we never dreamt of any limits, Serch is breaking boundaries in services.
                        Brimming ideas into life are what we cherish in Serch services.
                    </p>
                </div>
                <img alt='' src={ CareerImages.careerTwo } width={ 500 } />
            </div>
            <div className='careerOne'>
                <img alt='' src={ CareerImages.careerThree } width={ 500 } />
                <div className="careerOneContent">
                    <h2>Service made easy</h2>
                    <p>Our repeated motto still stands strong to the core of our structure and culture.
                        Every team player automatically gets into this dream of Serch, by thinking out more ideas.
                        No limits, no stoppage, no underestimation..
                    </p>
                </div>
            </div>
        </div>
    );
}

export const CareerInnovation = () => {
    return (
        <div>
            <div className="productHeader">
                <div className='contentRightBlack'>
                    <h2>Team with passion and zeal</h2>
                    <p>Making services easy is what we all desire. And in doing such, we get to grow more, together.</p>
                    <p>Serch team is more and more investing in the best services ever. Teamwork is just top-notch.</p>
                </div>
                <img alt='' src={ CareerImages.innovate } width={500} />
            </div>
            {/*Add stuff */}
            <div className="productHeader">
                <img alt='' src={ CareerImages.board } width={500} />
                <div className='contentLeftBlack'>
                    <h2>Together, plans get more beautiful</h2>
                    <p>We keep on building and discussing. Good services are a product of the teamwork.</p>
                    <p>Everybody putting all they have to one signle aim, "Service made easy."</p>
                </div>
            </div>
        </div>
    );
}

export const CareerFromSerch = () => {
    const [ data ] = useState(CareerData);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = data.length -1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, data]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return () => {
            clearInterval(slider)
        }
    }, [index]);

    return(
        <div className="slideIt">
            <div className="serchSlider">
                {
                    data.map((item, indexing) => {
                        const {id, image, title, subtitle} = item;
                        let position = "next";
                        if(indexing === index){
                            position = 'activeSlide';
                        } else if(indexing === index - 1 || (index === 0 && indexing === data.length - 1)){
                            position = 'lastSlide';
                        }

                        return(
                            <article key={id} className={position}>
                                <img alt={"name"} src={image} />
                                <div className="slideText">
                                    <h2>{title}</h2>
                                    <p>{subtitle}</p>
                                </div>
                            </article>
                        );
                    })
                }
            </div>
            <div>
                <button onClick={() => setIndex(index - 1)}>Next</button>
                <button onClick={() => setIndex(index + 1)}>Previous</button>
            </div>
        </div>
    );
}

// export const CareerFromSerch = () => {
    // const sliderStyles = {
    //     width: 'auto',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    // }
    // var settings = {
    //     dots: true,
    //     lazyLoad: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: true
    //         }
    //         },
    //         {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             initialSlide: 1,
    //             infinite: true,
    //             dots: true
    //         }
    //         },
    //         {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: true
    //         }
    //         }
    //     ]
    // };
//     return (
//         <div className="serchSlider">
//             {/* <div style={sliderStyles}>
//                 <NoLinkSlider>
//                     <SliderSideImage
//                         image={ CareerImages.workHeader }
//                         key={1}
//                         headertext={"Hi"}
//                         textcontent="WE made it"
//                     />
//                     <SliderSideImage
//                         key={2}
//                         image={ CareerImages.workHeader }
//                         headertext={"Hi"}
//                         textcontent="WE made it"
//                     />
//                     <SliderSideImage
//                         key={3}
//                         headertext={"Hi"}
//                         textcontent="WE made it"
//                         image={ CareerImages.workHeader }
//                     />
//                     <SliderSideImage
//                         key={4}
//                         headertext={"Hi"}
//                         textcontent="WE made it"
//                         image={ CareerImages.workHeader }
//                     />
//                     <SliderSideImage
//                         key={5}
//                         headertext={"Hi"}
//                         textcontent="WE made it"
//                         image={ CareerImages.workHeader }
//                     />
//                 </NoLinkSlider>
//             </div> */}
//             {/* <Slider {...settings}>
//                 <SliderSideImage
//                     image={ CareerImages.workHeader }
//                     key={1}
//                     headertext={"Hi"}
//                     textcontent="WE made it"
//                 />
//                 <SliderSideImage
//                     key={2}
//                     image={ CareerImages.workHeader }
//                     headertext={"Hi"}
//                     textcontent="WE made it"
//                 />
//                 <SliderSideImage
//                     key={3}
//                     headertext={"Hi"}
//                     textcontent="WE made it"
//                     image={ CareerImages.workHeader }
//                 />
//                 <SliderSideImage
//                     key={4}
//                     headertext={"Hi"}
//                     textcontent="WE made it"
//                     image={ CareerImages.workHeader }
//                 />
//                 <SliderSideImage
//                     key={5}
//                     headertext={"Hi"}
//                     textcontent="WE made it"
//                     image={ CareerImages.workHeader }
//                 />
//             </Slider> */}
//         </div>
//     );
// }