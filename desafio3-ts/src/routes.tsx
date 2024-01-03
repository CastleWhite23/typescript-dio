import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AppContext } from "./components/AppContext"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"
import { getAllLocalStorage } from "./services/storage"

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)
    
    return(
        <Routes>
            <Route path='/' element={ !isLoggedIn ?  <Home /> : <Conta /> } />
            <Route path='/conta/:id' element={ isLoggedIn ? <Conta /> : <Home/> } />
            <Route path='/infoconta' element={isLoggedIn? <ContaInfo /> : <Home/>} />
        </Routes>
    )
}

export default MainRoutes
