import Home from "./page/Home/Home";
import About from "./page/About/About";
import Weblog from "./page/Weblog/Weblog";
import Login  from "./page/Login/Login";

const routes = [
    {path:'/' , element : <Home/>},
    {path:'/About' , element : <About/>},
    {path:'/Weblog' , element : <Weblog/>},
    {path:'/Login' , element : <Login/>},
]


export default routes