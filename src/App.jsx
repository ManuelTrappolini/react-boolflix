import AppHeader from "./components/AppHeader"
import { GlobalProvider } from "./contexts/GlobalContext"
import React from "react"
import SearchBar from "./components/SearchBar"

function App() {


  return (
    <>


      <GlobalProvider>
        <AppHeader />
      </GlobalProvider>


    </>
  )
}

export default App
