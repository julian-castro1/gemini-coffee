import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function AuthenticationPopUp({closeLogin, toggleMessage, changeMessageContent}){
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [name, changeName] = useState('');
    const [newUser, changeNewUser] = useState(false);

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

    function toggleNewUser(){
        changeNewUser(!newUser);
    }
    function signIn(){
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const name = userCredential.user.displayName || userCredential.user.email;
                changeMessageContent('success', `Welcome back, ${name}!`);
                toggleMessage();
                closeLogin();
            })
            .catch((error) => {
                const errorMessage = error.code;
                changeMessageContent('error', errorMessage);
                toggleMessage();
                closeLogin();
            });
    }
    function signUp(){
        if(name === ''){
            alert('Please enter a name');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: name // Replace with the actual name
                });
            })
            .then(() => {
                changeMessageContent('success', `Welcome, ${name}!`);
                toggleMessage();
                closeLogin();
            })
            .catch((error) => {
                const errorMessage = error.code;
                changeMessageContent('error', errorMessage);
                toggleMessage();
                closeLogin();
            });
    }

    return(
        <PopUpContainer ref={containerRef}>
            <PopUpHeader>
                <PopUpTitle>Gemini Coffee</PopUpTitle>
            </PopUpHeader>
            <PopUpBody>
                {newUser && <PopUpInput type='text' placeholder='Name' value={name} onChange={e => changeName(e.target.value)}/> }
                <PopUpInput type='email' placeholder='Email' value={email} onChange={e => changeEmail(e.target.value)}/>
                <PopUpInput type='password' placeholder='Password' value={password} onChange={e => changePassword(e.target.value)}/>
                <Buttons>
                    <PopUpButton onClick={toggleNewUser} main={false}>{newUser ? 'Go to Login' : 'Create an account'}</PopUpButton>
                    <PopUpButton onClick={newUser ? signUp : signIn} main={true}>{newUser ? 'Sign Up' : 'Sign In'}</PopUpButton>
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
    background-color: ${props=>props.main ? props.theme.background : props.theme.median};

    &:hover{
        cursor: pointer;
    }
`



export default AuthenticationPopUp;