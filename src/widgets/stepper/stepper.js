const Stepper = ({ data }) => {
    return (
        <div className="stepper">
            {
                data.map(step => {
                    return (
                        <div></div>
                    )
                })
            }
        </div>
    );
}

export default Stepper;