import { useState } from "react";
import '../css/docs.css';
import { Link } from "react-router-dom";
import { Icons } from "../../../../config/images/icons";

export const DocContents = ({Data}) => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='docsList'>
            {
                Data.map((item, index) => {
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
                        {
                            toggleState === item.linkIndex
                            ?   <div className='docsSubHeadings'>
                                    <Link href={ item.subLinkOneId }>{ item.subLinkOne }</Link>
                                    <Link href={ item.subLinkTwoId }>{ item.subLinkTwo }</Link>
                                </div>
                            : null
                        }
                    </div>
                })
            }
        </div>
    );
}