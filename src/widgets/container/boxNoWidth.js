const BoxColumn = ({title, subtitle, image, width}) => {
    return (
        <div className="boxNoWidth">
            <div className='boxColumnHeader'>
                <img alt='' src={ image } width={width} />
                <h3>{ title }</h3>
            </div>
            <div className='boxSideText'>
                <p>{ subtitle }</p>
            </div>
        </div>
    );
}

export default BoxColumn;