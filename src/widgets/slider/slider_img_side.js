import { useState, useEffect } from 'react';
import '../css/slider.css';

export const SliderSideImage = ({ image, headertext, textcontent }) => {
    return (
        <div className="slideContent">
            <img alt="" src={ image } width={500} />
            <div className="slideText">
                <h2>{ headertext }</h2>
                <p>{ textcontent }</p>
            </div>
        </div>
    );
}

export const NoLinkSlider = ({ data, }) => {
    const [ content ] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = content.length -1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, content]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return () => {
            clearInterval(slider)
        }
    }, [index])
}

// export const NoLinkSlider = ({props}) => {
//     const[currIndex, setCurrIndex] = useState(0);
//     return(
//         <div style={{
//             backgroundColor: '#E3E3E3',
//             width: 'auto',
//             padding: 'none'
//         }}>
//             { props[currIndex] }
//         </div>
//     );
// }

// export const NoLinkImageSlider = ({ slides }) => {
//     const[currIndex, setCurrIndex] = useState(0);
//     return (
//         <div style={{
//             backgroundColor: '#E3E3E3',
//             width: 'auto',
//             padding: 'none'
//         }}>
//             { slides[currIndex] }
//         </div>
//     );
// }