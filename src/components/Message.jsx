import styled from "styled-components";
import errorImg from '../assets/x.png';
import successImg from '../assets/check.png';
import { useEffect, useRef } from "react";

function Message({icon, message, closeMessage}){

    const containerRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                closeMessage();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeMessage]);

    return(
        <MessageContainer ref={containerRef}>
            <Icon src={icon === 'error' ? errorImg : successImg}/>
            <MessageText>{message}</MessageText>
            <ConfirmButton onClick={closeMessage}><span>OK</span></ConfirmButton>
        </MessageContainer>
    )
}

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    top: 50%;
    left: 50%;

    width: 17rem;
    /* height: 13rem; */

    border-radius: 1.6rem;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,.2);

    background-color: ${props=>props.theme.color};

    transform: translate(-50%, -50%);

    padding: 1rem;

    gap:.5rem;
`;
const Icon = styled.img`
    width: 4rem;
    height: 4rem;
`;
const MessageText = styled.div`
    color: ${props=>props.theme.background};
    font-weight: 600;
    font-size: 1.5rem;
`
const ConfirmButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props=>props.theme.background};
    width: 100%;
    height: 3rem;
    border-radius: 1rem;

    font-weight: 700;
    color: ${props=>props.theme.color};
    font-size: 1rem;

    &:hover{
        cursor: pointer;
    }
`

export default Message;