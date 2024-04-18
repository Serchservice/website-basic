import React from 'react'
import { Helmet } from 'react-helmet'
import './leadership.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Assets from '../../assets/Assets'

const Leadership = () => {
    const leaders = [
        {
            "image": "https://wyvcjsumdfoamsmdzsna.supabase.co/storage/v1/object/public/team/Evaristus.jpg",
            "name": "Evaristus Adimonyemma",
            "position": "Chief Executive Officer",
            "link": "https://linkedin.com/in/iamevaristus",
            "short_name": "Evaristus"
        }
    ]

    const board = [
        {
            "name": "Evaristus Adimonyemma",
            "position": "CEO, Serchservice"
        }
    ]

    return (
        <div className="leadership-container">
            <Helmet>
                <title>Leadership | Serch</title>
                <meta name="description" content="Serch governance and structure" />
                <meta property="og:title" content="Leadership | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ Assets.logo } />
            </Helmet>
            <Header />
            <div className="leadership-container1">
                <div className="leadership-container2">
                    <h1 className="leadership-text">Executive Team</h1>
                    <div className="leadership-team">
                        {
                            leaders.map((value, key) => {
                                return (
                                    <div className="leadership-box" key={ key }>
                                        <img alt="Profile Picture" src={ value.image } className="leadership-image" />
                                        <span className="leadership-text01">{ value.name }</span>
                                        <span className="leadership-text02">{ value.position }</span>
                                        <a href={ value.link } target="_blank" rel="noreferrer noopener" className="leadership-link">
                                            Read { value.short_name }&apos;s Bio
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="leadership-container3">
                    <h1 className="leadership-text11">Board of Directors</h1>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                    }}>
                        {
                            board.map((value, key) => {
                                return (
                                    <div className="leadership-box5" key={ key }>
                                        <span className="leadership-text12">{ value.name }</span>
                                        <span className="leadership-text13">{ value.position }</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Leadership
