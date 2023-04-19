import styled from 'styled-components';

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${(props) =>
    (props.variant === 'outline' ? 'blue':"#B80000")
};
padding: 1rem;
border-radius: 8px;
margin-bottom: 20px;
@media screen and (max-width: 768px){
    
}

.subscribe-item{
    display: flex;
    /* background-color: blue; */
    /* /* justify-content: center; */
    /* align-items: center; */
    .suscribe-image{
        @media screen and (max-width: 768px){
            width: 70%;
        } 
    }
}

.subscribe-name-box  h2{
    color: white;

}
.item{
    font-size: 16px;
    line-height: 10px;
    color: white;

    @media screen and (max-width: 768px){
        font-size: 12px;
    } 
}

.fees{
    margin-left: auto;
    margin-top: 28px;
    color: white;
}
.subscribe-name-box{
    margin-left: 20px;
}

.subscribe-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.subscribe-footer:last-child{
    color: white;
}



`;