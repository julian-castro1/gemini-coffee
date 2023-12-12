import { ThemeProvider } from 'styled-components';
import { useState } from 'react'
import { lightTheme, darkTheme } from './theme'
import styled from 'styled-components';
import './App.css'

import Header from './components/Header';
import HomeSection from './components/HomeSection';
import MenuSection from './components/MenuSection';
import LocationSection from './components/LocationSection';
import StorySection from './components/StorySection';
import ConnectedSection from './components/ConnectedSection';
import ContactSection from './components/ContactSection';


const address = '2506 campbell st houston, tx 77093'


function App() {
  const [theme, changeTheme] = useState(lightTheme);

  function toggleTheme(){
    console.log("changing theme")
    changeTheme( theme == darkTheme ? lightTheme : darkTheme );
  }

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Header changeTheme={toggleTheme}/>
        <HomeSection address={address}/>
        <MenuSection/>
        <LocationSection/>
        <StorySection/>
        <ConnectedSection/>
        <ContactSection/>
      </PageContainer>
    </ThemeProvider>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${props=>props.theme.background}

  /* width: 100vw; */
  /* height: 100%; */
`

export default App