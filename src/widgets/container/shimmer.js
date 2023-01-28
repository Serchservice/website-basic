import './shimmer.css';

export const Shimmer = () => {
    return(
        <div style={{width: "auto", margin: "1rem 1rem"}}>
            <div style={{height: "10px"}}></div>
            <div className="shimmerContainer">
                <div className="shimmerBox" style={{height: "50px", borderRadius: "10px"}}></div>
            </div>
            <div style={{height: "40px",}}></div>
            <div className="shimmerContainer">
                <div className="shimmerBox" style={{height: "30px", borderRadius: "10px", width: "200px"}}></div>
            </div>
            <div style={{height: "40px",}}></div>
            <div className="shimmerContainer">
                <div className="shimmerBox" style={{height: "40px", borderRadius: "10px", width: "400px"}}></div>
            </div>
            <div style={{height: "20px",}}></div>
            <div className="shimmerContainer">
                <div className="shimmerBox" style={{height: "200px", borderRadius: "10px"}}></div>
            </div>
            <div style={{height: "10px",}}></div>
            <div className="shimmerContainer">
                <div className="shimmerBox" style={{height: "200px", borderRadius: "10px"}}></div>
            </div>
        </div>
    );
}

export const LegalShimmer = () => {
    return(
        <div style={{width: "auto", margin: "1rem 1rem"}}>
            <div style={{height: "10px"}}></div>
            <div className="shimmerContainer">
                <div className="shimmerBox" style={{height: "50px", borderRadius: "10px"}}></div>
            </div>
            {/* <div style={{height: "40px",}}></div>
            <div className="shimmerContainer">
                <div className="shimmerBox" style={{height: "30px", borderRadius: "10px", width: "200px"}}></div>
            </div> */}
            <div style={{height: "40px",}}></div>
            <div className="shimmerContainer">
                <div className="shimmerBox" style={{height: "40px", borderRadius: "10px", width: "400px"}}></div>
            </div>
            <div style={{height: "20px",}}></div>
            <div className="shimmerContainer">
                <div className="shimmerBox" style={{height: "200px", borderRadius: "10px"}}></div>
            </div>
            <div style={{height: "10px",}}></div>
            <div className="shimmerContainer">
                <div className="shimmerBox" style={{height: "200px", borderRadius: "10px"}}></div>
            </div>
        </div>
    );
}