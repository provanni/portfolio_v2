import Palette from "../components/palette/palette";
import Intro from "../components/intro/intro"
import Stats from "../components/stats/stats";
import Xp from "../components/xp/xp";
import NavBar from "../components/navbar/navbar";


export const Home = () => {
  return (
    <div className="app" style={{position: "relative", marginLeft: `calc(10px + 15.5625vw)`, marginRight: `calc(10px + 15.5625vw)`}}> 
        <NavBar/>
        <div style={{position: "relative", minHeight: "450px", marginTop: '70px'}}>
            <Intro/>
            <Palette/>
        </div>
        <div style={{}}>
            <Xp/>
            <Stats/>
        </div>
    </div>
    ); 
}

