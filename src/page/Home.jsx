import HomeHeader from "../components/template/home/HomeHeader/HomeHeader";
import HomeDiscount from "../components/template/home/HomeDiscount/HomeDiscount";
import HomePoster from "../components/template/home/HomePoster/HomePoster";
import HomeBest from "../components/template/home/HomeBest/HomeBest";
import PosterDiscount from "../components/template/home/PosterDiscount/PosterDiscount";

function Home() {
  return (
   <>
    <HomeHeader/>
    <HomeDiscount/>
    <HomePoster/>
    <HomeBest/>
    <PosterDiscount/> 
    <br /><br /><br /><br />
   </>
  )
}

export default Home