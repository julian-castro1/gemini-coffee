import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function AuthenticationPopUp({closeLogin}){
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');

    const auth = getAuth();
    const containerRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                closeLogin();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeLogin]);

    function signIn(){
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {})
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
    function signUp(){
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {})
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    function checkUser(){
        if(auth.currentUser){
            auth.signOut();
            alert("Signed out");
        }
    }

    return(
        <PopUpContainer ref={containerRef}>
            <PopUpHeader onClick={checkUser}>
                <PopUpTitle>Gemini Coffee</PopUpTitle>
            </PopUpHeader>
            <PopUpBody>
                <PopUpInput type='email' placeholder='Email' value={email} onChange={e => changeEmail(e.target.value)}/>
                <PopUpInput type='password' placeholder='Password' value={password} onChange={e => changePassword(e.target.value)}/>
                <Buttons>
                    <PopUpButton onClick={signUp}>Sign Up</PopUpButton>
                    <PopUpButton onClick={signIn}>Sign In</PopUpButton>
                </Buttons>
            </PopUpBody>
        </PopUpContainer>
    )
}

const PopUpContainer = styled.div`
    display: flex;
    flex-direction: column;

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
`;

const PopUpHeader = styled.div`
   display: flex;
   color: ${props=>props.theme.back2};
    justify-content: center;

    margin-bottom: 1.2rem;

    font-weight: 700;
    font-size: 1.2rem;
`
const PopUpTitle = styled.div`
    
`
const PopUpBody = styled.div`
    display: flex;
    flex-direction: column;

    /* margin: 1rem; */
    /* margin-top: 2rem; */

    gap: .5rem;
`
const PopUpInput = styled.input`
    height: 2rem;
    border-radius: 1rem;
    border: none;
    padding-left:1rem;
    padding-right:1rem;

    background-color: ${props=>props.theme.colorContrast};

    color: ${props=>props.theme.back2};
    font-size: 1rem;
    font-weight: 500;
    
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: .5rem;

    gap:.2rem;
`
const PopUpButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.theme.back2};
    height: 2.4rem;
    border-radius: 1rem;
    border: none;
    font-weight: 700;

    color: ${props=>props.theme.color};

    &:hover{
        cursor: pointer;
    }
`



export default AuthenticationPopUp;