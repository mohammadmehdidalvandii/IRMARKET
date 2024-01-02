import Home from "./page/Home/Home";
import About from "./page/About/About";
import Weblog from "./page/Weblog/Weblog";

const routes = [
    {path:'/' , element : <Home/>},
    {path:'/About' , element : <About/>},
    {path:'/Weblog' , element : <Weblog/>},
]


export default routes