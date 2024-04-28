import React, {useState, useEffect} from 'react'
import NavBar from "../components/navbar/navbar"
import axios from "axios"


export const Duck = () => {

    const [duckUrl, setDuckUrl] = useState('');
    const [duckMsg, setDuckMsg] = useState('');

    const getRandomDuck =() => {
        axios.get('https://thingproxy.freeboard.io/fetch/https://random-d.uk/api/v2/quack')
        .then(response => {
            const duck = response.data.url;
            const msg = response.data.message;
            setDuckUrl(duck);
            setDuckMsg(msg)
        })
        .catch(error => {
            console.error(error);
        })
    }

    useEffect(() => {
        getRandomDuck();
    }, []);

  return (
    <div className="app" style={{position: "relative", marginLeft: `calc(10px + 15.5625vw)`, marginRight: `calc(10px + 15.5625vw)`}}> 
    <NavBar/>

    <div id='duckContainer' maxHeight="400px" style={{textAlign: 'center'}}>
        <img id='duckImage' src={duckUrl} width="80%" alt='Random Duck' style={{paddingTop: '5vw', maxHeight: '400px', objectFit: 'contain', maxWidth: 'auto'}}></img>
        <p>{duckMsg}</p>
    </div>
    <br/>
    <div id='duckButtonContainer' style={{textAlign: 'center'}}>
        <button onClick={getRandomDuck} style={{cursor: 'pointer'}}>SHOW DUCK</button>
    </div>
    </div>
  );
}
