import { Link } from 'react-router-dom';
import './box.css';

const BoxSideImage = ({link, title, subtitle, image, width}) => {
    return (
        <Link to={ link } className="hover">
            <div className="boxSide">
                <div className='boxSideHeader'>
                    <img alt='' src={ image } width={width} />
                    <h3>{ title }</h3>
                </div>
                <div className='boxSideText'>
                    <p>{ subtitle }</p>
                </div>
            </div>
        </Link>
    );
}

export default BoxSideImage;