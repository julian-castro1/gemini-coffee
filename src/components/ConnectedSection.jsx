import styled from "styled-components";
import Title from "./Title";

function ConnectedSection({id}){

    return(
        <ConnectedContainer id={id}>
            <Title text='stay connected'/>
        </ConnectedContainer>
    )
}

const ConnectedContainer = styled.div`
    
`

export default ConnectedSection;