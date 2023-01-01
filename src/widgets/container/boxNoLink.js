import './box.css';

const BoxNoLink = ({title, subtitle, image, width}) => {
    return (
        <div className="boxNoLink">
            <div className='boxNoLinkHeader'>
                <img alt='' src={ image } width={width} />
                <h3>{ title }</h3>
            </div>
            <div className='boxSideText'>
                <p>{ subtitle }</p>
            </div>
        </div>
    );
}

export default BoxNoLink;