import AppHeader from "./components/AppHeader"
import { GlobalProvider } from "./contexts/GlobalContext"
import React from "react"
import SearchBar from "./components/SearchBar"
import AppMain from "./components/AppMain"

function App() {


  return (
    <>


      <GlobalProvider>
        <AppHeader />
        <AppMain />
      </GlobalProvider>


    </>
  )
}

export default App
