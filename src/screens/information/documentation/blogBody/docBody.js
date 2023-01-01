import '../css/docs.css';
import Docs from './docs';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../../config/images/icons";

export const TableOfContents = [
    {
        linkId: 'getting_started_in_serch',
        linkHeader: 'Getting Started In Serch',
        linkIndex: 1,
        subLinkOneId: 'getting_started_as_a_provider',
        subLinkOne: 'Getting Started As A Provider',
        subLinkTwoId: 'getting_started_as_a_user',
        subLinkTwo: 'Getting Started As A User'
    },
    {
        linkId: 'getting_started_in_serch',
        linkHeader: 'Getting Started In Serch',
        linkIndex: 2,
        subLinkOneId: 'getting_started_as_a_provider',
        subLinkOne: 'Getting Started As A Provider',
        subLinkTwoId: 'getting_started_as_a_user',
        subLinkTwo: 'Getting Started As A User'
    },
    {
        linkId: 'getting_started_in_serch',
        linkHeader: 'Getting Started In Serch',
        linkIndex: 3,
        subLinkOneId: 'getting_started_as_a_provider',
        subLinkOne: 'Getting Started As A Provider',
        subLinkTwoId: 'getting_started_as_a_user',
        subLinkTwo: 'Getting Started As A User'
    },
    {
        linkId: 'getting_started_in_serch',
        linkHeader: 'Getting Started In Serch',
        linkIndex: 4,
        subLinkOneId: 'getting_started_as_a_provider',
        subLinkOne: 'Getting Started As A Provider',
        subLinkTwoId: 'getting_started_as_a_user',
        subLinkTwo: 'Getting Started As A User'
    }
]

export const DocContents = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (linkIndex) => {
        setToggleState(linkIndex);
    }

    return (
        <div className='docsList'>
            {
                TableOfContents.map((item, index) => {
                    return <div className='docsSection' key={index}>
                        <div className='docsHeading'>
                            <a href={ item.linkId }>{ item.linkHeader }</a>
                            <div className='docsIcon' onClick={() => toggleTab(1)} >
                                {
                                    toggleState === item.linkIndex
                                    ? <img alt='' src={ Icons.openFolder } width={20} />
                                    : <img alt='' src={ Icons.closeFolder } width={20} />
                                }
                            </div>
                        </div>
                        <div className='docsSubHeadings'>
                            {
                                toggleState === item.linkIndex
                                ?   <div className='docsSubHeading'>
                                        <Link to={ item.subLinkOneId }>{ item.subLinkOne }</Link>
                                        <Link to={ item.subLinkTwoId }>{ item.subLinkTwo }</Link>
                                    </div>
                                : null
                            }
                        </div>
                    </div>
                })
            }
        </div>
    );
}

const DocBody = () => {
    return (
        <div className="table_of_contents">
            <DocContents />
            <div className="">
                <div className='docsBody'>
                    <Docs />
                </div>
            </div>
        </div>
    );
}

export default DocBody;