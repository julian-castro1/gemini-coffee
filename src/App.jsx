import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { lightTheme, darkTheme } from './theme';
import styled from 'styled-components';
import './App.css'

import Header from './components/Header';
import HomeSection from './components/HomeSection';
import MenuSection from './components/MenuSection';
import BurgerMenu from './components/BurgerMenu';
import LocationSection from './components/LocationSection';
import StorySection from './components/StorySection';
import ConnectedSection from './components/ConnectedSection';
import ContactSection from './components/ContactSection';
import AuthenticationPopUp from './components/AuthenticationPopUp';
import Message from './components/Message';

const firebaseConfig = {
    apiKey: "AIzaSyD4XyK5djogDw-buIKCBuEQL7ketLzQHro",
    authDomain: "gemini-coffee-90edd.firebaseapp.com",
    projectId: "gemini-coffee-90edd",
    storageBucket: "gemini-coffee-90edd.appspot.com",
    messagingSenderId: "610589925090",
    appId: "1:610589925090:web:52cee1a03cbab195a248bb",
    measurementId: "G-B862S91TQ5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const address = '2506 campbell st houston, tx 77093'


function App() {
  const [theme, changeTheme] = useState(darkTheme);
  const [loginOpen, changeLoginState] = useState(false);
  const [user, setUser] = useState(null);
  const [burgerOpen, changeBurgerState] = useState(false);
  const [messageOpen, changeMessageState] = useState(false);
  const [message, changeMessage] = useState({icon: 'error', message: 'there has been an error'});

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    // Clean up the subscription on unmount
    return unsubscribe;
  }, []);

  function toggleTheme(){
    console.log("changing theme")
    changeTheme( theme == darkTheme ? lightTheme : darkTheme );
  }
  function toggleLogin(){
        console.log("toggling login")
        burgerOpen && toggleBurger();
        changeLoginState(!loginOpen);
  }
  function toggleBurger(){
        console.log("toggling burger")
        changeBurgerState(!burgerOpen);
  }
  function handleSignOut(){
        auth.signOut();
        burgerOpen && toggleBurger();
        changeMessageContent('success', 'Signed out');
        toggleMessage();
  }
  function toggleMessage(){
        changeMessageState(!messageOpen);
  }
  function changeMessageContent(icon, message){
        changeMessage({icon: icon, message: message});
  }

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        { loginOpen && <AuthenticationPopUp closeLogin={toggleLogin}/> }
        { burgerOpen && <BurgerMenu user={user} signOut={handleSignOut} toggleBurger={toggleBurger} toggleLogin={toggleLogin}/> }
        { messageOpen && <Message icon={message.icon} message={message.message} closeMessage={toggleMessage}/> }
        <Header user={user} changeTheme={toggleTheme} loginOpen={loginOpen} toggleLogin={toggleLogin} toggleBurger={toggleBurger}/>
        <HomeSection id='home' address={address}/>
        <MenuSection id='menu'/>
        <LocationSection id='location'/>
        <StorySection id='story'/>
        <ConnectedSection id='connected'/>
        <ContactSection id='contact'/>
      </PageContainer>
    </ThemeProvider>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${props=>props.theme.background}
`

export default App