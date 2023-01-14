import './css.css';
import {  useState } from "react";
import { Icons } from '../../config/images/icons';
import { Link } from 'react-router-dom';

const FAQ = ({
    header, subHeader, faqOneQuestion, faqTwoQuestion, faqThreeQuestion,
    faqOneAnswer, faqTwoAnswer, faqThreeAnswer, linkTwo, linkThree,
    linkTwoText, linkThreeText
}) => {

    const [openThree, setOpenThree ] = useState(false);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);

    const openFAQOne = () => {
        //setopenThree( openThree => !openThree );
        openOne ? setOpenOne(false) : setOpenOne(true);
        console.log(openOne);
    }

    const openFAQTwo = () => {
        //setopenThree( openThree => !openThree );
        openTwo ? setOpenTwo(false) : setOpenTwo(true);
        console.log(openTwo);
    }

    const openFAQThree = () => {
        //setopenThree( openThree => !openThree );
        openThree ? setOpenThree(false) : setOpenThree(true);
        console.log(openThree);
    }

    return (
        <div className="FAQ">
            <div className="FAQHeader">
                <h2>{ header }</h2>
                <p>{ subHeader }</p>
            </div>
            <div className={`'faqContainer' ${openOne ? 'activeFAQ' : 'faq' }`} onClick={ openFAQOne }>
                <div className='faqHeader'>
                    <h3> { faqOneQuestion } </h3>
                    {
                        openOne ? <img alt='' src={ Icons.openFolder } width={20} /> : <img alt='' src={ Icons.closeFolder } width={20} />
                    }
                </div>
                <p> { faqOneAnswer } </p>
            </div>

            <div className={ openTwo ? 'activeFAQ' : 'faq' } onClick={ openFAQTwo }>
                <div className='faqHeader'>
                    <h3> { faqTwoQuestion } </h3>
                    {
                        openTwo ? <img alt='' src={ Icons.openFolder } width={20} /> : <img alt='' src={ Icons.closeFolder } width={20} />
                    }
                </div>
                <p> { faqTwoAnswer } </p>
                <a href={ linkTwo }> { linkTwoText } </a>
            </div>

            <div className={ openThree ? 'activeFAQ' : 'faq' } onClick={ openFAQThree }>
                <div className='faqHeader'>
                    <h3> { faqThreeQuestion } </h3>
                    {
                        openThree ? <img alt='' src={ Icons.openFolder } width={20} /> : <img alt='' src={ Icons.closeFolder } width={20} />
                    }
                </div>
                <p> { faqThreeAnswer } </p>
                <Link to={ linkThree }> { linkThreeText } </Link>
            </div>
        </div>
    );
}

export default FAQ;