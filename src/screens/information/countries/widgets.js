import Images from '../../../config/images/images';
import { KeyImages } from '../../../config/images/key';
import { ContainerLeftImage, ContainerRightImage } from '../../../widgets/container/containers';
import { NigerianData } from './countries';

export const CountryHeader = () => {
    return <ContainerRightImage
        image={Images.countryHeader}
        widthSize={400}
        imageAlt={"serch_and_countries"}
        props={
            <>
                <h2>Serch and Countries</h2>
                <p>For the moment, Serch is only launched in Nigeria. Find out states where Serch is active.</p>
            </>
        }
    />
}

export const CountryBody = () => {
    const emailStyle = {
        borderRadius: "0.5rem",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
        display: "flex",
        backgroundColor: "#030001",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "2rem",
        alignSelf: "center",
        marginTop: "2rem",
        height: "auto",
    }

    const emailBox = {
        width: "auto",
        display: "flex",
        marginTop: "1rem",
        flexDirection: "column",
        justifyContent: "center",
    }

    const emailInput = {
        backgroundColor: "#FAFAFA",
        padding: "1rem 1rem",
        borderRadius: "0.5rem",
        fontSize: "16px",
        width: "auto",
        margin: "0rem 0rem 1rem 0rem",
    }

    const emailButton = {
        padding: "0.5rem 1rem",
        backgroundColor: "#FAFAFA",
        color: "#030001",
        alignSelf: "flex-end",
    }

    const countryStyle = {
        display: "flex",
        textAlign: "left",
        margin: "1rem 0rem",
        alignItems: "center",
        justifyContent: "space-between",
    }

    const countryListStyle = {
        padding: "3rem",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    }

    return <>
        <div style={countryListStyle}>
            {
                NigerianData.map((country, index) =>{
                    return <div style={countryStyle} key={index}>
                        <h3 style={{margin: "0rem 1rem 0rem 1rem"}}> { country.name } </h3>
                    </div>
                })
            }
        </div>
        <ContainerLeftImage
            header={"Want to stay ahead of others and know when we launch in other states?"}
            image={KeyImages.serch}
            widthSize={400}
            imageAlt={""}
            color={"#FAFAFA"}
            flex={"wrap"}
            props={
                <div className="emailUs" style={emailStyle}>
                    <h3 style={{color: "#FAFAFA"}}>Subscribe to our newsletter and get notified.</h3>
                    <form style={emailBox}>
                        <input type="Text" placeholder="Name" style={emailInput}/>
                        <input type="mail" placeholder="Email" style={emailInput}/>
                        <button style={emailButton}> Submit </button>
                    </form>
                </div>
            }
        />
    </>
}