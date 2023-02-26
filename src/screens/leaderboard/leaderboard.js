import { TeamImages } from "../../config/images/key"
import { Footer, Header, Title } from "../../widgets/pageWidget"

export const LeaderboardPage = () => {
    Title("Leadership Board || Serch Team")
    return (
        <>
            <Header
                pagetitle={"Leadership"}
                pagedescription="Serch and its leading team"
            />

            {
                SerchTeam.map((item, index) => {
                    return <div style={{padding: "2rem", backgroundColor: "#FFFFFF"}} key={index}>
                        <h2 style={{color: "#030001", paddingBottom: "2rem"}}>{item.header}</h2>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>{
                            item.team.map((item, index) => {
                                return <div style={{
                                    backgroundColor: "#FAFAFA",
                                    zIndex: "1",
                                    borderRadius: "0.1rem",
                                    padding: "1rem",
                                    margin: "0.5rem 0.5rem 0.5rem 0rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
                                }} className="serch-team-box" key={index}>
                                    <img alt={item.imageAlt} src={item.image} style={{borderRadius: "50%",}} height={item.height}/>
                                    <div className="serch-team-box-content">
                                        <p style={{fontSize: "1.2rem"}}>{item.name}</p>
                                        <p>{item.position}</p>
                                    </div>
                                </div>
                            })
                        }</div>
                    </div>
                })
            }

            <Footer />
        </>
    )
}

export const SerchExecutiveTeam = [{
    image: TeamImages.landscapeMervo,
    height: "200px",
    imageAlt: "Serch CEO",
    name: "Evaristus Adimonyemma",
    position: "Chief Executive Officer"
}];

export const CollaborativeTeam = [{
    image: TeamImages.landscapeMervo,
    height: "200px",
    imageAlt: "Serch CEO",
    name: "Evaristus Adimonyemma",
    position: "Chief Executive Officer"
}];

export const SerchTeam = [{
    header: "Executive Team",
    team: SerchExecutiveTeam,
},
// {
//     header: "Collaborative Team",
//     team: CollaborativeTeam
// }
];