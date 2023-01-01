import Price from '../../assets/plans/dollar.png';
import './box.css';

export const PaymentMethodBox = ({ data, title }) => {
    return (
        <div className="boxWithData">
            <h3> { title } </h3>
            <div className="boxWithDataContent">
                {
                    data.map((item) => {
                        return <div key={ item.id } className="boxData">
                            <img alt="serch" src={ item.type } width={ item.width } />
                            <h4> { item.name } </h4>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export const PlanDescriptionBox = ({ data }) => {
    return (
        <div className="boxCenter">
            {
                data.map((item, index) => {
                    const{image, title, subtitle, list, price} = item;
                    return(
                        <div key={index}>
                            <div className="boxCenterImage">
                                <img alt="" src={ image } width={ 100 } />
                            </div>
                            <h3> { title } </h3>
                            <p> { subtitle } </p>
                            <div className="boxList" >
                                {
                                    list.map((value, key) => {
                                        return <div key={ value.id }>
                                            <p> ~ { value.list } </p>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="price">
                                <img alt="" src={ Price } width={ 40 } />
                                <h2> { price } </h2>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}