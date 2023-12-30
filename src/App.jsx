import { useRoutes } from "react-router-dom"
import routes from "./routes"
import TopBar from "./components/module/TopBar/TopBar"
import Navbar from "./components/module/Navbar/Navbar"

function App() {
  const router = useRoutes(routes)
  return (
    <>
        <TopBar/>
        <Navbar/>
        {router}
    </>
  )
}

export default App
