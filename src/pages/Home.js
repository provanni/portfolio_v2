import Palette from "../components/palette/palette";
import Intro from "../components/intro/intro"
import About from "../components/about/about";
import Stats from "../components/stats/stats";
import Xp from "../components/xp/xp";
import NavBar from "../components/navbar/navbar"


export const Home = () => {
  return (
    <div className="app" style={{position: "relative", marginLeft: `calc(10px + 15.5625vw)`, marginRight: `calc(10px + 15.5625vw)`}}> 
        <NavBar/>
        <div style={{position: "relative", minHeight: "450px", marginTop: '100px'}}>
            <Intro/>
            <Palette/>
        </div>
        <div style={{}}>
            <About/>
            <Stats/>
            <Xp/>
        </div>
    </div>
    ); 
}

