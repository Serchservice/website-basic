import { Link } from "react-router-dom";

const BoxBottomLink = ({ image, width, title, subtitle, link, linkText }) => {
    return (
        <div className="boxColumn">
            <div className='boxColumnHeader'>
                <img alt='' src={ image } width={width} />
                <h3>{ title }</h3>
            </div>
            <div className='boxSideText'>
                <p>{ subtitle }</p>
            </div>
            <div className="boxLink">
                <Link to={ link }> { linkText } </Link>
            </div>
        </div>
    );
}

export default BoxBottomLink;